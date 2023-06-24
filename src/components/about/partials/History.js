import React from 'react'

export default function History() {
  return (
    <section className="milestone-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="header-block">Our History</div>
                                <h3 className="">Major <br />Milestones</h3>
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-3 col-lg-2 about-milst-tab">
                                        <div className="nav flex-column nav-pills about-milst-tab0 vertical-scroll-bar" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                            <a className="nav-link active" id="v-pills-2021-tab" data-toggle="pill" href="#v-pills-2021" role="tab" aria-controls="v-pills-2021" aria-selected="true">
                                                2021
                                            </a>
                                            <a className="nav-link" id="v-pills-2020-tab" data-toggle="pill" href="#v-pills-2020" role="tab" aria-controls="v-pills-2020" aria-selected="false">
                                                2020
                                            </a>
                                            <a className="nav-link" id="v-pills-2019-tab" data-toggle="pill" href="#v-pills-2019" role="tab" aria-controls="v-pills-2019" aria-selected="false">
                                                2019
                                            </a>
                                            <a className="nav-link" id="v-pills-2018-tab" data-toggle="pill" href="#v-pills-2018" role="tab" aria-controls="v-pills-2018" aria-selected="false">
                                                2018
                                            </a>
                                            <a className="nav-link" id="v-pills-2017-tab" data-toggle="pill" href="#v-pills-2017" role="tab" aria-controls="v-pills-2017" aria-selected="false">
                                                2017
                                            </a>
                                            <a className="nav-link" id="v-pills-2016-tab" data-toggle="pill" href="#v-pills-2016" role="tab" aria-controls="v-pills-2016" aria-selected="false">
                                                2016
                                            </a>
                                            

                                        </div>
                                    </div>
                                    <div className="col-9 col-lg-9">
                                        <div className="tab-content" id="v-pills-tabContent">
                                            <div className="tab-pane fade show active tab-cont-about" id="v-pills-2021" role="tabpanel" aria-labelledby="v-pills-2021-tab">
                                                <div className="year">2021</div>
                                                <div className="content-block">
                                                    <div className="date">May 2021</div>
                                                    <p className="">Exceeded 20 trillion won in pension assets and retail global equity balance</p>
                                                </div>
                                                <div className="content-block">
                                                    <div className="date">March 2021</div>
                                                    <p className="">Renamed as Mirae Asset Securities</p>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade tab-cont-about" id="v-pills-2020" role="tabpanel" aria-labelledby="v-pills-2020-tab">
                                                <div className="year">2020</div>
                                                <div className="content-block">
                                                    <div className="date">November 2020</div>
                                                    <p>Listed in Dow Jones Sustainability World Index for 9 consecutive years</p>
                                                </div>
                                                <div className="content-block">
                                                    <div className="date">January 2020</div>
                                                    <p className="">Strategically invested KRW 680 billion in Naver Financial</p>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade tab-cont-about" id="v-pills-2019" role="tabpanel" aria-labelledby="v-pills-2019-tab">
                                                <div className="year">2019</div>
                                                <div className="content-block">
                                                    <div className="date">December 2019</div>
                                                    <p>Received presidential award at Corporate Innovation Awards</p>
                                                </div>
                                                
                                            </div>
                                            <div className="tab-pane fade tab-cont-about" id="v-pills-2018" role="tabpanel" aria-labelledby="v-pills-2018-tab">
                                                <div className="year">2018</div>
                                                <div className="content-block">
                                                    <div className="date">November 2018</div>
                                                    <p>Issued USD-denominated bond (USD 300million)</p>
                                                </div>
                                                
                                            </div>
                                            <div className="tab-pane fade tab-cont-about" id="v-pills-2017" role="tabpanel" aria-labelledby="v-pills-2017-tab">
                                                <div className="year">2017</div>
                                                <div className="content-block">
                                                    <div className="date">November 2017</div>
                                                    <p>Selected as a Mega-sized Investment Bank by the Financial Services Commission</p>
                                                </div>
                                                <div className="content-block">
                                                    <div className="date">October 2017</div>
                                                    <p className="">Established Mirae Asset Capital Markets (INDIA) Private Limited</p>
                                                </div>
                                                <div className="content-block">
                                                    <div className="date">July 2017</div>
                                                    <p className="">Entered into a Memorandum of Understanding with NAVER forming a strategic business alliance</p>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade tab-cont-about" id="v-pills-2016" role="tabpanel" aria-labelledby="v-pills-2016-tab">
                                                <div className="year">2016</div>
                                                <div className="content-block">
                                                    <div className="date">December 2016</div>
                                                    <p>Launch of merged Mirae Asset Daewoo</p>
                                                </div>
                                                
                                            </div>
                                            <div className="tab-pane fade tab-cont-about" id="v-pills-2015" role="tabpanel" aria-labelledby="v-pills-2015-tab">
                                                <div className="year">2015</div>
                                                <div className="content-block">
                                                    <div className="date">May 2015</div>
                                                    <ul>
                                                        <li>Selected as the preferred bidder for the sale of Daewoo Securities</li>
                                                    </ul>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 text-center">
                                        <button className="btn btn-primary" data-toggle="modal" data-target="#myModalMilestone">
                                            View all History
                                        </button>
                                    </div>
                                </div>
                                <div className="milestone-timeline d-none">
                                    <div className="vertical-navigtion">
                                        <ul className="navigation-dots no-list">
                                            <li><a className="active" href="#milestone1">2021</a></li>
                                            <li><a href="#milestone2">2020</a></li>
                                            <li><a href="#milestone3">2019</a></li>
                                            <li><a href="#milestone4">2018</a></li>
                                            <li><a href="#milestone5">2017</a></li>
                                            <li><a href="#milestone6">2016</a></li>
                                            <li><a href="#milestone7">2015</a></li>
                                        </ul>
                                    </div>
                                    <div className="milestone-content-block">
                                        <div className="mm-block cd-section" id="milestone1">

                                        </div>
                                        <div className="mm-block cd-section" id="milestone2">

                                        </div>
                                        <div className="mm-block cd-section" id="milestone3">

                                        </div>
                                        <div className="mm-block cd-section" id="milestone4">

                                        </div>
                                        <div className="mm-block cd-section" id="milestone5">

                                        </div>
                                        <div className="mm-block cd-section" id="milestone6">

                                        </div>
                                        <div className="mm-block cd-section" id="milestone7">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
  )
}
