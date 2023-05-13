import React from 'react'

export default function Presence() {
  return (
    <section className="global-presence-block" data-aos="fade-up" data-aos-delay="400">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="header-block mob-mt-30">Our Global Presence</div>
                    <h2 className="text-center">Spanning across 5 Continents, One of the Largest in Asia</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <ul className="glance-list">
                        <li><i><img src="assets/images/homepage/icon-excellence.svg" alt="" /></i><div><span>25 Years</span><br /> of Excellence</div></li>
                        <li><i><img src="assets/images/homepage/icon-affiliates.svg" alt="" /></i><div><span>$600 Bn</span><br />AUM worldwide</div></li>
                        <li><i><img src="assets/images/homepage/icon-experts.svg" alt="" /></i><div><span>1.2 Crore </span><br />trades / day</div></li>
                    </ul>
                </div>
                <div className="col-lg-9">
                    <div className="map-block">
                        <img className="rupee-symbol" src="assets/images/homepage/global-network.svg" alt="Global Network" title="Our Global Network" />
                    </div>
                </div>
                <div className="col-lg-12 d-none">
                    <p className="t-c-txt text-right">*Sepical Administrative Region of the People&apos;s Republic of China</p>
                </div>
            </div>
        </div>
    </section>
  )
}
