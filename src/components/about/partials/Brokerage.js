import React from 'react'

export default function Brokerage() {
  return (
    <section className="about-video-block">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-12">
                    <div className="video-block-txt">
                        <span>
                            <b className="orange-txt">m.</b>Stock by Mirae Asset presents
                            <br />
                            <small className="orange-txt">Lifetime &#8377;0 Brokerage</small>
                        </span>
                        <p>
                            A Biggest ever revolution in trading and investment industry, that offers lifetime <b className="orange-txt">Zero Brokerage</b> @ one-time fee of &#8377;999 across all products

                        </p>
                    </div>
                </div>
                 <div className="col-md-6 col-12">
                    <div className="about-video-block-right">
                        <a href="https://www.youtube.com/embed/jOMa3mCfQaw" data-toggle="modal" data-src="https://www.youtube.com/embed/jOMa3mCfQaw" data-target="#videoModal" className="video-btn">
                            <img src="assets/images/about-us/m-Stock-by-Mirae-Asset-presents.jpg" alt="" />
                            <img src="assets/images/expert-review/icon-video-orange.svg" alt="" className="play-btn" />
                        </a>
                    
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
