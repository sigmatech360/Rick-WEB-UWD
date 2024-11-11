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
        <h2 className="title fw-bold   text-center">
            We'd <span className=" position-relative text-warning">Love To Hear 
            <img src={contantunderline} className="contantunderline" /></span> From You
        </h2>
        <p className="subtitle w-lg-50 w-xl-50  mx-auto text-center mb-4">
            If you would like to contact HISOC, please fill out the contact form below and one of our team members will be sure to follow up with you.
        </p>
        <div className="row gx-0 d-flex align-items-stretch">
            {/* <!-- Left Contact Information Panel with Grid Layout --> */}
            <div className="col-md-12  col-lg-6 mb-4 mb-md-0 d-flex">
                <div className="contact-info-panel p-4 shadow-sm w-100 rounded-start">
                    <div className="contact-grid">
                        <div className="contact-item p-3 rounded bg-white">
                            <p className="para mb-0">Executive Director  <span> Christine</span> Stellino</p>
                            <a href="mailto:christine@his-oc.org" className="text-muted">christine@his-oc.org</a>
                        </div>
                        <div className="contact-item p-3 rounded bg-white">
                            <p className="para mb-0">Program Director <span> Alfa Hern</span>andez</p>
                            <a href="mailto:alfa@his-oc.org" className="text-muted">alfa@his-oc.org</a>
                        </div>
                        <div className="contact-item p-3 rounded bg-white">
                            <p className="para mb-0">Program Manager <span>Anthony</span> Trejo</p>
                            <a href="mailto:anthony@his-oc.org" className="text-muted">anthony@his-oc.org</a>
                        </div>
                        <div className="contact-item p-3 rounded bg-white">
                            <p className="para mb-0">TAY Program <span> Cuca Tre</span>jo</p>
                            <a href="mailto:cuca@his-oc.org" className="text-muted">cuca@his-oc.org</a>
                        </div>
                        <div className="contact-item p-3 rounded bg-white">
                            <p className="para mb-0">Housing Connection <span>   Cuca Tre</span>jo</p>
                            <a href="mailto:cuca@his-oc.org" className="text-muted">cuca@his-oc.org</a>
                        </div>
                        <div className="contact-item p-3 rounded bg-white">
                            <p className="para mb-0">HomeShare OC  <span>Melinda </span>Garcia</p>
                            <a href="mailto:melinda@his-oc.org" className="text-muted">melinda@his-oc.org</a>
                        </div>
                        <div className="contact-item p-3 rounded bg-white">
                            <p className="para mb-0">Transitional Housing <span> Information</span></p>
                            <a href="mailto:info@his-oc.org" className="text-muted">info@his-oc.org</a>
                        </div>
                        <div className="contact-item p-3 rounded bg-white">
                            <p className="para mb-0">Communications <span>Rick Pon</span> ce</p>
                            <a href="mailto:rick@his-oc.org" className="text-muted">rick@his-oc.org</a>
                        </div>
                        <div className="contact-item p-3 rounded bg-white">
                            <p className="para mb-0"><span>Donations :</span></p>
                            <a href="mailto:leanne@his-oc.org" className="text-muted">leanne@his-oc.org</a>
                        </div>
                        <div className="contact-item p-3 rounded bg-white">
                            <p className="para mb-0">Intake Coordinator (CalAim) Madeline <span>Domingo</span></p>
                            <a href="mailto:madeline@his-oc.org" className="text-muted">madeline@his-oc.org</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Right Contact Form Panel --> */}
            <div className="col-md-12 col-lg-6 d-flex">
                <div className="contact-form-panel p-4 shadow-sm w-100 bg-white rounded-end">
                    <h3 className="contacttext fw-bold text-black mb-3">Contact Us</h3>
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
                        <button type="submit" className="send-message btn">Send Message</button>
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
