import "./WarehouseItem.scss";
import React from "react";
import { Link } from "react-router-dom";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";

const WarehouseItem = ({ warehouse }) => {
    const addres = `${warehouse.address} ${warehouse.city} ${warehouse.country}`
    return (
        <li className="warehouse">
            <section className="warehouse__info">
                <ul className="warehouse__list-items">
                    <li className="warehouse__item warehouse__item">
                        <span className="warehouse__item-label">WAREHOUSE</span>
                        <a className="warehouse__link">
                            <span>{ warehouse.warehouse_name }</span>
                            <img src={ chevronIcon } alt="" />
                        </a>
                    </li>
                    <li className="warehouse__item warehouse__item--address">
                        <span className="warehouse__item-label">ADDRESS</span>
                        <span className="warehouse__item-value">
                            { addres }
                        </span>
                    </li>
                </ul>
                <ul className="warehouse__list-items">
                    <li className="warehouse__item">
                        <span className="warehouse__item-label">CONTACT NAME</span>
                        <span>{ warehouse.contact_name }</span>
                    </li>
                    <li className="warehouse__item">
                        <span className="warehouse__item-label">CONTACT INFORMATION</span>
                        <span>
                            +1 (629) 555-0129 <br />
                            paujla@instock.com
                        </span>
                    </li>
                </ul>
            </section>
            <div className=" warehouse__icons-container">
                <a className="warehouse__delete">
                    <img className=" warehouse__icons" src={ deleteIcon } alt="" />
                </a>
                <a className="warehouse__edit">
                    <img className=" warehouse__icons" src={ editIcon } alt="" />
                </a>
            </div>
        </li>
    );
};

export default WarehouseItem;
