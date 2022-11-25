import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./singlepost.css";

export default function Singlepost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setpost] = useState({});
  useEffect(() => {
    const getpost = async () => {
      const res = await axios.get("/posts/" + path);
      setpost(res.data);
    };
    getpost();
  }, [path]);

  return (
    <div className="Singlepost">
      <div className="singlepostwrapper">
        {post.photo && (
          <img src={post.photo} alt="" className="singlepostimg" />
        )}

        <h1 className="singleposttitle">
          {post.title}
          <div className="singlepostedit">
            <i class="singlepostIcon fa-solid fa-pen-to-square"></i>
            <i class="singlepostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlepostinfo">
          <span className="singlepostauthor">
            Author :
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlepostdate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="singlepostdescription">{post.desc}</p>
      </div>
    </div>
  );
}
