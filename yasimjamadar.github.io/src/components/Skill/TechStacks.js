import React from "react";
import {
  SiJson,
  SiDotnet,
  SiCsharp,
  SiMicrosoftsqlserver,
} from "react-icons/si";
import { DiHtml5, DiCss3, DiReact, DiNpm, DiJavascript1 } from "react-icons/di";
function TechStacks() {
  return (
    <div className="skillContainer">
      <div className="tech-icons">
        <DiHtml5 />
        <p>HTML</p>
      </div>
      <div className="tech-icons">
        <DiCss3 />
        <p>CSS</p>
      </div>
      <div className="tech-icons">
        <DiJavascript1 />
        <p>Javascript</p>
      </div>
      <div className="tech-icons">
        <SiJson />
        <p>JSON</p>
      </div>
      <div className="tech-icons">
        <DiNpm />
        <p>NPM</p>
      </div>
      <div className="tech-icons">
        <DiReact />
        <p>React</p>
      </div>
      <div className="tech-icons">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          role="img"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title></title>
          <path d="M12 0C5.352 0 0 5.352 0 12s5.352 12 12 12 12-5.352 12-12S18.648 0 12 0zm2.8 4.333c.13-.004.248.136.171.278l-3.044 5.58a.187.187 0 00.164.276h5.26c.17 0 .252.207.128.323l-9.22 8.605c-.165.154-.41-.063-.278-.246l4.364-6.021a.187.187 0 00-.151-.296H6.627a.187.187 0 01-.131-.32l8.18-8.123a.182.182 0 01.125-.056z"></path>
        </svg>
        <p>ChakraUi</p>
      </div>
      <div className="backend-tech-icons">
        <SiCsharp />
        <p>C#</p>
      </div>
      <div className="backend-tech-icons">
        <SiDotnet />
        <p>ASP.NET</p>
      </div>
      <div className="backend-tech-icons">
        <SiMicrosoftsqlserver />
        <p>MS SQL Server</p>
      </div>
    </div>
  );
}

export default TechStacks;
