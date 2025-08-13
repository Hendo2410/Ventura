import '../../styles/components/Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__container">
          <div className="header__logo">
            <span className="header__logo-text">Ventura Trading</span>
          </div>
          <ul className="header__menu">
            <li className="header__menu-item"><a href="#home" className="header__menu-link">Home</a></li>
            <li className="header__menu-item"><a href="#about" className="header__menu-link">About</a></li>
            <li className="header__menu-item"><a href="#services" className="header__menu-link">Services</a></li>
            <li className="header__menu-item"><a href="#compliance" className="header__menu-link">Compliance</a></li>
            <li className="header__menu-item"><a href="#contact" className="header__menu-link">Contact</a></li>
          </ul>
          <button className="header__contact-btn">Contact</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;