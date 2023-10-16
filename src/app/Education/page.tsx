import Divider from "@/components/Divider"
import ExperienceCard from "@/components/ExperienceCard"

export default function Education() {
  const educationHistory: {
    school: String,
    dates: String,
    degree: String,
    major: String
  }[] = [
    {
      school: 'Byte Academy',
      dates: 'Graduated April 2020',
      degree: "Python Full Stack Immersive Course",
      major: "Full stack development course utilizing React, Flask, and Sqlite to develop a full stack applications"
    },
    {
      school: 'CUNY City College of New York',
      dates: 'Graduated May 2017',
      degree: "Bachelor's of Engineering",
      major: "Earth System Science and Environmental Engineering"
    },
  ]

  return (
    <div className="Experience content-centered">
      <div className='row justify-center'>
        <h1>Education</h1>
      </div>
      <Divider></Divider>
      <div className='experience-section'>
        {
          educationHistory.map((education) => (
            <div className='row justify-center'>
              <ExperienceCard
                leftTitle={education.school}
                leftSubTitle={education.dates}
                rightTitle={education.degree}
                rightSubTitle={education.major}
              ></ExperienceCard>
            </div>
          ))
        }
      </div>
    </div>
  )
}