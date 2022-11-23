import { useState } from "react";
import "./WarehousesPage.scss";
import WarehouseDeleteModal from "../../components/WarehouseDelModal/WarehouseDelModal";

const WarehousesPage = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
    console.log(openModal);
  };
  return (
    <div>
      <button onClick={handleModal}> Delete Warehouse </button>
      {openModal && <WarehouseDeleteModal handleModal={handleModal} />}
    </div>
  );
};

export default WarehousesPage;
