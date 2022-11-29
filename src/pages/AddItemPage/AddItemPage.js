import "./AddItemPage.scss";
import ArrowBack from "../../assets/icons/arrow_back-24px.svg";
import ArrowDropDown from "../../assets/icons/arrow_drop_down-24px.svg";
import AddNewButton from "../../components/Buttons/AddNew/AddNewButton";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import CancelButton from "../../components/Buttons/CancelButton/CancelButton";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getInventory } from "../../utils/utils";

const AddItemPage = ({ updateInventory, inventory }) => {
  const [categories, setCategories] = useState();
  const [warehousesList, setWarehousesList] = useState();

  const [itemStatus, setItemStatus] = useState("In Stock");
  const [itemWarehouse, setItemWarehouse] = useState("");
  // Get Catagories List for categories datalist
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

  // Form Submissions
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

  const renderInventory = () => {
    const fetchData = async () => {
      const inventoryData = await getInventory();
      console.log(inventoryData);
      updateInventory(inventoryData);
    };
    fetchData();
  };

  // create a axios post for add inventory item
  const addInventoryItem = async (obj) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/inventories",
        obj
      );
      console.log("inventory was added/posted", response);
      renderInventory();
    } catch (err) {
      console.log(err);
    }
  };

  const notify = () => toast("Inventory Item Added.");

  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = formRef.current;
    const itemName = form.name.value; // this matches the name
    const description = form.description.value;
    const category = form.categories.value;
    const status = itemStatus; // setState

    const quantity = status === "In Stock" ? form.quantity.value / 1 : 0;

    // const warehouseId = form.warehouse.value;
    const warehouseId = itemWarehouse;

    console.log(itemName, description, category, quantity, status, warehouseId);
    // handle form validation
    if (
      itemName === "" ||
      description === "" ||
      category === "" ||
      status === "" ||
      quantity === "" ||
      warehouseId === ""
    ) {
      alert("please fill out the form fields");
      return;
    }
    const newInventoryItem = {
      item_name: itemName,
      description: description,
      category: category,
      status: status,
      quantity: quantity,
      warehouse_Id: warehouseId,
    };
    console.log(newInventoryItem);
    addInventoryItem(newInventoryItem);

    form.reset();
    notify();

    setTimeout(() => {
      navigate("/inventory");
    }, 3000);
  };

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
                    placeholder="Please select"
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
                      In Stock
                    </label>
                    <input
                      onChange={statusRadioChangeHandler}
                      type="radio"
                      name="instock"
                      className="add-item__status"
                      value="In Stock"
                      checked={itemStatus === "In Stock"}
                    />
                  </div>
                  <div className="add-item__radio-wrapper">
                    <label
                      className="add-item__label add-item__label--radio"
                      htmlFor="outofstock"
                    >
                      Out of Stock
                    </label>
                    <input
                      onChange={statusRadioChangeHandler}
                      type="radio"
                      name="outofstock"
                      className="add-item__status"
                      value="Out of Stock"
                      checked={itemStatus === "Out of Stock"}
                    />
                  </div>
                </div>
              </label>

              {itemStatus === "In Stock" ? (
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
                    placeholder="Please select"
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

export default AddItemPage;
