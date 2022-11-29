import "./CancelButton.scss";
import { Link } from "react-router-dom";

const CancelButton = ({ clickHandler, link }) => {
  return (
    <div className="cancel-btn" onClick={clickHandler}>
      {link ? <Link to={`${link}`}>Cancel</Link> : ""}
      {!link ? "Cancel" : ""}
    </div>
  );
};

export default CancelButton;
