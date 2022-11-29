import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import arrowBackIcon from "../../assets/icons/arrow_back-24px.svg";
import errorIcon from "../../assets/icons/error-24px.svg";
import "./AddWarehousePage.scss";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

const AddWarehousePage = ({ warehouses, renderWarehouses }) => {
  const [warehouseName, setWarehouseName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [position, setPosition] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [isWarehouse, setIsWarehouse] = useState(true);
  const [isAddress, setIsAddress] = useState(true);
  const [isCity, setIsCity] = useState(true);
  const [isCountry, setIsCountry] = useState(true);
  const [isContact, setIsContact] = useState(true);
  const [isPosition, setIsPosition] = useState(true);
  const [isPhone, setIsPhone] = useState(true);
  const [isEmail, setIsEmail] = useState(true);

  const handleChangeWarehouse = (event) => setWarehouseName(event.target.value);
  const handleChangeAddress = (event) => setAddress(event.target.value);
  const handleChangeCity = (event) => setCity(event.target.value);
  const handleChangeCountry = (event) => setCountry(event.target.value);
  const handleChangeContact = (event) => setContactName(event.target.value);
  const handleChangePosition = (event) => setPosition(event.target.value);
  const handleChangePhone = (event) => setPhone(event.target.value);
  const handleChangeEmail = (event) => setEmail(event.target.value);

  const BACKEND = "http://localhost:8080";

  const isWarehouseValid = () => {
    if (warehouseName.length === 0) {
      setIsWarehouse(false);
      return false;
    }
    setIsWarehouse(true);
    return true;
  };

  const isAddressValid = () => {
    if (address.length === 0) {
      setIsAddress(false);
      return false;
    }
    setIsAddress(true);
    return true;
  };

  const isCityValid = () => {
    if (city.length === 0) {
      setIsCity(false);
      return false;
    }
    setIsCity(true);
    return true;
  };

  const isCountryValid = () => {
    if (country.length === 0) {
      setIsCountry(false);
      return false;
    }
    setIsCountry(true);
    return true;
  };

  const isContactValid = () => {
    if (contactName.length === 0) {
      setIsContact(false);
      return false;
    }
    setIsContact(true);
    return true;
  };

  const isPositionValid = () => {
    if (position.length === 0) {
      setIsPosition(false);
      return false;
    }
    setIsPosition(true);
    return true;
  };

  const validatePhoneNumber = (input_str) => {
    return input_str.match(/\d/g).length === 11;
  };

  const isPhoneValid = () => {
    if (!validatePhoneNumber(phone) || phone.length === 0) {
      setIsPhone(false);
      return false;
    }
    setIsPhone(true);
    return true;
  };

  const checkEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const isEmailValid = () => {
    if (!checkEmail(email) || email.length === 0) {
      setIsEmail(false);
      return false;
    }
    setIsEmail(true);
    return true;
  };

  const isFormValid = () => {
    let flag = true;

    if (!isWarehouseValid()) {
      flag = false;
    }

    if (!isAddressValid()) {
      flag = false;
    }

    if (!isCityValid()) {
      flag = false;
    }

    if (!isCountryValid()) {
      flag = false;
    }

    if (!isContactValid()) {
      flag = false;
    }

    if (!isPositionValid()) {
      flag = false;
    }

    if (!isPhoneValid()) {
      flag = false;
    }

    if (!isEmailValid()) {
      flag = false;
    }

    if (flag === false) return false;

    return true;
  };

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

    if (isFormValid()) {
      axios
        .post(`${BACKEND}/warehouses`, warehouseObj)
        .then(({ data }) => {
          renderWarehouses([...warehouses, data]);
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
    } else {
      return;
    }
  };

  return (
    <PageWrapper>
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
                    className={`add-wh__input ${
                      !isWarehouse && "add-wh__input--required"
                    }`}
                    type="text"
                    name="warehouse-name"
                    placeholder="Warehouse Name"
                    value={warehouseName}
                    onChange={handleChangeWarehouse}
                  />
                  {!isWarehouse && (
                    <p className="add-wh__error">
                      <img
                        className="add-wh__error-img"
                        src={errorIcon}
                        alt="Error"
                      />
                      This field is required
                    </p>
                  )}
                  <label className="add-wh__label" htmlFor="address">
                    Street Address
                  </label>
                  <input
                    className={`add-wh__input ${
                      !isAddress && "add-wh__input--required"
                    }`}
                    type="text"
                    name="address"
                    placeholder="Street Address"
                    value={address}
                    onChange={handleChangeAddress}
                  />
                  {!isAddress && (
                    <p className="add-wh__error">
                      <img
                        className="add-wh__error-img"
                        src={errorIcon}
                        alt="Error"
                      />
                      This field is required
                    </p>
                  )}

                  <label className="add-wh__label" htmlFor="city">
                    City
                  </label>
                  <input
                    className={`add-wh__input ${
                      !isCity && "add-wh__input--required"
                    }`}
                    type="text"
                    name="city"
                    placeholder="City"
                    value={city}
                    onChange={handleChangeCity}
                  />
                  {!isCity && (
                    <p className="add-wh__error">
                      <img
                        className="add-wh__error-img"
                        src={errorIcon}
                        alt="Error"
                      />
                      This field is required
                    </p>
                  )}

                  <label className="add-wh__label" htmlFor="country">
                    Country
                  </label>
                  <input
                    className={`add-wh__input ${
                      !isCountry && "add-wh__input--required"
                    }`}
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={country}
                    onChange={handleChangeCountry}
                  />
                  {!isCountry && (
                    <p className="add-wh__error">
                      <img
                        className="add-wh__error-img"
                        src={errorIcon}
                        alt="Error"
                      />
                      This field is required
                    </p>
                  )}
                </div>
                <div className="add-wh__details-wrapper">
                  <h2 className="add-wh__subtitle">Contact Details</h2>
                  <label className="add-wh__label" htmlFor="contact-name">
                    Contact Name
                  </label>
                  <input
                    className={`add-wh__input ${
                      !isContact && "add-wh__input--required"
                    }`}
                    type="text"
                    name="contact-name"
                    placeholder="Contact Name"
                    value={contactName}
                    onChange={handleChangeContact}
                  />
                  {!isContact && (
                    <p className="add-wh__error">
                      <img
                        className="add-wh__error-img"
                        src={errorIcon}
                        alt="Error"
                      />
                      This field is required
                    </p>
                  )}
                  <label className="add-wh__label" htmlFor="position">
                    Position
                  </label>
                  <input
                    className={`add-wh__input ${
                      !isPosition && "add-wh__input--required"
                    }`}
                    type="text"
                    name="position"
                    placeholder="Position"
                    value={position}
                    onChange={handleChangePosition}
                  />
                  {!isPosition && (
                    <p className="add-wh__error">
                      <img
                        className="add-wh__error-img"
                        src={errorIcon}
                        alt="Error"
                      />
                      This field is required
                    </p>
                  )}
                  <label className="add-wh__label" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    className={`add-wh__input ${
                      !isPhone && "add-wh__input--required"
                    }`}
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={handleChangePhone}
                  />
                  {!isPhone && (
                    <p className="add-wh__error">
                      <img
                        className="add-wh__error-img"
                        src={errorIcon}
                        alt="Error"
                      />
                      This field is required
                    </p>
                  )}
                  <label className="add-wh__label" htmlFor="email">
                    Email
                  </label>
                  <input
                    className={`add-wh__input ${
                      !isEmail && "add-wh__input--required"
                    }`}
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleChangeEmail}
                  />
                  {!isEmail && (
                    <p className="add-wh__error">
                      <img
                        className="add-wh__error-img"
                        src={errorIcon}
                        alt="Error"
                      />
                      This field is required
                    </p>
                  )}
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
    </PageWrapper>
  );
};

export default AddWarehousePage;
