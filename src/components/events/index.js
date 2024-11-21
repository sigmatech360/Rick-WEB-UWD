import React from "react";
import "./index.css";
import eventunderline from "../../Assets/images/eventunderlines.svg";
import eventcard1 from "../../Assets/images/eventcard1.png";
import eventcard2 from "../../Assets/images/eventcard2.png";

import eventcard3 from "../../Assets/images/eventcard3.png";

const Events = () => {
  const eventsData = [
    {
      id: 1,
      title: "August Events - Gomez Center",
      date: "July 2024",
      location: "1701 Atwood, Placentia, CA 92870",
      image: eventcard1, // Replace with the actual image path
    },
    {
      id: 2,
      title: "August Events - Whitten Center",
      date: "July 2024",
      location: "900 S Melrose St. Placentia, CA 92870",
      image: eventcard2, // Replace with the actual image path
    },
    {
      id: 3,
      title:
        "Cruzin' Back to School\" HIS-OC 2nd Annual Classic Car Show and Fundraiser",
      date: "July 2024",
      description:
        "Join us in sending our shelter residents and surrounding community youth back to school in style!",
      image: eventcard3, // Replace with the actual image path
    },
  ];

  const events = [
    {
      title: "Community Outreach Day",
      date: "June 15th, 2024",
      time: "10:00 AM - 2:00 PM",
      location: "Central Park, Orange County",
      bgImage: eventcard1,
    },
    {
      title: "Homeless Awareness",
      date: "October 9th, 2024",
      time: "9:00 AM - 12:00 PM",
      location: "HIS-OC Headquarters, Training Room",
      bgImage: eventcard2,
    },
    {
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
          <h2 className="event fw-bold">
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
            <div key={index} className="col-md-4 mb-4">
              <div
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
