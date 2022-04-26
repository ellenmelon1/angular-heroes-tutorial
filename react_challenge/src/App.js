import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Carousel from './Components/Home/Carousel.js';
import Contact from './Components/Contact.js';
import About from './Components/About.js';
import Header from './Components/Header.js';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Carousel />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
