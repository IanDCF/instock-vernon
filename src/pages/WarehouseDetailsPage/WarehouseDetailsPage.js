import React from "react";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
import EditButton from "../../components/Buttons/EditButton/EditButton";
import InventoryTagInStock from "../../components/Buttons/InventoryTag/InventoryTagInStock";
import InventoryTagOutOfStock from "../../components/Buttons/InventoryTag/InventoryTagOutOfStock";
import ArrowBack from "../../assets/icons/arrow_back-24px.svg";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

import "./WarehouseDetailsPage.scss";
import { useEffect, useState } from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

function WarehouseDetailsPage() {
  const [warehouseInfo, setWarehouseInfo] = useState();
  const [warehouseInventory, setWarehouseInventory] = useState();

  const { warehouseId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: warehouseData } = await axios.get(
          `http://localhost:8080/warehouses/${warehouseId}`
        );
        const { data: warehouseInventoryData } = await axios.get(
          `http://localhost:8080/warehouses/${warehouseId}/inventories`
        );

        // console.log(warehouseData);
        setWarehouseInfo(warehouseData);

        console.log(warehouseInventoryData);
        setWarehouseInventory(warehouseInventoryData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <PageWrapper>
      <section className="wh-details">
        {warehouseInfo && (
          <div className="wh-details__title-wrapper">
            <div className="wh-details__title">
              <div className="wh-details__back-title-wrapper">
                <Link to="/warehouse">
                  <img
                    className="wh-details__back-arrow"
                    src={ArrowBack}
                    alt="back arrow"
                  />
                </Link>
                <h1>{warehouseInfo.city}</h1>
              </div>
              <EditButton />
            </div>
          </div>
        )}
        {warehouseInfo && (
          <div className="wh-details__meta-info">
            <div className="wh-details__meta-info-wrapper">
              <div className="wh-details__address">
                <p className="wh-details__meta-label">Warehouse Address:</p>
                <p className="wh-details__meta-content">
                  {warehouseInfo.address}, {warehouseInfo.city},{" "}
                  {warehouseInfo.country}
                </p>
              </div>
              <div className="wh-details__contact-name">
                <p className="wh-details__meta-label">Contact Name:</p>
                <p className="wh-details__meta-content">
                  {warehouseInfo.contact_name} <br></br>{" "}
                  {warehouseInfo.contact_position}
                </p>
              </div>
              <div className="wh-details__contact-info">
                <p className="wh-details__meta-label">Contact Information:</p>
                <p className="wh-details__meta-content">
                  {warehouseInfo.contact_phone} {warehouseInfo.contact_email}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="wh-details__table">
          <div className="wh-details__column-labels">
            <div className="wh-details__column-labels-wrapper">
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
          </div>
          <div className="wh-details__table-rows">
            {warehouseInventory &&
              warehouseInventory.map((item) => {
                return (
                  <article className="wh-details__item-row" key={item.id}>
                    <div className="wh-details__item-row-wrapper">
                      <div className="wh-details__item-wrapper">
                        <label className="wh-details__mobile-label">
                          Inventory Item
                        </label>
                        {/* <br></br> */}
                        <a className="wh-details-item-btn" href="">
                          {item.item_name}
                          <img
                            className="wh-details__item-btn-icon"
                            src={chevronIcon}
                            alt="chevron icon"
                          />
                        </a>
                      </div>
                      <div className="wh-details__category-wrapper">
                        <label className="wh-details__mobile-label">
                          Category
                        </label>
                        <p className="wh-details__category wh-details__information">
                          {item.category}
                        </p>
                      </div>
                      <div className="wh-details__status-wrapper">
                        <label className="wh-details__mobile-label">
                          Status
                        </label>
                        <p className="wh-details__status wh-details__information">
                          {item.quantity === 0 ? (
                            <InventoryTagOutOfStock />
                          ) : (
                            <InventoryTagInStock />
                          )}
                        </p>
                      </div>
                      <div className="wh-details__qty-wrapper">
                        <label className="wh-details__mobile-label">
                          Quantity
                        </label>
                        <p className="wh-details__quantity wh-details__information">
                          {item.quantity}
                        </p>
                      </div>
                      <div className="wh-details__actions-wrapper">
                        <Link>
                          <img
                            className="wh-details__delete wh-details__action-icon"
                            src={deleteIcon}
                            alt="delete item"
                          />
                        </Link>
                        <Link to={`/inventory/${item.id}/edit`}>
                          <img
                            className="wh-details__edit wh-details__action-icon"
                            src={editIcon}
                            alt="edit item"
                          />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

export default WarehouseDetailsPage;
