import illustration from '../assets/lust1.svg';

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
          Ibrahim believes in lifelong learning and understands the importance
          of staying updated in a rapidly evolving industry. They actively seek
          out opportunities to enhance their skills through online courses,
          tutorials, and participation in coding communities. Ibrahim is
          committed to professional growth and staying ahead of the curve.
        </div>
      </div>
    </div>
  );
};

export default About;