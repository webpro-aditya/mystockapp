import React from 'react'

export default function BrokerageCalculator() {
  return (
    <section class="d-none" data-aos="fade-up" data-aos-delay="50">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="header-block mob-mt-30">Brokerage Calculator</div>
                    <h3 class="text-center">Calculate and Compare Your Savings</h3>
                </div>
            </div>
            <div class="row mt-30">
                <div class="col-lg-8 ">
                    <div class="calc-block border">
                        <div class="trade-name">
                            Equity 
                            <a href="#"><img src="Content/images/icon-delete.svg" /></a>
                        </div>
                        <div class="brokerage-block-name">
                            <span>Brokerage Type</span>
                            <div class="broker-block-inp border-0">
                                <div class="flat-percentage-block">
                                    <form id="mradioFormBrokType" name="mradioFormBrokType">
                                                <input type="radio" id="Flat" name="rads_flate_perc" checked value="Flat" />
                                                    <label for="Flat">Flat</label>
                                                <input type="radio" id="Percentage" name="rads_flate_perc" value="Percentage" />
                                                <label for="Percentage">Percentage</label>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="brokerage-block-name">
                            <span>Brokerage Per Order</span>
                            <div class="broker-block-inp">
                                <div class="select-name">
                                    <span id="resultBrokPerOrder">10</span>
                                </div>
                                <div class="per-order-block">
                                    <form id="mradioFormBrokPerOrder" name="mradioFormBrokPerOrder">
                                        <input type="radio" id="No10" name="rads_PerOrder" checked value="10" />
                                        <label for="No10">10</label>
                                        <input type="radio" id="No20" name="rads_PerOrder" value="20" />
                                        <label for="No20">20</label>
                                        <input type="radio" id="No30" name="rads_PerOrder" value="30" />
                                        <label for="No30">30</label>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="brokerage-block-name">
                            <span>No. of Orders <small>(Daily)</small> </span>
                            <div class="broker-block-inp">
                                <input type="text" class="form-control order-no-inp" placeholder="50" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <hr class="mt-20 mb-20" />
                    </div>
                    <div class="calc-block border">
                        <div class="trade-name">
                            Equity 
                            <a href="#"><img src="Content/images/icon-delete.svg" /></a>
                        </div>
                        <div class="brokerage-block-name">
                            <span>Brokerage Type</span>
                            <div class="broker-block-inp border-0">            
                                <div class="flat-percentage-block">
                                    <form id="mradioFormBrokTypeOption" name="mradioFormBrokTypeOption">
                                        <input type="radio" id="FlatOption" name="rads_flate_percOption" checked value="Flat" />
                                        <label for="FlatOption">Flat</label>
                                        <input type="radio" id="PercentageOption" name="rads_flate_percOption" value="Percentage" />
                                        <label for="PercentageOption">Percentage</label>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="brokerage-block-name">
                            <span>Brokerage Per Order</span>
                            <div class="broker-block-inp">
                                <div class="select-name">
                                    <span id="resultBrokPerOrderOption">10</span>
                                </div>
                                <div class="per-order-block">
                                    <form id="mradioFormBrokPerOrderOption" name="mradioFormBrokPerOrderOption">
                                        <input type="radio" id="No10Option" name="rads_PerOrderOption" checked value="10" />
                                        <label for="No10Option">10</label>
                                        <input type="radio" id="No20Option" name="rads_PerOrderOption" value="20" />
                                        <label for="No20Option">20</label>
                                        <input type="radio" id="No30Option" name="rads_PerOrderOption" value="30" />
                                        <label for="No30Option">30</label>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="brokerage-block-name">
                            <span>No. of Orders <small>(Daily)</small> </span>
                            <div class="broker-block-inp">
                                <input type="text" class="form-control order-no-inp" placeholder="50" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 text-center">
                        <button type="button" class="btn add-btn">+ Add Intraday </button>
                        <button type="button" class="btn add-btn">+ Add Futures</button>
                        <button type="button" class="btn add-btn">+ Add Option</button>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="calc-right-section">
                        You Save <br />
                        &#8377; 2,000 <br />
                        on Brokerage Annually
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
