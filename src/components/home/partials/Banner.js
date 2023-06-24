import React from 'react'

export default function Banner() {
  return (
    <section className="home-page-banner-mtf-6-99-v2 home-mtf-banner-699-txt-bg-v2">
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-md-12 col-12">
                    <div className="home-mtf-banner-699-img">
                        <img src="assets/images/homepage/home-page-mtg-6-99-v2.png" alt="banner images"/>
                    </div>
                </div>
                <div className="col-lg-7 col-md-12 col-12">
                    <div className="home-mtf-banner-699-txt-v2">
                        <h3><b>Zero brokerage</b> for life across</h3>
                            <ul>
                                <li>Options</li>
                                <li>Intraday</li>
                                <li>Futures</li>
                                <li>Delivery</li>
                                <li>Currency</li>
                            </ul>
                            <br />
                        <div className="mtf-6-99bold">
                            MTF (eMargin) @<b> 6.99%<sup className="homeup-bnmar">^</sup></b>
                        </div>
                        <div className="mstock-turn-block-ul">
                            <ul>
                                <li>
                                    <div className="mstock-turned-txt">
                                        m.Stock
                                        turned
                                    </div>
                                    <span>
                                        1
                                    </span>
                                </li>
                                <li>
                                    2.2 Lakh+ <small>paid accounts</small>
                                </li>
                                <li>
                                    10 Crore+ <small>trades</small>
                                </li>
                                <li>
                                    ₹215 Crore+ <small>MTF book</small>
                                </li>
                            </ul>
                        </div>
                        <div className="home-get-call-block">
                            <h1 className="seo-h1-p-txt">Online Trading with ZERO Brokerage</h1>
                            <form id="GetStartedForm" name="GetStartedForm" action="#" method="POST" className="form-get-started">
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">+91</span>
                                        </div>
                                        <input id="Source" name="Source" type="hidden" value="Direct" />
                                        <input id="SourceMedium" name="SourceMedium" type="hidden" value="Website" />
                                        <input id="SourceCampaign" name="SourceCampaign" type="hidden" value="" />
                                        <input id="mx_Utm_Adgroup" name="mx_Utm_Adgroup" type="hidden" value="" />
                                        <input id="SourceContent" name="SourceContent" type="hidden" value="" />
                                        <input id="mx_Utm_Creative" name="mx_Utm_Creative" type="hidden" value="" />
                                        <input id="mx_Utm_Device" name="mx_Utm_Device" type="hidden" value="" />
                                        <input id="utm_term" name="utm_term" type="hidden" value="" />
                                        <input id="URL" name="URL" type="hidden" value="index.html" />
                                        <input id="txtMobileNo" type="text" name="MobileNumber" onkeyup="fnSetFoucusToNextCtrl(this, 'GetStarted');" title="Enter only Numbers" maxlength="10" className="form-control mob-no-input" placeholder="Enter your mobile number" aria-label="Username" aria-describedby="basic-addon1" required />
                                        <input type="button" value="Get Started" id="GetStarted" className="btn btn-primary start-free" />
                                    </div>
                                </div>
                            </form>

                            <div className="cta-input-block cta-tab-home">
                                <input type="checkbox" checked className="form-check-input" id="CTAPP" />
                                <label htmlFor="CTAPP">
                                    I have read & understood the
                                </label>
                                <a href="ss" data-toggle="modal" data-target="#myModalCTAPP">T&C and privacy policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
