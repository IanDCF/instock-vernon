import "./InventoryPage.scss";
import { Link } from "react-router-dom";
import AddNewButton from "../../components/Buttons/AddNew/AddNewButton";
import searchIcon from "../../assets/icons/search-24px.svg";
import InventoryItem from "../../components/InventoryItem/InventoryItem"
import sortIcon from "../../assets/icons/sort-24px.svg"

const InventoryPage = ({ inventory }) => {
  return (
    // Need abstract the section as a component w/ styling
    <section className="warehouses">
      <article className="warehouses__header">
        <h1 className="warehouses__header-title">Inventory</h1>
        <section className="warehouses__form-search">
          <form className="warehouses__header-form">
            <img className="warehouses__search-icon" src={ searchIcon } alt="" />
            <input
              className="warehouses__header-input"
              placeholder="Search..."
            />
          </form>
          <Link to={ "/inventory/add" }>
            <AddNewButton text={ "Add New Item" } />
          </Link>
        </section>
      </article>
      <ul className="warehouses__list">
        <li className="warehouses__title-list">
          <ul className="warehouses__header-list">
            <li className="warehouses__list-container">
              <div className="warehouses__title-item"><span className="warehouses__list-value">INVENTORY ITEM</span><img className="warehouses__sort-icon" src={ sortIcon } alt="" /></div>
              <div className="warehouses__title-item"><span className="warehouses__list-value warehouses__list-value--address">CATEGORY</span><img className="warehouses__sort-icon" src={ sortIcon } alt="" /></div>
            </li>
            <li className="warehouses__list-container">
              <div className="warehouses__title-item"><span className="warehouses__list-value warehouses__list-value--contact">STATUS</span><img className="warehouses__sort-icon" src={ sortIcon } alt="" /></div>
              <div className="warehouses__title-item"><span className="warehouses__list-value">QTY</span><img className="warehouses__sort-icon" src={ sortIcon } alt="" /></div>
            </li>
          </ul>
          <div className="warehouses__title-item"><span className="warehouses__list-action">WAREHOUSE</span></div>
          <div className="warehouses__title-item"><span className="warehouses__list-action">ACTIONS</span></div>
        </li>
        { inventory &&
          inventory.map((inventory, index) => (
            <InventoryItem key={ index } inventory={ inventory } />
          )) }
      </ul>
    </section>
  );
};

export default InventoryPage;
