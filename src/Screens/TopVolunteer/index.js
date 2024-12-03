import "./index.css";

import AOS from "aos";
import Layout from "../../components/layout";

import React, { useState, useEffect } from "react";

import HeroSection from "../../components/herosection";

import Sponsor from "../../components/sponsor";
import ourworkbg from "../../Assets/images/ourworkbg.png";
import partnerunderline from "../../Assets/images/programunderline.svg";

import Volunteerman1 from "../../Assets/images/Volunteerman1.png";
function TopVolunteer() {
  useEffect(() => {
    AOS.init();
  }, []);
  const volunteers = [
    {
      animation: "fade-right",
      name: "Oğuz Yağız Kara",
      description:
        "Is your manuscript collecting more dust than a haunted house? Don’t let your book become a ghost of an idea!",
      imgSrc: Volunteerman1,
    },

    {
      animation: "fade-left",
      name: "Oğuz Yağız Kara",
      description:
        "Is your manuscript collecting more dust than a haunted house? Don’t let your book become a ghost of an idea!",
      imgSrc: Volunteerman1,
    },

    {
      animation: "fade-right",
      name: "Oğuz Yağız Kara",
      description:
        "Is your manuscript collecting more dust than a haunted house? Don’t let your book become a ghost of an idea!",
      imgSrc: Volunteerman1,
    },
    {
      animation: "fade-left",
      name: "Oğuz Yağız Kara",
      description:
        "Is your manuscript collecting more dust than a haunted house? Don’t let your book become a ghost of an idea!",
      imgSrc: Volunteerman1,
    },

    {
      animation: "fade-right",
      name: "Oğuz Yağız Kara",
      description:
        "Is your manuscript collecting more dust than a haunted house? Don’t let your book become a ghost of an idea!",
      imgSrc: Volunteerman1,
    },

    {
      animation: "fade-left",
      name: "Oğuz Yağız Kara",
      description:
        "Is your manuscript collecting more dust than a haunted house? Don’t let your book become a ghost of an idea!",
      imgSrc: Volunteerman1,
    },

    {
      animation: "fade-right",
      name: "Oğuz Yağız Kara",
      description:
        "Is your manuscript collecting more dust than a haunted house? Don’t let your book become a ghost of an idea!",
      imgSrc: Volunteerman1,
    },

    {
      animation: "fade-left",
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
          heroimg={ourworkbg}
          pagetitle="Top"
          pagename="  Top Volunteer"
          title2="  Volunteer"
          programprojectsubttle="programprojectsubttle"
          programpojectaboutherounderline="houseprogramunderline"
        />

        <section className="Volunteerinfo   ">
          <div className="Volunteerinfosecbg  py-5">
            <div className="container">
              <div className="   row">
                <div
                  className="col-md-6"
                  data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <h2 className="title">
                    Make A{" "}
                    <span className="position-relative">
                      {" "}
                      Difference{" "}
                      <img
                        src={partnerunderline}
                        className="houseprogramunderline"
                      />{" "}
                    </span>
                    Today
                  </h2>
                </div>
                <div
                  className="col-md-6"
                  data-aos="fade-left"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <p className="info-text text-start">
                    Volunteers are the heart of HIS-OC, helping families rebuild
                    their lives with hope and dignity. Whether it’s providing
                    meals, organizing events, mentoring, or offering your
                    skills, every effort counts.
                  </p>

                  <button className="volunteerbtn">Volunteer Now!</button>
                </div>
              </div>
            </div>
          </div>
          <div className="volunteers">
            <div className="container py-4">
              <div className="row d-flex  gap-4">
                {volunteers.map((volunteer, index) => (
                  <div
                    className="col-lg-5 col-md-12   mb-4  "
                    key={index}
                    data-aos={volunteer?.animation}
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    <div
                      className={`card card-${
                        index % 2 === 0 ? "blue" : "purple"
                      }`}
                    >
                      <div className="row no-gutters">
                        <div className="col-3">
                          <img
                            src={volunteer.imgSrc}
                            className="card-img img-fluid"
                            alt={volunteer.name}
                          />
                        </div>
                        <div className="col-9">
                          <div className="card-body">
                            <h5 className="card-title">{volunteer.name}</h5>
                            <div className="dividervol"></div>
                            <p className="card-text">{volunteer.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Sponsor />
      </Layout>
    </>
  );
}

export default TopVolunteer;
