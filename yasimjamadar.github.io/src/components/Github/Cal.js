



import React from 'react'
import GitHubCalendar from 'react-github-calendar'
const Cal = () => {

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