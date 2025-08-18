import '../../styles/components/Hero.css';
import venturaLogo from '../../assets/ventura-logo.png';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <div className="hero__logo">
          <img src={venturaLogo} alt="Ventura Trading Logo" width="200" height="200" />
        </div>
        <h1 className="hero__title">Ventura Trading</h1>
        <p className="hero__subtitle">Global Trade, Engineered for Compliance.</p>
        <p className="hero__description">
          Ventura Trading delivers institutional-grade trade infrastructure — integrating sourcing,
          logistics, and regulatory execution into a seamless, trusted framework for high-stakes
          markets.
        </p>
        <div className="hero__buttons">
          <button className="hero__btn-primary">Explore Services</button>
          <button className="hero__btn-secondary">Download Company Profile</button>
        </div>
        <div className="hero__features">
          <div className="hero__feature">
            <span className="hero__feature-icon">✓</span>
            <span>Compliance-First Approach</span>
          </div>
          <div className="hero__feature">
            <span className="hero__feature-icon">⚙</span>
            <span>End-to-End Infrastructure</span>
          </div>
          <div className="hero__feature">
            <span className="hero__feature-icon">🔧</span>
            <span>OEM-Ready Execution</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;