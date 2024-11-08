import "./index.css";

import Layout from "../../components/layout";
import sponsorunderline from '../../Assets/images/sponsorunderline.svg'
import React, { useState } from "react";
import createdunderline from "../../Assets/images/createdunderline.png";
import HeroSection from "../../components/herosection";
import drivingchangecard1 from "../../Assets/images/drivingchangecard1.png";
import drivingchangecard2 from "../../Assets/images/drivingchangecard2.png";
import dedicationunderline from "../../Assets/images/dedicationunderline.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mapimg from '../../Assets/images/mapimg.png'
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
import machinggiftunderline from "../../Assets/images/missionunderline.png";
import contectbf from '../../Assets/images/contactbg.png'
function Contactus() {
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

  return (
    <>
      <Layout>
        <HeroSection
          heroimg={contectbf}
          pagetitle="Contact  "
          pagename="  Contact Us"
          title2="  Us"
        />
<section className="map-form"> 
  <div className="container-fluid">
    <div className="row gx-0 mb-5">
      
      {/* Left side with form and text */}
      <div className="contactformleft col-lg-6 p-4 p-md-5">
        <h1 className="display-5 fw-bold mb-2">
          Want To Talk? Let’s <span className="do-it">Do It! <img className="donateunderline" src={donateunderline}/></span>
        </h1>
        <p className="text-muted mb-3 w-50">
          If you have any questions about <span className="his-oc">HIS-OC</span>, please do not hesitate to contact.
        </p>

        <form>
          <div className="row g-2 mb-3">
            <div className="col-md-6">


              <label className="mb-2"> Name</label>
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="col-md-6">
            <label className="mb-2"> Email</label>
              <input type="email" className="form-control" placeholder="Your email" />
            </div>
          </div>
          
          <div className="row g-2 mb-3">
            <div className="col-md-6">
            <label className="mb-2"> Number</label>
              <input type="tel" className="form-control" placeholder="Your phone" />
            </div>
            <div className="col-md-6">
            <label className="mb-2"> General Information</label>
              <select className="form-select">
                <option selected>General Information</option>
                <option value="1">Support</option>
                <option value="2">Sales</option>
                <option value="3">Other</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
          <label className="mb-2">   Message</label>
            <textarea className="form-control" rows="3" placeholder="Type your message"></textarea>
          </div>
          
          <button type="submit" className=" submit btn btn-warning text-white fw-bold">Send Message</button>
        </form>
      </div>
      
      {/* Right side with map image */}
      <div className="col-lg-6 d-none d-lg-block">
        <img src={mapimg} alt="Map" className="img-fluid map-image" />
      </div>
    </div>
  </div>
</section>

   
<section className="inquiries-call d-flex justify-content-center align-items-center">
        <h2 className=" inquiries-calltitle fw-bold text-white">
        For Any Inquiries Call The Hotline:  <span className="    position-relative"> +1 123 1234 567 <img className="sponsorunderline" src={sponsorunderline}/></span>
        </h2>
      </section>

      </Layout>
    </>
  );
}

export default Contactus;
