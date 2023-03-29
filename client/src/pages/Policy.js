import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/privacy1.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="mt-5">
            We might receive information about you from other sources, such as
            updated delivery and address information from our carriers, which we
            use to correct our records and deliver your next purchase more
            easily
          </p>
          <p>
            We use your personal information to provide functionality, analyze
            performance, fix errors, and improve the usability and effectiveness
            of the Amazon Services.
          </p>
          <p>
            We use your personal information to take and handle orders, deliver
            products and services, process payments, and communicate with you
            about orders, products and services, and promotional offers.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
