import "./index.css";
import heropage2 from "../../Assets/images/heropage2.png";
import Layout from "../../components/layout";
import ourmission from "../../Assets/images/ourmission.png";
import missionunderline from "../../Assets/images/missionunderline.png";
import React, { useState } from "react";

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
import program1 from "../../Assets/images/program1.svg.png";
import program2 from "../../Assets/images/program2.png";

import ourworkbg from "../../Assets/images/ourworkbg.png";
function OurWork() {
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
      title: "Transitional Housing Program",
      description: "Providing Shelter and Reunification for Families",
      highlightedWords: ["Housing"], // Word to style differently on hover
      imgSrc: "path_to_image/transitional_housing.jpg",
    },
    {
      title: "Transitional Aged Youth Shelter",
      description: "Supporting Transitional Age Youth",
      highlightedWords: ["Youth"], // Word to style differently on hover
      imgSrc: "path_to_image/youth_shelter.jpg",
    },
    {
      title: "Home Share OC",
      description: "Helping College Students Transition",
      highlightedWords: [],
      imgSrc: "path_to_image/home_share.jpg",
    },
    {
      title: "Housing & Resource Connection",
      description: "Guiding To Services And Support",
      highlightedWords: ["Housing"],
      imgSrc: "path_to_image/housing_resource.jpg",
    },
    {
      title: "Charity’s Closet",
      description: "Our Trusted Partner",
      highlightedWords: [],
      imgSrc: "path_to_image/charity_closet.jpg",
    },
  ];
  const [hoveredProgram, setHoveredProgram] = useState(null);

  return (
    <>
      <Layout>
        <HeroSection
          heroimg={ourworkbg}
          pagetitle="Our"
          pagename="Our Work"
          title2="Work"
        />

        <section className="info-section d-flex justify-content-center align-items-center py-5">
          <div className="container">
            <p className="info-text text-start">
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

        <section className="programs-section container my-5">
          <div className="row">
            {/* Program List Section */}
            <div className="col-lg-6">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className={`program-item p-3 my-2 d-flex justify-content-between align-items-center ${
                    program.highlighted ? "highlighted" : ""
                  }`}
                  onMouseEnter={() => setHoveredProgram(program)}
                  onMouseLeave={() => setHoveredProgram(null)}
                >
                  <div>
                    <h5 className="mb-1">
                      {program.title.split(" ").map((word, i) => (
                        <span
                          key={i}
                          className={
                            hoveredProgram === program &&
                            program.highlightedWords.includes(word)
                              ? "highlighted-word"
                              : ""
                          }
                        >
                          {word}{" "}
                        </span>
                      ))}
                    </h5>
                    <p className="mb-0 text-muted">{program.description}</p>
                  </div>
                  <div className="arrow-icon">
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  </div>
                </div>
              ))}
            </div>

            {/* Image Section */}
            <div className="col-lg-6 d-none d-lg-block">
              <div className="image-container position-relative">
                <img
                  src={
                    hoveredProgram
                      ? hoveredProgram.imgSrc
                      : "path_to_image/default_image.jpg"
                  }
                  alt="Hovered Program"
                  className="img-fluid"
                  style={{ objectFit: "cover", width: "100%" }}
                />
                <div className="overlay"></div>
              </div>
            </div>
          </div>
        </section>

        <Contact />

        <section className="dedicatd-leadership">
          <div className="container my-5">
            <div className="row  mb-5">
              <div className="col-md-6">
                <h2 className="title text-start mb-4">
                  HIS-OC’S Mission Is A Dedicated{" "}
                  <span className="dedication  position-relative">
                    Leadership{" "}
                    <img
                      className="dedicationunderline"
                      src={dedicationunderline}
                    />
                  </span>
                  Team
                </h2>
              </div>
              <div className="col-md-6">
                <p className="para text-start text-muted mb-5">
                  Our Program Director oversees the strategic direction of all
                  services at HIS-OC, ensuring that every initiative is designed
                  to provide long-term solutions to homelessness. With years of
                  experience in social services, the Program Director.
                </p>
              </div>
            </div>
            <Slider {...settings}>
              {teamMembers.map((member, index) => (
                <div className="container d-flex justify-content-center my-4">
                  <div className="card contact-card shadow-sm  align-items-center">
                    {/* Image Section */}
                    <div className="image-container">
                      <img
                         src={member.imgSrc}
                        alt="Anthony Trejo"
                        className="img-fluid profile-image"
                      />
                    </div>

                    {/* Info Section */}
                    <div className="info-container d-flex flex-row flex-md-column align-items-start p-3">
                      {/* HIS OC's label */}
                      <div className="label bg-warning text-dark text-center fw-bold p-2">
                        HIS OC’s
                      </div>

                      {/* Contact Details */}
                      <div className="ms-3 ms-md-0">
                        <p className="fw-bold mb-1">
                          Program Manager: Anthony Trejo
                        </p>
                        <p className="mb-1 text-muted">anthony@his-oc.org</p>
                        <p className="mb-0 text-primary">(714) 266-6163</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        <Sponsor />
      </Layout>
    </>
  );
}

export default OurWork;
