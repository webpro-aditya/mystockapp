import logo from './logo.svg';
import './App.css';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Banner from './components/home/Banner';
import Products from './components/home/Products';
import Pricing from './components/home/Pricing';
import Technology from './components/home/Technology';
import Presence from './components/home/Presence';
import Champion from './components/home/Champion';
import Refer from './components/home/Refer';
import Testimonials from './components/home/Testimonials';
import BrokerageCalculator from './components/home/BrokerageCalculator';

function App() {
  return (
    <>
      <Nav />
      <main>
        <div class="container-fuid body-content"></div>
        <main class="homepage banner6tp">
            <Banner />
            <Products />
            <Pricing />
            <Technology />
            <Presence />
            <Champion />
            <Refer />
            <Testimonials />
        </main>
        <Footer />
      </main>
    </>
  );
}

export default App;
