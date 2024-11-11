import "./index.css";
import heropage2 from "../../Assets/images/heropage2.png";
import Layout from "../../components/layout";
import ourmission from '../../Assets/images/ourmission.png'
import missionunderline from '../../Assets/images/missionunderline.png'
import ourstory from '../../Assets/images/ourstory.png'
import hopeunderline from "../../Assets/images/hopeunderline.png"
import HeroSection from "../../components/herosection";
import drivingchangecard1 from '../../Assets/images/drivingchangecard1.png'
import drivingchangecard2 from '../../Assets/images/drivingchangecard2.png'
 import dedicationunderline from '../../Assets/images/dedicationunderline.png'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Contact from "../../components/contact";
import Sponsor from "../../components/sponsor";
 
function About() {
    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <button type="button" className="slick-arrow slick-prev mb-2 " onClick={onClick}>
                <span className="arrow-icon">  <i class="fa fa-arrow-left" aria-hidden="true"></i></span>  
            </button>
        );
    };
    
    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <button type="button" className="slick-arrow slick-next mb-2" onClick={onClick}>
                <span className="arrow-icon">  <i class="fa fa-arrow-right" aria-hidden="true"></i></span>   
            </button>
        );
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
          {
            breakpoint: 1200, // Large screens
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 992, // Medium screens
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768, // Small screens
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };

    const teamMembers = [
        {
          name: 'Christine Stellino',
          title: 'Executive Director',
          imgSrc: drivingchangecard1, // replace with actual image paths
        },
        {
          name: 'Libby Shroeder',
          title: 'Chairmen',
          imgSrc: drivingchangecard2,
        },
        {
          name: 'Barbara Buckley',
          title: 'Vice Chairmen',
          imgSrc: drivingchangecard1,
        },
        {
          name: 'Julie Suchard',
          title: 'Treasurer',
          imgSrc: drivingchangecard2,
        },
      ];
    
  return (
    <>
      <Layout>
        <HeroSection
          heroimg={heropage2}
          pagetitle="About"
          pagename="About"
          title2="HIS-OC"
        />







        
      <section className="homeless-intervention">
        <div className="container-fluid">
          <div className="row">
            {/* Left Section */}
          

            <div className="col-lg-4 col-md-12 right-section d-flex flex-column justify-content-center  text-center text-md-start">
              <h2 className="right-section-text px-4">
              Transforming Lives Restoring Hope <br />
                {/* <span className="text-warning">Change</span> You Wish To <br /> */}
                 <span className="text-success position-relative">Hole <img className="hopeunderline" src={hopeunderline}/></span>
              </h2>
            </div>
            {/* Right Section */}


 
 
            <div className="lft col-lg-8 col-md-12  py-4 d-flex flex-column justify-content-center ">
            <div className="content left-section px-4">
  <h2 className="how-we-do px-4 mb-3">
    Our <span className="highlight-text position-relative">Mission <img src={missionunderline} className="wedotagline" /></span>
  </h2>
  <p className="wedopara px-4">
    Homeless Intervention Services of Orange County (HIS-OC) currently runs four programs that assist people who are homeless or at risk of being homeless. Our shelters and supportive service programs provide assistance to our community’s most vulnerable population. HIS-OC does not and shall not discriminate on the basis of race, color, religion (creed), gender, gender expression, age, national origin (ancestry), disability, marital status, sexual orientation, or military status, in any of its activities or operations.
  </p>
</div>

            
            </div>
            


 
          </div>
        </div>
      </section>




        
      <section className="legacy">
        <div className="container-fluid">
          <div className="row">
            {/* Left Section */}
          

            <div className="col-lg-4 col-md-12 right-section d-flex flex-column justify-content-center p-5 text-center text-md-start">
              <h2 className="right-section-text px-4">
              A                  <span className=" text-black  position-relative">Legacy <img className="hopeunderline" src={hopeunderline}/></span> Of Compassion Everyone Deserves <br />
                {/* <span className="text-warning">Change</span> You Wish To <br /> */}

              </h2>
            </div>
            {/* Right Section */}
{/* in react give full reponsive code using bootstrap */}

 
 
            <div className="  col-lg-8 col-md-12   py-5  d-flex flex-column justify-content-center ">
              <div className="content left-section px-4 justify-content-center">
                <h2 className="how-we-do px-4 mb-3">
                  Our <span className="highlight-text  position-relative">Story <img src={missionunderline}  className="wedotagline"/> </span>
                   
                </h2>
                <p className="wedopara px-4">
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
            


 
          </div>
        </div>
      </section>

<section className="driving-dedication">
      <div className="container my-5">
      <h2 className="title text-center mb-4">
        Driving Change with <span className="dedication  position-relative">Dedication <img className="dedicationunderline" src={dedicationunderline}/></span>
      </h2>
      <p className="para   text-muted mb-5">
        Our leadership team consists of passionate professionals and community leaders dedicated to ending homelessness. Guided by a clear vision and a hands-on approach, they work tirelessly to ensure that HIS-OC delivers impactful, life-changing services.
      </p>

      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div key={index} className="p-2">
            <div className="card border-0 shadow-sm text-center">
              <img
                src={member.imgSrc}
                className="card-img-top"
                alt={`${member.name}`}
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text text-muted">{member.title}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
</section>



<Contact/>


<Sponsor/>

      </Layout>
    </>
  );
}

export default About;
