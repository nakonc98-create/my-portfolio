const Picture = (props) => {
  return !props.value ? null : (
    <div className="flex justify-center h-70 md:h-40 p-1 rounded-md border-3 border-blue-900">
      <img src={props.value} alt={props.title} className="h-full w-auto" />
    </div>
  );
};

export default Picture;
