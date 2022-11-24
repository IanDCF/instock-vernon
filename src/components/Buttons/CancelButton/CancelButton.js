import "./CancelButton.scss";

const CancelButton = ({ clickHandler }) => {
  return (
    <div className="cancel-btn" onClick={clickHandler}>
      Cancel
    </div>
  );
};

export default CancelButton;
