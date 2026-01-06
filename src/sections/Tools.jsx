import { data } from "../contents/tools";

const Tools = () => {
  const SECTION_ID = `${data.title}-section`;

  return (
    <div id={SECTION_ID} className="scroll-m-14 w-full">
      <h2 className="font-semibold text-2xl text-blue-600 mb-6">
        {data.title}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {data.items.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-300 p-3 rounded-lg shadow-sm group transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:scale-102 hover:bg-blue-300"
          >
            <div className="flex justify-center m-2">
              <span className="font-semibold text-blue-900 transition-colors duration-300 group-hover:text-black">
                {skill.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
