import "./EditItemPage.scss";
import ArrowBack from "../../assets/icons/arrow_back-24px.svg";
import ArrowDropDown from "../../assets/icons/arrow_drop_down-24px.svg";
import AddNewButton from "../../components/Buttons/AddNew/AddNewButton";
import CancelButton from "../../components/Buttons/CancelButton/CancelButton";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getInventory } from "../../utils/utils";

const EditItemPage = ({ updateInventory, inventory }) => {
  const { itemId } = useParams();

  // Inventory Item State for page creation
  const [item, setItem] = useState();
  const [categories, setCategories] = useState();
  const [warehousesList, setWarehousesList] = useState();

  // State for the form
  const [newItemObj, setNewItemObj] = useState({
    // item_name: item.item_name,
    // description: item.description,
    // category: item.category,
    // status: item.status,
    // quantity: item.quantity,
    // warehouse_Id: item.warehouse_Id,
  }); // when something changes, add it here

  useEffect(() => {
    console.log(newItemObj);
  }, [newItemObj]);

  // Get value of that inventory item from the useParam and put in the form fields
  const getIndividualItemAxios = async (id) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/inventories/${id}`
      );

      setItem(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getIndividualItemAxios(itemId);
    console.log(itemId);
  }, [itemId]);

  // Grab the Categories
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

  // This is for item name, description, categories, quantity
  const changeHandler = (e, input) => {
    setItem({ ...item, [input]: e.target.value });
    setNewItemObj({ ...newItemObj, [input]: e.target.value });
  };

  // Change Handlers
  const statusRadioChangeHandler = (e, input) => {
    setItem({ ...item, status: e.target.value });
    console.log(e.target.value);

    if (e.target.value === "Out of Stock") {
      setNewItemObj({ ...newItemObj, quantity: 0, status: e.target.value });
    } else {
      setNewItemObj({
        ...newItemObj,
        quantity: item.quantity,
        status: e.target.value,
      });
    }
  };

  const warehouseChangeHandler = (e) => {
    const selectedWarehouse = warehousesList.find(
      (warehouse) => warehouse.warehouse_name === e.target.value
    );
    setNewItemObj({
      ...newItemObj,
      warehouse_id: selectedWarehouse.id,
    });
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

  // create a axios put for edit inventory item
  const editInventoryItem = async (id, obj) => {
    try {
      const response = await axios.patch(
        `http://localhost:8080/inventories/${id}`,
        obj
      );
      console.log("inventory item was edited", response.data);
      renderInventory();
    } catch (err) {
      console.log(err);
    }
  };

  const notify = () => toast(`Inventory Item: ${item.item_name} was edited.`);
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newItemObj, itemId);

    editInventoryItem(itemId, newItemObj);
    notify();

    setTimeout(() => {
      navigate("/inventory");
    }, 3000);
  };

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
              <h1>Edit Inventory Item</h1>
            </div>
          </div>
        </div>
        {/* {/ Form /} */}
        <div className="add-item__form-wrapper">
          {item && (
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
                    placeholder={`${item.item_name}`}
                    value={`${item.item_name}`}
                    onChange={(e, input) => {
                      changeHandler(e, "item_name");
                    }}
                  />
                </label>
                <label className="add-item__label">
                  Description
                  <textarea
                    className="add-item__description"
                    type="text"
                    name="description"
                    placeholder={`${item.description}`}
                    value={`${item.description}`}
                    onChange={(e, input) => {
                      changeHandler(e, "description");
                    }}
                  />
                </label>

                <label className="add-item__label" htmlFor="categories">
                  Categories
                  <div className="add-item__input-dropdown-wrapper">
                    <input
                      list="categories"
                      name="categories"
                      className="add-item__categories-list add-item__datalist-input"
                      placeholder={`${item.category}`}
                      onChange={(e, input) => {
                        changeHandler(e, "category");
                      }}
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
                        checked={item.status === "In Stock"}
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
                        checked={item.status === "Out of Stock"}
                      />
                    </div>
                  </div>
                </label>

                {item.status === "In Stock" ? (
                  <label className="add-item__label">
                    Quantity
                    <input
                      className="add-item__quantity"
                      type="number"
                      name="quantity"
                      placeholder={`${item.quantity}`}
                      value={`${item.quantity}`}
                      onChange={(e, input) => {
                        changeHandler(e, "quantity");
                      }}
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
                      placeholder={`${item.warehouse_name}`}
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
                <AddNewButton text="Edit Item" />
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
          )}
        </div>
      </div>
    </section>
  );
};

export default EditItemPage;
