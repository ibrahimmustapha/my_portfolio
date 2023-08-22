const BackgroundCard = (props) => {
  return (
    <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:dark:bg-violet-400">
      <h3 className="text-xl font-semibold tracking-wide line-clamp-2">{props.title}</h3>
      <time className="text-xs tracking-wide uppercase dark:text-gray-400">
        {props.date}
      </time>
      <p className="mt-3">{props.preview}</p>
    </div>
  );
};

export default BackgroundCard;
