const About = ({ data }) => {
  const SECTION_ID = `${data.title}-section`;

  return (
    <div id={SECTION_ID} className="scroll-m-14">
      <div className="font-semibold text-xl text-blue-500 mb-6">
        {data.title}
      </div>
      <div>{data.description}</div>
    </div>
  );
};

export default About;
