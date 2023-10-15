interface ExperienceCardProps {
  leftTitle: String,
  leftSubTitle: String,
  rightTitle: String,
  rightSubTitle: String,
}

export default function ExperienceCard(props: ExperienceCardProps) {

  const {leftTitle, leftSubTitle, rightTitle, rightSubTitle } = props

  return (
    <div className="row ExperienceCard">
      <div className="leftColumn">
        <h1>{leftTitle}</h1>
        <p>{leftSubTitle}</p>
      </div>
      <div className="rightColumn">
        <h2>{rightTitle}</h2>
        <p>
          {rightSubTitle}
        </p>
      </div>
    </div>
  )
}