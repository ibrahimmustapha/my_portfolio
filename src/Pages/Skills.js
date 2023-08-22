import BackgroundCard from "../components/BackgroundCard";

const techs = [
  "HTML",
  "CSS",
  "REACT",
  "ANGULAR",
  "JAVASCRIPT",
  "JAVA",
  "EXPRESS",
  "MYSQL",
  "MONGODB",
  "GRAPHQL",
];

const BackgroundData = [
  {
    title: "Bachelor of Science in Information Technology Management",
    date: "DEC 2021 - JULY 2023",
    preview:
      "I hold a degree in Information Technology Management at the University of Professional Studies Accra. ",
  },
  {
    title: "Diploma in Information Technology Management",
    date: "DEC 2019 - JULY 2022",
    preview:
      "I hold a diploma in Information Technology Management at the University of Professional Studies Accra. ",
  },
  {
    title: "Java Certificate of Completion",
    date: "DEC 2018",
    preview:
      "I was awarded a Certificate of Completion for a Udemy Java course",
  },
];
const Skills = () => {
  return (
    <div className="py-10 px-5">
      <div className="mb-5 text-xl font-black">SKILLS</div>
      <div className="grid sm:grid-cols-3 md:grid-cols-4 sm:gap-5 md:gap-10">
        {techs.map((tech) => (
          <div className="text-3xl font-black py-4 my-3 w-full md:w-48 border-b-2 hover:animate-pulse hover:text-green-100">
            {tech}
          </div>
        ))}
      </div>
      <div className="py-10 px-5">
        <div className="text-xl font-black py-6">Background</div>
        <div className="grid gap-4 sm:grid-cols-12">
          <div className="relative col-span-12 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:dark:bg-gray-700">
              {BackgroundData.map((data) => (
                <BackgroundCard
                  title={data.title}
                  date={data.date}
                  preview={data.preview}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
