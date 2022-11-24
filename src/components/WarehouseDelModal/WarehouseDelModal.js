import "./WarehouseDelModal.scss";
import CloseIcon from "../../assets/icons/close-24px.svg";
import DeleteButton from "../Buttons/DeleteButton/DeleteButton";
import CancelButton from "../Buttons/CancelButton/CancelButton";
import { deleteWarehouse } from "../../utils/utils";

const WarehouseDelModal = ({ handleModal, warehouse, render }) => {
  const deleteHandler = async () => {
    const id = await deleteWarehouse(warehouse.id);
    handleModal();
    console.log(id);
    render(id);
  };
  return (
    <div className="modal-background">
      <div className="modal">
        <div className="modal__icon" onClick={handleModal}>
          <img src={CloseIcon} alt="Close Icon" />
        </div>

        <div className="modal__wrap">
          <h2 className="modal__title">
            Delete {warehouse.warehouse_name} warehouse?
          </h2>
          <p className="modal__text">
            Please confirm that you'd like to delete {warehouse.warehouse_name}
            from the list of warehouses. You won't be able to undo this action.
          </p>
          <div className="modal__buttons">
            <CancelButton clickHandler={handleModal} />
            <DeleteButton deleteHandler={deleteHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarehouseDelModal;
