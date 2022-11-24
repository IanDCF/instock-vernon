import "./AddItemPage.scss";
import ArrowBack from "../../assets/icons/arrow_back-24px.svg";
import ArrowDropDown from "../../assets/icons/arrow_drop_down-24px.svg";

const AddItemPage = () => {
  return (
    <section className="add-item">
      <div className="add-item__component">
        {/* Title */}
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
        {/* Form */}
        <div className="add-item__form-wrapper">
          <form className="add-item__form" action="">
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

              {/* Render These Dynamically */}
              {/* <label className="add-item__label">
              Categories
              <select
                name="category"
                id="add-item-category"
                className="add-item__category"
              >
                <option value="accessories" className="add-item__option">
                  Accessories
                </option>
                <option value="gear" className="add-item__option">
                  Gaer
                </option>
                <option
                  value="electronics"
                  className="add-item__option"
                ></option>
                <option value="" className="add-item__option">
                  Electronics
                </option>
                <option value="health" className="add-item__option">
                  Health
                </option>
                <option value="apparel" className="add-item__option">
                  Apparel
                </option>
              </select>
            </label> */}

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
                  {/* Replace this dynamically */}
                  <option
                    value="Apparel"
                    className="add-item__category"
                  ></option>
                  <option
                    value="Health"
                    className="add-item__category"
                  ></option>
                  <option
                    value="Electronics"
                    className="add-item__category"
                  ></option>
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
                      htmlFor="in-stock"
                    >
                      In-Stock
                    </label>
                    <input
                      type="radio"
                      name="in-stock"
                      className="add-item__status"
                      value="in-stock"
                      selected
                    />
                  </div>
                  <div className="add-item__radio-wrapper">
                    <label
                      className="add-item__label add-item__label--radio"
                      htmlFor="out-of-stock"
                    >
                      Out-of-Stock
                    </label>
                    <input
                      type="radio"
                      name="out-of-stock"
                      className="add-item__status"
                      value="out-of-stock"
                    />
                  </div>
                </div>
              </label>

              <label className="add-item__label">
                Quantity
                <input
                  className="add-item__quantity"
                  type="number"
                  name="quantity"
                  placeholder="0"
                />
              </label>

              <label className="add-item__label" htmlFor="categories">
                Category
                <div className="add-item__input-dropdown-wrapper">
                  <input
                    list="categories"
                    name="categories"
                    className="add-item__categories-list"
                  ></input>
                  <img
                    className="add-item__arrow-drop-down"
                    src={ArrowDropDown}
                    alt=""
                  />
                </div>
                <datalist
                  className="add-item__category-list"
                  id="categories"
                  placeholder="Please Select"
                >
                  {/* Replace this dynamically */}
                  <option
                    value="Warsaw"
                    className="add-item__category"
                  ></option>
                  <option
                    value="Berlin"
                    className="add-item__category"
                  ></option>
                  <option
                    value="Helsinki"
                    className="add-item__category"
                  ></option>
                </datalist>
              </label>
            </div>

            <div className="add-item__buttons-wrapper">
              <button className="add-item__cancel-btn" type="button">
                Cancel
              </button>
              <button className="add-item__add-btn" type="button">
                Add Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddItemPage;
