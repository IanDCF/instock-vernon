import { Link } from "react-router-dom";
import arrowBackIcon from "../../assets/icons/arrow_back-24px.svg";
import "./AddWarehousePage.scss";

const AddWarehousePage = () => {
  return (
    <section className="add-wh">
      <div className="add-wh__wrapper">
        <div className="add-wh__inner-wrapper">
          <div className="add-wh__heading-wrapper">
            <Link to="/warehouse">
              <img src={arrowBackIcon} alt="Back Arrow" />
            </Link>
            <h1 className="add-wh__title">Add New Warehouse</h1>
          </div>
          <form>
            <div className="add-wh__form-wrapper">
              <div className="add-wh__details-wrapper">
                <h2 className="add-wh__subtitle">Warehouse Details</h2>
                <label className="add-wh__label" htmlFor="warehouse-name">
                  Warehouse Name
                </label>
                <input
                  className="add-wh__input"
                  type="text"
                  name="warehouse-name"
                  placeholder="Warehouse Name"
                />
                <label className="add-wh__label" htmlFor="address">
                  Street Address
                </label>
                <input
                  className="add-wh__input"
                  type="text"
                  name="address"
                  placeholder="Street Address"
                />
                <label className="add-wh__label" htmlFor="city">
                  City
                </label>
                <input
                  className="add-wh__input"
                  type="text"
                  name="city"
                  placeholder="City"
                />
                <label className="add-wh__label" htmlFor="country">
                  City
                </label>
                <input
                  className="add-wh__input"
                  type="text"
                  name="country"
                  placeholder="Country"
                />
              </div>
              <div className="add-wh__details-wrapper">
                <h2 className="add-wh__subtitle">Contact Details</h2>
                <label className="add-wh__label" htmlFor="contact-name">
                  Contact Name
                </label>
                <input
                  className="add-wh__input"
                  type="text"
                  name="contact-name"
                  placeholder="Contact Name"
                />
                <label className="add-wh__label" htmlFor="position">
                  Position
                </label>
                <input
                  className="add-wh__input"
                  type="text"
                  name="position"
                  placeholder="Position"
                />
                <label className="add-wh__label" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  className="add-wh__input"
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                />
                <label className="add-wh__label" htmlFor="email">
                  Email
                </label>
                <input
                  className="add-wh__input"
                  type="text"
                  name="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="add-wh__buttons-wrapper">
              <button className="add-wh__cancel-button">Cancel</button>
              <button className="add-wh__add-button">+ Add Warehouse</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddWarehousePage;
