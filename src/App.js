import './App.css'
import Navbar from './components/Navbar'
// import Home from './pages/Home';
import About from './pages/About'
import Vision from './pages/Vision'
import SiiymLogo from './assets/images/common/siiym_logo_2019.png'
import Leaders from './pages/Leaders'
import Footer from './components/Footer'
import LandingArea from './pages/LandingArea'

function App() {
  return (
    <>
      <Navbar />
      <LandingArea />
      <About />
      <Vision />
      <Leaders />
      <Footer />
    </>
  )
}

export default App
