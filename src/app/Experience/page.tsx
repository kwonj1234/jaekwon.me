import Link from 'next/link'

import Divider from '@/components/Divider'
import ExperienceCard from '@/components/ExperienceCard'

export default function Page() {

  const workHistory: {
    company: String, 
    dates: String, 
    title: String, 
    description: String
  }[] = [
      {
        company: 'Syft AI',
        dates: 'August 2022 - October 2023',
        title: 'Software Engineer',
        description: `At this seed stage start up, my role mainly dealt with building new features, using Vue.js, 
        for the Syft platform. Other tasks included creating cloud functions and endpoints in our Flask microservices 
        through which the front end could access our firestore database. My biggest achievement being increasing user 
        engagement by 10% with the Discover feature which allowed users to search for new accounts and contacts using
        the Apollo API. Although that was my biggest achievement with the largest impact to our revenue, the feature
        I am proudest of was a rich text editor I built from scratch to mimic Slack. My most educational task was to 
        compare our machine learning algorithm to models from Hugging Face, to see if we could improve our algorithm.
        This introduced me to data analysis, data engineering as well as training a machine learning model in a professional
        environment.`
      },

      {
        company: 'Cynopsis Solutions',
        dates: 'July 2021 - August 2022',
        title: 'Associate Software Engineer',
        description: `For Cynopsis, I worked on their Athena platform which focused on realtime transaction monitoring. 
        Day to day, I created new features for Athena using Python, Django, Postgres and TimescaleDB. I added features 
        such as a whitelist, cursor pagination, and new permissions for users. Athena is a live product and we utilized 
        AWS to host client web platforms. When clients had issues, I utilized ECS, EC2, and S3 as well as Cloudwatch to 
        fix any bugs or fix any mistakes made by clients. I took responsibility of training and delegating tasks to 
        new engineers on Athena after my mentor left the company.`
      },

      {
        company: 'Freelancing',
        dates: 'March 2021 - March 2022',
        title: 'Freelancer',
        description: `Through the Upwork platform, I applied to work for many clients worked with one client for 
        many months on his website. I was tasked with building several REST API's in the Google Cloud platform that 
        would query a firestore database and return data to the client's React application. He also had me create 
        several components on the website using Material UI.`,
      },

      {
        company: 'SpryteLabs',
        dates: 'June 2020 - June 2021',
        title: 'Software Engineer',
        description: `This was a remote position that utilized a sprint methodology to push a new feature every 
        2-weeks to Spryte's partner site. The site was built using React, Firebase, google cloud functions and Syncfusion React
        component libraries. I started as an intern and was eventually promoted to a software engineer. I worked on styling 
        the SpryteLabs' partner web platform, ensuring clients can access their data, and write cloud functions that handle changes 
        within the firestore database. After working on the partner web platform, I got the opportunity to learn Flutter and work on 
        Spryte's developer platform building similar funcions as I did on the partner web platform.`
      },

      {
        company: 'PlateRate',
        dates: 'October 2020 - March 2021',
        title: 'Web Developer',
        description: `At PlateRate, my main role was to convert their EJS templated platform to a React application as 
        they were trying to transfer their platform to the MERN stack. During my time at PlateRate I was taught to use 
        MongoDB and spent my time converting the platform. Later, I was also tasked with building the foundation of a CRM
        website the founder of PlateRate had in the works.`
      },

      {
        company: 'Nulife Med LLC',
        dates: 'February 2018 - January 2020',
        title: 'Sales Service Representative',
        description: `Contrary to the job title, my role did not involve selling the company's product. My primary role 
        was to visit the homes of post-operative patients, typically podiatric patients, and educate them in the proper 
        method to use a pneumatic compressor (PC) machine and/or a continuous passive movement (CPM) machine. I kept in 
        touch with all my assigned patients during the time they had the machine and kept my supervisor up to date on all
        of their conditions and issues.`
      },

      {
        company: 'J.C. Broderick & Associates, Inc.',
        dates: 'June 2018 - September 2018',
        title: 'Air Sampling Technician (Intern)',
        description: `As an intern at JCB, I received training and certification to become a licensed air sampling technician
        to monitor asbestos levels at job sites with known asbestos containing materials. In this role, I worked independently
        on job sites. I was let known which project I was assigned to, and I followed the schedule of the contractors to 
        monitor asbestos levels as they worked. Any violations of industrial code rule 56 had to be discussed with the 
        contractors or reported. Samples were taken from job sites to a laboratory to check for asbestos levels.`
      },

      {
        company: 'Global Resource Management Consultancy Inc.',
        dates: 'June 2016 - September 2016',
        title: 'Intern',
        description: `During my time at GRMC, I was trained in building information modeling. To this end, I was taught to use 
        Autodesk Revit and then tasked to convert AutoCAD drawing into 3D Revit models. As I became more acclimated to the 
        software I was then given point clouds of buildings GRMC had previously been consulted on and tasked with 
        modeling those into Revit models.`
      },
  ]
  
  const education: {
    school: String,
    dates: String,
    degree: String,
    major: String
  } = {
    school: 'CUNY City College of New York',
    dates: 'Graduated May 2017',
    degree: "Bacherlor's of Engineering",
    major: "Earth System Science and Environmental Engineering"
  }

	return (
		<div className='Experience content-centered'>
      <div>
        <div className='row justify-center'>
          <h1>Professional Experience</h1>
        </div>
        <div className='row justify-center'>
          <p>You can download a copy of my resume <Link
            className='text-blue-500'
            href="/jaehwi_kwon_resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            download>here</Link>
          </p>
        </div>
      </div>
      <Divider></Divider>
      {
        workHistory.map((experience) => (
          <ExperienceCard
            leftTitle={experience.company}
            leftSubTitle={experience.dates}
            rightTitle={experience.title}
            rightSubTitle={experience.description}
          ></ExperienceCard>
        ))
      }

		</div>
	)
}