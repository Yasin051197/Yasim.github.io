import React from "react";
import Cal from "./Cal.js"
import '../../Calender.css'

export const Calendar = () => {



    return (
        <div className="outerBox">
            <div className="calendarContainer">

                <div className="calendarBox">
                    <h3>GitHub Calender</h3>
                    <Cal />
                </div>
            </div>
            <div className="graph-1">
                <p align="center">
                    <a href="https://github.com/Yasin051197"><span>
                        <img align="center" src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Yasin051197&theme=dracula&bg_color=0D1117" alt="" />
                    </span></a> 
                </p>
            </div>
            <hr id="projectsPageSection" />
        </div>
    );
}