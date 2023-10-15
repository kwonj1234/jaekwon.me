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
        <div className="row justify-end">
          <h2>{leftTitle}</h2>
        </div>
        <div className="row justify-end">
          <p>{leftSubTitle}</p>        
        </div>
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