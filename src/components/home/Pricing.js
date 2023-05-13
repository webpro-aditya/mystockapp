import React from 'react'

export default function Pricing() {
  return (
    <section className="zerobrkr-newbar">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="zerodivbar" data-aos="fade-up" data-aos-delay="50">
                        <div className="leftzero-img">
                            <img className="rupee-symbol" src="assets/images/icon-rupee.svg" alt="" />
                            <img className="zero-brokerage" src="assets/images/homepage/zero-brokerage.svg" alt="Zero Brokerage" title="Zero Brokerage Trading" />
                        </div>
                        <div className="rightzerobar-n">
                            <div className="header-block">Pricing</div>
                            <h2 className="text-left">
                                    <span className="color-orange">Zero brokerage </span> & No hidden charges for life
                            </h2>
                            <p>
                                    <span className="orange-txt">Free</span> Intraday <u>|</u> <span className="orange-txt">Free</span> Delivery <u>|</u> <span className="orange-txt">Free</span> F&O <u>|</u> <span className="orange-txt">Free</span> Currency trading <u>|</u> <span className="orange-txt">Free</span> Mutual Funds <u>|</u> <span className="orange-txt">Free</span> IPOs <u>|</u> <span className="orange-txt">Free</span> eMargin Facility 
                            </p>
                            <p>
                                    <span className="orange-txt font-weight-bold"> NO </span> order limit <br />
                                    <span className="orange-txt font-weight-bold"> NO </span> expiry restrictions<br />
                                    <span className="orange-txt font-weight-bold"> NO </span> subscription <br />
                            </p>
                            <div className="text-left banner-block">
                                    <h3 className="cta-txt-1 mob-cta-marg">What's the catch? There is <span className="orange-txt">NO Catch! It’s all zero for life!</span> </h3>
                                    <form id="GetStartedForm2" name="GetStartedForm" action="#" method="POST" className="form-get-started">
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
                                                <input id="txtMobileNo2" type="text" name="MobileNumber" title="Enter only Numbers" onkeyup="fnSetFoucusToNextCtrl(this, 'GetStarted2');" maxlength="10" className="form-control mob-no-input" placeholder="Enter your mobile number" aria-label="Username" aria-describedby="basic-addon1" required />
                                                <input type="button" value="Get Started" id="GetStarted2" className="btn btn-primary start-free" />
                                            </div>
                                        </div>
                                    </form>
                                    <div className="cta-input-block cta-tab-home0">
                                        <input type="checkbox" checked className="form-check-input" id="CTAPPzero" />
                                        <label htmlFor="CTAPPzero">
                                            I have read & understood the
                                        </label>
                                        <a href="ss" data-toggle="modal" data-target="#myModalCTAPP">T&C and privacy policy</a>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="dyknow-newbar" data-aos="fade-up" data-aos-delay="50">
                            <p className="newin-textbor0">
                                <span className="orange-txt">&#8377; 48,000</span> brokerage a year OR <span className="orange-txt">&#8377; 0</span> brokerage for life? Choose wisely
                                        <br />
                                <small>Assuming 5 delivery trades @&#8377;20 per trade and 20 trading days in a month. </small>
                            </p>
                            <a href='brokerage-calculator.html'>Calculate Now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
