import Link from 'next/link'

export default function NavBar() {

	const navButtons: string[] = ['About Me', 'Experience', 'Projects', 'Education', 'Contact Me']

	return (
		<span className="nav-bar">
			{navButtons.map(nav => (
				<Link href={`/${nav.replace(/\s/g, "")}`}>{nav}</Link>
			))}
		</span>
	)
} 