import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { BiLinkExternal } from "react-icons/bi";
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
    <div className="hero sticky-top pt-2 d-flex flex-column justify-content-around">
      <div>
        <h1 className="name ">
        Ansh Narula
        </h1>
        <h3 className="">
          Seeking new opportunities
        </h3>
        <div className="my-4 secondaryText">
          JavaScript, TypeScript, C++, Java proficient full-stack engineer integrating AWS, seeking innovative projects and collaborative growth.
        </div>
      </div>
      
      <div className="sections">
      <Link href="#career">
          <a
            className={`link my-1 ${url === "/#career" && "active"
              } d-flex align-items-center`}
            onClick={() => setToggle((prev) => !prev)}
          >
            <hr /> <span className="mx-2">Career</span>
          </a>
        </Link>
        <Link href="#projects">
          <a
            className={`link my-1 ${url === "/#projects" && "active"
              } d-flex align-items-center`}
            onClick={() => setToggle((prev) => !prev)}
          >
            <hr /> <span className="mx-2">Projects</span>
          </a>
        </Link>
        <Link href="#tech">
          <a
            className={`link my-1 ${url === "/#tech" && "active"
              }  d-flex align-items-center`}
            onClick={() => setToggle((prev) => !prev)}
          >
            {" "}
            <hr /> <span className="mx-2">Tech Stack</span>
          </a>
        </Link>
        <Link href="#blogs">
          <a
            className={`link my-1 ${url === "/#blogs" && "active"
              }  d-flex align-items-center`}
            onClick={() => setToggle((prev) => !prev)}
          >
            {" "}
            <hr /> <span className="mx-2">Blogs</span>
          </a>
        </Link>
        <Link href="#contact">
          <a
            className={`link my-1 ${url === "/#contact" && "active"
              }  d-flex align-items-center`}
            onClick={() => setToggle((prev) => !prev)}
          >
            {" "}
            <hr /> <span className="mx-2">Contact</span>
          </a>
        </Link>
      </div>
      <div className="my-5 links1 ">
        <a
          href="https://github.com/anshnarula5"
          className="link1  d-flex align-items-center justify-content-center"
          target="_blank"
        >
          <div>
            <BsGithub size={30} />
          </div>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/anshnarula/"
          className="link1 mx-4 "
        >
          <BsLinkedin size={28} />
        </a>
        <a
          target="_blank"
          href="mailto:anshnarula55@gmail.com"
          className="link1 "
        >
          <IoMdMail size={32} />
        </a>
      </div>
    </div>
  );
};

export default Hero;
