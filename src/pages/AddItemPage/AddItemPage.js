import "./AddItemPage.scss";
import ArrowBack from "../../assets/icons/arrow_back-24px.svg";
import ArrowDropDown from "../../assets/icons/arrow_drop_down-24px.svg";
import AddNewButton from "../../components/Buttons/AddNew/AddNewButton";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const AddItemPage = () => {
  const handleClick = (event) => {
    event.preventDefault();
    console.log(event);
  };

  const [categories, setCategories] = useState();
  const [warehousesList, setWarehousesList] = useState();

  const [itemStatus, setItemStatus] = useState("in-stock");

  // Get Catagories List for catagories datalist
  const getCategoriesAxios = async () => {
    try {
      const { data: inventories } = await axios.get(
        "http://localhost:8080/inventories"
      );
      const { data: warehouses } = await axios.get(
        "http://localhost:8080/warehouses"
      );

      console.log(inventories);

      // console.log(arrayOfCategories);

      const arrayOfCategories = [];

      warehouses.map((item) => {
        if (
          arrayOfCategories.length !== 0 ||
          !arrayOfCategories.find((category) => category === item.category)
        ) {
          console.log(item.category);
        }

        // ;
      });

      setCategories(inventories);
      setWarehousesList(warehouses);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCategoriesAxios();
  }, []);

  const statusRadioChangeHandler = (e) => {
    setItemStatus(e.target.value);
    console.log(e.target.value);
  };

  // useRef to get values of the form
  const formRef = useRef();

  // create a axios post for add inventory item
  const addInventoryItem = async (obj) => {
    try {
      const { data } = await axios.post(
        "http://localhost:8080/inventories",
        JSON.stringify(obj)
      );
      console.log("video was posted", data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = formRef.current;
    const itemName = form.name.value; // this matches the name
    const description = form.description.value;
    const category = form.categories.value;
    const status = itemStatus; // setState

    const quantity = status === "in-stock" ? form.quantity.value : 0;

    const warehouseId = form.warehouse.value;

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
      warehouseId: warehouseId,
    };
    console.log(newInventoryItem);
    addInventoryItem(newInventoryItem);

    // form.reset();
  };

  // set instock to default
  // hide quantity selector only when out of stock
  // consider dynamically populating categories and warehouses

  return (
    <section className="add-item">
      <div className="add-item__component">
        {/* { Title } */}
        <div className="add-item__title-wrapper">
          <div className="add-item__title">
            <div className="add-item__back-title-wrapper">
              <img
                className="add-item__back-arrow"
                src={ArrowBack}
                alt="back arrow"
              />
              <h1>Add New Inventory Item</h1>
            </div>
          </div>
        </div>
        {/* {/ Form /} */}
        <div className="add-item__form-wrapper">
          <form className="add-item__form" ref={formRef}>
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
                  placeholder="Plase enter a brief item description..."
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
                    categories.map((category) => {
                      return (
                        <option
                          key={category.id}
                          value={category.category}
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
                          value={warehouse.warehouse_name}
                          className="add-item__warehouse"
                        ></option>
                      );
                    })}
                </datalist>
              </label>
            </div>

            <div className="add-item__buttons-wrapper">
              <button
                className="add-item__cancel-btn"
                type="button"
                onClick={(event) => {
                  handleClick(event);
                }}
              >
                Cancel
              </button>
              <AddNewButton text="Add Item" onClick={handleSubmit} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddItemPage;
