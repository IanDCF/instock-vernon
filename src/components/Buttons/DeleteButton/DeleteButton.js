import "./DeleteButton.scss";

const DeleteButton = ({ deleteHandler }) => {
  return (
    <div className="delete-btn" onClick={deleteHandler}>
      Delete
    </div>
  );
};

export default DeleteButton;
