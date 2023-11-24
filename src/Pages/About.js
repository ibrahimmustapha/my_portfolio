import illustration from "../assets/lust1.svg";

const About = (props) => {
  return (
    <div style={{ color: props.textColor }} className="md:w-full md:grid gap-10 md:grid-cols-2 md:grid-flow-col md:justify-between md:items-center px-5 text-center md:text-start">
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
          As a recent college graduate with a strong foundation in programming
          and a self-driven journey of continuous learning, I bring a versatile
          skill set to the world of software development. Proficient in a wide
          range of technologies, including React, Angular, Node.js (Express),
          Java, and JavaScript, I am passionate about crafting robust and
          usercentric web applications. With a
          commitment to delivering high-quality code and a strong work ethic, I
          am eager to contribute my skills to create innovative and impactful
          software solutions.
        </div>
      </div>
    </div>
  );
};

export default About;
