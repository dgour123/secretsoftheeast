import React from "react";
import { Link, useLocation } from "react-router-dom";

const PageTitle = () => {
  const location = useLocation();
  const path = location.pathname.replace("/", "") || "Home";

  // Capitalize (shop → Shop, about → About)
  const formattedTitle = path.charAt(0).toUpperCase() + path.slice(1);

  return (
    <section
      className="page-title-area"
      style={{ backgroundImage: `url(/assets/img/bg/page-title-bg.jpg)` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-title-wrapper text-center">
              <h1 className="page-title mb-10">{formattedTitle}</h1>
              <div className="breadcrumb-menu">
                <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                  <ul className="trail-items">
                    <li className="trail-item trail-begin">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="trail-item trail-end">
                      <span>{formattedTitle}</span>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
