import '../../styles/components/TieredSection.css';

function TieredSection() {
  return (
    <section id="services" className="tiered-section">
      <div className="tiered-section__container">
        <h2 className="tiered-section__title">Tiered Service Model</h2>
        <p className="tiered-section__subtitle">
          From tactical enablement to institutional-grade execution, we provide scalable
          solutions that grow with your compliance needs.
        </p>

        <div className="tiered-section__grid">
          <div className="tiered-section__card tiered-section__card--core">
            <div className="tiered-section__label">CORE</div>
            <h3 className="tiered-section__card-title">Tactical Trade Enablement</h3>
            <p className="tiered-section__card-subtitle">Sourcing, pricing, documentation</p>
            <ul className="tiered-section__list">
              <li className="tiered-section__list-item">Strategic sourcing and supplier identification</li>
              <li className="tiered-section__list-item">Competitive pricing analysis</li>
              <li className="tiered-section__list-item">Basic documentation management</li>
              <li className="tiered-section__list-item">Initial compliance screening</li>
            </ul>
          </div>

          <div className="tiered-section__card tiered-section__card--secure">
            <div className="tiered-section__label">SECURE</div>
            <h3 className="tiered-section__card-title">Regulatory Control</h3>
            <p className="tiered-section__card-subtitle">IOR/EOR operations, HS code validation, customs clearance</p>
            <ul className="tiered-section__list">
              <li className="tiered-section__list-item">Importer/Exporter of Record services</li>
              <li className="tiered-section__list-item">HS code classification and validation</li>
              <li className="tiered-section__list-item">Customs clearance management</li>
              <li className="tiered-section__list-item">Regulatory compliance oversight</li>
            </ul>
          </div>

          <div className="tiered-section__card tiered-section__card--strategic">
            <div className="tiered-section__label">STRATEGIC</div>
            <h3 className="tiered-section__card-title">Institutional-Grade Execution</h3>
            <p className="tiered-section__card-subtitle">Compliance packs, LC structuring, OEM onboarding, risk consulting</p>
            <ul className="tiered-section__list">
              <li className="tiered-section__list-item">Complete compliance documentation</li>
              <li className="tiered-section__list-item">Letter of Credit structuring</li>
              <li className="tiered-section__list-item">OEM integration and onboarding</li>
              <li className="tiered-section__list-item">Risk assessment and consulting</li>
            </ul>
          </div>

          <div className="tiered-section__oem-card">
            <h3 className="tiered-section__oem-title">OEM Integration</h3>
            <p className="tiered-section__oem-description">
              Ventura supports OEMs and contract manufacturers by embedding compliance and logistics into their supply chains:
            </p>
            <div className="tiered-section__oem-features">
              <div className="tiered-section__oem-feature">
                <div className="tiered-section__oem-bullet"></div>
                <span className="tiered-section__oem-feature-text">OEM onboarding flows for regulated components</span>
              </div>
              <div className="tiered-section__oem-feature">
                <div className="tiered-section__oem-bullet"></div>
                <span className="tiered-section__oem-feature-text">Multi-jurisdiction alignment for origin validation and export control</span>
              </div>
              <div className="tiered-section__oem-feature">
                <div className="tiered-section__oem-bullet"></div>
                <span className="tiered-section__oem-feature-text">Documentation tailored to contractual manufacturing agreements</span>
              </div>
              <div className="tiered-section__oem-feature">
                <div className="tiered-section__oem-bullet"></div>
                <span className="tiered-section__oem-feature-text">End-to-end execution with audit-ready traceability</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TieredSection;