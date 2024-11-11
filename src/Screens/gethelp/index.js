import "./index.css";
import heropage2 from "../../Assets/images/heropage2.png";
import Layout from "../../components/layout";
import ourmission from "../../Assets/images/ourmission.png";
import missionunderline from "../../Assets/images/missionunderline.png";
import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa"; // Font Awesome phone icon (React Icons)
import { FaStar } from "react-icons/fa";
import helpstar from "../../Assets/images/helpstar.svg";
import Leadership from '../../components/Leadership/index'
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

import gethelpbg from "../../Assets/images/gethelpbg.png";
// import program1 from "../../Assets/images/program1.svg.png";
// import program2 from "../../Assets/images/program2.png";

import ourworkbg from "../../Assets/images/ourworkbg.png";
function GetHelp() {
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

  const services = [
    {
      description: "Transitional Housing Program for families",
      extension: "1009",
      bgColor: "#E9E5FC", // Light purple background
    },
    {
      description: "Young Adults Ages 18-24 yr old men",
      extension: "1007",
      bgColor: "#D7FBE8", // Light green background
    },
    {
      description:
        "HomeShare OC If you are a college student, fill out the Student Interest Form to get started.",
      extension: "1005",
      bgColor: "#D3F4FD", // Light blue background
      linkText: "Student Interest Form", // Link text within the description
      linkHref: "#", // Placeholder for link URL
    },
    {
      description: "Housing Connection Program for anyone",
      extension: "1019",
      bgColor: "#FFF8D5", // Light yellow background
    },
  ];
  const [hoveredProgram, setHoveredProgram] = useState(null);

  return (
    <>
      <Layout>
        <HeroSection
          heroimg={gethelpbg}
          pagetitle="Get  "
          pagename="Get Help"
          title2="Help"
        />

        <section className="info-section d-flex justify-content-center align-items-center py-5">
          <div className="container">
            <p className="info-text text-start">
              Homeless Intervention Services of Orange County (HIS-OC) is here
              to support families and individuals facing the hardships of
              homelessness and housing insecurity. If you or a loved one is in
              need of assistance, our compassionate team is ready to provide the
              resources, guidance, and care necessary to help you regain
              stability and independence.
            </p>
          </div>
        </section>

        <section className="services-section  py-5">
          <div className="container">
            <div className="row justify-content-center text-center">
              {services.map((service, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
                  <div
                    className="service-card p-3 text-center h-100"
                    style={{
                      backgroundColor: service.bgColor,
                      borderRadius: "12px",
                    }}
                  >
                    <FaPhoneAlt size={30} color="#348F99" />
                    <p className="para mt-3 mb-2 text-muted text-center">
                      {service.description.split(" ").map((word, i) =>
                        word === service.linkText ? (
                          <a
                            key={i}
                            href={service.linkHref}
                            className="text-decoration-none"
                          >
                            {word}
                          </a>
                        ) : (
                          <span key={i}>{word} </span>
                        )
                      )}
                    </p>
                    <p className="extension font-weight-bold text-center">
                      Extension {service.extension}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="help-section py-5">
          <div className="container">
            <div className="row align-items-center">
              {/* Left Section with Hashtag, 211 Text, and Star */}
              <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
 
                <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                  <h1 className="display-1 text-warning mb-0">
                    <img src={helpstar} className="starimg" />
                  </h1>
                  <FaStar className="text-warning star-icon" />
                  <span className="oc-text">oc</span>
                </div>
              </div>

              {/* Right Section with Description and Button */}
              <div className="col-lg-6">
                <p className="description mb-4">
                  You can also dial 211 to get information and referrals to free
                  local health and human services programs in Orange County.
                </p>
                <p className="description mb-4">
                  The hotline is available 24 hours a day. 2-1-1 is a central
                  point for public information, including times of disaster to
                  help those affected find recovery assistance.
                </p>
                <a
                  href="https://www.211oc.org"
                  className="btn btn-outline-light btn-link"
                >
                  www.211oc.org
                </a>
              </div>
            </div>
          </div>
        </section>

      <Leadership />
        <Contact />
        <Sponsor />
      </Layout>
    </>
  );
}

export default GetHelp;
