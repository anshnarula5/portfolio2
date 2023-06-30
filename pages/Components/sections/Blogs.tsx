import React from "react";
import Auth from "../Blogs/Auth";
import Redux from "../Blogs/Redux";
import Email from "../Email";
import Eda from "../Blogs/Eda";

const Blogs = () => {
  return (
    <div className="blogs pt-3 d-flex flex-wrap  " >
      <Eda />
      <Redux />
      <Auth />
    </div>
  );
};

export default Blogs;
