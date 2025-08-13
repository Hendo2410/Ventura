import './styles/global/App.css'
import {
  Header,
  Hero,
  LegacySection,
  TieredSection,
  GlobalSection,
  ComplianceSection,
  ContactSection,
  Footer
} from './components'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <LegacySection />
      <TieredSection />
      <GlobalSection />
      <ComplianceSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App