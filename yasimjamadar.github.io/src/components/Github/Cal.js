



import React from 'react'
import GitHubCalendar from 'react-github-calendar'
const Cal = () => {
    const selectLastHalfYear = (contributions) => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 12;

        return contributions.filter((day) => {
            const date = new Date(day.date);
            const monthOfDay = date.getMonth();

            return (
                date.getFullYear() === currentYear &&
                monthOfDay > currentMonth - shownMonths &&
                monthOfDay <= currentMonth
            );
        });
    };
  return (
    <div style={{border:'1px solid white',padding:'20px'}}>
        <GitHubCalendar
                        username="Yasin051197"
                        blockSize={15}
                        blockMargin={5}
                        fontSize={16}
                        style={{
                            width: "100%",
                            cursor: "pointer"
                        }}
                    />
    </div>
  )
}

export default Cal