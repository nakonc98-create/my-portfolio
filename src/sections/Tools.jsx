import { data } from "../contents/tools";

const Tools = () => {
  const SECTION_ID = `${data.title}-section`;

  return (
    <div id={SECTION_ID} className="scroll-m-14 w-full">
      <h2 className="font-bold text-2xl text-blue-600 mb-6">{data.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.items.map((skill, index) => (
          <div key={index} className="bg-blue-900/50 p-4 rounded-lg shadow-sm">
            <div className="flex justify-center m-2">
              <span className="font-semibold text-white">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
