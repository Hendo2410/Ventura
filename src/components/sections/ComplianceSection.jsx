import '../../styles/components/ComplianceSection.css';

function ComplianceSection() {
  return (
    <section className="compliance-section">
      <div className="compliance-section__container">
        <h2 className="compliance-section__title">Compliance & Documentation Hub</h2>
        <p className="compliance-section__subtitle">
          Our comprehensive compliance suite ensures full regulatory adherence across all
          jurisdictions and industry standards.
        </p>

        <div className="compliance-section__header">
          <div className="compliance-section__suite">
            <h3 className="compliance-section__suite-title">Full Compliance Suite</h3>
            <p className="compliance-section__suite-description">Institutional-grade documentation and certification management</p>
          </div>
        </div>

        <div className="compliance-section__grid">
          <div className="compliance-section__category">
            <div className="compliance-section__category-header">
              <div className="compliance-section__category-number">1</div>
              <h4 className="compliance-section__category-title">Core Documents</h4>
            </div>
            <ul className="compliance-section__list">
              <li className="compliance-section__list-item">Commercial Invoice</li>
              <li className="compliance-section__list-item">Pro Forma Invoice</li>
              <li className="compliance-section__list-item">Packing List (Harmonized Codes)</li>
              <li className="compliance-section__list-item">Certificates of Origin (COO, EUR 1, Arab League COO)</li>
              <li className="compliance-section__list-item">Power of Attorney (IOR/EOR Authorization)</li>
              <li className="compliance-section__list-item">Bill of Lading / Airway Bill</li>
            </ul>
          </div>

          <div className="compliance-section__category">
            <div className="compliance-section__category-header">
              <div className="compliance-section__category-number">2</div>
              <h4 className="compliance-section__category-title">Regulatory & Certification Layers</h4>
            </div>
            <ul className="compliance-section__list">
              <li className="compliance-section__list-item">SGS / BV Third-Party Inspection Certificates</li>
              <li className="compliance-section__list-item">G-Mark Certification (Gulf Standards)</li>
              <li className="compliance-section__list-item">SFDA / SASO / GSO Compliant Documentation</li>
              <li className="compliance-section__list-item">EU REACH / RoHS Compliance Declarations</li>
              <li className="compliance-section__list-item">FDA / USDA Export-Import Compliance</li>
            </ul>
          </div>

          <div className="compliance-section__category">
            <div className="compliance-section__category-header">
              <div className="compliance-section__category-number">3</div>
              <h4 className="compliance-section__category-title">Financial Instruments</h4>
            </div>
            <ul className="compliance-section__list">
              <li className="compliance-section__list-item">LC at-Sight Compliant Packs (UCP 600)</li>
              <li className="compliance-section__list-item">Sanctions Screening & KYC/AML Packs for counterparties</li>
            </ul>
          </div>

          <div className="compliance-section__category">
            <div className="compliance-section__category-header">
              <div className="compliance-section__category-number">4</div>
              <h4 className="compliance-section__category-title">Specialized OEM Compliance</h4>
            </div>
            <ul className="compliance-section__list">
              <li className="compliance-section__list-item">BOM (Bill of Materials) documentation alignment</li>
              <li className="compliance-section__list-item">Component origin verification (multi-jurisdiction)</li>
              <li className="compliance-section__list-item">OEM-specific quality and safety certifications</li>
            </ul>
          </div>
        </div>

        <div className="compliance-section__audit">
          <h3 className="compliance-section__audit-title">Audit-Ready Documentation</h3>
          <p className="compliance-section__audit-description">
            Every document in our compliance suite is designed for institutional scrutiny, regulatory review,
            and audit readiness — ensuring your operations meet the highest standards of transparency and
            legal compliance.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ComplianceSection;