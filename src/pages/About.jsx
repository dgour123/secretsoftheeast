import React from "react";
import PageTitle from "../components/PageTitle";

const About = () => {
  return (
     <>
      <PageTitle />  {/* No need to pass title/currentPage */}
      <div className="container py-5">
        <h2>Shop Page Content</h2>
      </div>
    </>
  );
};

export default About;
