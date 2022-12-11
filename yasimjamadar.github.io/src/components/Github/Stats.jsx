import React from "react";
import "./Stats.css";


export const Stats = () => {

    return (
        <div className="statsBox">
            <h3>GitHub Stats</h3>
            <div>
            <div className="statsContainer">
                <div>
                    <a href="https://github.com/Yasin051197">
                        <img align="left" src="https://github-readme-streak-stats.herokuapp.com/?user=Yasin051197" alt=""/>
                    </a>
                </div>
            </div>

            <div style={{marginTop:"20px"}} className="stats-3">
                <p align="center">
                <a href="https://github.com/Yasin051197">
                        <img align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Yasin051197&bg_color=0D1117" alt="" />
                    </a>
                </p>
            </div>

            <div className="stats-2">
                <p align="center">
                    <a href="https://github.com/Yasin051197">
                        <img alt="Yasim Github Stats" 
                        src="https://github-readme-stats.vercel.app/api?username=Yasin051197&show_icons=true&locale=en&theme=react&hide_border=true&bg_color=0D1128" 
                        />
                    </a>
                </p>
            </div>

            
            </div>
        </div>

    );
}