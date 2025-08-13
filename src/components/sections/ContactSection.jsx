import '../../styles/components/ContactSection.css';

function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-section__container">
        <h2 className="contact-section__title">Get in Touch with Ventura Trading</h2>
        <p className="contact-section__subtitle">
          Ready to engineer trust in your global trade operations? Contact our compliance
          experts today.
        </p>

        <div className="contact-section__grid">
          <div className="contact-section__info">
            <h3 className="contact-section__info-title">Contact Information</h3>

            <div className="contact-section__item">
              <div className="contact-section__icon">📧</div>
              <div className="contact-section__item-content">
                <strong className="contact-section__item-label">Email</strong>
                <p className="contact-section__item-value">info@venturatradinggroup.com</p>
              </div>
            </div>

            <div className="contact-section__item">
              <div className="contact-section__icon">📱</div>
              <div className="contact-section__item-content">
                <strong className="contact-section__item-label">Phone</strong>
                <p className="contact-section__item-value">+20 111 333 3412</p>
              </div>
            </div>

            <div className="contact-section__item">
              <div className="contact-section__icon">🌐</div>
              <div className="contact-section__item-content">
                <strong className="contact-section__item-label">Website</strong>
                <p className="contact-section__item-value">www.venturatradinggroup.com</p>
              </div>
            </div>

            <div className="contact-section__why-choose">
              <h3 className="contact-section__why-choose-title">Why Choose Ventura?</h3>
              <ul className="contact-section__choose-list">
                <li className="contact-section__choose-item">
                  <div className="contact-section__choose-icon"></div>
                  <span className="contact-section__choose-text">Institutional-grade compliance infrastructure</span>
                </li>
                <li className="contact-section__choose-item">
                  <div className="contact-section__choose-icon"></div>
                  <span className="contact-section__choose-text">End-to-end trade execution</span>
                </li>
                <li className="contact-section__choose-item">
                  <div className="contact-section__choose-icon"></div>
                  <span className="contact-section__choose-text">Multi-jurisdiction regulatory expertise</span>
                </li>
                <li className="contact-section__choose-item">
                  <div className="contact-section__choose-icon"></div>
                  <span className="contact-section__choose-text">OEM-ready integration capabilities</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="contact-section__form-wrapper">
            <h3 className="contact-section__form-title">Connect with Ventura Trading</h3>
            <p className="contact-section__form-description">Compliance-First Global Trade</p>
            <p className="contact-section__form-description">Request quotes, compliance support, or OEM integration for your trade needs. Select your category and our team will respond with tailored documentation and execution plans.</p>

            <form className="contact-section__form">
              <div className="contact-section__form-row">
                <input type="text" placeholder="Full name" className="contact-section__input" required />
                <input type="text" placeholder="Company name" className="contact-section__input" required />
              </div>

              <input type="email" placeholder="Email" className="contact-section__input" required />
              <input type="tel" placeholder="Phone (optional)" className="contact-section__input" />

              <select className="contact-section__select" required>
                <option value="">Service type</option>
                <option value="core">Core - Tactical Trade Enablement</option>
                <option value="secure">Secure - Regulatory Control</option>
                <option value="strategic">Strategic - Institutional-Grade Execution</option>
                <option value="oem">OEM Integration</option>
              </select>

              <select className="contact-section__select" required>
                <option value="">Commodity Category</option>
                <option value="energy">Energy & Oil</option>
                <option value="industrial">Industrial Equipment</option>
                <option value="technology">Technology Components</option>
                <option value="metals">Metals & Minerals</option>
                <option value="agricultural">Agricultural Products</option>
                <option value="other">Other</option>
              </select>

              <textarea placeholder="Tell us more about your inquiry (quantities, destination, timelines, compliance needs)." rows="4" className="contact-section__textarea" required></textarea>

              <button type="submit" className="contact-section__submit-btn">Request a Quote</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;