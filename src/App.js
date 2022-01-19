import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbars from './Components/Navbars';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Footer from './Components/Footer';
// import Services from './Components/Services';
import ScrollArrow from './Components/ScrollArrow';
import Gallery from './Components/Gallery';


function App() {
    
  return (
    <div className="App">
    <Router>
    
    <Navbars />
      <Routes>
        <Route index element={<Home />} /> 
        <Route path="/about" element={<About />} > </Route>
        <Route path="/contact" element={<Contact />} > </Route>
        {/* <Route path="/services" element={<Services />} > </Route> */}
        <Route path="/gallery" element={<Gallery />} > </Route>
    </Routes> 
    <ScrollArrow />
    <Footer />
    </Router>
    </div>
  );
}

export default App;

