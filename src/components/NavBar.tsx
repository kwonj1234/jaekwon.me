import Link from 'next/link'

export default function NavBar() {

	const navButtons: string[] = ['About Me', 'Experience', 'Projects', 'Education', 'Contact Me']

	return (
		<span className="nav-bar">
			{navButtons.map((nav, i) => (
				<span>
					&nbsp;&nbsp;<Link href={`/${nav.replace(/\s/g, "")}`}>{nav}</Link>&nbsp;&nbsp;
					{ i !== navButtons.length - 1 && "/"}  
				</span>
				
			))}
		</span>
	)
} 