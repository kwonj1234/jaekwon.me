import Image from 'next/image'

import './AboutMe.css'

export default function Page() {

  const subTitle: String = `Software Engineer based in Austin, TX with roots in Queens, NY`
  const descrip: String = `Environmental engineer, healthcare provider, air quality inspector turned software developer. 
  I began learning Python on my own prior to enrolling in Byte Academy in 2020 where I learned
  Flask, SQL, JavaScript and React. Since then, I've had the opportunity to learn new 
  technologoies like Vue, Firebase, Google Cloud Platform (GCP), Amazon Web Services (AWS), Django, Postgres. I've also had
  the opportunity to work with great coworkers and mentors alike at Cynopsis Solutions, PlateRate,
  and at my current role at Syft. When I am not working I enjoy playing chess, 
  video games and triathlon sports.` 

	return (
		<div className='page'>
			<div className='AboutMe'>
				<div className='profile-icon'>
					<Image
						className='circular-image m-auto'
						src="/profile_picture.jpeg"
						alt="Jaehwi Kwon"
						width={300}
						height={24}
						priority
					/>
				</div>
				<div className='profile-description'>
					<h1 className=''>Jaehwi Kwon</h1>
					<em className='md:mb-10'><h2>{subTitle}</h2></em>
					<p>
						{descrip}
					</p>
				</div>
			</div>
		</div>
	)
}