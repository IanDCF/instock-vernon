import "./WarehousesPage.scss"
import searchIcon from "../../assets/icons/search-24px.svg"
import AddNewButton from "../../components/Buttons/AddNew/AddNewButton"
import WarehouseItem from "../../components/WarehouseItem/WarehouseItem"
const WarehousesPage = () => {
    const warehouselist = [1, 2, 3]
    return (
        <section className='warehouses'>
            <article className='warehouses__header'>
                <h1 className='warehouses__header-title'>
                    Warehouses
                </h1>
                <section className="warehouses__form-search">
                    <form className='warehouses__header-form'>
                        <img className='warehouses__search-icon' src={ searchIcon } alt="" />
                        <input className='warehouses__header-input' placeholder="Search..." />
                    </form>
                    <AddNewButton text={ "Add New Warehouse" } />
                </section>
            </article>
            <ul className="warehouses__list">
                { warehouselist && warehouselist.map((warehouse, index) => <WarehouseItem key={ index } warehouse={ warehouse } />) }
            </ul>
        </section>
    )
}

export default WarehousesPage