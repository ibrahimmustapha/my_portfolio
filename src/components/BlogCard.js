import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const BlogCard = (props) => {
  return (
    <Link
      to={`https://codewithibrahim.hashnode.dev/${props.link}`}
      target="_blank" key={props.postKey}
    >
      <div style={{ background: props.blogBg }} className="md:grid md:grid-cols-2 md:gap-8 md:items-start bg-white shadow-xl rounded-2xl md:p-4 p-3 mb-10 cursor-pointer">
        <div>
          <img
            className="rounded-xl mb-4 md:mb-0"
            src={props.image}
            alt="blog_image"
          />
        </div>
        <div>
          <div className="text-2xl font-black text-ellipsis line-clamp-2">
            {props.title}
          </div>
          <div className="py-3">
            <div className="line-clamp-4 text-slate-400 ">{props.preview}</div>
          </div>
          <Link to={`https://codewithibrahim.hashnode.dev/${props.readMe}`} target="_blank">
            <div className=" text-left text-blue-600">Read more</div>
          </Link>
          <ReactMarkdown children={props.content} />
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
