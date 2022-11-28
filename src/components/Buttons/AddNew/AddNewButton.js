import "./AddNewButton.scss";
const AddNewButton = ({ text }) => {
  return (
    <button
      className="add-new"
      // onClick={(event) => {
      //   onClick(event);
      // }}
    >
      + {text}
    </button>
  );
};

export default AddNewButton;
