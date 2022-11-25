import { useEffect } from "react";
import { useState } from "react";
import Header from "../../Components/header/Header";
import Posts from "../../Components/posts/Posts";
import Sidebar from "../../Components/sidebar/Sidebar";
import "./home.css";
import axios from "axios"
import { useLocation } from "react-router-dom";
export default function Home() {
  const [posts,setposts] = useState([]);
const {search} = useLocation();
  useEffect(()=>{
    const fetchpost = async ()=>{
    const res = await  axios.get("/posts"+search); //n+ search to get the username  in url
    setposts(res.data);
    }
    fetchpost();
  },[search]) //adding the search as a dependancy
  return (
   <>
        <Header />
        <div className="home">
        <Posts  posts = {posts}/>
        <Sidebar />  
    </div>
    </>
  );
}
