import React from "react";
import { useState, useEffect } from "react";
import "../Introduction/Intro.scss";
import TeamTopicPage from "../teamTopicPage/teamTopicPage";

function Intro({ data }) {
  console.log(data, "Intro main hu");

  const [intro, setIntro] = useState([]);

  useEffect(() => {
    setIntro((intro) => {
      let arr = [];
      let dataObjectArray = Object.entries(data);
      let introObjectArray = Object.entries(dataObjectArray[1][1]);

      console.log(introObjectArray, "data object in useEffect");

      //  console.log(dataObjectArray , "data object in useEffect");

      for (var i = 0; i < introObjectArray.length; ++i) {
        arr.push(
          <div className="introData">
            <h1 className="introHeading" id={`${introObjectArray[i][0]}`}>
              {introObjectArray[i][0]}
            </h1>
            <p className="introPara">{introObjectArray[i][1]}</p>
          </div>
        );
      }
      return [...arr];
    });
  }, []);

  return (
    <div className="intro">
      {intro}

      <div className="editor">
        <TeamTopicPage data={data} />
      </div>
    </div>
  );
}

export default Intro;
