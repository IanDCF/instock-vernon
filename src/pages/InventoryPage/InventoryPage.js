import "./InventoryPage.scss";
import { useState } from "react";
import WarehouseDelModal from "../../components/DeleteModal/DeleteModal";
const InventoryPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [inventories, setInventories] = useState([]);

  const renderInventory = (id) => {
    setInventories(inventories.filter((element) => element.id !== id));
  };

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const returnItem = () => {
    let itemObj = {
      item_name: "Belt",
      stock: 1234,
    };
    return itemObj;
  };

  return (
    <div>
      <button onClick={handleModal}>Delete Item</button>
      {openModal && (
        <WarehouseDelModal
          type="item"
          renderInventory={renderInventory}
          item={returnItem}
          handleModal={handleModal}
        />
      )}
    </div>
  );
};

export default InventoryPage;
