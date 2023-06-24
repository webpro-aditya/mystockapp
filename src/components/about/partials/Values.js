import React from 'react'

export default function Values() {
  return (
    <section className="core-value-block">
    <div className="container">
        <div className="row">
            <div className="col-lg-4">
                <div className="cv-title-div">
                    <div className="no">4</div>
                    <div className="hdr">Core<br />Values</div>
                </div>
                <p className="">The key decision-making criteria for all Mirae Asset employees.</p>
            </div>
            <div className="col-lg-4">
                <div className="cv-block">
                    <img className="cv-icon" src="assets/images/icon-client-first.svg" />
                    <div className="title">Clients First</div>
                    <p className="desc">
                        Our clients&apos; success is paramount - their success is our success. We build and nurture long-term relationships with our clients by using our proven investment strategies.
                    </p>
                </div>
                <div className="cv-block">
                    <img className="cv-icon" src="assets/images/icon-objectivity.svg" />
                    <div className="title">Objectivity</div>
                    <p className="desc">
                        We assess every investment opportunity objectively and with total impartiality. Our independence sets us apart and helps ensure that our decisions are aligned with the needs of our clients.
                    </p>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="cv-block">
                    <img className="cv-icon" src="assets/images/icon-teamwork.svg" />
                    <div className="title">Teamwork</div>
                    <p className="desc">
                        Mirae Asset&apos;s success is built on respect for each individual. It is our aim to create a true meritocracy in which talent and achievement are rewarded and opportunity is equally available to all.
                    </p>
                </div>
                <div className="cv-block">
                    <img className="cv-icon" src="assets/images/icon-citizenship.svg" />
                    <div className="title">Citizenship</div>
                    <p className="desc">
                        At <a href='#' title="Mirae Asset responsibilities">Mirae Asset</a>, we are profoundly aware of our responsibilities. As a good corporate citizen, we aim to give back to the communities in which we live and actively support and participate in a range of initiatives within them.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
