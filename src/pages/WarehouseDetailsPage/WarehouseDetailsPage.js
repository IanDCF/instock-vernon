import React from "react";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
import EditButton from "../../components/Buttons/EditButton/EditButton";

function WarehouseDetailsPage() {
  return (
    <section className="wh-details">
      <div className="wh-details__title">
        <h1>Washington</h1>
        <EditButton buttonText={Edit} />
      </div>
      <div className="wh-details__meta-info">
        <div className="wh-details__address">
          <p className="wh-details__meta-label">Warehouse Address:</p>
          <p className="wh-details__meta-content">
            33 Pearl Street SW, Washington, USA
          </p>
        </div>
        <div className="wh-details__contact-name">
          <p className="wh-details__meta-label">Contact Name:</p>
          <p className="wh-details__meta-content">
            Graeme Lyon Warehouse Manager
          </p>
        </div>
        <div className="wh-details__contact-info">
          <p className="wh-details__meta-label">Contact Information:</p>
          <p className="wh-details__meta-content">
            +1 (647) 504-0911 glyon@instock.com
          </p>
        </div>
      </div>
      <div className="wh-details__table">
        <div className="wh-details__column-labels">
          <div className="wh-details__column-label">
            <p>Inventory Item</p>
            <img
              className="wh-details__sort-icon"
              src={sortIcon}
              alt="sort icon"
            />
          </div>
          <div className="wh-details__column-label">
            <p>Category</p>
            <img
              className="wh-details__sort-icon"
              src={sortIcon}
              alt="sort icon"
            />
          </div>
          <div className="wh-details__column-label">
            <p>Status</p>
            <img
              className="wh-details__sort-icon"
              src={sortIcon}
              alt="sort icon"
            />
          </div>
          <div className="wh-details__column-label">
            <p>Qty</p>
            <img
              className="wh-details__sort-icon"
              src={sortIcon}
              alt="sort icon"
            />
          </div>
          <div className="wh-details__column-label">
            <p>Actions</p>
          </div>
        </div>
        <div className="wh-details__table-rows">
          <article className="wh-details__item-row">
            <div className="wh-details__item-wrapper">
              <a className="wh-details-item-btn" href="">
                Television
                <img
                  className="wh-details__item-btn-icon"
                  src={chevronIcon}
                  alt="chevron icon"
                />
              </a>
            </div>
            <div className="wh-details__category-wrapper">
              <p className="wh-details__catogory">Electronics</p>
            </div>
            <div className="wh-details__status-wrapper">
              <p>In Stock</p>
            </div>
            <div className="wh-details__qty-wrapper">
              <p>500</p>
            </div>
            <div className="wh-details__actions-wrapper">
              <img src={deleteIcon} alt="delete item" />
              <img src={editIcon} alt="edit item" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default WarehouseDetailsPage;
