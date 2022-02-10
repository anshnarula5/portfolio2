import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Hero = () => {
  const [url, setUrl] = useState<String>("");
  const router = useRouter();
  useEffect(() => {
    const path = router.asPath;
    console.log(router)
    setUrl(path);
  }, [router.asPath]);
  return (
    <div className="hero sticky-top pt-5">
      <h1 className="name ">
        Hello there, <br />I am Ansh Narula
      </h1>
      <div className="my-5">
        I am a passionate full stack developer with background knowledge of MERN
        stack with redux.
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <a
          href="#projects"
          className={`link my-1 ${url === "/#projects" && "active"}`}
        >
          Projects
        </a>
        <a
          href="#tech"
          className={`link my-1 ${url === "/#tech" && "active"}`}
        >
          Tech
        </a>
        <a
          href="#blogs"
          className={`link my-1 ${url === "/#blogs" && "active"}`}
        >
          Blogs
        </a>
      </div>
    </div>
  );
};

export default Hero;
