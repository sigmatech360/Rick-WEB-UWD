import "./index.css";
import { Link } from "react-router-dom";
import bottomfooterlogo3 from "../../Assets/images/bottomfooterlogo3.png";
import bottomfooterlogo1 from "../../Assets/images/bottomlogo1.png";
import bottomfooterlogo2 from "../../Assets/images/bottomfooterlogo2.png";
import footerlogo from "../../Assets/images/footerlogo.svg";
import {useState} from 'react'
import {
  VolunteerModalsignup,
  VolunteerModalforget,
  VolunteerModallogin,
  VolunteerModalforget2,
} from "../../components/modal";
function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };









  const [naveshow, setNavshow] = useState(false);
  const handleclick = () => {
    setNavshow((prevState) => !prevState);
  };

  const [showModal, setShowModal] = useState(false);
  const [showModallogin, setShowModallogin] = useState(false);
  const handleShowlogin = () => {
    setShowModal(false);
    setShowModallogin(true);
  };

  const handleCloselogin = () => setShowModallogin(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const [showModalforget, setShowModalforget] = useState(false);

  const handleShowforget = () => {
    setShowModallogin(false);
    setShowModalforget(true);
  };

  const handleCloseforget = () => setShowModalforget(false);

  const [showModalforget2, setShowModalforget2] = useState(false);

  const handleShowforget2 = () => {
    setShowModalforget(false);
    setShowModalforget2(true);
  };

  const handleCloseforget2 = (event) => {
    event.preventDefault();
    setShowModalforget2(false);
  };




  return (
    <>
      <section className="footer" name="/about">
        <footer className="footer py-4 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-4 mb-4 mb-md-0">
                <img src={footerlogo} className="footerlogo  mb-2  " />
                <p className="title fw-bold mb-2">
                  Building A Future Without{" "}
                  <span className="text-primary">Homelessness.</span>
                </p>
                <p>
                  <Link to="/" className="hiscolint  text-primary">
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
                    <Link to="/about" onClick={scrollToTop} className="">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link onClick={scrollToTop} to={"/ourwork"} className="">
                    Our Work
                    </Link>
                  </li>
                  <li>
                    <Link onClick={scrollToTop} to={"/gethelp"} className="">
                    Get Help
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleShow} href="#!" className="">
                      Become A Volunteer
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                <h5>Our Impact</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link onClick={scrollToTop} to={"/programsprojects"} className="">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link onClick={scrollToTop} to={"/sponsorship"} className="">
                    Sponsorship
                    </Link>
                  </li>
                  <li>
                    <Link onClick={scrollToTop} to={"/"} className="">
                      HISOC Works
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                <h5>Get Involved</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link onClick={scrollToTop} to={"/topvolunteer"} className="">
                    Top Volunteer
                    </Link>
                  </li>
                  <li>
                    <Link onClick={scrollToTop} to={"/"} className="">
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link  onClick={scrollToTop} to={"/ourpodcast"} className="">
                    Our Podcast
                    </Link>
                  </li>
                  <li>
                    <Link  onClick={handleShow} href="#!" className="">
                      Be A Sponsor
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                <h5>Resources</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link onClick={scrollToTop} to={"/givedonation"} className="">
                    Give Donation
                    </Link>
                  </li>
                  <li>
                    <Link onClick={scrollToTop}  to={"/"} className="">
                      Financials
                    </Link>
                  </li>
                  <li>
                    <Link  onClick={scrollToTop} to={"/contactus"} className="">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

        <footer className="footer-bottom bg-dark text-white py-3">
          <div className="container d-flex flex-wrap justify-content-between align-items-center">
            {/* Left section with logos */}
            <div className="d-flex align-items-center flex-wrap justify-content-center mb-3 mb-md-0">
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
            <div className="text-center text-md-end socialicon">
              <div className="d-flex mb-2 justify-content-center justify-content-md-end">
                <Link onClick={scrollToTop} to="/" className="text-white me-3">
                  <i className="bi bi-facebook fs-5"></i>
                </Link>
                <Link onClick={scrollToTop} to="/" className="text-white me-3">
                  <i className="bi bi-x fs-5"></i>
                </Link>
                <Link onClick={scrollToTop} to="/" className="text-white me-3">
                  <i className="bi bi-instagram fs-5"></i>
                </Link>
              </div>
              <p className="mb-0">
                © Copyright 2007-2022, HISOC America. All Rights Reserved.
                <br />
                Designed by United Design Group |{" "}
                <Link to={"/"} className="text-white">
                  Legal
                </Link>{" "}
                |{" "}
                <Link  to={"/Privacy-policy"} className="text-white">
                  Privacy
                </Link>
              </p>
            </div>
          </div>
        </footer>
      </section>


      <VolunteerModalsignup
        handleClose={handleClose}
        show={showModal}
        loginbtn={handleShowlogin}
      />
      <VolunteerModallogin
        handleClose={handleCloselogin}
        show={showModallogin}
        forgetbtn={handleShowforget}
      />

      <VolunteerModalforget
        handleClose={handleCloseforget}
        show={showModalforget}
        handleShowforget2={handleShowforget2}
      />
      <VolunteerModalforget2
        show={showModalforget2}
        handleClose={handleCloseforget2}
      />
    </>
  );
}

export default Footer;
