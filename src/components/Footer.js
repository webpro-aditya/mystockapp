import React from 'react'

export default function Footer() {
  return (
<footer className="common-footer">
    <div className="container">
        <div className="row footer-mid-block">
                <div className="col-lg-12 d-flex0 ">
                    <div className="footerbor-bolink">
                        <ul className="footer-link-list" data-aos="fade-up" data-aos-delay="400">
                            <li><a className="footer-head" href='investment-products.html'>Products</a></li>
                            <li><a href='ipo.html' className="">IPO</a></li>
                            <li><a href='equity-trading.html' className="">Stocks</a></li>
                            <li><a href='currency-trading.html' className="">Currency</a></li>
                            <li><a href='futures-and-options-trading.html' className="">Futures & Options</a></li>
                            <li><a href='mutual-fund-investments.html' className="">Mutual Funds <small className="orange-txt">Coming Soon</small></a></li>
                            <li><a href='margin-trading-facility.html'>Margin Trading Facility (eMargin)</a></li>
                        </ul>
                        <ul className="footer-link-list midfooter" data-aos="fade-up" data-aos-delay="600">
                            <li>Mirae Asset</li>
                            <li><a href='about-us.html' className="">About Us</a></li>
                            <li><a href='pricing.html' className="">Pricing</a></li>
                            <li><a href='contact-us.html' className="">Contact Us</a></li>
                            <li><a href='refer-and-earn.html' className="">Refer and Earn</a></li>
                            <li><a href='articles.html' className="">Knowledge Center</a></li>
                            <li><a href='media-and-press-release.html'>Media & Press Release</a></li>
                        </ul>
                        <ul className="footer-link-list" data-aos="fade-up" data-aos-delay="800">
                            <li>Quick Links</li>
                            <li><a href='faqs.html' className="">FAQs</a></li>
                            <li><a href='investment-glossary.html' className="">Glossary</a></li>
                            <li><a href='margin-trading-facility/emargin-stock-lists.html'>MTF Stock Lists</a></li>
                            <li><a href='customer-testimonials.html' className="">Customers Speak</a></li>
                            <li><a href='videos.html'>Stock Market Videos</a></li>
                            <li><a href='open-demat-account.html' className="">Open Demat Account</a></li>
                        </ul>
                        <ul className="footer-link-list" data-aos="fade-up" data-aos-delay="800">
                            <li><a className="footer-head" href="investment-calculators.html">Investment Calculators</a></li>
                            <li><a href='sip-calculator.html' className="">SIP Calculator</a></li>
                            <li><a href='margin-trading-facility/mtf-calculator.html' className="">MTF Calculator</a></li>
                            <li><a href='investment-calculators/cagr-calculator.html' className="">CAGR Calculator</a></li>
                            <li><a href='brokerage-calculator.html' className="">Brokerage Calculator</a></li>
                            <li><a href='lumpsum-calculator.html' className="">Lumpsum Calculator</a></li>
                        </ul>
                        <ul className="footer-link-list lastfolist-new" data-aos="fade-up" data-aos-delay="800">
                            <li>Our Platforms</li>
                            <li><a href="#" className="" onclick="OpenTrademStock();">Web Portal</a></li>
                            <li><a href="share-market-trading-app.html" className="">Share Market App</a></li>
                            <li><a href='trading-technologies-tools.html' className="">Our Technology</a></li>
                        </ul>
                    </div>
                    <div className="footer-get-touch-psg footernew-bot2">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 bord2righ-newfoo" data-aos="fade-up" data-aos-delay="50">
                                <a className="mirae-logo" href="#">
                                    <img className="mstock-logo" src="assets/images/mirae-logo.svg" alt="m.Stock by Mirae Asset" title="Online Trading - m.Stock by Mirae Asset" />
                                    <img className="miraefo-logo" src="assets/images/mirae-logo-cm.svg" alt="m.Stock by Mirae Asset" title="Online Trading - m.Stock by Mirae Asset" />
                                </a>
                            <div className="footer-social-media mt-3">
                                <ul>
                                    <li><a href="https://www.facebook.com/Mstockin-110086308312129" target="_blank"><img src="assets/images/social-media/facebook-icon.svg" /></a></li>
                                    <li><a href="https://www.instagram.com/mstock_in/" target="_blank"><img src="assets/images/social-media/instagram-icon.svg" /></a></li>
                                    <li><a href="https://www.linkedin.com/company/mirae-asset-capital-market-i-pvt-ltd" target="_blank"><img src="assets/images/social-media/linkedin-icon.svg" /></a></li>
                                    <li><a href="https://twitter.com/mstock_in" target="_blank"><img src="assets/images/social-media/twitter-icon.svg" /></a></li>
                                    <li><a href="https://www.youtube.com/channel/UCHEsTcIyyzyVVlNRxOj4UQg" target="_blank"><img src="assets/images/social-media/youtube_icon.svg" /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 bord2righ-newfoo pl-3">
                            <h3 className="color-blue">Get in Touch</h3>
                            <ul className="footer-link-list" style={{width: '100%'}}>
                                <li style={{display: 'inline-block'}}>
                                    <a href="tel:1800 210 0818" className="footer-head">1800 210 0818</a>
                                </li>
                                |
                                <li style={{display: 'inline-block'}}><a href="mailto:help@mstock.com" className="footer-head">help@mstock.com</a> </li>
                            </ul>
                            <div className="clearfix"></div>
                            <p className="color-blue">
                                Single contact point for all queries
                            </p>
                        </div>
                        <div className="col-lg-4 pl-3 vetmidd-textnew">
                            <div className="qrcodebarm-f">
                                <h3 className="color-blue">Download App</h3>
                                <div className="available-txt">   
                                    <a href="https://apps.apple.com/in/app/mirae-asset-india/id1577155974" target="_blank" className="app-btn ios-btn">
                                        <img className="" src="assets/images/ios-button-image.png" alt="Download m.Stock on App Store" title="Download Best Share Market App" />
                                    </a>
                                    <a href="https://play.google.com/store/apps/details?id=com.rs.mirae" target="_blank" className="app-btn playstore-btn">
                                        <img className=" " src="assets/images/playstore-button-image.png" alt="Download m.Stock in Google Play Store" title="Download Best Trading App" />
                                    </a>
                                </div>
                            </div>
                            <div className="qrcodeimg-f">
                                <img src="assets/images/App-Download-QRCode.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </div>
    <div className="bg-blue disclaimer-block">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="row addrelook-mob">       
                        <div className="col-lg-11 col-md-12 col-sm-12 color-white">
                            <div className="footebg-addr">
                                <p className="color-white">
                                    <b>Registered Office & Correspondence Address:</b>&nbsp;
                                    <br className="remmobilbr" />
                                    1st Floor, Tower 4,
                                    Equinox Business Park,
                                    LBS Marg, Off BKC, Kurla (W),
                                    Mumbai – 400 070&nbsp;&nbsp;&nbsp;<br className="remmobilbr" />
                                    <b>CIN Number :</b> U65990MH2017FTC300493
                                </p>
                            </div>
                        </div>                  
                    </div>
                    <br />
                    <div className="borkr-calulator">
                        <p className="color-white">
                            <span>Investments in securities market are subject to market risks. Read all the related documents carefully before investing. Brokerage will not exceed SEBI prescribed limits. Statutory Charges/Taxes would be levied as applicable.</span> <br />
                        </p>
                    </div>
                    <p className="color-white mt-2">
                        <b style={{fontWeight: 'normal', fontFamily: 'Open Sans Semi Bold', textTransform: 'capitalize'}}>Compliance Officer:</b> Mr. Himanshu Parekh (Stock Broking and DP Activities) Email - compliance.officer@mstock.com, Tel No: - 022-41887777
                    </p>
                    <p className="color-white mt-2">
                        Mirae Asset Capital Markets (India) Private Limited (“MACM”) offer its online retail stock broking  services under brand m.Stock
                        <br />
                        Registration Details: SEBI Stock Broker Registration No.: INZ000163138 – Membership in BSE – Cash Segment (Clearing Member ID: 6681), BSE Star MF Segment (Membership No : 53975) and in NSE – Cash, F&O and CD Segments (Member ID: 90144), Membership in MCX – (Member ID: 56980),  SEBI Merchant Banking Registration No.: MB/INM000012485, SEBI Research Analyst Registration No.: INH000007526, SEBI DP Registration No: IN-DP-589-2021, CDSL DP ID: 12092900, CIN: U65990MH2017FTC300493. AMFI Registered Mutual Funds Distributor: ARN-188742.Tele No: 18002100818.
                        In case of any grievances, please write to
                        <a href="mailto:help@mstock.com" className="">help@mstock.com</a>
                        <br />
                        *Special Administrative Region of the People&apos;s Republic of China
                        <br />
                        **Account would be opened after all procedure relating to IPV and client due diligence is completed.
                        <br />
                        ^MTF is subject to the provisions of SEBI Circular CIR/MRD/DP/54/2017 dated June 13, 2017 (as amended from time to time) and the terms and conditions mentioned in rights and obligations statement issued by MACM
                        <br />
                        ^^For &#8377;999 AMC plan, pledge creation & closure charges will be &#8377;25 per PSN per day (+GST) and for &#8377;480 AMC plan pledge creation & closure charges will be &#8377;32 per PSN per day (+GST)
                        <br />
                        <br />
                    </p>
                    <div className="footer-menu-block">
                        <ul>              
                            <li><a href='terms-of-use.html'>Terms of Use</a></li>
                            <li><a href='disclaimer.html'>Disclaimer</a></li>
                            <li><a href='privacy-policy.html'>Privacy Policy</a></li>
                            <li><a href='terms-and-conditions.html'>Terms & Conditions</a></li>
                            <li><a href='advisory-for-investors.html'>Advisory for Investors</a></li> 
                            <li><a href="assets/pdf/investor-charter.pdf" target="_blank">Investor Charter</a></li>
                            <li><a href='downloads.html'>Downloads</a></li>
                            <li><a href='share-market-holidays.html'>Holiday Calendar</a></li>
                        </ul>
                        <ul className="list2footer-l">
                            <li> <a href="https://www.bseindia.com/" target="_blank" rel="nofollow">BSE</a></li>
                            <li> <a href="https://www.nseindia.com/" target="_blank" rel="nofollow">NSE</a></li>
                            <li> <a href="https://www.sebi.gov.in/" target="_blank" rel="nofollow">SEBI</a></li>
                            <li> <a href="https://www.mcxindia.com/" target="_blank" rel="nofollow">MCX</a></li>
                            <li> <a href="https://www.cdslindia.com/" target="_blank" rel="nofollow">CDSL</a></li>
                            <li> <a href="https://fiuindia.gov.in/" target="_blank" rel="nofollow">FIU IND</a></li>
                            <li> <a className="hand-cursor-score color-fff" data-toggle="modal" data-target="#myModalComplaintOnSCORES">SCORES</a></li>
                            <li> <a href="https://play.google.com/store/apps/details?id=com.ionicframework.sebi236330&amp;hl=en_IN&amp;gl=US" target="_blank" rel="nofollow"> SCORES - Android</a></li>
                            <li><a href="https://apps.apple.com/in/app/sebiscores/id1493257302" target="_blank" rel="nofollow"> SCORES - iOS</a> </li>
                            <li><a href="https://www.evotingindia.com/homepage.jsp" target="_blank" rel="nofollow">E-voting by CDSL Depository</a> </li>
                            <li><a href='sitemap.html' className="">Sitemap</a></li>
                        </ul>
                    </div>
                    <div className="copyri-nefooter">
                        Built with ❤️ in India | Copyright © 2023
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
)
}
