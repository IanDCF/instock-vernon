import "./Header.scss";

import instockLogo from "../../assets/logos/InStock-Logo_1x.png";

const Header = () => {
  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="header__logo">
          <img src={instockLogo} alt="InStock Logo" />
        </div>
        <div className="header__nav">
          <div>
            <a className="header__nav-link header__nav-link--active" href="#">
              Warehouses
            </a>
          </div>
          <div>
            <a className="header__nav-link" href="#">
              Inventory
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
