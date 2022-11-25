import "./posts.css";
import Postt from "../postt/Postt";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <Postt post = {p} />
      ))}
    </div>
  );
}
