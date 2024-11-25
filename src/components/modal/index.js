import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { FaUser, FaEnvelope, FaPhoneAlt, FaLock } from "react-icons/fa";
import "./index.css";
import { Link } from "react-router-dom";
import { FiSmartphone } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";

export function VolunteerModalsignup({ show, handleClose, loginbtn }) {
  return (
    <section className="VolunteerModal">
      <Modal size="md" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {/* <h4 className="modaltitle text-center">Unite With Us To Rewrite</h4> */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <p className="text-center text-muted" style={{ fontStyle: 'italic' }}>
          Life Stories.
        </p> */}
          <h4 className="modaltitle  ">Unite With Us To Rewrite</h4>
          <h4 className="modaltitle">
            {" "}
            <span> Life Stories. </span>
          </h4>
          <Form>
            {/* Name Field */}
            <Form.Group className="mt-3" controlId="name">
              <div className="modalfields d-flex align-items-center border rounded p-2">
                <i className="bi bi-person"></i>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  className="border-0"
                  style={{ boxShadow: "none" }}
                />
              </div>
            </Form.Group>

            {/* Email Field */}
            <Form.Group className="mt-3" controlId="email">
              <div className=" modalfields d-flex align-items-center border rounded p-2">
                <i className="bi bi-envelope"></i>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  className="border-0"
                  style={{ boxShadow: "none" }}
                />
              </div>
            </Form.Group>

            {/* Phone Number Field */}
            <Form.Group className="mt-3" controlId="phone">
              <div className="modalfields d-flex align-items-center border rounded p-2">
                <FiSmartphone className="me-2 text-muted" />

                <Form.Control
                  type="tel"
                  placeholder="Phone Number"
                  className="border-0"
                  style={{ boxShadow: "none" }}
                />
              </div>
            </Form.Group>

            {/* Password Field */}
            <Form.Group className="mt-3" controlId="password">
              <div className="modalfields d-flex align-items-center border rounded p-2">
                <RiLockPasswordLine className="me-2 text-muted" />
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="border-0"
                  style={{ boxShadow: "none" }}
                />
              </div>
            </Form.Group>

            {/* Terms and Conditions */}
            <Form.Group className="mt-3 d-flex align-items-center">
              <Form.Check type="checkbox" />
              <Form.Label className="ms-2 mb-0">
                I accept the terms and conditions
              </Form.Label>
            </Form.Group>

            {/* Submit Button */}
            <Button
              variant="success"
              type="submit"
              className="mt-4 w-100 becomeavalbtn"
            >
              Become a Volunteer
            </Button>
          </Form>

          <div className="text-center mt-3">
            <small className="loginmodalbtn">
              Already have an account? <Link onClick={loginbtn}>Log In</Link>
            </small>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
}

// export default VolunteerModal;

export function VolunteerModallogin({
  show,
  handleCloselogin,
  handleClose,
  forgetbtn,
}) {
  return (
    <section className="VolunteerModal">
      <Modal size="md" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {/* <h4 className="modaltitle text-center">Unite With Us To Rewrite</h4> */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <p className="text-center text-muted" style={{ fontStyle: 'italic' }}>
          Life Stories.
        </p> */}
          <h4 className="modaltitle  ">Unite With Us To Rewrite</h4>
          <h4 className="modaltitle">
            {" "}
            <span> Life Stories. </span>
          </h4>
          <Form>
            {/* Email Field */}
            <Form.Group className="mt-3" controlId="email">
              <div className=" modalfields d-flex align-items-center border rounded p-2">
                <i className="bi bi-envelope"></i>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  className="border-0"
                  style={{ boxShadow: "none" }}
                />
              </div>
            </Form.Group>

            {/* Password Field */}
            <Form.Group className="mt-3" controlId="password">
              <div className="modalfields d-flex align-items-center border rounded p-2">
                <RiLockPasswordLine className="me-2 text-muted" />
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="border-0"
                  style={{ boxShadow: "none" }}
                />
              </div>
            </Form.Group>

            {/* Submit Button */}
            <Button
              variant="success"
              type="submit"
              className="mt-4 w-100 becomeavalbtn"
            >
              Login
            </Button>
          </Form>

          <div className="forget d-flex    mx-auto  justify-content-center   mt-3">
            <div></div>
            <div>
              {" "}
              <Link onClick={forgetbtn} className=" loginmodalbtn">
                Forget Password
              </Link>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
}

// export default VolunteerModal;

// Forget

export function VolunteerModalforget({
  show,
  handleCloselogin,
  handleClose,
  handleShowforget2,
}) {
  return (
    <section className="VolunteerModal">
      <Modal size="md" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {/* <h4 className="modaltitle text-center">Unite With Us To Rewrite</h4> */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <p className="text-center text-muted" style={{ fontStyle: 'italic' }}>
          Life Stories.
        </p> */}
          <h4 className="modaltitle  ">Unite With Us To Rewrite</h4>
          <h4 className="modaltitle">
            {" "}
            <span> Life Stories. </span>
          </h4>
          <Form>
            {/* Email Field */}
            <Form.Group className="mt-3" controlId="email">
              <div className=" modalfields d-flex align-items-center border rounded p-2">
                <i className="bi bi-envelope"></i>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  className="border-0"
                  style={{ boxShadow: "none" }}
                />
              </div>
            </Form.Group>

            {/* Password Field */}

            {/* Submit Button */}
            <Button
              onClick={handleShowforget2}
              variant="success"
              type="submit"
              className="mt-4 w-100 becomeavalbtn"
            >
              Forgot
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </section>
  );
}

export function VolunteerModalforget2({
  show,
  handleCloselogin,
  handleClose,
  handleShowforget2,
}) {
  return (
    <section className="VolunteerModal">
      <Modal size="md" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {/* <h4 className="modaltitle text-center">Unite With Us To Rewrite</h4> */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <p className="text-center text-muted" style={{ fontStyle: 'italic' }}>
          Life Stories.
        </p> */}
          <h4 className="modaltitle  ">Unite With Us To Rewrite</h4>
          <h4 className="modaltitle">
            {" "}
            <span> Life Stories. </span>
          </h4>
          <Form>
            {/* Email Field */}
            <Form.Group className="mt-3" controlId="email">
              <div className=" modalfields d-flex align-items-center border rounded p-2">
                {/* <i className="bi bi-envelope"></i> */}
                <Form.Control
                  type="text"
                  placeholder="Code"
                  className="border-0"
                  style={{ boxShadow: "none" }}
                />
              </div>
            </Form.Group>

            {/* Password Field */}

            {/* Submit Button */}
            <Button
              onClick={handleShowforget2}
              variant="success"
              type="submit"
              className="mt-4 w-100 becomeavalbtn"
            >
              forgot
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </section>
  );
}
