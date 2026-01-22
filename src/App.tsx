import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Gallery from './components/Gallery'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="features">
        <Features />
      </div>
      <Pricing />
      <div id="gallery">
        <Gallery />
      </div>
      <CTA />
      <Footer />
    </div>
  )
}

export default App

