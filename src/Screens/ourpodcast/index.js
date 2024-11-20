import "./index.css";

import Layout from "../../components/layout";

import React, { useState } from "react";

import HeroSection from "../../components/herosection";

import Sponsor from "../../components/sponsor";
import ourworkbg from "../../Assets/images/ourworkbg.png";
import partnerunderline from "../../Assets/images/programunderline.svg";

import Volunteerman1 from "../../Assets/images/Volunteerman1.png";
import ourpodcastbg from "../../Assets/images/ourpodcastbg.png";

import podcastimg1 from "../../Assets/images/podcastimg1.png";
import podcastimg2 from "../../Assets/images/podcastimg2.png";
import podcastimg3 from "../../Assets/images/podcastimg3.png";
import Ourpodcasts from "../../components/ourpodcast";
function Ourpodcast() {
  const volunteers = [
    {
      name: "Oğuz Yağız Kara",
      description:
        "Is your manuscript collecting more dust than a haunted house? Don’t let your book become a ghost of an idea!",
      imgSrc: Volunteerman1,
    },

    {
      name: "Oğuz Yağız Kara",
      description:
        "Is your manuscript collecting more dust than a haunted house? Don’t let your book become a ghost of an idea!",
      imgSrc: Volunteerman1,
    },

    {
      name: "Oğuz Yağız Kara",
      description:
        "Is your manuscript collecting more dust than a haunted house? Don’t let your book become a ghost of an idea!",
      imgSrc: Volunteerman1,
    },
  ];

  return (
    <>
      <Layout>
        <HeroSection
          heroimg={ourpodcastbg}
          pagetitle="Our  "
          pagename="  Our Podcast"
          title2="    Podcast"
          programprojectsubttle="programprojectsubttle"
          programpojectaboutherounderline="programpojectaboutherounderline"
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

    <Ourpodcasts/>
        </section>

        <Sponsor />
      </Layout>
    </>
  );
}

export default Ourpodcast;
