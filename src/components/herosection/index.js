import "./index.css";
import heropage2 from '../../Assets/images/heropage2.png'
import aboutherounderline from '../../Assets/images/aboutherounderline.png'
function HeroSection(props) {
  return (
    <>
      <div className="hero-section position-relative text-white">
      <img
        src={props?.heroimg} // replace with actual path to your image
        alt="Hero Background"
        className="img-fluid w-100"
        style={{ objectFit: 'cover', height: '100vh' }}
      />
      <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
        <div className="container text-center text-md-start">
          <h1 className="display-4 fw-bold">
            {props?.pagetitle} <span className="text-warning position-relative">{props?.title2} <img className="aboutherounderline" src={aboutherounderline}/></span>
          </h1>
          <p className="breadcrumb text-light">
            Home &gt; {props?.pagename}
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default HeroSection;
