import "./WarehousesPage.scss";
import searchIcon from "../../assets/icons/search-24px.svg";
import AddNewButton from "../../components/Buttons/AddNew/AddNewButton";
import WarehouseItem from "../../components/WarehouseItem/WarehouseItem";
import sortIcon from "../../assets/icons/sort-24px.svg"
import { Link } from "react-router-dom";
const WarehousesPage = ({ warehouses }) => {

    return (
        <section className="warehouses">
            <article className="warehouses__header">
                <h1 className="warehouses__header-title">Warehouses</h1>
                <section className="warehouses__form-search">
                    <form className="warehouses__header-form">
                        <img className="warehouses__search-icon" src={ searchIcon } alt="" />
                        <input
                            className="warehouses__header-input"
                            placeholder="Search..."
                        />
                    </form>
                    <Link to={ '/warehouses/add' }>
                        <AddNewButton text={ "Add New Warehouse" } />
                    </Link>
                </section>
            </article>
            <ul className="warehouses__list">
                <li className="warehouses__title-list">
                    <ul className="warehouses__header-list">
                        <li className="warehouses__list-container">
                            <div className="warehouses__title-item"><span className="warehouses__list-value">WAREHOUSE</span><img className="warehouses__sort-icon" src={ sortIcon } alt="" /></div>
                            <div className="warehouses__title-item"><span className="warehouses__list-value warehouses__list-value--address">ADDRESS</span><img className="warehouses__sort-icon" src={ sortIcon } alt="" /></div>
                        </li>
                        <li className="warehouses__list-container">
                            <div className="warehouses__title-item"><span className="warehouses__list-value warehouses__list-value--contact">CONTACT NAME</span><img className="warehouses__sort-icon" src={ sortIcon } alt="" /></div>
                            <div className="warehouses__title-item"><span className="warehouses__list-value">CONTACT INFORMATION</span><img className="warehouses__sort-icon" src={ sortIcon } alt="" /></div>
                        </li>
                    </ul>
                    <div className="warehouses__title-item"><span className="warehouses__list-action">ACTIONS</span></div>
                </li>
                { warehouses &&
                    warehouses.map((warehouse, index) => (
                        <WarehouseItem key={ index } warehouse={ warehouse } />
                    )) }
            </ul>
        </section>
    );
};

export default WarehousesPage;
