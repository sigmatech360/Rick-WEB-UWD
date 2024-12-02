import React, { useEffect } from "react";
import "./index.css";

import AOS from "aos";
import podcastimg1 from "../../Assets/images/podcastimg1.png";
import podcastimg2 from "../../Assets/images/podcastimg2.png";
import podcastimg3 from "../../Assets/images/podcastimg3.png";
import partnerunderline from "../../Assets/images/programunderline.svg";
const Ourpodcasts = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="podcasts">
      <div className="container mt-5">
        <div className="row">
          <h3
            className="titles mb-4 d-flex justify-content-center"
            data-aos="fade-right"
            data-aos-offset="0"
            data-aos-duration="1000"
          >
            Brows Our{" "}
            <span className="position-relative">
              {" "}
              Podcast
              <img src={partnerunderline} className="underline" />
            </span>
          </h3>
          <div className="Podcastcard col-md-4 mb-4"  data-aos="fade-right"
                        data-aos-offset="0"
                        data-aos-duration="1000"
>
            <div className="podcast-card">
              <img
                src={podcastimg1}
                className="img-fluid card-img-top"
                alt="The Journey to Stability"
              />
              <div className="podcastcardbody">
                <div className="video-meta gap-4">
                  <span className="video-duration">
                    <i className="bi bi-clock"></i> 1hr 24m
                  </span>
                  <span className="video-date me-4">
                    <i className="bi bi-calendar"></i> 12 Nov 2024
                  </span>
                </div>
                <h5 className="card-title">The Journey to | Stability</h5>
                <p className="card-text">
                  Discover the stories of individuals and families who’ve
                  transitioned from homelessness to stability with the help of
                  HIS-OC.
                </p>
              </div>
            </div>
          </div>

          <div className=" Podcastcard col-md-4 mb-4"  data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="1000"
>
            <div className="podcast-card">
              <img
                src={podcastimg2}
                className="img-fluid card-img-top"
                alt="The Journey to Stability"
              />
              <div className="podcastcardbody">
                <div className="video-meta gap-4">
                  <span className="video-duration">
                    <i className="bi bi-clock"></i> 1hr 24m
                  </span>
                  <span className="video-date me-4">
                    <i className="bi bi-calendar"></i> 12 Nov 2024
                  </span>
                </div>
                <h5 className="card-title">The Journey to | Stability</h5>
                <p className="card-text">
                  Discover the stories of individuals and families who’ve
                  transitioned from homelessness to stability with the help of
                  HIS-OC.
                </p>
              </div>
            </div>
          </div>
          <div className=" Podcastcard col-md-4 mb-4"  data-aos="fade-left"
                        data-aos-offset="0"
                        data-aos-duration="1000"
>
            <div className="podcast-card">
              <img
                src={podcastimg3}
                className="img-fluid card-img-top"
                alt="The Journey to Stability"
              />
              <div className="podcastcardbody">
                <div className="video-meta gap-4">
                  <span className="video-duration">
                    <i className="bi bi-clock"></i> 1hr 24m
                  </span>
                  <span className="video-date me-4">
                    <i className="bi bi-calendar"></i> 12 Nov 2024
                  </span>
                </div>
                <h5 className="card-title">The Journey to | Stability</h5>
                <p className="card-text">
                  Discover the stories of individuals and families who’ve
                  transitioned from homelessness to stability with the help of
                  HIS-OC.
                </p>
              </div>
            </div>
          </div>

          <div className=" Podcastcard col-md-4 mb-4"  data-aos="fade-right"
                        data-aos-offset="0"
                        data-aos-duration="1000"
>
            <div className="podcast-card">
              <img
                src={podcastimg1}
                className="img-fluid card-img-top"
                alt="The Journey to Stability"
              />
              <div className="podcastcardbody">
                <div className="video-meta gap-4">
                  <span className="video-duration">
                    <i className="bi bi-clock"></i> 1hr 24m
                  </span>
                  <span className="video-date me-4">
                    <i className="bi bi-calendar"></i> 12 Nov 2024
                  </span>
                </div>
                <h5 className="card-title">The Journey to | Stability</h5>
                <p className="card-text">
                  Discover the stories of individuals and families who’ve
                  transitioned from homelessness to stability with the help of
                  HIS-OC.
                </p>
              </div>
            </div>
          </div>

          <div className=" Podcastcard col-md-4 mb-4"  data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="1000"
>
            <div className="podcast-card">
              <img
                src={podcastimg2}
                className="img-fluid card-img-top"
                alt="The Journey to Stability"
              />
              <div className="podcastcardbody">
                <div className="video-meta gap-4">
                  <span className="video-duration">
                    <i className="bi bi-clock"></i> 1hr 24m
                  </span>
                  <span className="video-date me-4">
                    <i className="bi bi-calendar"></i> 12 Nov 2024
                  </span>
                </div>
                <h5 className="card-title">The Journey to | Stability</h5>
                <p className="card-text">
                  Discover the stories of individuals and families who’ve
                  transitioned from homelessness to stability with the help of
                  HIS-OC.
                </p>
              </div>
            </div>
          </div>
          <div className=" Podcastcard col-md-4 mb-4"  data-aos="fade-lef"
                        data-aos-offset="0"
                        data-aos-duration="1000"
> 
            <div className="podcast-card">
              <img
                src={podcastimg3}
                className="img-fluid card-img-top"
                alt="The Journey to Stability"
              />
              <div className="podcastcardbody">
                <div className="video-meta gap-4">
                  <span className="video-duration">
                    <i className="bi bi-clock"></i> 1hr 24m
                  </span>
                  <span className="video-date me-4">
                    <i className="bi bi-calendar"></i> 12 Nov 2024
                  </span>
                </div>
                <h5 className="card-title">The Journey to | Stability</h5>
                <p className="card-text">
                  Discover the stories of individuals and families who’ve
                  transitioned from homelessness to stability with the help of
                  HIS-OC.
                </p>
              </div>
            </div>
          </div>

          <button className="viewall"> View all Podcast</button>
          {/* Repeat this block for other podcast cards */}
        </div>
      </div>
    </div>
  );
};

export default Ourpodcasts;
