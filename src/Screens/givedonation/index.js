import "./index.css";
 
import Layout from "../../components/layout";

import React, { useState } from "react";
 
import HeroSection from "../../components/herosection";
import drivingchangecard1 from "../../Assets/images/drivingchangecard1.png";
import drivingchangecard2 from "../../Assets/images/drivingchangecard2.png";
import dedicationunderline from "../../Assets/images/dedicationunderline.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from "../../components/contact";
import Sponsor from "../../components/sponsor";

import donateunderline from '../../Assets/images/donateunderline.svg'
 import donatecard1  from '../../Assets/images/donatecard1.svg'
import donatecard2  from '../../Assets/images/donatecard2.svg'
import donatecard3  from '../../Assets/images/donatecard3.svg'
import programlegacy from '../../Assets/images/programlegacy.png'
import applyemployeebg from '../../Assets/images/applyemployeebg.png'
 import donatebg from '../../Assets/images/donatebg.png'
 
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
      extension: "Give Now by Credit Card",
      bgColor: "#F3EFFF   ", // Light purple background ,
        icon:  donatecard1
    },
    {
      description: "Young Adults Ages 18-24 yr old men",
      extension: "Give now by Check",
      bgColor: "#EBFEEE", // Light green background
      icon:  donatecard2
    },
    {
      description:
        "HomeShare OC If you are a college student, fill out the Student Interest Form to get started.",
      extension: "Wishlist",
      bgColor: "#FEFBEB ", // Light blue background
      linkText: "Student Interest Form", // Link text within the description
      linkHref: "#", // Placeholder for link URL
      icon:  donatecard3
    },
   ];











   const programs = [
    {
      title: "Apply For Employee Matching Gifts",
      description: "Many employers will match a charitable donation to a non-profit organization, which can double, even triple the value of your donation. Ask your employer about its matching grant program.",
      highlight: "Gifts",
      backgroundImage: applyemployeebg, // replace with your image path
    },
    {
      title: "Leave A Legacy (Planned Giving)",
      description: "Making a commitment to HIS-OC through your will or other estate planning vehicle is an effective way to ensure that critical services are provided to low-income families and seniors for generations to come. A Planned Gift allows you to manage your assets during your lifetime, while taking comfort in the knowledge that you have made a commitment to help disadvantaged children, families and seniors into the future.",
      highlight: "Giving",
      backgroundImage: programlegacy, // replace with your image path
    }
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
            Ways To <span className="text-success position-relative">Donate    <img className="availabletagline" src={donateunderline}/></span>
          </h2>
          <p className="para w-50 text-center mx-auto">   Your generous gift will help provide hope and a place to call home for homeless individuals and families.</p>
          </div>
        </section>

        <section className="services-section  py-5">
          <div className="container">
            <div className="row justify-content-center">
              {services.map((service, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
                  <div
                    className="service-card p-3 text-center h-100"
                    style={{
                      backgroundColor: service.bgColor,
                      borderRadius: "12px",
                    }}
                  >
                    <img src={service?.icon}/>
                    {/* <FaPhoneAlt size={30} color="#348F99" /> */}
                    <p className="extension font-weight-bold  mb-0 text-start">
                        {service.extension}
                    </p>
                    <p className="para   mb-2 text-muted text-start">
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
                   
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
































      <section className="programs-section container my-5">
      <div className="row">
        {programs.map((program, index) => (
          <div key={index} className="col-12 col-md-6 mb-4 d-flex align-items-stretch">
            <div 
              className="program-card position-relative text-white text-center p-5" 
              style={{
                backgroundImage: `url(${program.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>
              <div className="content">
                <h3 className="program-title mb-3 text-start">
                  {program.title.split(" ").map((word, i) => 
                    word === program.highlight ? (
                      <span key={i} className="highlighted-text">{word} </span>
                    ) : (
                      <span key={i}>{word} </span>
                    )
                  )}
                </h3>
                <p className="program-description text-start">
                  {program.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>














    

        <section className="dedicatd-leadership">
          <div className="container my-5">
            <div className="d-flex gap-5 mb-5">
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
              <p className="para text-start text-muted mb-5">
                Our Program Director oversees the strategic direction of all
                services at HIS-OC, ensuring that every initiative is designed
                to provide long-term solutions to homelessness. With years of
                experience in social services, the Program Director.
              </p>
            </div>
            <Slider {...settings}>
              {teamMembers.map((member, index) => (
                <div key={index} className="p-2">
                  <div className="card border-0 shadow-sm text-center">
                    <img
                      src={member.imgSrc}
                      className="card-img-top"
                      alt={`${member.name}`}
                      style={{ height: "300px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{member.name}</h5>
                      <p className="card-text text-muted">{member.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>
        <Contact />
        <Sponsor />
      </Layout>
    </>
  );
}

export default Givedonation;
