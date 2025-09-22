import React from "react";
import PageTitle from "../components/PageTitle";

const Shop = () => {
  return (
    <>
      <PageTitle />  {/* No need to pass title/currentPage */}
      <div className="container py-5">
        <h2>Shop Page Content</h2>
      </div>
    </>
  );
};

export default Shop;
