
import './index.css'
import { Link } from "react-router-dom";
import bottomfooterlogo3 from "../../Assets/images/bottomfooterlogo3.png";
import bottomfooterlogo1 from "../../Assets/images/bottomlogo1.png";
import bottomfooterlogo2 from "../../Assets/images/bottomfooterlogo2.png";
import footerlogo from "../../Assets/images/footerlogo.svg";
function Footer() {

 

    return (
        <>



<section className="footer">
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

export default Footer;
