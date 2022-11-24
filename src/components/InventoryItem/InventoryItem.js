import "./InventoryItem.scss";
import React from "react";
import { Link } from "react-router-dom";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import axios from "axios";
import InventoryTagInStock from "../Buttons/InventoryTag/InventoryTagInStock";
import InventoryTagOutOfStock from "../Buttons/InventoryTag/InventoryTagOutOfStock";

const InventoryItem = ({ inventory }) => {
    // const address = `${warehouse.address} ${warehouse.city} ${warehouse.country}`
    const onClickHandler = async (id) => {
        const { data } = await axios.delete(
            `http://localhost:8080/warehouses/${id}`
        );
        console.log(data);
    };
    return (
        <li className="inventory">
            <section className="inventory__info">
                <ul className="inventory__list-items">
                    <li className="inventory__item warehouse__item">
                        <span className="inventory__item-label">WAREHOUSE</span>
                        <Link className="inventory__link" to={ `/inventory/${inventory.id}` }>
                            <span className="inventory__link-warehouse">
                                { inventory.item_name }
                            </span>
                            <img src={ chevronIcon } alt="" />
                        </Link>
                    </li>
                    <li className="inventory__item inventory__item--address">
                        <span className="inventory__item-label">CATEGORY</span>
                        <span className="inventory__item-value">{ inventory.category }</span>
                    </li>
                </ul>
                <ul className="inventory__list-items">
                    <li className="inventory__item">
                        <span className="inventory__item-label">STATUS</span>

                        { inventory.status === "In Stock" ? (
                            <InventoryTagInStock />
                        ) : (
                            <InventoryTagOutOfStock />
                        ) }
                    </li>
                    <li className="inventory__item">
                        <span className="inventory__item-label">QTY</span>
                        <span>{ inventory.quantity }</span>
                    </li>
                </ul>
            </section>
            <div className="inventory__item inventory__item--warehouse ">
                <span className="inventory__item-label">WAREHOUSE</span>
                <span>{ inventory.warehouse_name }</span>
            </div>
            <div className=" inventory__icons-container">
                <div
                    onClick={ () => onClickHandler(inventory.id) }
                    className="inventory__delete"
                >
                    <img className=" inventory__icons" src={ deleteIcon } alt="" />
                </div>
                <div onClick={ onClickHandler } className="inventory__edit">
                    <img className=" inventory__icons" src={ editIcon } alt="" />
                </div>
            </div>
        </li>
    );
};

export default InventoryItem;
