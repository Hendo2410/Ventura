import '../../styles/components/Header.css';

function Header() {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__container">
          <div className="header__logo">
            <span className="header__logo-text">Ventura Trading</span>
          </div>
          <ul className="header__menu">
            <li className="header__menu-item"><a href="#home" className="header__menu-link" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
            <li className="header__menu-item"><a href="#about" className="header__menu-link" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
            <li className="header__menu-item"><a href="#services" className="header__menu-link" onClick={(e) => handleNavClick(e, 'services')}>Services</a></li>
            <li className="header__menu-item"><a href="#compliance" className="header__menu-link" onClick={(e) => handleNavClick(e, 'compliance')}>Compliance</a></li>
            <li className="header__menu-item"><a href="#contact" className="header__menu-link" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
          </ul>
          <button className="header__contact-btn" onClick={(e) => handleNavClick(e, 'contact')}>Contact</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;