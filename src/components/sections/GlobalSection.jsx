import '../../styles/components/GlobalSection.css';

function GlobalSection() {
  return (
    <section className="global-section">
      <div className="global-section__container">
        <h2 className="global-section__title">Global Footprint</h2>
        <p className="global-section__subtitle">
          Our strategic presence across key markets ensures comprehensive trade infrastructure
          and compliance support worldwide.
        </p>

        <div className="global-section__grid">
          <div className="global-section__card">
            <h3 className="global-section__card-title">MENA</h3>
            <div className="global-section__status-badge global-section__status-badge--established">Established</div>
            <ul className="global-section__countries">
              <li className="global-section__country">Egypt</li>
              <li className="global-section__country">UAE</li>
              <li className="global-section__country">Saudi Arabia</li>
              <li className="global-section__country">Jordan</li>
            </ul>
          </div>

          <div className="global-section__card">
            <h3 className="global-section__card-title">Europe</h3>
            <div className="global-section__status-badge global-section__status-badge--expansion">Expansion underway</div>
            <ul className="global-section__countries">
              <li className="global-section__country">Germany</li>
              <li className="global-section__country">Italy</li>
              <li className="global-section__country">France</li>
            </ul>
          </div>

          <div className="global-section__card">
            <h3 className="global-section__card-title">Africa</h3>
            <div className="global-section__status-badge global-section__status-badge--active">Active operations</div>
            <ul className="global-section__countries">
              <li className="global-section__country">Libya</li>
              <li className="global-section__country">Sudan</li>
            </ul>
          </div>

          <div className="global-section__card">
            <h3 className="global-section__card-title">North America</h3>
            <div className="global-section__status-badge global-section__status-badge--planning">Planning phase</div>
            <p className="global-section__description">Strategic entry in progress</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GlobalSection;