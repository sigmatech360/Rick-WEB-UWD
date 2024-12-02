import dedleadimg1 from "../../Assets/images/dedleadimg1.png";
import dedleadimg2 from "../../Assets/images/dedleadimg2.png";
import dedleadimg3 from "../../Assets/images/dedleadimg3.png";
import dedleadimg4 from "../../Assets/images/dedleadimg4.png";
import Slider from "react-slick";

import React, { useEffect } from "react";
import AOS from "aos";
import dedicationunderline from "../../Assets/images/dedicationunderline.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import "./index.css";
function Leadership() {
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

  const teamMembers = [
    {
      animation: "fade-right",
      name: "Executive Director: Christine Stellino",
      title: "christine@his-oc.org",

      imgSrc: dedleadimg1, // replace with actual image paths
    },
    {
      animation: "fade-up",
      name: "Program Director: Alfa Hernandez",
      title: "alfa@his-oc.org",
      title2: "(714) 582-7981",
      imgSrc: dedleadimg2,
    },
    {
      animation: "fade-down",
      name: "Program Manager: Anthony Trejo",
      title: "cuca@his-oc.org",
      title2: "(714) 465-5062",
      imgSrc: dedleadimg3,
    },
    {
      animation: "fade-left",
      name: "TAY Program: Cuca Trejo",
      title: "cuca@his-oc.org",
      title2: "(714) 465-5062",
      imgSrc: dedleadimg4,
    },
  ];

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
  return (
    <>
      <section className="dedicatd-leadership">
        <div className="container my-5">
          <div className="row     mb-5">
            <div className="col-md-6">
              <h2
                className="title   mb-4"
                data-aos="fade-right"
                data-aos-offset="0"
                data-aos-duration="1000"
              >
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
              <p
                className="para   text-muted mb-5"
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-duration="1000"
              >
                Our Program Director oversees the strategic direction of all
                services at HIS-OC, ensuring that every initiative is designed
                to provide long-term solutions to homelessness. With years of
                experience in social services, the Program Director.
              </p>
            </div>
          </div>
          <Slider {...settings}>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="leadershipcards p-2"
                data-aos={member?.animation}
                data-aos-offset="0"
                data-aos-duration="1000"
              >
                <div className="card  p-4 border-0   text-center">
                  <div class="profile-container">
                    <div class="yellow-overlay"></div>
                    <img
                      src={member.imgSrc}
                      alt="Profile Image"
                      class="profile-image"
                    />

                    <div className=" gap-2 d-flex">
                      <p className="hisoc   "> HIS OC’s</p>
                      <div className="mt-3">
                        <p className="card-title  ">{member.name}</p>
                        <p className="card-text   text-muted mb-0">
                          {member.title}
                        </p>
                        <p className="card-text text-muted   mt=0">
                          {member.title2}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}

export default Leadership;
