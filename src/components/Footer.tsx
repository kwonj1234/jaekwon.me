import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <div className="footer">
      <div className='row justify-center'>
        <h1>Contact Me</h1>
      </div>
      <div className="row justify-center contactContent">
        <p>Whatever your reason for reaching out, I would love to hear from you!</p>
      </div>
      <div className="row justify-center icon-container">
        <Link href="https://www.linkedin.com/in/jaehwi-kwon/" target="_blank" rel="noopener noreferrer" >
          <Image className="icon-linkedin" src="/images/icon_linkedin.png" alt="linkedin" width={100} height={100}/>
        </Link>
        <Link href="mailto:jaehwikwn@gmail.com" target="_blank" rel="noopener noreferrer" >
          <Image className="icon-email" src="/images/icon-email.png" alt="Email" width={100} height={100}/>
        </Link>
      </div>
    </div>
  )
}