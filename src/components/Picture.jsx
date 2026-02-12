const Picture = (props) => {
  return !props.value ? null : (
    <div
      className="flex justify-center h-70 md:h-40 p-1 rounded-md border-3 border-blue-900 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 shadow-sm group hover:shadow-[0_0_30px_rgba(0,255,255,0.6)]"
      title="คลิ๊กเพื่อดูรูปภาพเพิ่มเติม"
    >
      <img src={props.value} alt={props.title} className="h-full w-auto" />
    </div>
  );
};

export default Picture;
