import "./write.css";
export default function Write() {
  return (
    <div className="write">
      <img
        src="https://i.pinimg.com/originals/87/0a/fc/870afc5d1b9315b7a438c5e0a06b3bf6.jpg"
        alt=""
        className="writeimg"
      />
      <form className="writeform">
        <div className="writeformgroup">
          <label htmlFor="inputfile">
            <i class="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="inputfile" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeinput"
            autoFocus={true}
          />
        </div>
        <div className="writeformgroup">
          <textarea
            type="text"
            placeholder="Tell your story...."
            className="writeinput writetext"
          ></textarea>
        </div>
        <button className="writesubmit">Publish</button>
      </form>
    </div>
  );
}
