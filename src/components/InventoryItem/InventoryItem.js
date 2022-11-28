import "./InventoryItem.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import InventoryTagInStock from "../Buttons/InventoryTag/InventoryTagInStock";
import InventoryTagOutOfStock from "../Buttons/InventoryTag/InventoryTagOutOfStock";
import WarehouseDelModal from "../../components/DeleteModal/DeleteModal";

const InventoryItem = ({ updateInventory, inventory }) => {
  const [openModal, setOpenModal] = useState(false);
  const renderInventory = (newInventoryList) => {
    updateInventory(newInventoryList);
  };
  const handleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <li className="inventory">
        <section className="inventory__info">
          <ul className="inventory__list-items">
            <li className="inventory__item warehouse__item">
              <span className="inventory__item-label">WAREHOUSE</span>
              <Link
                className="inventory__link"
                to={`/inventory/${inventory.id}`}
              >
                <span className="inventory__link-warehouse">
                  {inventory.item_name}
                </span>
                <img src={chevronIcon} alt="" />
              </Link>
            </li>
            <li className="inventory__item inventory__item--address">
              <span className="inventory__item-label">CATEGORY</span>
              <span className="inventory__item-value">
                {inventory.category}
              </span>
            </li>
          </ul>
          <ul className="inventory__list-items">
            <li className="inventory__item">
              <span className="inventory__item-label">STATUS</span>

              {inventory.status === "In Stock" ? (
                <div className="inventory__status-label">
                  <InventoryTagInStock />
                </div>
              ) : (
                <div className="inventory__status-label">
                  <InventoryTagOutOfStock />
                </div>
              )}
            </li>
            <li className="inventory__item">
              <span className="inventory__item-label">QTY</span>
              <span className="inventory_qty">{inventory.quantity}</span>
            </li>
          </ul>
        </section>
        <div className="inventory__item inventory__item--warehouse ">
          <span className="inventory__item-label">WAREHOUSE</span>
          <span className="inventory__warehouse-name">
            {inventory.warehouse_name}
          </span>
        </div>
        <div className=" inventory__icons-container">
          <div onClick={handleModal} className="inventory__delete">
            <img className=" inventory__icons" src={deleteIcon} alt="" />
          </div>
          <div className="inventory__edit">
            <Link to={`/inventory/${inventory.id}/edit`}>
              <img className=" inventory__icons" src={editIcon} alt="" />
            </Link>
          </div>
        </div>
      </li>
      {openModal && (
        <WarehouseDelModal
          type="item"
          renderInventory={renderInventory}
          item={inventory}
          handleModal={handleModal}
        />
      )}
    </>
  );
};

export default InventoryItem;
