import "./DeleteModal.scss";
import CloseIcon from "../../assets/icons/close-24px.svg";
import DeleteButton from "../Buttons/DeleteButton/DeleteButton";
import CancelButton from "../Buttons/CancelButton/CancelButton";
import { deleteWarehouse, deleteItem } from "../../utils/utils";

const DeleteModal = ({
  handleModal,
  warehouse,
  renderWarehouses,
  // Must pass in type="inventory" from InventoryItem component
  type,
  // must pass in item object to modal from InventoryItem component
  item,
  // must pass in renderInventory function from Inventory Page component to change render State
  renderInventory,
}) => {
  const deleteHandlerWarehouse = async () => {
    const res = await deleteWarehouse(warehouse.id);
    console.log(res);
    handleModal();
    console.log(`warehouse with id: ${res.id} has been deleted`);
    renderWarehouses(res.id);
  };

  const deleteHandlerItem = async () => {
    const res = await deleteItem(item.id);
    handleModal();
    console.log(`item with id: ${res.id} has been deleted`);
    renderInventory(res.id);
  };

  return (
    <div className="modal-background">
      <div className="modal">
        <div className="modal__icon" onClick={handleModal}>
          <img src={CloseIcon} alt="Close Icon" />
        </div>

        <div className="modal__wrap">
          <h2 className="modal__title">
            Delete{" "}
            {type === "warehouse"
              ? `${warehouse.warehouse_name} warehouse?`
              : `${type === "item" && item.item_name} item?`}
          </h2>
          <p className="modal__text">
            Please confirm that you'd like to delete{" "}
            {type === "warehouse"
              ? `${warehouse.warehouse_name} from the list of warehouses.`
              : `${
                  type === "item" && item.item_name
                } from the list of items.`}{" "}
            You won't be able to undo this action.
          </p>
          <div className="modal__buttons">
            <CancelButton clickHandler={handleModal} />
            <DeleteButton
              deleteHandler={
                type === "warehouse"
                  ? deleteHandlerWarehouse
                  : type === "item" && deleteHandlerItem
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
