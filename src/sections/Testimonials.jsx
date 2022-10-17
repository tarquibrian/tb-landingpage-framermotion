import React from "react";
import Testimonial from "../components/Testimonial";
import Title from "../components/Title";
import "../styles/sections/Testimonials.scss";

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="container">
        <div className="title-container">
          <Title title="Testimonials" color="blue" lineCenter={true} />
          <p>See what our clients are saying about us.</p>
        </div>
        <div className="testimonials">
          <Testimonial
            content="The best on the net! Software development saved my business."
            name="Trushit Vyas"
            designation="Co-Founder"
          />
          <Testimonial
            content="The best on the net! Software development saved my business."
            name="Trushit Vyas"
            designation="Co-Founder"
          />
          <Testimonial
            content="The best on the net! Software development saved my business."
            name="Trushit Vyas"
            designation="Co-Founder"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
