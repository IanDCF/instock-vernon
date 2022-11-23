import "./DeleteButton.scss";

const DeleteButton = ({ clickHandler }) => {
  return (
    <div className="delete-btn" onClick={clickHandler}>
      Delete
    </div>
  );
};

export default DeleteButton;
