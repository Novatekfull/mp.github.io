import { Home } from './Screens/Home';
import { Services } from './Screens/Services';
import { Contact } from './Screens/Contact';
import { Portfolio } from './Screens/Portfolio';
import './App.css';
import {Routes, Route, } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
