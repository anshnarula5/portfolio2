import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Hero = () => {
  const [url, setUrl] = useState<String>("");
  const [toggle, setToggle] = useState<Boolean>(false);
  const router = useRouter();
  useEffect(() => {
    const path = router.asPath;
    setUrl(path);
    console.log(path);
  }, [router.asPath, toggle]);
  return (
    <div className="hero sticky-top pt-5">
      <h1 className="name ">
        Hello there, <br />I am Ansh Narula
      </h1>
      <div className="my-5">
        I am a full stack developer with background knowledge of MERN
        stack with redux. Passionate about learning new technologies. Proficient
        in solving large scale problems and a keen phliomath.
        
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link href="#projects">
          <a
            className={`link my-1 ${url === "/#projects" && "active"}`}
            onClick={() => setToggle((prev) => !prev)}
          >
            Projects
          </a>
        </Link>
        <Link href="#tech">
          <a
            className={`link my-1 ${url === "/#tech" && "active"}`}
            onClick={() => setToggle((prev) => !prev)}
          >
            Tech
          </a>
        </Link>
        <Link href="#blogs">
          <a
            className={`link my-1 ${url === "/#blogs" && "active"}`}
            onClick={() => setToggle((prev) => !prev)}
          >
            Blogs
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
