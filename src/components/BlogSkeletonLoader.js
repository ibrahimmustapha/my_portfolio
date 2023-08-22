const BlogSkeletonLoader = () => {
  return (
    <div className="bg-[#212529] shadow-xl rounded-2xl md:p-4 p-3 mb-10 cursor-pointer">
      <div className="md:grid md:grid-cols-2 md:gap-8 md:items-start animate-pulse">
        <div className="bg-[#343a40] p-28 rounded-2xl h-full w-full mb-5 md:mb-0"></div>
        <div>
          <div className="bg-[#343a40] h-4 md:h-5 w-full rounded-2xl"></div>
          <div className="md:py-5 py-2">
            <div className=" bg-[#343a40] h-4 md:h-5 w-10/12 rounded-2xl my-4"></div>
            <div className=" bg-[#343a40] h-4 md:h-5 w-11/12 rounded-2xl my-4"></div>
            <div className=" bg-[#343a40] h-4 md:h-5 w-11/12 rounded-2xl my-4"></div>
          </div>
          <div className=" bg-[#343a40] h-4 md:h-5 w-32 rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogSkeletonLoader;
