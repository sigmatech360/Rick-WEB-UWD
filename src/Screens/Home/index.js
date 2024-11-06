import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaFacebookF, FaInstagram, FaLink } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import footerlogo from "../../Assets/images/footerlogo.svg";
import logo from "../../Assets/images/logo.png";
import bottomfooterlogo1 from "../../Assets/images/bottomlogo1.png";
import bottomfooterlogo2 from "../../Assets/images/bottomfooterlogo2.png";
import contantunderline from '../../Assets/images/contantunderline.png'
import bottomfooterlogo3 from "../../Assets/images/bottomfooterlogo3.png";
import donateicon from "../../Assets/images/donateicon.png";
import availabletagline from '../../Assets/images/availabletagline.png'
import apartunderline from '../../Assets/images/apartunderline.png'
import "./index.css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css";
import tagline from "../../Assets/images/tagline.png";
import { Link } from "react-router-dom";
 
import announcement1 from "../../Assets/images/announcement1.png";
import announcement2 from "../../Assets/images/announcement2.png";
import eventunderline from '../../Assets/images/eventunderline.png'
import eventcard1 from "../../Assets/images/eventcard1.png";
import changeworld from '../../Assets/images/changeworld.png'

import wedotagline from '../../Assets/images/wedotagline.png'
import eventcard2 from "../../Assets/images/eventcard2.png";

import eventcard3 from "../../Assets/images/eventcard3.png";
// import  {  Autoplay } from 'swiper';
import housingcard1 from "../../Assets/images/housingcard1.png";
function Home() {
  const eventsData = [
    {
      id: 1,
      title: "August Events - Gomez Center",
      date: "July 2024",
      location: "1701 Atwood, Placentia, CA 92870",
      image: eventcard1, // Replace with the actual image path
    },
    {
      id: 2,
      title: "August Events - Whitten Center",
      date: "July 2024",
      location: "900 S Melrose St. Placentia, CA 92870",
      image: eventcard2, // Replace with the actual image path
    },
    {
      id: 3,
      title:
        "Cruzin' Back to School\" HIS-OC 2nd Annual Classic Car Show and Fundraiser",
      date: "July 2024",
      description:
        "Join us in sending our shelter residents and surrounding community youth back to school in style!",
      image: eventcard3, // Replace with the actual image path
    },
    // Add more events as needed
  ];

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        type="button"
        className="slick-arrow slick-prev"
        onClick={onClick}
      >
        <span className="arrow-icon">&#8592;</span> {/* Left arrow */}
      </button>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        type="button"
        className="slick-arrow slick-next"
        onClick={onClick}
      >
        <span className="arrow-icon">&#8594;</span> {/* Right arrow */}
      </button>
    );
  };
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const newsData = [
    {
      id: 1,
      title:
        "Cruzin' Back to School\" HIS-OC 2nd Annual Classic Car Show and Fundraiser",
      date: "February 9, 2024",
      description:
        "HIS-OC will be participating in the Day of the Child Event Saturday, April 20, 11am – 3pm. This event is hosted by B.A.C.A. (Bikers Against Child Abuse) in collaboration with The Raise Foundation and Higher Ground Youth & Family Services...",
      image: announcement1, // Replace with the actual image path
    },
    {
      id: 2,
      title: "Excellence in Placentia Nominees 2024",
      date: "February 9, 2024",
      description:
        "HIS-OC wants to thank our community for nominating us for Placentia Non-Profit of the Year. We appreciate the recognition of our mission and organization for providing support to the unhoused and underprivileged...",
      image: announcement2, // Replace with the actual image path
    },
    // Add more news items as needed
  ];

  return (
    <>
      <section className="header-section">
        <div className="container  py-2">
          <div className="d-flex flex-wrap justify-content-between align-items-center text-white">
            <div className="header-item d-flex align-items-center">
              <i className="bi bi-geo-alt-fill me-2"></i>
              PO Box 1293, Placentia, CA 92871
            </div>

            <div class="separator d-none d-md-block"></div>
            <div className="header-item d-flex align-items-center">
              <i className="bi bi-clock me-2"></i>
              Mon – Thu 9AM – 5PM, Fri 9AM – 4PM
            </div>
            <div class="separator d-none d-md-block"></div>
            <div className="header-item d-flex align-items-center">
              <i className="bi bi-telephone-fill me-2"></i>
              (714) 993-5774
            </div>

            <div class="separator d-none d-md-block"></div>
            <div className="header-item d-flex align-items-center">
              <i className="bi bi-envelope me-2"></i>
              info@his-oc.org
            </div>
          </div>
        </div>
      </section>
      <section>
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
          <div className="container">
            {/* First logo: visible only in responsive mode */}
            <Link
              className="navbar-brand d-flex align-items-center d-lg-none"
              href="/"
            >
              <img src={logo} alt="Logo" style={{ height: "40px" }} />
            </Link>

            {/* Navbar Toggler */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarNav"
            >
              {/* Navigation Links */}
              <div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      About
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item">Action</Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Our Works
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" href="#">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/">
                      Get Help
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Donate
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" href="#">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Second logo: visible only in full-screen mode */}
              <div className="d-none d-lg-block">
                <Link className="navbar-brand" href="/">
                  <img src={logo} alt="Logo" style={{ height: "40px" }} />
                </Link>
              </div>

              {/* Right-aligned buttons and icons */}
              <div className="d-flex align-items-center">
                <Link href="/" className="text-dark me-3">
                  <i className="bi bi-facebook"></i>
                </Link>
                <Link href="/" className="text-dark me-3">
                  <i className="bi bi-x"></i>
                </Link>
                <Link href="/" className="text-dark me-3">
                  <i className="bi bi-instagram"></i>
                </Link>
                <button className="nav-event btn   me-2">Events</button>
                <button className="nav-donate btn btn-warning text-dark">
                  {" "}
                  <img src={donateicon} /> Donate
                </button>
              </div>
            </div>
          </div>
        </nav>
      </section>

      <section className="homeless-intervention">
        <Swiper
          pagination={true}
          modules={[Pagination]}
          slidesPerView={"auto"}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="inerhero">
              <div className="container slide-content d-flex flex-column justify-content-center align-items-start text-white h-100">
                <div className="row">
                  <div className="col-md-7">
                    <h5 className="text-info mb-2">
                      Helping Them Home For Good
                    </h5>
                    {/* <h1 className="display-4 fw-bold mb-3">
                      We Transition People out of{" "}
                      <span className="text-warning">Homelessness <img src={tagline}/></span>
                    </h1> */}
                    <h1 className="display-4 fw-bold mb-3">
                      We Transition People out of{" "}
                      <span className="highlighted-text">
                        Homelessness
                        <img
                          src={tagline}
                          alt="underline"
                          className="underline-image"
                        />
                      </span>
                    </h1>

                    <p className="mb-4">
                      Our shelters and supportive service programs assist people
                      who are homeless or at risk of being homeless.
                    </p>
                    <div className="d-flex gap-2">
                      {/* <button className="btn btn-warning text-dark me-3">
                        Give Help
                      </button> */}
                      <button className="nav-donate btn btn-warning text-dark">
                        {" "}
                        <img src={donateicon} /> Give Help
                      </button>
                      <button className="gethelp btn btn-outline-light">
                        Get Help
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="inerhero">
              <div className="container slide-content d-flex flex-column justify-content-center align-items-start text-white h-100">
                <div className="row">
                  <div className="col-md-7">
                    <h5 className="text-info mb-2">
                      Helping Them Home For Good
                    </h5>
                    <h1 className="display-4 fw-bold mb-3">
                      We Transition People out of{" "}
                      <span className="text-warning">Homelessness</span>
                    </h1>
                    <p className="mb-4">
                      Our shelters and supportive service programs assist people
                      who are homeless or at risk of being homeless.
                    </p>
                    <div className="d-flex">
                      <button className="btn btn-warning text-dark me-3">
                        Give Help
                      </button>
                      <button className="btn btn-outline-light">
                        Get Help
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="inerhero">
              <div className="container slide-content d-flex flex-column justify-content-center align-items-start text-white h-100">
                <div className="row">
                  <div className="col-md-7">
                    <h5 className="text-info mb-2">
                      Helping Them Home For Good
                    </h5>
                    <h1 className="display-4 fw-bold mb-3">
                      We Transition People out of{" "}
                      <span className="text-warning">Homelessness</span>
                    </h1>
                    <p className="mb-4">
                      Our shelters and supportive service programs assist people
                      who are homeless or at risk of being homeless.
                    </p>
                    <div className="d-flex">
                      <button className="btn btn-warning text-dark me-3">
                        Give Help
                      </button>
                      <button className="btn btn-outline-light">
                        Get Help
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="homeless-intervention">
        <div className="container-fluid">
          <div className="row">
            {/* Left Section */}
            <div className="col-lg-8 col-md-12 left-section d-flex flex-column justify-content-center ">
              <div className="content">
                <h2 className="how-we-do mb-3">
                  How <span className="highlight-text">We Do <img src={wedotagline}  className="wedotagline"/> </span>
                  It
                </h2>
                <p className="wedopara">
                  Homeless Intervention Services of Orange County (HIS-OC)
                  currently runs four programs that assist people who are
                  homeless or at risk of being homeless. Our shelters and
                  supportive service programs provide assistance to our
                  community’s most vulnerable population. HIS-OC does not and
                  shall not discriminate on the basis of race, color, religion
                  (creed), gender, gender expression, age, national origin
                  (ancestry), disability, marital status, sexual orientation, or
                  military status, in any of its activities or operations.
                </p>
              </div>
            </div>

            {/* Right Section */}
            <div className="col-lg-4 col-md-12 right-section d-flex flex-column justify-content-center p-5 text-center text-md-start">
              <h2 className="right-section-text">
                You Must Be The <br />
                <span className="text-warning">Change</span> You Wish To <br />
                See In The <span className="text-success position-relative">World <img className="changeworld" src={changeworld}/></span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="what-sets-us-apart text-white py-5">
        <div className="container text-center">
          <h2 className="setus  fw-bold mb-3">
            What Sets Us <span className="text-warning  position-relative">Apart  <img className="apartunderline" src={apartunderline}/></span>
          </h2>
          <p className="mb-0">
            We are different from an emergency shelter or single program shelter
            because we provide a longer-term guided process to achieve
            self-sufficiency. Our programs require a commitment on the part of
            our clients and provide tools so that a return to homelessness is
            prevented. Homeless Intervention Services of Orange County
            integrates job training, therapy, case management, and education
            into a continuum of care that addresses each client’s specific
            needs.
          </p>
        </div>
      </section>

      <section className="help-available py-5">
        <div className="container text-center mb-4">
          <h2 className="helptagline fw-bold mb-3">
            Help is <span className="text-success position-relative">Available    <img className="availabletagline" src={availabletagline}/></span>
          </h2>
          <p className="mb-4">
            We've been helping people find their way home since 1989.
          </p>
          <div className="row">
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="stat-card bg-light-green py-4 px-3 shadow-sm rounded">
                <h3 className="helped fw-bold text-success">&gt;5,000</h3>
                <p className="mb-0">Helped Out of Homelessness</p>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="stat-card bg-light-purple py-4 px-3 shadow-sm rounded">
                <h3 className="helped fw-bold text-primary">1,127</h3>
                <p className="mb-0">Individuals Helped Last Year</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stat-card bg-light-yellow py-4 px-3 shadow-sm rounded">
                <h3 className="helped fw-bold text-warning">85%</h3>
                <p className="mb-0">Guided to Housing</p>
              </div>
            </div>
          </div>
        </div>

        <div className="  mt-5">
          <div className="row">
            {/* Left Card */}
            <div className="transitionalbg  col-md-5 mb-4 mb-md-0">
              <div className=" p-4    ">
                <h5 className="text-uppercase mb-2  text-white ">
                  Providing Shelter and Reunification for Families
                </h5>
                <h2 className="fw-bold text-white">
                  Transitional Housing{" "}
                  <span className="text-warning">Program</span>
                </h2>
                <p>
                  We have 54 beds in 3 shelters that provide a safe place to
                  stay for families. Residents can stay for 4 to 6 months, in a
                  home-like environment, while they establish themselves in a
                  career and build up savings in order to transition into
                  permanent housing. We house over 150 men, women and children
                  each year in a spirit of dignity and love through our three
                  residences.
                </p>
                <button className="btn btn-outline-primary">Learn More</button>
              </div>
            </div>

            {/* Right Card with vertical scrollable content */}
            <div className="col-md-6">
              <div className="scrollable-container-y p-2 rounded    ">
                {/* Individual Cards */}
                <div className=" p-3 mb-3  rounded  ">
                  <img
                    src={housingcard1}
                    alt="Youth Shelter 1"
                    className="img-fluid rounded mb-2"
                  />
                  <h5 className="fw-bold">Transitional Aged Youth Shelter</h5>
                  <p className="small mb-2">
                    Combining Housing Education and Skills for Students. A
                    transitional 12-24 month program for 18-24-year-olds.
                    Residents attend college, trade school, or complete a high
                    school diploma/GED requirements. Many of our residents were
                    in the foster care system and do not have help navigating
                    the education system. Our case managers help them set
                    personal goals and connect them to appropriate resources..
                  </p>
                  <button className="btn btn-outline-primary btn-sm">
                    Learn More
                  </button>
                </div>
                <div className=" p-3 mb-3  rounded  ">
                  <img
                    src={housingcard1}
                    alt="Youth Shelter 2"
                    className="img-fluid rounded mb-2"
                  />
                  <h5 className="fw-bold">Youth Shelter 2</h5>
                  <p className="small mb-2">
                    Brief description of this youth shelter program.
                  </p>
                  <button className="btn btn-outline-primary btn-sm">
                    Learn More
                  </button>
                </div>

                {/* Add more cards as needed */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="events-section py-5">
        <div className="container">
          <h2 className="event text-center position-relative fw-bold mb-5">Events <img className="eventunderline" src={eventunderline}/></h2>
          <div className="row">
            {eventsData.map((event) => (
              <div key={event.id} className="col-md-4 mb-4">
                <div className=" bg-white shadow-sm rounded ">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="img-fluid rounded mb-3"
                  />
                  <div className="event-details p-3">
                    <p className="text-muted mb-1">{event.date}</p>
                    <h5 className="fw-bold mb-2">{event.title}</h5>
                    {event.location && (
                      <p className="eventlocation mb-1 ">{event.location}</p>
                    )}
                    {event.description && (
                      <p className="small mb-0">{event.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="news-section py-5">
        <div className=" ">
          <div className="row gap-4">
            {/* Left Static Card */}
            <div className="newsleftsection col-md-4 mb-4 mb-md-0 announcement-header text-start flex-column d-flex   justify-content-center  ">
              <div className="text-content">
                <h3 className="title fw-bold">
                  News & <span className="text-warning">Announcements</span>
                </h3>
                <p className="para">
                  Last year we helped over 1000 people with our programs and
                  guided 85% of those in our resident programs to permanent
                  housing. Since 1989, we have guided over 5000 people out of
                  homelessness and back into productive and fulfilling lives.
                </p>
                <button className="btn btn-outline-light mt-3">
                  View all Announcements
                </button>
              </div>
            </div>

            {/* Right Carousel Section */}
            <div className="col-md-7 position-relative">
              <div className="row">
                <div className="col-md-12">
                  <Slider {...settings}>
                    {newsData.map((news) => (
                      <div key={news.id} className="p-4 mt-4 ">
                        <div className="news-card bg-white shadow-sm   ">
                          <img
                            src={news.image}
                            alt={news.title}
                            className="img-fluid rounded mb-2"
                          />
                          <div className="p-3">
                            <p className="text-muted small mb-1">{news.date}</p>
                            <h5 className="fw-bold mb-2">{news.title}</h5>
                            <p className="small mb-3">{news.description}</p>
                            <button className="btn btn-outline-primary btn-sm">
                              Learn More
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

 


      <section className="contact-us-section py-5">
        <div className="container text-center text-md-start">
          <h2 className="fw-bold m-5 text-center">
            We'd <span className="contant-title position-relative text-warning">Love To Hear <img src={contantunderline} className="contantunderline"/></span> From You
          </h2>
          <p className="subtitle w-50 mx-auto text-center mb-4">
            If you would like to contact HISOC, please fill out the contact form
            below and one of our team members will be sure to follow up with
            you.
          </p>
          <div className="row gx-0 d-flex align-items-stretch">
  {/* Left Contact Information Panel */}
  <div className="col-md-6 mb-4 mb-md-0 d-flex">
    <div className="contact-info-panel p-4 shadow-sm w-100 rounded-start">
      {/* Your contact items */}
      <div className="d-flex gap-3 mb-3">
        <div className="contact-item p-3 rounded bg-white">
          <p className="mb-1 fw-bold">Executive Director Christine Stellino</p>
          <a href="mailto:christine@his-oc.org" className="text-muted">christine@his-oc.org</a>
        </div>
        <div className="contact-item p-3 rounded bg-white">
          <p className="mb-1 fw-bold">Program Director Alfa Hernandez</p>
          <a href="mailto:christine@his-oc.org" className="text-muted">christine@his-oc.org</a>
        </div>
      </div>
      <div className="d-flex gap-3 mb-3">
        <div className="contact-item p-3 rounded bg-white">
          <p className="mb-1 fw-bold">Executive Director Christine Stellino</p>
          <a href="mailto:christine@his-oc.org" className="text-muted">christine@his-oc.org</a>
        </div>
        <div className="contact-item p-3 rounded bg-white">
          <p className="mb-1 fw-bold">Program Director Alfa Hernandez</p>
          <a href="mailto:christine@his-oc.org" className="text-muted">christine@his-oc.org</a>
        </div>
      </div>
      <div className="d-flex gap-3 mb-3">
        <div className="contact-item p-3 rounded bg-white">
          <p className="mb-1 fw-bold">Executive Director Christine Stellino</p>
          <a href="mailto:christine@his-oc.org" className="text-muted">christine@his-oc.org</a>
        </div>
        <div className="contact-item p-3 rounded bg-white">
          <p className="mb-1 fw-bold">Program Director Alfa Hernandez</p>
          <a href="mailto:christine@his-oc.org" className="text-muted">christine@his-oc.org</a>
        </div>
      </div>
      <div className="d-flex gap-3 mb-3">
        <div className="contact-item p-3 rounded bg-white">
          <p className="mb-1 fw-bold">Executive Director Christine Stellino</p>
          <a href="mailto:christine@his-oc.org" className="text-muted">christine@his-oc.org</a>
        </div>
        <div className="contact-item p-3 rounded bg-white">
          <p className="mb-1 fw-bold">Program Director Alfa Hernandez</p>
          <a href="mailto:christine@his-oc.org" className="text-muted">christine@his-oc.org</a>
        </div>
      </div>
      <div className="d-flex gap-3 mb-3">
        <div className="contact-item p-3 rounded bg-white">
          <p className="mb-1 fw-bold">Executive Director Christine Stellino</p>
          <a href="mailto:christine@his-oc.org" className="text-muted">christine@his-oc.org</a>
        </div>
        <div className="contact-item p-3 rounded bg-white">
          <p className="mb-1 fw-bold">Program Director Alfa Hernandez</p>
          <a href="mailto:christine@his-oc.org" className="text-muted">christine@his-oc.org</a>
        </div>
      </div>
      {/* Additional rows as needed */}
    </div>
  </div>

  {/* Right Contact Form Panel */}
  <div className="col-md-6 d-flex">
    <div className="contact-form-panel p-4 shadow-sm w-100 bg-white rounded-end">
      <h3 className="fw-bold text-black mb-3">Contact Us</h3>
      <form>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Name" />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Phone" />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Email" />
        </div>
        <div className="mb-3">
          <select className="form-select">
            <option>General Information</option>
            <option>Programs</option>
            <option>Donations</option>
            <option>Volunteering</option>
          </select>
        </div>
        <div className="mb-3">
          <textarea className="form-control" rows="4" placeholder="Message"></textarea>
        </div>
        <button type="submit" className="btn rounded text-black border-white">Send Message</button>
      </form>
    </div>
  </div>
</div>

        </div>
      </section>



      <section className="sponsor-banner d-flex justify-content-center align-items-center">
        <h2 className=" sponsor-texttitle fw-bold text-white">
          BE A <span className="text-warning sponsor-text">SPONSOR</span>
        </h2>
      </section>







      <section className="footer">
        <footer className="footer py-4 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-4 mb-4 mb-md-0">
                <img src={footerlogo} className="footerlogo  mb-4  " />
                <p className="title fw-bold mb-2">
                  Building A Future Without{" "}
                  <span className="text-primary">Homelessness.</span>
                </p>
                <p>
                  <Link
                    to="/"
                    className="hiscolint text-decoration-none text-primary"
                  >
                    HISOC
                  </Link>{" "}
                  helps people experiencing or at risk of homelessness build new
                  lives through construction, community engagement, and
                  education.
                </p>
              </div>
              <div className="col-md-2">
                <h5>About HomeAid</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!" className="text-decoration-none">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-decoration-none">
                      Board & Team
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-decoration-none">
                      News & Announcements
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-decoration-none">
                      Become A Volunteer
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                <h5>Our Impact</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!" className="text-decoration-none">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-decoration-none">
                      Community
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-decoration-none">
                      HISOC Works
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                <h5>Get Involved</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!" className="text-decoration-none">
                      Ways To Give
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-decoration-none">
                      Events
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-decoration-none">
                      Make A Donation
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-decoration-none">
                      Be A Sponsor
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                <h5>Resources</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!" className="text-decoration-none">
                      Get Help?
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-decoration-none">
                      Financials
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-decoration-none">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

        <footer className="footer-bottom bg-dark text-white py-3">
          <div className="container d-flex flex-wrap justify-content-between align-items-center">
            {/* Left section with logos */}
            <div className="d-flex align-items-center    gap-5">
              <img
                src={bottomfooterlogo1}
                alt="501(c)(3)"
                className="footer-logo me-3"
              />
              <img
                src={bottomfooterlogo2}
                alt="Nonprofit Central"
                className="footer-logo1 me-3"
              />
              <img
                src={bottomfooterlogo3}
                alt="Gold Transparency 2024"
                className="footer-logo3"
              />
            </div>
            {/* Center section for copyright text */}
            <div className="text-center">
              <p className="mb-0">
                © Copyright 2007-2022, HISOC America. All Rights Reserved.
                <br />
                Designed by United Design Group |{" "}
                <a href="#!" className="text-decoration-none text-white">
                  Legal
                </a>{" "}
                |{" "}
                <a href="#!" className="text-decoration-none text-white">
                  Privacy
                </a>
              </p>
            </div>
            {/* Right section with social icons and donate button */}
            <div className="socialicon d-flex align-items-center">
              <Link href="/" className="  text-white  me-3">
                <i className="bi bi-facebook"></i>
              </Link>

              <Link href="/" className="text-white me-3">
                <i className="bi bi-x"></i>
              </Link>
              <Link href="/" className="text-white me-3">
                <i className="bi bi-instagram"></i>
              </Link>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}

export default Home;
