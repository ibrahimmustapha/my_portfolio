import { Link } from "react-router-dom";

const BlogCard = (props) => {
  return (
    <Link
      to={`https://codewithibrahim.hashnode.dev/${props.link}`}
      target="_blank"
    >
      <div className="md:grid md:grid-cols-2 md:gap-8 md:items-start bg-[#212529] shadow-xl rounded-2xl md:p-4 p-3 mb-10 cursor-pointer">
        <div>
          <img
            className="rounded-xl mb-4 md:mb-0"
            src={props.image}
            alt="blog_image"
          />
        </div>
        <div>
          <div className="pb-3 text-2xl font-black text-ellipsis overflow-hidden">
            {props.title}
          </div>
          <div className="py-2 line-clamp-3 text-slate-400">
            {props.preview}
          </div>
          <div className=" text-left text-blue-600">Read more</div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
