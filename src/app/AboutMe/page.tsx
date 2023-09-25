import Image from 'next/image'

export default function Page() {

	return (
		<div className='AboutMe content-centered'>
			<div className='row justify-center'>
				<div className='mr-10'>
					<Image
						className='circular-image'
						src="/profile_picture.jpeg"
						alt="Jaehwi Kwon"
						width={300}
						height={24}
						priority
					/>
				</div>
				<div className='width-40 content-centered'>
					<p>
						Environmental engineer, healthcare provider, air quality inspector turned software developer. 
						I began learning Python on my own prior to enrolling in Byte Academy in 2020 where I learned
						Flask, SQL, JavaScript and React. Since then, I've had the opportunity to learn new 
						technologoies like Vue, Firebase, Google Cloud Platform (GCP), AWS, Django, Postgres. I've also had
						the opportunity to work with great coworkers and mentors alike at Cynopsis Solutions, PlateRate,
						and at my current role at Syft. When I am not working I enjoy playing chess, 
						video games and triathlon sports.
					</p>
				</div>
			</div>
		</div>
	)
}