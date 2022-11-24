import "./WarehouseItem.scss";
import React from "react";
import { Link } from "react-router-dom";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import { useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";

const WarehouseItem = ({ warehouse, renderWarehouses }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const address = `${warehouse.address} ${warehouse.city} ${warehouse.country}`;

  return (
    <>
      <li className="warehouse">
        <section className="warehouse__info">
          <ul className="warehouse__list-items">
            <li className="warehouse__item warehouse__item">
              <span className="warehouse__item-label">WAREHOUSE</span>
              <Link
                className="warehouse__link"
                to={`/warehouse/${warehouse.id}`}
              >
                <span className="warehouse__link-warehouse">
                  {warehouse.warehouse_name}
                </span>
                <img src={chevronIcon} alt="" />
              </Link>
            </li>
            <li className="warehouse__item warehouse__item--address">
              <span className="warehouse__item-label">ADDRESS</span>
              <span className="warehouse__item-value">{address}</span>
            </li>
          </ul>
          <ul className="warehouse__list-items">
            <li className="warehouse__item">
              <span className="warehouse__item-label">CONTACT NAME</span>
              <span className="warehouse__contact-name">
                {warehouse.contact_name}
              </span>
            </li>
            <li className="warehouse__item">
              <span className="warehouse__item-label">CONTACT INFORMATION</span>
              <span>
                {warehouse.contact_phone}
                <br />
                {warehouse.contact_email}
              </span>
            </li>
          </ul>
        </section>
        <div className=" warehouse__icons-container">
          <div className="warehouse__delete">
            <img
              className=" warehouse__icons"
              src={deleteIcon}
              alt=""
              onClick={() => handleModal(warehouse)}
            />
          </div>
          <div className="warehouse__edit">
            <img className=" warehouse__icons" src={editIcon} alt="" />
          </div>
        </div>
      </li>
      {openModal && (
        <DeleteModal
          handleModal={handleModal}
          warehouse={warehouse}
          renderWarehouses={renderWarehouses}
          type="warehouse"
        />
      )}
    </>
  );
};

export default WarehouseItem;
