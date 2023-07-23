import React from 'react'
import SectionData from './SectionData';
import "./SectionStyles.css";
import c1 from "../assests/reac.jpg";
import c2 from "../assests/java.jpg";
import c3 from "../assests/Machine.jpg";
import c4 from "../assests/Body.jpg";
import c5 from "../assests/Comm.jpg";
import c6 from "../assests/Team.jpg";
import c7 from "../assests/Art.jpg";
import c8 from "../assests/Dance.jpg";
import c9 from "../assests/Music.jpg"


 function Section1() {
  return (
    <div className='course'>
        <h1>Popular Courses</h1>
        <p>Get Enrolled to the top Courses</p>
        <div className="coursecard">
            <SectionData
            image={c1}
            heading="React Course"
            text="code with harry"
            buttonText="Go To the Course"
            url="/Harry"
            btnClass="Show"
           />
             <SectionData
             image={c2}
             heading="Java(Beginner&Advance)"
             text="Abdul Bari"
             buttonText="Go To the Course"
             url="/Java"
             btnClass="Show"
             />
            <SectionData
            image={c3}
            heading="Machine Learning"
            text="5 Minutes Engineering"
            buttonText="Go To the course"
            url="/Machine"
            btnClass="Show"
            />
        </div>
        <h1>Soft Skills</h1>
      <div className='coursecard'>
      <SectionData
             image={c4}
             heading="Body Language"
             text="Puskar Raj"
             buttonText="Go To the Course"
             url="/BodyLanguage"
             btnClass="Show"
             />
              <SectionData
             image={c5}
             heading="Communication Skills"
             text="Ankur Arora"
             buttonText="Go To the Course"
             url="/communication"
             btnClass="Show"
             />
              <SectionData
             image={c6}
             heading="Team Work"
             text="Cillan"
             buttonText="Go To the Course"
             url="/TeamWork"
             btnClass="Show"
             />
      </div>
      <h1> Creative Skills</h1>
      <div className='coursecard'>
      <SectionData
             image={c7}
             heading="Art"
             text="Deepak tulsayan"
             buttonText="Go To the Course"
             url="/Art"
             btnClass="Show"
             />
              <SectionData
             image={c8}
             heading="Dance"
             text="Anurdha mam"
             buttonText="Go To the Course"
             url="/Dance"
             btnClass="Show"
             />
              <SectionData
             image={c9}
             heading="Music"
             text="Menna mam"
             buttonText="Go To the Course"
             url="/Music"
             btnClass="Show"
             />
      </div>
    </div>
    
  )
}
export default Section1;