import React from "react";
import "./index.css";

import podcastimg1 from "../../Assets/images/podcastimg1.png";
import podcastimg2 from "../../Assets/images/podcastimg2.png";
import podcastimg3 from "../../Assets/images/podcastimg3.png";
import partnerunderline from "../../Assets/images/programunderline.svg";
const Ourpodcasts = () => {
  return (
    <div className="podcasts">
      <div className="container mt-5">
        <div className="row">
          <h3 className="titles mb-4 d-flex justify-content-center">
            Brows Our{" "}
            <span className="position-relative">
              {" "}
              Podcast
              <img src={partnerunderline} className="underline" />
            </span>
          </h3>
          <div className="col-md-4 mb-4">
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

          <div className="col-md-4 mb-4">
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
          <div className="col-md-4 mb-4">
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

          <div className="col-md-4 mb-4">
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

          <div className="col-md-4 mb-4">
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
          <div className="col-md-4 mb-4">
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
