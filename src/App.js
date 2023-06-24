import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/home/Home'
import About from './components/about/About'
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
