import React from "react";
import Auth from "../Blogs/Auth";
import Redux from "../Blogs/Redux";
import Email from "../Email";

const Blogs = () => {
  return (
    <div className="blogs pt-3 d-flex flex-wrap  " >
      <Redux />
      <Auth />
      <Email />
    </div>
  );
};

export default Blogs;
