import React from 'react'

import Banner from './partials/Banner';
import Products from './partials/Products';
import Pricing from './partials/Pricing';
import Technology from './partials/Technology';
import Presence from './partials/Presence';
import Champion from './partials/Champion';
import Refer from './partials/Refer';
import Testimonials from './partials/Testimonials';
import BrokerageCalculator from './partials/BrokerageCalculator';

export default function Home() {
  return (
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
        </main>
  )
}
