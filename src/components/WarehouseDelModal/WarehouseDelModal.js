import "./WarehouseDelModal.scss";
import CloseIcon from "../../assets/icons/close-24px.svg";
import DeleteButton from "../Buttons/DeleteButton/DeleteButton";
import CancelButton from "../Buttons/CancelButton/CancelButton";

const WarehouseDelModal = ({ handleModal }) => {
  return (
    <div className="modal-background">
      <div className="modal">
        <div className="modal__icon" onClick={handleModal}>
          <img src={CloseIcon} alt="Close Icon" />
        </div>

        <div className="modal__wrap">
          <h2 className="modal__title">Delete Washington warehouse?</h2>
          <p className="modal__text">
            Please confirm that you'd like to delete the Washington from the
            list of warehouses. You won't be able to undo this action.
          </p>
          <div className="modal__buttons">
            <CancelButton clickHandler={handleModal} />
            <DeleteButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarehouseDelModal;
