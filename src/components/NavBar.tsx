import Link from 'next/link'

export default function NavBar() {

	const navButtons: string[] = ['About Me', 'Experience', 'Projects', 'Education', 'Contact Me']

	return (
		<span className="nav-bar">
      <span>
        &nbsp;&nbsp;<Link href={`/`}>Home</Link>&nbsp;&nbsp;/
      </span>
			{navButtons.map((nav, i) => (
				<span key={nav}>
					&nbsp;&nbsp;<Link href={`/${nav.replace(/\s/g, "")}`}>{nav}</Link>&nbsp;&nbsp;
					{ i !== navButtons.length - 1 && "/"}  
				</span>
				
			))}
		</span>
	)
} 