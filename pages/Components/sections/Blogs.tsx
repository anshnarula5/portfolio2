import React from "react";
import Auth from "../Blogs/Auth";
import Redux from "../Blogs/Redux";

const Blogs = () => {
  return (
    <div className="blogs pt-3 d-flex flex-wrap  " >
      <Redux />
      <Auth />
    </div>
  );
};

export default Blogs;
