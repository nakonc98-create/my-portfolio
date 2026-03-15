const About = ({ data }) => {
  const SECTION_ID = `${data.title}-section`;

  return (
    <div id={SECTION_ID} className="scroll-m-14">
      <h2 className="font-semibold text-xl text-blue-500 mb-6">{data.title}</h2>
      <p className="text-gray-300">{data.description}</p>
    </div>
  );
};

export default About;
