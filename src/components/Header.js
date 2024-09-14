import logo from "../assets/Logo.png";

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav className="nav-menu">
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="menu.html">Menu</a>
          </li>
          <li>
            <a href="reservations.html">Reservations</a>
          </li>
          <li>
            <a href="order-online.html">Order Online</a>
          </li>
          <li>
            <a href="login.html">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
