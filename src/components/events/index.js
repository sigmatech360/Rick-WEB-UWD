import React, { useEffect } from "react";

import AOS from "aos";
import "./index.css";
import eventunderline from "../../Assets/images/eventunderlines.svg";
import eventcard1 from "../../Assets/images/eventcard1.png";
import eventcard2 from "../../Assets/images/eventcard2.png";

import eventcard3 from "../../Assets/images/eventcard3.png";
import 'aos/dist/aos.css';
const Events = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const events = [
    {
      animation: "fade-right",
      title: "Community Outreach Day",
      date: "June 15th, 2024",
      time: "10:00 AM - 2:00 PM",
      location: "Central Park, Orange County",
      bgImage: eventcard1,
    },
    {
      animation: "fade-up",
      title: "Homeless Awareness",
      date: "October 9th, 2024",
      time: "9:00 AM - 12:00 PM",
      location: "HIS-OC Headquarters, Training Room",
      bgImage: eventcard2,
    },
    {
      animation: "fade-left",
      title: "Volunteer Orientation",
      date: "November 2nd, 2024",
      time: "9:00 AM - 12:00 PM",
      location: "HIS-OC Headquarters, Training Room",
      bgImage: eventcard3,
    },
  ];

  return (
    <section className="events-section py-5">
      <div className="container">
        {/* <h2 className="event text-center position-relative fw-bold mb-5">
Events
<img className="event-underline" src={eventunderline} alt="Underline Decoration" />
</h2> */}
        <div className="event-container text-center">
          <h2
            className="event fw-bold"
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-duration="1000"
          >
            Events
            <img
              className="event-underline"
              src={eventunderline}
              alt="Underline Decoration"
            />
          </h2>
        </div>
        {/* <div className="row">
          {eventsData.map((event) => (
            <div key={event.id} className="col-md-4 mb-4">
              <div className=" bg-white shadow-sm rounded ">
                <img
                  src={event.image}
                  alt={event.title}
                  className="img-fluid rounded  "
                />
                <div className="event-details p-3">
                  <p className="text-muted mb-1">{event.date}</p>
                  <h5 className="fw-bold mb-2">{event.title}</h5>
                  {event.location && (
                    <p className="eventlocation mb-1 ">{event.location}</p>
                  )}
                  {event.description && (
                    <p className="small mb-0">{event.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div> */}
        <div className="row g-4">
          {events.map((event, index) => (
            <div key={index} className="evemtcard col-md-4 mb-4">
              <div
                data-aos={event?.animation}
                data-aos-offset="0"
                data-aos-duration="1000"
                className="event-card text-black shadow-sm"
                style={{ backgroundImage: `url(${event.bgImage})` }}
              >
                <h5 className="card-title">{event.title}</h5>
                <p className="card-text">
                  <i className="bi bi-calendar-event"></i> {event.date}
                </p>
                <p className="card-text">
                  <i className="bi bi-clock"></i> {event.time}
                </p>
                <p className="card-text">
                  <i className="bi bi-geo-alt"></i> {event.location}
                </p>
              </div>
            </div>
          ))}
          <button className="eventviewallbtn">View all Events</button>
        </div>
      </div>
    </section>
  );
};

export default Events;
