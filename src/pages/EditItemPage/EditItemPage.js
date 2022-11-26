import "./EditItemPage.scss";
import ArrowBack from "../../assets/icons/arrow_back-24px.svg";
import ArrowDropDown from "../../assets/icons/arrow_drop_down-24px.svg";
import AddNewButton from "../../components/Buttons/AddNew/AddNewButton";
import CancelButton from "../../components/Buttons/CancelButton/CancelButton";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditItemPage = () => {
  const [categories, setCategories] = useState();
  const [warehousesList, setWarehousesList] = useState();

  const [itemStatus, setItemStatus] = useState("in-stock");
  const [itemWarehouse, setItemWarehouse] = useState("");

  const getCategoriesAxios = async () => {
    try {
      const { data: inventories } = await axios.get(
        "http://localhost:8080/inventories"
      );
      const { data: warehouses } = await axios.get(
        "http://localhost:8080/warehouses"
      );

      // warehouses
      const uniqueCategories = [
        ...new Set(inventories.map((item) => item.category)),
      ];

      setCategories(uniqueCategories);
      setWarehousesList(warehouses);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCategoriesAxios();
  }, []);

  // Change Handlers
  const statusRadioChangeHandler = (e) => {
    setItemStatus(e.target.value);
    console.log(e.target.value);
  };

  const warehouseChangeHandler = (e) => {
    const selectedWarehouse = warehousesList.find(
      (warehouse) => warehouse.warehouse_name === e.target.value
    );
    setItemWarehouse(selectedWarehouse.id);
  };

  // useRef to get values of the form
  const formRef = useRef();

  // create a axios put for add inventory item
  const editInventoryItem = async (id, obj) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/inventories${id}`,
        obj
      );
      console.log("inventory item was edited", response);
    } catch (err) {
      console.log(err);
    }
  };

  const notify = () => toast("Inventory Item Added.");

  let navigate = useNavigate();

  const handleSubmit = () => {};

  /**
   * use param to get that item's id
   * axios get to get that inventory item's info
   * place that info as a placeholder for all fields
   * Make cancel go back to /inventory
   * Update put axios to include the id
   * create handle submit function to include the id that was passed in as a param
   * save runs the edit handle submit
   */

  return (
    <section className="add-item">
      <div className="add-item__component">
        {/* { Title } */}
        <div className="add-item__title-wrapper">
          <div className="add-item__title">
            <div className="add-item__back-title-wrapper">
              <Link to="/inventory">
                <img
                  className="add-item__back-arrow"
                  src={ArrowBack}
                  alt="back arrow"
                />
              </Link>
              <h1>Add New Inventory Item</h1>
            </div>
          </div>
        </div>
        {/* {/ Form /} */}
        <div className="add-item__form-wrapper">
          <form
            className="add-item__form"
            ref={formRef}
            onSubmit={(event) => {
              handleSubmit(event);
            }}
          >
            <div className="add-item__form-details">
              <h2 className="add-item__header">Item Details</h2>
              <label className="add-item__label">
                Item Name
                <input
                  className="add-item__name"
                  type="text"
                  name="name"
                  placeholder="Item Name"
                />
              </label>
              <label className="add-item__label">
                Description
                <textarea
                  className="add-item__description"
                  type="text"
                  name="description"
                  placeholder="Please enter a brief item description..."
                />
              </label>

              <label className="add-item__label" htmlFor="categories">
                Categories
                <div className="add-item__input-dropdown-wrapper">
                  <input
                    list="categories"
                    name="categories"
                    className="add-item__categories-list add-item__datalist-input"
                  />
                  <img
                    className="add-item__arrow-drop-down"
                    src={ArrowDropDown}
                    alt=""
                  />
                </div>
                <datalist
                  className="add-item__categories-list"
                  id="categories"
                  placeholder="Please Select"
                >
                  {categories &&
                    categories.map((category, index) => {
                      return (
                        <option
                          key={index}
                          value={category}
                          className="add-item__category"
                        ></option>
                      );
                    })}
                </datalist>
              </label>
            </div>

            <div className="add-item__form-availability">
              <h2 className="add-item__header">Item Availability</h2>

              <label className="add-item__label">
                Status
                <div className="add-item__radios-wrapper">
                  <div className="add-item__radio-wrapper">
                    <label
                      className="add-item__label add-item__label--radio"
                      htmlFor="instock"
                    >
                      In-Stock
                    </label>
                    <input
                      onChange={statusRadioChangeHandler}
                      type="radio"
                      name="instock"
                      className="add-item__status"
                      value="in-stock"
                      checked={itemStatus === "in-stock"}
                    />
                  </div>
                  <div className="add-item__radio-wrapper">
                    <label
                      className="add-item__label add-item__label--radio"
                      htmlFor="outofstock"
                    >
                      Out-of-Stock
                    </label>
                    <input
                      onChange={statusRadioChangeHandler}
                      type="radio"
                      name="outofstock"
                      className="add-item__status"
                      value="out-of-stock"
                      checked={itemStatus === "out-of-stock"}
                    />
                  </div>
                </div>
              </label>

              {itemStatus === "in-stock" ? (
                <label className="add-item__label">
                  Quantity
                  <input
                    className="add-item__quantity"
                    type="number"
                    name="quantity"
                    placeholder="0"
                  />
                </label>
              ) : (
                ""
              )}

              <label className="add-item__label" htmlFor="warehouse">
                Warehouse
                <div className="add-item__input-dropdown-wrapper">
                  <input
                    list="warehouse"
                    name="warehouse"
                    className="add-item__warehouse-list"
                    onChange={(event) => {
                      warehouseChangeHandler(event);
                    }}
                  ></input>
                  <img
                    className="add-item__arrow-drop-down"
                    src={ArrowDropDown}
                    alt=""
                  />
                </div>
                <datalist
                  className="add-item__warehouse-list"
                  id="warehouse"
                  placeholder="Please Select"
                >
                  {warehousesList &&
                    warehousesList.map((warehouse) => {
                      return (
                        <option
                          key={warehouse.id}
                          id={warehouse.id}
                          data-value={warehouse.id}
                          value={warehouse.warehouse_name}
                          className="add-item__warehouse"
                        >
                          {warehouse.warehouse_name}
                        </option>
                      );
                    })}
                </datalist>
              </label>
            </div>

            <div className="add-item__buttons-wrapper">
              <CancelButton link="/inventory" />
              <AddNewButton text="Add Item" />
            </div>
            <ToastContainer
              position="bottom-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditItemPage;
