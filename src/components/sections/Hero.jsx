import '../../styles/components/Hero.css';
import venturaLogo from '../../assets/ventura-logo.png';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__logo">
          <img src={venturaLogo} alt="Ventura Trading Logo" width="200" height="200" />
        </div>
        <h1 className="hero__title">Ventura Trading</h1>
        <p className="hero__subtitle">Global Trade. Engineered for Compliance.</p>
        <p className="hero__description">
          Ventura is more traders specialized global trade & international • energy infrastructure,
          energy, agricultural commodities, and metals, plus access to global markets and capital<br />
          through state-of-art infrastructure, engineering, and capabilities.
        </p>
        <div className="hero__buttons">
          <button className="hero__btn-primary">Download Company Profile</button>
        </div>
        <div className="hero__features">
          <div className="hero__feature">
            <span className="hero__feature-icon">✓</span>
            <span>Compliance Tech Analytics</span>
          </div>
          <div className="hero__feature">
            <span className="hero__feature-icon">⚙</span>
            <span>Global Risk Administration</span>
          </div>
          <div className="hero__feature">
            <span className="hero__feature-icon">📊</span>
            <span>ORM Deep Extensions</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;