import logo from "../../Assets/images/logo.png";
import donateicon from "../../Assets/images/donateicon.png";
import { Link } from "react-router-dom";
import sponsorunderline from '../../Assets/images/sponsorunderline.svg'
import contantunderline from '../../Assets/images/contantunderline.png'
import './index.css'
function Sponsor() {

 

    return (
        <>
    <section className="sponsor-banner d-flex justify-content-center align-items-center">
        <h2 className=" sponsor-texttitle fw-bold text-white">
          BE A <span className="text-warning   position-relative">SPONSOR <img className="sponsorunderline" src={sponsorunderline}/></span>
        </h2>
      </section>



        </>

    );
}

export default Sponsor;
