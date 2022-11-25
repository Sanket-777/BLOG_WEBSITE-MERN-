import Sidebar from "../../Components/sidebar/Sidebar"
import Singlepost from "../../Components/singlepost/Singlepost"
import "./single.css"

export default function Single() {
  return (
    <div className="single">
     <Singlepost/>
      <Sidebar/>
    </div>
  )
}
