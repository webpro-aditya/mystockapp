import React from 'react'

export default function WhoWeAre() {
  return (
    <section className="about-banner-block">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <h1>Who We Are</h1>
                <div className="wwa">
                    <img className="icon-quotes" src="assets/images/icon-quotes.svg" />
                    <p className="para-txt">We want our company to display a unique and forward-looking philosophy that provides solutions for all of our stakeholders.</p>
                    <div className="name">Hyeon-Joo Park,</div>
                    <div className="designation">Founder and GISO of Mirae Asset Financial Group</div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="about-banner-img">
                    
                    <a href="https://www.youtube.com/embed/qeshPbt0-as" data-toggle="modal" data-src="https://www.youtube.com/embed/qeshPbt0-as" data-target="#videoModal" className="video-btn">
                        <img src="assets/images/about-us/who-we-are-about-video.jpg" />
                        <img src="assets/images/expert-review/icon-video-orange.svg" alt="" className="play-btn" />
                    </a>
                </div>
                
                <ul className="cash-block">
                    <li>
                        <div className="">Total Assets</div>
                        <p>117.6</p>
                        <span>Billion USD</span>
                    </li>
                    <li>
                        <div>Equity Capital</div>
                        <p>12.2</p>
                        <span>Billion USD</span>
                    </li>
                    <li>
                        <div>Total Client Assets</div>
                        <p>482</p>
                        <span>Billion USD</span>
                    </li>
                </ul>
                <small className="small-txt"> As of September, 2022</small>
            </div>
        </div>
    </div>
</section>
  )
}
