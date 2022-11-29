import "./Header.scss";
import { Link } from "react-router-dom";
import instockLogo from "../../assets/logos/InStock-Logo.svg";

const Header = () => {
  return (
    <div className="header-wrapper">
      <header className="header">
        <Link className="header__logo" to="/warehouse">
          <img src={instockLogo} alt="InStock Logo" />
        </Link>
        <div className="header__nav">
          <div>
            <Link
              className="header__nav-link header__nav-link--active"
              to="/warehouse"
            >
              Warehouses
            </Link>
          </div>
          <div>
            <Link className="header__nav-link" to="inventory">
              Inventory
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
