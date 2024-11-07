import logo from "../../Assets/images/logo.png";
import donateicon from "../../Assets/images/donateicon.png";
import { Link } from "react-router-dom";
import "./index.css";
function Header() {
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
                      to="/about"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      About
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/about" className="dropdown-item">
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
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="/ourwork"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Our Works
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/ourwork">
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
                    <Link className="nav-link" to="/gethelp">
                      Get Help
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="/givedonation"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Donate
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/givedonation">
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
    </>
  );
}

export default Header;
