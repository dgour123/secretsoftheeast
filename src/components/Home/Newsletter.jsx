import React, { useEffect, useState } from "react";

const Newsletter = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/newsletter.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error loading newsletter:", err));
  }, []);

  if (!data) return null; // jab tak data load ho raha hai, kuch render na karo

  return (
    <section className="newsletter-area pt-0 pb-120">
      <div className="container">
        <div
          className="newsletter-wrapper"
          style={{
            backgroundImage: `url(${data.background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="newsletter-inner">
            <div className="newsletter-content">
              <div className="section-title text-center">
                <h2 className="section-main-title mb-30">{data.title}</h2>
              </div>
              <p className="mb-40">{data.description}</p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Subscribed Successfully!");
                }}
                className="subscribe-form subscribe-form-newsletter"
              >
                <input type="email" placeholder={data.placeholder} required />
                <button type="submit">
                  {data.buttonText} <i className="fas fa-long-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
