import "./index.css";
import heropage2 from "../../Assets/images/heropage2.png";
import Layout from "../../components/layout";
import ourmission from "../../Assets/images/ourmission.png";
import missionunderline from "../../Assets/images/missionunderline.png";
import React, { useState, useEffect } from "react";
import aboutherounderline from "../../Assets/images/aboutherounderline.png";
import housedefaultimg from "../../Assets/images/housedefaultimg.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Leadership from "../../components/Leadership";
import houseprogramunderline from "../../Assets/images/houseprogramunderline.png";

import hopeunderline from "../../Assets/images/hopeunderline.png";
import HeroSection from "../../components/herosection";
import drivingchangecard1 from "../../Assets/images/drivingchangecard1.png";
import drivingchangecard2 from "../../Assets/images/drivingchangecard2.png";
import dedicationunderline from "../../Assets/images/dedicationunderline.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from "../../components/contact";
import Sponsor from "../../components/sponsor";
import houseimg from "../../Assets/images/houseimg.png";
import youth from "../../Assets/images/youth.png";
import Oc from "../../Assets/images/Oc.png";
import Closet from "../../Assets/images/closet.png";
import ourworkbg from "../../Assets/images/ourworkbg.png";
import BuildingFutures from "../../components/BuildingFutures";
import tradhousingprogramunderline from "../../Assets/images/tradhousingprogramunderline.svg";
// import { FaArrowRight } from "react-icons/fa";

import AOS from "aos";

function OurWork() {
  useEffect(() => {
    AOS.init();
  }, []);
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        type="button"
        className="slick-arrow slick-prev mb-2 "
        onClick={onClick}
      >
        <span className="arrow-icon">
          {" "}
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </span>
      </button>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        type="button"
        className="slick-arrow slick-next mb-2"
        onClick={onClick}
      >
        <span className="arrow-icon">
          {" "}
          <i class="fa fa-arrow-right" aria-hidden="true"></i>
        </span>
      </button>
    );
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1200, // Large screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992, // Medium screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const teamMembers = [
    {
      name: "Christine Stellino",
      title: "Executive Director",
      imgSrc: drivingchangecard1, // replace with actual image paths
    },
    {
      name: "Libby Shroeder",
      title: "Chairmen",
      imgSrc: drivingchangecard2,
    },
    {
      name: "Barbara Buckley",
      title: "Vice Chairmen",
      imgSrc: drivingchangecard1,
    },
    {
      name: "Julie Suchard",
      title: "Treasurer",
      imgSrc: drivingchangecard2,
    },
  ];

  const programs = [
    {
      title: "Transitional    ",
      title2: "Program",
      highlightedWords: "Housing",
      description: "Providing Shelter and Reunification for Families",
      imgSrc: houseimg,
    },
    {
      title: "Transitional Aged  ",
      title2: "Shelter",
      highlightedWords: "Youth",
      description: "Supporting Transitional Age Youth",

      imgSrc: youth,
    },
    {
      title: "Home Share  ",

      highlightedWords: "OC",
      description: "Helping College Students Transition",

      imgSrc: Oc,
    },
    {
      title: "Housing & Resource  ",

      description: "Guiding To Services And Support",
      highlightedWords: "Connection",
      imgSrc: Oc,
    },
    {
      title: "Charity’s Closet",
      description: "Our Trusted Partner",
      highlightedWords: " ",
      imgSrc: Closet,
    },
  ];
  const [hoveredProgram, setHoveredProgram] = useState(null);

  // modal give responsive code in react using react-bootstrap
  return (
    <>
      <Layout>
        <HeroSection
          heroimg={ourworkbg}
          pagetitle="Our"
          pagename="Our Work"
          title2="Work"
          programpojectaboutherounderline="houseprogramunderlineourwork"
          programprojectsubttle="givedonationsubtitle"
        />

        <section className="info-section d-flex justify-content-center align-items-center py-5">
          <div className="container">
            <p
              className="info-text text-start"
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-duration="1000"
            >
              We have multiple programs that assist people who are homeless or
              at risk of being homeless. Our shelters and supportive service
              programs provide assistance to our community’s most vulnerable
              population. HIS-OC does not and shall not discriminate on the
              basis of race, color, religion (creed), gender, gender expression,
              age, national origin (ancestry), disability, marital status,
              sexual orientation, or military status, in any of its activities
              or operations.
            </p>
          </div>
        </section>

        <section className="programs-section ">
          <div className="container my-5">
            <div className="row">
              {/* Program List Section */}
              <div
                className="programs-section-left mb-2 col-lg-6"
                data-aos="fade-right"
                data-aos-offset="0"
                data-aos-duration="1000"
              >
                <div className="bordertop mb-0">
                  {programs.map((program, index) => (
                    <div
                      key={index}
                      className={`program-item p-3   d-flex justify-content-between mb-0 align-items-center ${
                        program.highlighted ? "highlighted" : ""
                      }`}
                      onMouseEnter={() => setHoveredProgram(program)}
                      onMouseLeave={() => setHoveredProgram(null)}
                    >
                      <div>
                        <h5 className="mb-1">
                          {program?.title}
                          <span className="highlighted-word position-relative">
                            {program?.highlightedWords} {""}
                            <img
                              src={tradhousingprogramunderline}
                              className="programunderlines"
                            />
                          </span>
                          {program?.title2}
                        </h5>
                        <p className="mb-0 text-muted">{program.description}</p>
                      </div>
                      <div className="arrow-con">
                        <FontAwesomeIcon icon={faArrowRight} />
                      </div>
                    </div>
                  ))}
                </div>

                <div   data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="1000"
>
                  <h5 className="title font-bold">
                    Homless <span> Intervention </span> services Of Orange
                    Country{" "}
                    <span className=" position-relative">
                      ( HIS-OC){" "}
                      <img
                        src={houseprogramunderline}
                        className="houseprogramunderline"
                      />
                    </span>{" "}
                  </h5>
                </div>
              </div>

              {/* Image Section */}
              <div className="col-lg-6   d-lg-block">
                <div className="image-container position-relative">
                  <img
                    src={
                      hoveredProgram ? hoveredProgram.imgSrc : housedefaultimg
                    }
                    alt="Hovered Program"
                    className="img-fluid"
                    style={{ objectFit: "cover", width: "100%" }}
                  />
                  <div className="overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <BuildingFutures />
        {/* BuildingFutures */}
        <Contact />

        <Leadership />
        <Sponsor />
      </Layout>
    </>
  );
}

export default OurWork;
