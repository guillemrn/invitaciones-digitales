import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Demos from './components/Demos'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Demos />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}

export default App


