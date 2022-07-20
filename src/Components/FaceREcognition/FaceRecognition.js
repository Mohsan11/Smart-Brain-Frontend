import React from "react";
const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className="center">
      <div className=" pointer pa2 br3">
        <img
          className="center w-70 pa2"
          src={imageUrl}
          alt="URL_image"
          style={{ width: "500px", height: "auto" }}
        />
      </div>
    </div>
  );
};
export default FaceRecognition;
