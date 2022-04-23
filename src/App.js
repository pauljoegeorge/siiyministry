import './App.css'
import Navbar from './components/Navbar'
// import Home from './pages/Home';
import About from './pages/About'
import Vision from './pages/Vision'
import SiiymLogo from './assets/images/common/siiym_logo_2019.png'
import Leaders from './pages/Leaders'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <div
        id="home"
        className="section bg-image min-h-screen bg-white"
        style={{
          backgroundImage: `url(${SiiymLogo})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPositionY: '50px',
        }}
      />
      <About />
      <Vision />
      <Leaders />
      <Footer />
    </>
  )
}

export default App
