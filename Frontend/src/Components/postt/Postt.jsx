import "./postt.css";
import { Link } from "react-router-dom";
export default function Postt({ post }) {
  return (
    <div className="post">
      {post.photo && <img className="postimg" src={post.photo} alt="" />}
      <div className="postinfo">
        <div className="postcats">
          {post.categories.map((c) => (
            <span className="postcat">{c.name}</span>
          ))}
        </div>

        <Link className="link" to = {`/post/${post._id}`}>
          <span className="posttitle">{post.title}</span>
        </Link>

        <hr />
        <spam className="postDate">
          {new Date(post.createdAt).toDateString()}
        </spam>
        <p className="postdescription">{post.desc}</p>
      </div>
    </div>
  );
}
