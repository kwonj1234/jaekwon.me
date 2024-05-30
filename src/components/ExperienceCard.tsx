interface ExperienceCardProps {
  leftTitle: string,
  leftSubTitle: string,
  rightTitle: string,
  rightSubTitle: string,
}

export default function ExperienceCard(props: ExperienceCardProps) {

  const {leftTitle, leftSubTitle, rightTitle, rightSubTitle } = props

  return (
    <div className="ExperienceCard">
      <div className="leftColumn">
        <div className="justify-end-column">
          <h2>{leftTitle}</h2>
        </div>
        <div className="justify-end-column">
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