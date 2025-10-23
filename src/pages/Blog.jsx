import React, { useState, useEffect } from "react";
import PageTitle from "../components/PageTitle";
import { Link } from "react-router-dom";

function Blog() {
   // JSON me SVG data
   const searchIcon = {
      viewBox: "0 0 584.4 584.4",
      paths: [
         {
            className: "st0",
            d: "M565.7,474.9l-61.1-61.1c-3.8-3.8-8.8-5.9-13.9-5.9c-6.3,0-12.1,3-15.9,8.3c-16.3,22.4-36,42.1-58.4,58.4c-4.8,3.5-7.8,8.8-8.3,14.5c-0.4,5.6,1.7,11.3,5.8,15.4l61.1,61.1c12.1,12.1,28.2,18.8,45.4,18.8c17.1,0,33.3-6.7,45.4-18.8C590.7,540.6,590.7,499.9,565.7,474.9z"
         },
         {
            className: "st1",
            d: "M254.6,509.1c140.4,0,254.5-114.2,254.5-254.5C509.1,114.2,394.9,0,254.6,0C114.2,0,0,114.2,0,254.5C0,394.9,114.2,509.1,254.6,509.1z M254.6,76.4c98.2,0,178.1,79.9,178.1,178.1s-79.9,178.1-178.1,178.1S76.4,352.8,76.4,254.5S156.3,76.4,254.6,76.4z"
         }
      ]
   };

   // ====== JSON DATA ======
   const blogData = [
      {
         id: 1,
         title: "Holiday Home Decoration I’ve Recently Ordered",
         author: "Mark Hanry",
         date: "20 Jan 2022",
         excerpt:
            "Entrepreneurs and go-getters often feel as if they carry the weight of an entire organization...",
         image: "/assets/img/blog/b-3.jpg",
         slug: "holiday-home-decoration",
         category: "Shirts",
         tags: ["Fashion", "Tips", "Home"]
      },
      {
         id: 2,
         title: "Worthy Cyber Monday Fashion From Ecomart",
         author: "Brian Hoff",
         date: "23 Jan 2022",
         excerpt:
            "There are so many websites out there that have not considered the overall usability...",
         image: "/assets/img/blog/b-1.jpg",
         slug: "worthy-cyber-monday-fashion",
         category: "Jackets",
         tags: ["Fashion", "Ecomart", "Tips"]
      },
      {
         id: 3,
         title: "Unique Ideas for Fashion You Haven’t heard yet",
         author: "Ecomart",
         date: "18 Jan 2022",
         excerpt:
            "There are so many websites out there that have not considered the overall usability...",
         image: "/assets/img/blog/b-2.jpg",
         slug: "unique-fashion-ideas",
         category: "Beachware",
         tags: ["Fashion", "Ideas", "Tips"]
      }
   ];

   const [blogs, setBlogs] = useState([]);

   useEffect(() => {
      // Simulate fetching data
      setBlogs(blogData);
   }, []);

   // ====== Extract categories & tags dynamically ======
   const categories = [...new Set(blogData.map((b) => b.category))];
   const tags = [...new Set(blogData.flatMap((b) => b.tags))];

   return (
      <>
         <PageTitle />

         <div className="container py-5">
            <div className="blog-area pt-120 pb-90">
               <div className="container container-small">
                  <div className="row">
                     {/* ===== BLOG LIST ===== */}
                     <div className="col-xl-8 col-lg-12">
                        <div className="blog-main-wrapper mb-30">
                           <div className="row">
                              {blogs.map((blog) => (
                                 <div key={blog.id} className="col-xl-12 col-lg-6 col-md-12">
                                    <div className="blog-wrapper position-relative mb-30">
                                       <div className="blog-thumb">
                                          <Link to={`/blog/${blog.slug}`}>
                                             <img src={blog.image} alt={blog.title} />
                                          </Link>
                                       </div>
                                       <div className="blog-content-wrapper">
                                          <div className="blog-meta">
                                             <div className="blog-date">
                                                <i className="flaticon-calendar"></i>
                                                <span>{blog.date}</span>
                                             </div>
                                             <div className="blog-user">
                                                <i className="flaticon-avatar"></i>
                                                <span>{blog.author}</span>
                                             </div>
                                          </div>
                                          <div className="blog-content">
                                             <Link to={`/blog/${blog.slug}`}>
                                                <h3>{blog.title}</h3>
                                             </Link>
                                             <p>{blog.excerpt}</p>
                                             <Link className="blog-btn" to={`/blog/${blog.slug}`}>
                                                Read more
                                             </Link>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              ))}
                           </div>

                           {/* Pagination */}
                           <div className="common-pagination mt-30 mb-20">
                              <ul>
                                 <li>
                                    <a href="#">
                                       <i className="fal fa-angle-left"></i>
                                    </a>
                                 </li>
                                 <li className="active">
                                    <a href="#">
                                       <span>01</span>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="#">
                                       <span>02</span>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="#">
                                       <i className="fal fa-angle-right"></i>
                                    </a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>

                     {/* ===== SIDEBAR ===== */}
                     <div className="col-xl-4 col-lg-8 col-md-8">
                        <div className="sidebar-widget-wrapper">
                           {/* Search */}
                           <div className="sidebar__search p-relative mb-30">
                              <form action="#">
                                 <input type="text" placeholder="Search for blogs..." />
                                 <button type="submit">
                                    <svg viewBox={searchIcon.viewBox} style={{ enableBackground: "new 0 0 584.4 584.4" }}>
                                       {searchIcon.paths.map((p, idx) => (
                                          <path key={idx} className={p.className} d={p.d}></path>
                                       ))}
                                    </svg>
                                 </button>
                              </form>
                           </div>

                           {/* Recent Posts */}
                           <div className="sidebar__widget mb-30">
                              <div className="sidebar__widget-head mb-35">
                                 <h4 className="sidebar__widget-title">Recent posts</h4>
                              </div>
                              <div className="sidebar__widget-content">
                                 <div className="rc__post-wrapper">
                                    {blogs.slice(0, 3).map((b) => (
                                       <div key={b.id} className="rc__post d-flex align-items-center">
                                          <div className="rc__thumb mr-20">
                                             <Link to={`/blog/${b.slug}`}>
                                                <img src={b.image} alt={b.title} />
                                             </Link>
                                          </div>
                                          <div className="rc__content">
                                             <div className="rc__meta">
                                                <span>{b.date}</span>
                                             </div>
                                             <h6 className="rc__title">
                                                <Link to={`/blog/${b.slug}`}>{b.title}</Link>
                                             </h6>
                                          </div>
                                       </div>
                                    ))}
                                 </div>
                              </div>
                           </div>

                           {/* Categories */}
                           <div className="sidebar__widget mb-30">
                              <div className="sidebar__widget-head mb-35">
                                 <h4 className="sidebar__widget-title">Categories</h4>
                              </div>
                              <div className="sidebar__widget-content">
                                 <div className="sidebar__category">
                                    <ul>
                                       {categories.map((cat, index) => (
                                          <li key={index}>
                                             <Link to={`/blog/category/${cat}`}>{cat}</Link>
                                          </li>
                                       ))}
                                    </ul>
                                 </div>
                              </div>
                           </div>

                           {/* Tags */}
                           <div className="sidebar__widget mb-30">
                              <div className="sidebar__widget-head mb-35">
                                 <h4 className="sidebar__widget-title">Tags</h4>
                              </div>
                              <div className="sidebar__widget-content">
                                 <div className="sidebar__tag">
                                    {tags.map((tag, index) => (
                                       <Link key={index} to={`/blog/tag/${tag}`}>
                                          {tag}
                                       </Link>
                                    ))}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* ===== END SIDEBAR ===== */}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default Blog;
