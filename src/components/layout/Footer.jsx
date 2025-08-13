import '../../styles/components/Footer.css';
import venturaLogo from '../../assets/ventura-logo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__brand">
              <div className="footer__logo">
                <img src={venturaLogo} alt="Ventura Trading Logo" width="100" height="100" />
                <h3 className="footer__brand-title">Ventura Trading</h3>
            </div>
            <p className="footer__tagline">Charting Trade. Delivering Trust.</p>
            <p className="footer__description">
              Engineering institutional-grade trade infrastructure for
              compliance-first operations worldwide.
            </p>
          </div>

          <div className="footer__links">
            <div className="footer__column">
              <h4 className="footer__column-title">Services</h4>
              <ul className="footer__column-list">
                <li className="footer__column-item"><a href="#" className="footer__column-link">CORE - Tactical Enablement</a></li>
                <li className="footer__column-item"><a href="#" className="footer__column-link">SECURE - Regulatory Control</a></li>
                <li className="footer__column-item"><a href="#" className="footer__column-link">STRATEGIC - Institutional Execution</a></li>
                <li className="footer__column-item"><a href="#" className="footer__column-link">OEM Integration</a></li>
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Company</h4>
              <ul className="footer__column-list">
                <li className="footer__column-item"><a href="#" className="footer__column-link">About Us</a></li>
                <li className="footer__column-item"><a href="#" className="footer__column-link">Global Footprint</a></li>
                <li className="footer__column-item"><a href="#" className="footer__column-link">Compliance Hub</a></li>
                <li className="footer__column-item"><a href="#" className="footer__column-link">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__copyright">
            © 2024 Ventura Trading Group. All rights reserved.
          </div>
          <div className="footer__philosophy">
            Trust isn't claimed. It's engineered.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;