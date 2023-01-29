import React from 'react'
import DefaultLayout from '@/layout/Default'
function about() {
  return (
    <DefaultLayout>
      <div className='grid-container'>


        <div className='grid-item' style={{width:"50vw", paddingLeft: 10,  minWidth: "400px", borderRadius: "10px"}}>

        <h2>Hello</h2>
        <p> My name is Scott Dean, nice to meet you. This is a place where I save my project prototypes, write posts and experiment with new technologies. Have a look around at some of the sample projects, I hope to inspire and help others.</p>

        <h2>About</h2>
        <p>  I'm a Software Engineer and Software Manager. I grew up in a small California town called Lotus where I worked as a raft guide for many years. I studied computer science and web development and shortly after moved to work in San Francisco. I then moved to the Sacramento Area until the fires and the crowds drove me to buy an RV and tour the USA. I found a home in North GA. for the time being at least, until the next adventure calls. I spend my time with my beautiful wife and three awesome children.</p>


        <h2>Experience</h2>
        <p> I've been fortunate to work with a lot of amazing people on the following teams: Groupon, Mypoints, Travelocity, Marketing Evolution, Clear Capital and many more. I'm currently looking for a Lead Software Engineer role or Software Manager Role, If this sounds like a position you have available don't hesitate to reach out scott@hairofthedom.com</p>

        <p> <a href="#res">Resume</a> </p>

        </div>

        <div className='grid-item' style={{width:"10vw", }}> 
        
        </div>


        <div className='grid-item' style={{width:"20vw", }}>
            <img src='/images/theFam.png' style={{borderRadius: "25px", padding: "7px", maxWidth: 400, minWidth: 250}}  />
        </div>


    </div>

    </DefaultLayout>
  )
}

export default about