import Three from "../Three";

const Hero = () => {
  return (
    <div className = "hero sticky-top pt-5">
      <h1 className="name ">
        Hello there, <br />I am Ansh Narula
      </h1>
      <div className="my-5">
        I am a passionate full stack developer with background knowledge of MERN
        stack with redux.
      </div>
      <Three />
    </div>
  );
};

export default Hero;
