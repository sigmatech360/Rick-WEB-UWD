import logo from "../../Assets/images/logo.png";
import donateicon from "../../Assets/images/donateicon.png";
import { Link } from "react-router-dom";

import contantunderline from '../../Assets/images/contantunderline.png'
import './index.css'
function Contact() {

 

    return (
        <>
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


        </>

    );
}

export default Contact;
