import React from "react";
import "./Hemisphere.css";
import northernPic from "./image/northern-hemisphere.png";
import southernPic from "./image/southern-hemisphere.jpg";

const hemispereConfig = {
  Northern: {
    text: "it is northern hemisphere",
    picture: northernPic,
  },
  Southern: {
    text: "it is southern hemisphere",
    picture: southernPic,
  },
};

const HemisphereDisplay = ({ latitude }) => {
  const hemisphere = latitude > 0 ? "Northern" : "Southern";
  const { text, picture } = hemispereConfig[hemisphere];
  return (
    <div className={hemisphere}>
      <div className="ui raised text container segment">
        <div className="image">
          <img src={picture} alt="" />
        </div>
        <div className="ui teal bottom attached label">
          <h1 className="textH1">{text}</h1>
        </div>
      </div>
    </div>
  );
};
// --------
export default HemisphereDisplay;
