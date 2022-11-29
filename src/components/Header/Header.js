import "./Header.scss";
import { Link, useLocation } from "react-router-dom";
import instockLogo from "../../assets/logos/InStock-Logo.svg";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const activeLink = (path) => {
    if (path.search(/warehouse/) === 1) {
      console.log("warehouse");
      return "warehouse";
    }
    if (path.search(/inventory/) === 1) {
      console.log("inventory");
      return "inventory";
    }
  };

  activeLink(pathname);
  return (
    <div className="header-wrapper">
      <header className="header">
        <Link to="/warehouse">
          <div className="header__logo">
            <img src={instockLogo} alt="InStock Logo" />
          </div>
        </Link>

        <div className="header__nav">
          <div>
            <Link
              className={`header__nav-link ${
                activeLink(pathname) === "warehouse" &&
                "header__nav-link--active"
              }`}
              to="/warehouse"
            >
              Warehouses
            </Link>
          </div>
          <div>
            <Link
              className={`header__nav-link ${
                activeLink(pathname) === "inventory" &&
                "header__nav-link--active"
              }`}
              to="inventory"
            >
              Inventory
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
