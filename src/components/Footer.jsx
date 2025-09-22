import React, { useEffect, useState } from "react";

const Footer = () => {
  const [footer, setFooter] = useState(null);

  useEffect(() => {
    fetch("/footer.json")
      .then((res) => res.json())
      .then((data) => setFooter(data))
      .catch((err) => console.error("Error loading footer:", err));
  }, []);

  if (!footer) return null;

  return (
    <footer className="footer1-bg">
      <section className="footer-area footer-area1-bg footer-area1 pt-95 pb-55">
        <div className="container">
          <div className="row">
            {footer.widgets.map((widget, i) => (
              <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget mb-40">
                  <div className="footer-widget-title">
                    <h4>{widget.title}</h4>
                  </div>
                  {widget.links ? (
                    <ul>
                      {widget.links.map((link, j) => (
                        <li key={j}>
                          <a href={link.url}>{link.text}</a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <>
                      <p className="mb-20">{widget.description}</p>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          alert("Subscribed Successfully!");
                        }}
                        className="subscribe-form"
                      >
                        <input type="text" placeholder={widget.placeholder} />
                        <button type="submit">
                          {widget.buttonText}{" "}
                          <i className="fas fa-long-arrow-right"></i>
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="footer-bottom-area">
        <div className="container">
          <div className="footer-bottom1-inner">
            {/* Support */}
            <div className="irc-item footer-support">
              <div className="irc-item-content">
                <p>{footer.support.time}</p>
                <div className="support-number">
                  <a href={`tel:${footer.support.phone}`}>
                    {footer.support.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Payment Cards */}
            <div className="cards-wrapper card-links">
              <p>We Support</p>
              <ul>
                {footer.cards.map((card, i) => (
                  <li key={i}>
                    <img src={card} alt="card" />
                  </li>
                ))}
              </ul>
            </div>

            {/* Apps */}
            <div className="apps-download">
              <div className="apps-download-text">
                <h5>Download App on Mobile</h5>
                <p>Free home delivery on your first purchase</p>
              </div>
              <div className="app-links">
                <ul>
                  {footer.apps.map((app, i) => (
                    <li key={i}>
                      <img src={app} alt="app" />
                    </li>
                  ))}
                </ul>
              </div>  
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright-copyright-area copyright1-area">
        <div className="container">
          <div className="copyright1-inner">
            <div className="copyright-text">
              {footer.copyright.text}
            </div>
            <div className="copyright-link">
              {footer.copyright.links.map((link, i) => (
                <a key={i} href={link.url} className="text-btn">
                  {link.text}
                </a>
              ))}
            </div>
            <div className="social-wrapper">
              <p>Follow Us:</p>
              <div className="social__links">
              <ul>
                {footer.socials.map((social, i) => (
                  <li key={i}>
                    <a href={social.url}>
                      <i className={social.icon}></i>
                    </a>
                  </li>
                ))}
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
