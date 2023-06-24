import React from 'react'

export default function Founder() {
  return (
    <section className="founder-block">
    <div className="container">
        <div className="row d-flex flex-row-reverse">
            <div className="col-lg-5">
                <div className="info-div">
                    <div className="name">Hyeon Joo Park</div>
                    <div className="designation">Founder & GISO<span>(Global Investment Strategy Officer)</span></div>
                    <p className="">
                        Hyeon Joo Park is the founder and Global Investment Strategy
                        Officer (GISO) of the Mirae Asset Financial Group. His leadership
                        and entrepreneurial spirit has been the driving force behind the
                        global rise of Mirae Asset, where he has spearheaded continuous
                        change as a permanent innovator.
                        <br /><br />
                        Hyeon Joo Park has focused on the role of GISO since 2018,
                        embarking on a mission to grow and evolve Mirae Asset&apos;s global
                        platform. His transition to GISO ushered in an institutionalized
                        management model, the engine of the group&apos;s success worldwide.
                        This model equips Mirae Asset&apos;s teams around the world with the
                        leadership that fulfills the founder&apos;s spirit of entrepreneurship
                    </p>
                    <a href="#" className="btn btn-primary" data-toggle="modal" data-target="#myModalHyeonJooPark">Know More</a>
                </div>
            </div>
            <div className="col-lg-7">
                <div className="founder-img-block">
                    <img className="founder-img" src="assets/images/about-us/hyeon.png" alt="Hyeon Joo Park - Founder & Giso" title="Hyeon Joo Park - Founder & GISO ((Global Investment Strategy Officer)" />
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
