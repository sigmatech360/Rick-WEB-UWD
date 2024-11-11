import "./index.css";

import Layout from "../../components/layout";
import Leadership from "../../components/Leadership";
import React, { useState } from "react";
import createdunderline from "../../Assets/images/createdunderline.png";
import HeroSection from "../../components/herosection";
  import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from "../../components/contact";
import Sponsor from "../../components/sponsor";
import matchinggiftunderline from "../../Assets/images/matchinggiftunderline.png";
import donateunderline from "../../Assets/images/donateunderline.svg";
import donatecard1 from "../../Assets/images/donatecard1.svg";
import donatecard2 from "../../Assets/images/donatecard2.svg";
import donatecard3 from "../../Assets/images/donatecard3.svg";
import programlegacy from "../../Assets/images/programlegacy.png";
import applyemployeebg from "../../Assets/images/applyemployeebg.png";
import donatebg from "../../Assets/images/donatebg.png";
 
import dedleadimg1 from "../../Assets/images/dedleadimg1.png";
import dedleadimg2 from "../../Assets/images/dedleadimg2.png";
import dedleadimg3 from "../../Assets/images/dedleadimg3.png";
import dedleadimg4 from "../../Assets/images/dedleadimg4.png";
function Givedonation() {
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
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // Extra-small screens (below 768px)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const teamMembers = [
    {
      name: "Executive Director: Christine Stellino",
      title: "christine@his-oc.org",

      imgSrc: dedleadimg1, // replace with actual image paths
    },
    {
      name: "Program Director: Alfa Hernandez",
      title: "alfa@his-oc.org",
      title2: "(714) 582-7981",
      imgSrc: dedleadimg2,
    },
    {
      name: "Program Manager: Anthony Trejo",
      title: "cuca@his-oc.org",
      title2: "(714) 465-5062",
      imgSrc: dedleadimg3,
    },
    {
      name: "TAY Program: Cuca Trejo",
      title: "cuca@his-oc.org",
      title2: "(714) 465-5062",
      imgSrc: dedleadimg4,
    },
  ];

  const programs = [
    {
      title: "Apply For Employee Matching Gifts",
      description:
        "Many employers will match a charitable donation to a non-profit organization, which can double, even triple the value of your donation. Ask your employer about its matching grant program.",
      highlight: "Gifts",
      backgroundImage: applyemployeebg, // replace with your image path
    },
    {
      title: "Leave A Legacy (Planned Giving)",
      description:
        "Making a commitment to HIS-OC through your will or other estate planning vehicle is an effective way to ensure that critical services are provided to low-income families and seniors for generations to come. A Planned Gift allows you to manage your assets during your lifetime, while taking comfort in the knowledge that you have made a commitment to help disadvantaged children, families and seniors into the future.",
      highlight: "Giving",
      backgroundImage: programlegacy, // replace with your image path
    },
  ];

  const [hoveredProgram, setHoveredProgram] = useState(null);

  return (
    <>
      <Layout>
        <HeroSection
          heroimg={donatebg}
          pagetitle="Give  "
          pagename="  Donate"
          title2="  Donation"
        />

        <section className="donate-section d-flex justify-content-center align-items-center py-5">
          <div className="container">
            <h2 className="helptagline fw-bold mb-2 text-center">
              Ways To{" "}
              <span className="text-success position-relative">
                Donate{" "}
                <img className="availabletagline" src={donateunderline} />
              </span>
            </h2>
            <p className="para   text-center mx-auto">
              {" "}
              Your generous gift will help provide hope and a place to call home
              for homeless individuals and families.
            </p>
          </div>
        </section>

        <section className="services-section  py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div
                  className="service-card p-3    py-4 h-100"
                  style={{
                    backgroundColor: "#F3EFFF",
                    borderRadius: "12px",
                  }}
                >
                  <img className="creadetimg" src={donatecard1} />
                  <p className="extension font-weight-bold  mb-0  ">
                    Give Now by{" "}
                    <spna className="credit position-relative">
                      Credit{" "}
                      <img
                        className="createdunderline"
                        src={createdunderline}
                      />
                    </spna>{" "}
                    Card
                  </p>
                  <p className="para   mb-2 text-muted  ">
                    It's easy to give a small donation, right now! Please give
                    generously and support our goal of helping find homes for
                    people in need.
                  </p>
                  <button className="btn donate-button">DONATE NOW</button>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div
                  className="service-card p-3   h-100  py-4"
                  style={{
                    backgroundColor: "#ebfeee",
                    borderRadius: "12px",
                  }}
                >
                  <img className="creadetimg" src={donatecard2} />
                  {/* <FaPhoneAlt size={30} color="#EBFEEE" /> */}
                  <p className="extension font-weight-bold  mb-0  ">
                    Give Now by{" "}
                    <spna className="credit position-relative">
                      Credit{" "}
                      <img
                        className="createdunderline"
                        src={createdunderline}
                      />
                    </spna>{" "}
                    Card
                  </p>
                  <p className="para   mb-2 text-muted  ">
                    Please make checks payable to HIS-OC and mail to P.O. Box
                    1293, Placentia, CA 92871.
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div
                  className="service-card p-3    py-4 h-100"
                  style={{
                    backgroundColor: "#FEFBEB",
                    borderRadius: "12px",
                  }}
                >
                  <img className="creadetimg" src={donatecard3} />
                  {/* <FaPhoneAlt size={30} color="#348F99" /> */}
                  <p className="extension font-weight-bold  mb-0  ">
                    Give Now by{" "}
                    <spna className="credit position-relative">
                      Credit{" "}
                      <img
                        className="createdunderline"
                        src={createdunderline}
                      />
                    </spna>{" "}
                    Card
                  </p>
                  <p className="para   mb-2 text-muted  ">
                    #giftsforall #hisoc #unhoused #underprivileged
                    #trasitionalagedyouth.
                  </p>
                  <button className="btn donate-button">DONATE NOW</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="programs-section container-fluid ">
          <div className="row my-5">
            {/* {programs.map((program, index) => ( */}
            <div className="col-12 col-md-6 mb-4 d-flex align-items-stretch">
              <div
                className="program-card position-relative text-white text-center p-5"
                style={{
                  backgroundImage: `url(${applyemployeebg})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>
                <div className="content">
                  <h3 className="program-title mb-3   w-30">
                    Apply For Employee Matching{" "}
                    <span className="position-relative">
                      Gifts{" "}
                      <img
                        className="matchinggiftunderline"
                        src={matchinggiftunderline}
                      />{" "}
                    </span>
                  </h3>
                  <p className="program-description   text-white">
                    Many employers will match a charitable donation to a
                    non-profit organization, which can double, even triple the
                    value of your donation. Ask your employer about its matching
                    grant program.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 mb-4   align-items-stretch">
              <div
                className="program-card position-relative text-white text-center p-5"
                style={{
                  backgroundImage: `url(${programlegacy})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  // backgroundPosition: "center",
                }}
              >
                <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>
                <div className="content">
                  <h3 className="program-title mb-3   w-30">
                    Leave A Legacy{"  "} <br />
                    (Planned {""}
                    <span className="position-relative">
                      Giving){" "}
                      <img
                        className="legacyunderline"
                        src={matchinggiftunderline}
                      />{" "}
                    </span>
                  </h3>
                  <p className="program-description   text-white">
                    Making a commitment to HIS-OC through your will or other
                    estate planning vehicle is an effective way to ensure that
                    critical services are provided to low-income families and
                    seniors for generations to come. A Planned Gift allows you
                    to manage your assets during your lifetime, while taking
                    comfort in the knowledge that you have made a commitment to
                    help disadvantaged children, families and seniors into the
                    future.
                  </p>
                </div>
              </div>
            </div>

            {/* ))} */}
          </div>
        </section>

        <Leadership />
        <Contact />
        <Sponsor />
      </Layout>
    </>
  );
}

export default Givedonation;
