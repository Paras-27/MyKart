import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - MyKart"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-5">
            MyKart is guided by four principles: customer obsession rather than
            competitor focus, passion for invention, commitment to operational
            excellence, and long-term thinking. MyKart strives to be Earth’s
            most customer-centric company, Earth’s best employer, and Earth’s
            safest place to work. Customer reviews, 1-Click shopping,
            personalized recommendations, Prime, Fulfillment by MyKart, AWS,
            Kindle Direct Publishing, Kindle, Career Choice, Fire tablets, Fire
            TV, MyKart Echo, Alexa, Just Walk Out technology, MyKart Studios,
            and The Climate Pledge are some of the things pioneered by MyKart.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
