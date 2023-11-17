import illustration from "../assets/lust1.svg";

const About = () => {
  return (
    <div className="md:w-full md:grid gap-10 md:grid-cols-2 md:grid-flow-col md:justify-between md:items-center px-5 text-center md:text-start">
      <img
        className=" w-full rounded-md mb-5 md:rounded-xl justify-center"
        src={illustration}
        alt="programmer"
      />
      <div className="">
        <div className="pb-4 text-xl font-black">GET TO KNOW ME</div>
        <div className="pb-4 text-lg font-black">
          A Ghanaian Based Software Developer
        </div>
        <div>
          Hello I’m Ibrahim, a passionate software developer with a strong
          foundation in cutting edge technologies including Java, JavaScript,
          React, Spring Boot, and Node Js. While my journey primarily has been
          as a freelance developer, I bring a wealth of hands-on knowledge and a
          determination to learn and improve on the job.
        </div>
      </div>
    </div>
  );
};

export default About;
