import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../Assets/images/logo.png";
import donateicon from "../../Assets/images/donateicon.png";
import { Link } from "react-router-dom";
import "./index.css";
import {
  VolunteerModalsignup,
  VolunteerModalforget,
  VolunteerModallogin,
  VolunteerModalforget2,
} from "../../components/modal";

function Header() {
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

  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown((prev) => !prev);
  };

  //   const [isOpen, setIsOpen] = useState(false);

  // const handleclick = () => {
  //   setIsOpen(!isOpen);
  // };

  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const handleclicks = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  const location = useLocation();

  return (
    <>
      <section className="header-section">
        <div className="container py-2">
          <div className="d-flex flex-wrap justify-content-between align-items-center text-white">
            <div className="header-item d-flex align-items-center">
              <i className="bi bi-geo-alt-fill me-2"></i>
              PO Box 1293, Placentia, CA 92871
            </div>
            <div className="separator d-none d-md-block"></div>
            <div className="header-item d-flex align-items-center">
              <i className="bi bi-clock me-2"></i>
              Mon – Thu 9AM – 5PM, Fri 9AM – 4PM
            </div>
            <div className="separator d-none d-md-block"></div>
            <div className="header-item d-flex align-items-center">
              <i className="bi bi-telephone-fill me-2"></i>
              (714) 993-5774
            </div>
            <div className="separator d-none d-md-block"></div>
            <div className="header-item d-flex align-items-center">
              <i className="bi bi-envelope me-2"></i>
              info@his-oc.org
            </div>
          </div>
        </div>
      </section>

      <section>
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light px-3"> */}
        <nav className="navbar navbar-expand-lg   ">
          <div className="container">
            <Link
              className="navbar-brand d-flex align-items-center d-lg-none" 
              to="/"
            >
              <img src={logo} alt="Logo" className="mainheaderimg" />
            </Link>

            {/* Navbar Toggler */}
            <button
              onClick={handleclick}
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
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
                <ul className="navbar-nav d-flex align-items-center meauto mb2 mb-lg-0">
                  <li className="nav-item dropdown">
                    <Link className={`nav-link ${location.pathname.includes('/about') ? 'active' : ''}`}  to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className={`nav-link ${location.pathname.includes('/ourwork') ? 'active' : ''}`} to="/ourwork">
                      Our Works
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${location.pathname.includes('/gethelp') ? 'active' : ''}`}  to="/gethelp">
                      Get Help
                    </Link>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="/about"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Programs
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/sponsorship" className="dropdown-item">
                          Sponsorship
                        </Link>
                      </li>
                      <li>
                        <Link className={`dropdown-item ${location.pathname.includes('/programsprojects') ? 'active' : ''}`} to="/programsprojects">
                          Programs projects
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link className={`dropdown-item ${location.pathname.includes('/topvolunteer') ? 'active' : ''}`} to="/topvolunteer">
                          Top Volunteer
                        </Link>
                      </li>
                      <li>
                        <Link className={`dropdown-item ${location.pathname.includes('/ourpodcast') ? 'active' : ''}`} to="/ourpodcast">
                          Our Podcast
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <Link className={`nav-link ${location.pathname.includes('/givedonation') ? 'active' : ''}`} to="/givedonation">
                      Donate
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${location.pathname.includes('/contactus') ? 'active' : ''}`} to="/contactus">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Second logo: visible only in full-screen mode */}
              <div className="d-none d-lg-block">
                <Link className="navbar-brand" to="/">
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
                <button onClick={handleShow} className="nav-event btn   me-2">
                  Become A Volunteer
                </button>

                <Link className="nav-donate btn btn-warning text-dark">
                  {" "}
                  <img src={donateicon} /> Donate
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {naveshow === true && (
          <ul class="responsivenavbar-nav me-auto mb-2 mb-lg-0 d-lg-none ">
            <div className="responsiveheader">
              {" "}
              <span>
                {" "}
                <Link class="navbar-brand techVerse_logo" to={"/"}>
                  {/* <img src={logo} alt="" /> */}
                </Link>
              </span>
              <span>
                {" "}
                <i
                  class="fa-solid fa-times menu-icon"
                  id="close-icon"
                  type="button "
                  onClick={handleclick}
                ></i>
              </span>
            </div>
            <div className="dropdown_menu_divider"></div>
            <li class="main-navbar-list">
              <Link class="new_main-navbar-list" to="/about">
                About
              </Link>
            </li>{" "}
            <div className="dropdown_menu_divider"></div>
            <li class="main-navbar-list">
              <Link class="new_main-navbar-list" to="/ourwork ">
                Our Work
              </Link>
            </li>{" "}
            <div className="dropdown_menu_divider"></div>
            <li class="main-navbar-list">
              <Link class="new_main-navbar-list" to="/gethelp">
                Get Help
              </Link>
            </li>{" "}
            <div className="dropdown_menu_divider"></div>
            <li class="main-navbar-list">
              <Link class="new_main-navbar-list" to="/givedonation">
                Donation
              </Link>
            </li>{" "}
            <div className="dropdown_menu_divider"></div>
            <li class="main-navbar-list">
              <Link class="new_main-navbar-list" to="/contactus">
                Contact
              </Link>
            </li>{" "}
            <div className="dropdown_menu_divider"></div>
            {/* <li class="main-navbar-list">
              <Link class="new_main-navbar-list" to="/">
                CONTACT
              </Link>
            </li>{" "} */}
            <div className="dropdown_menu_divider"></div>
            <li class="main-navbar-list  ">
              <Link onClick={handleShow} class="new_main-navbar-list">
                Become A Volunteer
              </Link>
            </li>
            <div className="dropdown_menu_divider"></div>
            <li class="main-navbar-list">
              <Link
                type="button"
                // onClick={handleDropdownToggle}
                // class="new_main-navbar-list"

                className="nav-link dropdown-toggle mb-2"
                // to="/about"
                // role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Programs
              </Link>

              {/* <ul className="dropdown-menu">
                      <li>
                        <Link to="/sponsorship" className="dropdown-item">
                          Sponsorship
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/programsprojects">
                          Programs projects
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/topvolunteer">
                          Top Volunteer
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/ourpodcast">
                          Our Podcast
                        </Link>
                      </li>
                    </ul> */}

              {/* Dropdown Menu */}
              {/* {showDropdown && ( */}
              <ul className="dropdown-menu">
                <li>
                  <Link to="/sponsorship" className="dropdown-item">
                    Sponsorship
                  </Link>
                </li>
                <li>
                  <Link to="/programsprojects" className="dropdown-item">
                    Programs Projects
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to="/topvolunteer" className="dropdown-item">
                    Top Volunteer
                  </Link>
                </li>
                <li>
                  <Link to="/ourpodcast" className="dropdown-item">
                    Our Podcast
                  </Link>
                </li>
              </ul>
              {/* )} */}
            </li>
            <div className="dropdown_menu_divider"></div>
            <li>
              <Link className="nav-donate btn btn-warning text-dark">
                {" "}
                <img src={donateicon} /> Donate
              </Link>
            </li>
            <div className="dropdown_menu_divider"></div>
          </ul>
        )}
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

export default Header;
