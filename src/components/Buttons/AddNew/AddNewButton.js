import "./AddNewButton.scss";
const AddNewButton = ({ text, styling }) => {
  return (
    <button
      className={ `add-new ${styling}` }
    // onClick={(event) => {
    //   onClick(event);
    // }}
    >
      + { text }
    </button>
  );
};

export default AddNewButton;
