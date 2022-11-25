import Sidebar from "../../Components/sidebar/Sidebar";
import "./setting.css";

export default function Settings() {
  return (
    <div className="Settings">
      <div className="settingwrapper">
        <button className="deleteaccount">Delete account</button>

        <form className="settingsform">
          <span className="settingsupdatetitle">Update account </span>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <label htmlFor="fileinput">
              <img className="profileimg"
                src="https://qph.cf2.quoracdn.net/main-qimg-8c7f3a8a75640acf7c6a69e39ffaee40-lq"
                alt=""
              />
            </label>
            <input type="file" id="fileinput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="" />
          <label>Email</label>
          <input type="email" placeholder="" />
          <label>Password</label>
          <input type="password" />
          <label>Confirm Password</label>
          <input type="password" />
          <button className="settingsubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
