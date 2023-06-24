import React from 'react'

export default function Technology() {
  return (
    <section className="technology-block mt-40" data-aos="fade-up" data-aos-delay="50">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="header-block">Our Technology</div>
                    <h2 className="text-center">Smart. Secure. Superfast.</h2>
                    <div className="col-md-8 offset-lg-2">
                        <p className="color-grey text-center">
                            Our super fast platforms can support thousands of orders per second, through millions of customers at the same time - Stability,
                            speed and security are combined for the perfect user experience.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8" data-aos="fade-up" data-aos-delay="50">
                    <div className="technology-illustration-block">
                        <a href="https://www.youtube.com/embed/BPuZWTYTA3U" className="img-btn-ytb video-btn" data-toggle="modal" data-src="https://www.youtube.com/embed/BPuZWTYTA3U" data-target="#videoModal" title="Trading & Investing App Tour Video">
                        <img className="technology-illustration" src="assets/images/homepage/technology-illustration.svg" alt="Online Trading Platform" title="Trading Platform" />
                        <img src="assets/images/expert-review/icon-video.svg" alt="" className="play-btn" />
                        </a>
                    </div>
                </div>
                <div className="col-lg-4" data-aos="fade-up" data-aos-delay="50">
                    <ul className="tech-list">                      
                        <li><img src="assets/images/icon-5_min.svg" /> 5 Minutes onboarding<sup>**</sup></li>
                        <li><img src="assets/images/icon-supereasy.svg" /> Super easy platform</li>
                        <li><img src="assets/images/icon-features.svg" /> Packed with features</li>
                    </ul>
                    <a href='trading-technologies-tools.html' className="btn btn-secondary git mob-mt-30 m-auto">Tell me more</a>
                </div>
            </div>
        </div>
    </section>
  )
}
