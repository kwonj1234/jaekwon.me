import Link from 'next/link'

interface ProjectCardProps {
  title: String,
  url: String,
  imageStyle: String,
  imageDescription: String,
  description: String,
}

export default function ProjectCard(props: ProjectCardProps) {

  const {title, url, imageStyle, imageDescription, description } = props

  return (
    <div className="row projComponent">
      <Link href={url} className="leftColumn" target="_blank" rel="noopener noreferrer">
        <img className={`${imageStyle} project-image`} alt={imageDescription}/>
      </Link>
      <div className="rightColumn">
        <h4><Link href={url} target="_blank" rel="noopener noreferrer">{title}</Link></h4>
        <br></br>
        {description}
      </div>
    </div>
  )
}