import React from 'react'
import Breadcrumb from './partials/Breadcrumb'
import WhoWeAre from './partials/WhoWeAre'
import Philosophy from './partials/Philosophy'
import Values from './partials/Values'
import Brokerage from './partials/Brokerage'
import History from './partials/History'
import Founder from './partials/Founder'
import Expansion from './partials/Expansion'

export default function About() {
  return (
    <main>
        <div className="container-fuid body-content">
            <Breadcrumb />
            <main className="about-us-page">
                <WhoWeAre />
                <Philosophy />
                <Values />
                <Brokerage />
                <History />
                <Founder />
                <Expansion />
            </main>
        </div>
    </main>
  )
}
