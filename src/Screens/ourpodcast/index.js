import "./index.css";

import Layout from "../../components/layout";

import React, { useState } from "react";

import HeroSection from "../../components/herosection";

import Sponsor from "../../components/sponsor";

import partnerunderline from "../../Assets/images/programunderline.svg";

import ourpodcastbg from "../../Assets/images/ourpodcastbg.png";

import Ourpodcasts from "../../components/ourpodcast";
function Ourpodcast() {
  return (
    <>
      <Layout>
        <HeroSection
          heroimg={ourpodcastbg}
          pagetitle="Our  "
          pagename="  Our Podcast"
          title2="    Podcast"
          programprojectsubttle="programprojectsubttle"
          programpojectaboutherounderline="ourpodcastrounderline"
        />

        <section className="Ourpodcast   ">
          <div className="Volunteerinfosecbg  py-5">
            <div className="container">
              <div className="   row">
                <div className="col-md-6">
                  <h2 className="title">
                    Stories Of{" "}
                    <span className="position-relative">
                      {" "}
                      Resilience{" "}
                      <img
                        src={partnerunderline}
                        className="houseprogramunderline"
                      />{" "}
                    </span>
                  </h2>
                </div>
                <div className="col-md-6">
                  <p className="info-text text-start">
                    Step into the world of HIS-OC with our podcast, where real
                    stories of hope and transformation come to life. Each
                    episode highlights the journeys of families overcoming
                    homelessness, the dedication of our volunteers, and the
                    impact of our community partnerships.
                  </p>

                  <button className="volunteerbtn">Tune In Now!</button>
                </div>
              </div>
            </div>
          </div>

          <Ourpodcasts />
        </section>

        <Sponsor />
      </Layout>
    </>
  );
}

export default Ourpodcast;
