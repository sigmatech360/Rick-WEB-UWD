import "./index.css";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import { Modal, Button, Form } from "react-bootstrap";
import Layout from "../../components/layout";
import sponsorunderline from "../../Assets/images/sponsorunderline.svg";

import createdunderline from "../../Assets/images/createdunderline.png";
import HeroSection from "../../components/herosection";
import drivingchangecard1 from "../../Assets/images/drivingchangecard1.png";
import drivingchangecard2 from "../../Assets/images/drivingchangecard2.png";
import dedicationunderline from "../../Assets/images/dedicationunderline.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import donateunderline from "../../Assets/images/donateunderline.svg";
import programlegacy from "../../Assets/images/programlegacy.png";
import applyemployeebg from "../../Assets/images/applyemployeebg.png";
import contectbf from "../../Assets/images/contactbg.png";
import partnerimg from "../../Assets/images/partnerimg.svg";
function Contactus() {
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

  const [donatenotify, setDonatenotiy] = useState(false);

  console.log("donatenotify", donatenotify);
  const handleClose = (event) => {
    event.preventDefault();
    setDonatenotiy(false);
  };

  const handlenotifymessage = (event) => {
    event.preventDefault();
    setDonatenotiy(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setDonatenotiy(true);
  };

  return (
    <>
      <Layout>
        <HeroSection
          heroimg={contectbf}
          pagetitle="Sponsorship  "
          pagename="  Sponsorship"
          programprojectsubttle="givedonationsubtitle"
          programpojectaboutherounderline="hopeunderline"
        />
        <section className="Partner">
          <div className="container-fluid">
            <div className="row gx-0 ">
              {/* Left side with form and text */}
              <div className="contactformleft col-lg-6 p-4 p-md-5">
                <h3
                  className="display-5 fw-bold mb-2"
                  data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  Partner With{" "}
                  <span className="do-it">
                    HIS-OC{" "}
                    <img className="donateunderline" src={donateunderline} />
                  </span>
                  To Create Lasting Impact
                </h3>
                <p
                  className="para mb-3 "
                  data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  Sponsorship opportunities allow you to make a significant
                  difference by supporting our programs.
                </p>

                <form onSubmit={handleFormSubmit}>
                  <div className="row">
                    {/* Name Input */}
                    <div className="col-md-6 mb-3">
                      <div className="partnerfield">
                        <span className="input-group-text">
                          <i className="bi bi-person"></i>
                        </span>
                        <input
                          type="text"
                          className="partnerinputfield form-control"
                          placeholder="Name"
                          required
                        />
                      </div>
                    </div>

                    {/* Email Input */}
                    <div className="col-md-6 mb-3">
                      <div className="partnerfield">
                        <span className="input-group-text">
                          <i className="bi bi-envelope"></i>
                        </span>
                        <input
                          type="email"
                          className="partnerinputfield form-control"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    {/* Phone Input */}
                    <div className="col-md-6 mb-3">
                      <div className="partnerfield">
                        <span className="input-group-text">
                          <i className="bi bi-telephone"></i>
                        </span>
                        <input
                          type="tel"
                          className="partnerinputfield form-control"
                          placeholder="Phone"
                          required
                        />
                      </div>
                    </div>

                    {/* Select Project */}
                    <div className="col-md-6 mb-3">
                      <div className="partnerfield">
                        <span className="input-group-text">
                          <i className="bi bi-list-task"></i>
                        </span>
                        <select
                          className="partnerinputfield form-select"
                          required
                        >
                          <option value="">Select Project</option>
                          <option value="project1">Project 1</option>
                          <option value="project2">Project 2</option>
                          <option value="project3">Project 3</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div className="mb-3">
                    <div className="partnerfieldmessage">
                      <span className="input-group-textmsg">
                        <i className="bi bi-chat-dots"></i>
                      </span>
                      <textarea
                        className="partnerinputfield form-control"
                        rows="4"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn becomeexponser"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      Become a Sponsor
                    </button>
                  </div>
                </form>
              </div>

              {/* Right side with map image */}
              <div className="col-lg-6 d-none d-lg-block">
                <div className="partnerimg-container">
                  <img
                    src={partnerimg}
                    alt="Map"
                    className="img-fluid partnerimg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="inquiries-call d-flex justify-content-center align-items-center">
          <h2 className=" inquiries-calltitle fw-bold text-white">
            For Any Inquiries Call The Hotline:{" "}
            <span className="    position-relative">
              {" "}
              +1 123 1234 567{" "}
              <img className="sponsorunderline" src={sponsorunderline} />
            </span>
          </h2>
        </section>
      </Layout>

      <section className="VolunteerModal">
        <Modal size="md" show={donatenotify} onHide={handleClose} centered>
          <Modal.Header>
            <Modal.Title>
              {/* <h4 className="modaltitle text-center">Unite With Us To Rewrite</h4> */}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <p className="text-center text-muted" style={{ fontStyle: 'italic' }}>
          Life Stories.
        </p> */}
            {/* <h4 className="modaltitle  ">Unite With Us To Rewrite</h4> */}
            <h4 className="modaltitle">
              {" "}
              <span className="d-flex text-center mx-auto justify-content-center">
                {" "}
                Your message has been sent successfully. We will get back to you
                soon{" "}
              </span>
            </h4>
            <Form>
              {/* Email Field */}

              {/* Password Field */}

              {/* Submit Button */}
              <Button
                onClick={handleClose}
                variant="success"
                type="submit"
                className="mt-4 w-100 becomeavalbtn"
              >
                Close
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </section>
    </>
  );
}

export default Contactus;
