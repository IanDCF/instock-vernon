import "./InventoryPage.scss";
import { Link } from "react-router-dom";
import AddNewButton from "../../components/Buttons/AddNew/AddNewButton";
import searchIcon from "../../assets/icons/search-24px.svg";
import InventoryItem from "../../components/InventoryItem/InventoryItem";
import sortIcon from "../../assets/icons/sort-24px.svg";

const InventoryPage = ({ updateInventory, inventory }) => {
  return (
    <section className="inventories">
      <article className="inventories__header">
        <h1 className="inventories__header-title">Inventory</h1>
        <section className="inventories__form-search">
          <form className="inventories__header-form">
            <img className="inventories__search-icon" src={ searchIcon } alt="" />
            <input
              className="inventories__header-input"
              placeholder="Search..."
            />
          </form>
          <Link to={ "/inventory/add" }>
            <AddNewButton text={ "Add New Item" } styling={ 'add-new--width' } />
          </Link>
        </section>
      </article>
      <ul className="inventories__list">
        <li className="inventories__title-list">
          <ul className="inventories__header-list">
            <li className="inventories__list-container">
              <div className="inventories__title-item">
                <span className="inventories__list-value">INVENTORY ITEM</span>
                <img className="inventories__sort-icon" src={ sortIcon } alt="" />
              </div>
              <div className="inventories__title-item">
                <span className="inventories__list-value inventories__list-value--address">
                  CATEGORY
                </span>
                <img className="inventories__sort-icon" src={ sortIcon } alt="" />
              </div>
            </li>
            <li className="inventories__list-container">
              <div className="inventories__title-item">
                <span className="inventories__list-value inventories__list-value--contact">
                  STATUS
                </span>
                <img className="inventories__sort-icon" src={ sortIcon } alt="" />
              </div>
              <div className="inventories__title-item">
                <span className="inventories__list-value inventories__list-value--qty">
                  QTY
                </span>
                <img className="inventories__sort-icon" src={ sortIcon } alt="" />
              </div>
            </li>
          </ul>
          <div className="inventories__title-item">
            <span className="inventories__list-action inventories__list-action--warehouse">
              WAREHOUSE
            </span>{ " " }
            <img className="inventories__sort-icon" src={ sortIcon } alt="" />
          </div>
          <div className="inventories__title-item">
            <span className="inventories__list-action">ACTIONS</span>
          </div>
        </li>
        { inventory &&
          inventory.map((inventory, index) => (
            <InventoryItem
              key={ index }
              updateInventory={ updateInventory }
              inventory={ inventory }
            />
          )) }
      </ul>
    </section>
  );
};

export default InventoryPage;
