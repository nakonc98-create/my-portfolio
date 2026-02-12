const Tech = (props) => {
  return (
    <div className="flex flex-wrap gap-x-2 text-sm gap-y-2">
      {props.value.map((s, i) => (
        <div
          key={i}
          className="bg-blue-900/50 cursor-default py-1 px-2 rounded-md hover:text-blue-300 duration-300 shadow-sm group transition-all hover:shadow-[0_0_10px_rgba(0,255,255,0.6)]"
        >
          {s}
        </div>
      ))}
    </div>
  );
};

export default Tech;
