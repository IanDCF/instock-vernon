import "./Header.scss";
import instockLogo from "../../assets/logos/InStock-Logo_1x.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="header__logo">
          <img src={instockLogo} alt="InStock Logo" />
        </div>
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
