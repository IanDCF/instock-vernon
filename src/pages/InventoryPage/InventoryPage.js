import "./InventoryPage.scss";
import { Link } from "react-router-dom";
import AddNewButton from "../../components/Buttons/AddNew/AddNewButton";
import searchIcon from "../../assets/icons/search-24px.svg";
import InventoryItem from "../../components/InventoryItem/InventoryItem";
import sortIcon from "../../assets/icons/sort-24px.svg";
import { useEffect, useState } from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

const InventoryPage = ({ inventory, handleModal }) => {
  const [searchedInventory, setSearchedInventory] = useState();
  useEffect(() => {
    setSearchedInventory(inventory);
  }, [setSearchedInventory, inventory]);

  const inputOnChange = (e) => {
    e.preventDefault();
    const input = e.target.value.trim().toLowerCase();
    if (!input) {
      setSearchedInventory(inventory);
    } else {
      const filteredInventory = inventory.filter((inventoryItem) =>
        inventoryItem.item_name.toLowerCase().includes(input)
      );
      setSearchedInventory(filteredInventory);
    }
  };
  return (
    <PageWrapper>
      <section className="inventories">
        <article className="inventories__header">
          <h1 className="inventories__header-title">Inventory</h1>
          <section className="inventories__form-search">
            <form onSubmit={inputOnChange} className="inventories__header-form">
              <img
                className="inventories__search-icon"
                src={searchIcon}
                alt=""
              />
              <input
                onChange={(e) => inputOnChange(e)}
                className="inventories__header-input"
                placeholder="Search..."
              />
            </form>
            <Link to={"/inventory/add"}>
              <AddNewButton text={"Add New Item"} styling={"add-new--width"} />
            </Link>
          </section>
        </article>
        <ul className="inventories__list">
          <li className="inventories__title-list">
            <ul className="inventories__header-list">
              <li className="inventories__list-container">
                <div className="inventories__title-item">
                  <span className="inventories__list-value">
                    INVENTORY ITEM
                  </span>
                  <img
                    className="inventories__sort-icon"
                    src={sortIcon}
                    alt=""
                  />
                </div>
                <div className="inventories__title-item">
                  <span className="inventories__list-value inventories__list-value--address">
                    CATEGORY
                  </span>
                  <img
                    className="inventories__sort-icon"
                    src={sortIcon}
                    alt=""
                  />
                </div>
              </li>
              <li className="inventories__list-container">
                <div className="inventories__title-item">
                  <span className="inventories__list-value inventories__list-value--contact">
                    STATUS
                  </span>
                  <img
                    className="inventories__sort-icon"
                    src={sortIcon}
                    alt=""
                  />
                </div>
                <div className="inventories__title-item">
                  <span className="inventories__list-value inventories__list-value--qty">
                    QTY
                  </span>
                  <img
                    className="inventories__sort-icon"
                    src={sortIcon}
                    alt=""
                  />
                </div>
              </li>
            </ul>
            <div className="inventories__title-item">
              <span className="inventories__list-action inventories__list-action--warehouse">
                WAREHOUSE
              </span>{" "}
              <img className="inventories__sort-icon" src={sortIcon} alt="" />
            </div>
            <div className="inventories__title-item">
              <span className="inventories__list-action">ACTIONS</span>
            </div>
          </li>
          {searchedInventory &&
            searchedInventory.map((inventory, index) => (
              <InventoryItem
                key={index}
                inventory={inventory}
                handleModal={handleModal}
              />
            ))}
        </ul>
      </section>
    </PageWrapper>
  );
};

export default InventoryPage;
