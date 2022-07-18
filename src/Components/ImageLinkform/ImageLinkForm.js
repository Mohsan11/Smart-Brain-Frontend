import React from "react";
import "./ImageLinkForm.css";
const ImageLinkForm = () => {
  return (
    <div>
      <p className="f3 center">
        {
          "Hello There! This is smart brain. It will detect faces give it a try."
        }
      </p>
      <div className="center">
        <div className=" center form f4 pa4 shadow-5 br3 ">
          <input className="f4 pa2 w-70 " type={"text"} />
          <button
            className=" pointer grow w-30 f4 link  ph3 pv2 dib white bg-light-purple"
            onClick={"Submit"}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};
export default ImageLinkForm;
