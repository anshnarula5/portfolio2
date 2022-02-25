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
    <div className="hero sticky-top pt-5 d-flex flex-column justify-content-center">
      <h1 className="name ">
        Hello there, <br />I am Ansh Narula
      </h1>
      <div className="my-5 secondaryText">
        I am a full stack developer with background knowledge of MERN stack with
        redux. Passionate about learning new technologies. Proficient in solving
        large scale problems and a keen phliomath.
      </div>
      <div  className = "sections">
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
        <Link href="#contact">
          <a
            className={`link my-1 ${url === "/#contact" && "active"}`}
            onClick={() => setToggle((prev) => !prev)}
          >
            Contact
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
            <BsGithub /> <span className="px-1"> Github</span>{" "}
            <BiLinkExternal />
          </div>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/anshnarula/"
          className="link1 mx-4 "
        >
          <BsLinkedin />
          <span className="px-1"> LinkedIn</span>
          <BiLinkExternal />
        </a>
        <a
          target="_blank"
          href="mailto:anshnarula55@gmail.com"
          className="link1 "
        >
          <IoMdMail />
          <span className="px-1"> Mail</span>
          <BiLinkExternal />
        </a>
      </div>
    </div>
  );
};

export default Hero;
