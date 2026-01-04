import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import ApiDocs from './components/ApiDocs'
import SystemStatus from './components/SystemStatus'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />
      <ApiDocs />
      <Pricing />
      <SystemStatus />
      <Footer />
    </div>
  )
}

export default App
