import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
export default function Sidebar() {
  const [cats,setcats] = useState([]); // making variables to store data

  useEffect(()=>{    //getting the data  from the database
    const getcats = async ()=>{
      const res = await axios.get("/categories")
      setcats(res.data);
    }
    getcats(); //calling the getdata function
  },[])
  return (
      <div className="sidebarc">
        <div className="sidebaritem">
          <span className="sidebartitle">ABOUT ME</span>
          <img  className= "aboutmep"src="https://qph.cf2.quoracdn.net/main-qimg-8c7f3a8a75640acf7c6a69e39ffaee40-lq" alt="" />
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque autem
          perspiciatis dolore adipisci suscipit corrupti at, corporis sed
          tempora , dolorem nulla numquam iste asperiores et recusandae veniam
          omnis fuga quia!
        </p>
        <div className="sidebaritem">
          <span className="sidebartitle">CATEGORIES</span>
          <ul className="sidebarList">
            {cats.map((c)=>(
              <Link to={`/?cat=${c.name}`}  className='link'>
                <li className="sidebarlistitem">{c.name}</li>
                </Link>
            ))}
          </ul>
        </div>
        <div className="sidebaritem">
          <span className="sidebartitle"> FOLLOW US</span>

            <div className="sidebarsocials">
              <i className="sidebaricon fa-brands fa-square-facebook"></i>
              <i className="sidebaricon fa-brands fa-square-twitter"></i>
              <i className="sidebaricon fa-brands fa-square-pinterest"></i>
              <i className="sidebaricon fa-brands fa-square-instagram"></i>
            </div>
        </div>
      </div>
  );
}
