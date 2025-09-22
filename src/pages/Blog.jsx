import React from 'react'
import PageTitle from "../components/PageTitle";


function Blog() {
  return (
    <>
      <PageTitle />  {/* No need to pass title/currentPage */}
      <div className="container py-5">
        <h2>Blog Page Content</h2>
      </div>
    </>
  )
}

export default Blog