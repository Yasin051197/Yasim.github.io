import React from "react";
// import GitHubCalendar from 'react-github-calendar';
// import { Tooltip as ReactTooltip } from 'react-tooltip'
import '../../Calender.css'

export const Calendar = () => {

    // const selectLastHalfYear = (contributions) => {
    //     const currentYear = new Date().getFullYear();
    //     const currentMonth = new Date().getMonth();
    //     const shownMonths = 12;

    //     return contributions.filter((day) => {
    //         const date = new Date(day.date);
    //         const monthOfDay = date.getMonth();

    //         return (
    //             date.getFullYear() === currentYear &&
    //             monthOfDay > currentMonth - shownMonths &&
    //             monthOfDay <= currentMonth
    //         );
    //     });
    // };


    return (
        <div className="outerBox">
            <div className="calendarContainer">

                <div className="calendarBox">
                    <h3>GitHub Calender</h3>
                    {/* <GitHubCalendar
                        username="Yasin051197"
                        color="yellow"
                        transformData={selectLastHalfYear}
                        hideTotalCount
                        hideColorLegend
                        style={{
                            width: "100%",
                            cursor: "pointer"
                        }}
                    >
                        <ReactTooltip delayShow={20} />
                    </GitHubCalendar> */}
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