import HeroSection from "./components/HeroSection"
import HowItWorks from "./components/HowItWorks"
import Navbar from "./components/Navbar"
import KeyFeatures from "./components/KeyFeatures"
import Footer from "./components/Footer"
import Calcom from "./components/Calcom"
import AboutUs from "./components/AboutUs"
import Pricing from "./components/Pricing"

const App = () => {
  return (
    <main className="text-sm text-neutral-300 antialiased"> 
      <Navbar />
      <HeroSection/>
      <HowItWorks />
      <KeyFeatures />
      <Pricing />
      <AboutUs />
      <Calcom />
      <Footer />
    </main>
  )
}

export default App
