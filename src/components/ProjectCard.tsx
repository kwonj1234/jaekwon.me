import Link from 'next/link'
import Image from 'next/image'

interface ProjectCardProps {
  title: String,
  url: any,
  image: any,
  imageDescription: any,
  description: String,
}

export default function ProjectCard(props: ProjectCardProps) {

  const {title, url, image, imageDescription, description } = props
  return (
    <div className="row ProjectCard">
      <div className='left-column'>
        <div className='row justify-end'>
          <Link href={url} target="_blank" rel="noopener noreferrer">
            <Image 
              className='project-image'
              src={image} 
              alt={imageDescription}
              width={200}
              height={200}
              objectFit='cover'
            ></Image>
          </Link>
        </div>
      </div>
      <div className="right-column">
        <Link className='text-blue-500' href={url} target="_blank" rel="noopener noreferrer">{title}</Link>
        <br></br>
        {description}
      </div>
    </div>
  )
}