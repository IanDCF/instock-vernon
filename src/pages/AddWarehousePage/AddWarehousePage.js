import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import arrowBackIcon from "../../assets/icons/arrow_back-24px.svg";
import "./AddWarehousePage.scss";

const AddWarehousePage = () => {
  const [warehouseName, setWarehouseName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [position, setPosition] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleChangeWarehouse = (event) => setWarehouseName(event.target.value);
  const handleChangeAddress = (event) => setAddress(event.target.value);
  const handleChangeCity = (event) => setCity(event.target.value);
  const handleChangeCountry = (event) => setCountry(event.target.value);
  const handleChangeContact = (event) => setContactName(event.target.value);
  const handleChangePosition = (event) => setPosition(event.target.value);
  const handleChangePhone = (event) => setPhone(event.target.value);
  const handleChangeEmail = (event) => setEmail(event.target.value);

  const BACKEND = "http://localhost:8080";

  const handleSubmit = (event) => {
    event.preventDefault();

    const warehouseObj = {
      warehouse_name: warehouseName,
      address,
      city,
      country,
      contact_name: contactName,
      contact_position: position,
      contact_phone: phone,
      contact_email: email,
    };

    axios
      .post(`${BACKEND}/warehouses`, warehouseObj)
      .then(() => {
        setWarehouseName("");
        setAddress("");
        setCity("");
        setCountry("");
        setContactName("");
        setPosition("");
        setPhone("");
        setEmail("");
      })
      .catch((error) => console.log(error));
  };

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
          <form onSubmit={handleSubmit}>
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
                  value={warehouseName}
                  onChange={handleChangeWarehouse}
                />
                <label className="add-wh__label" htmlFor="address">
                  Street Address
                </label>
                <input
                  className="add-wh__input"
                  type="text"
                  name="address"
                  placeholder="Street Address"
                  value={address}
                  onChange={handleChangeAddress}
                />
                <label className="add-wh__label" htmlFor="city">
                  City
                </label>
                <input
                  className="add-wh__input"
                  type="text"
                  name="city"
                  placeholder="City"
                  value={city}
                  onChange={handleChangeCity}
                />
                <label className="add-wh__label" htmlFor="country">
                  Country
                </label>
                <input
                  className="add-wh__input"
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={country}
                  onChange={handleChangeCountry}
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
                  value={contactName}
                  onChange={handleChangeContact}
                />
                <label className="add-wh__label" htmlFor="position">
                  Position
                </label>
                <input
                  className="add-wh__input"
                  type="text"
                  name="position"
                  placeholder="Position"
                  value={position}
                  onChange={handleChangePosition}
                />
                <label className="add-wh__label" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  className="add-wh__input"
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={handleChangePhone}
                />
                <label className="add-wh__label" htmlFor="email">
                  Email
                </label>
                <input
                  className="add-wh__input"
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleChangeEmail}
                />
              </div>
            </div>
            <div className="add-wh__buttons-wrapper">
              <Link to="/warehouse">
                <button className="add-wh__cancel-button">Cancel</button>
              </Link>
              <button className="add-wh__add-button" type="submit">
                + Add Warehouse
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddWarehousePage;
