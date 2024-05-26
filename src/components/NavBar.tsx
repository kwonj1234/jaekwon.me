"use client"

import * as React from 'react';
import Link from 'next/link';

import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import CastleIcon from '@mui/icons-material/Castle';
import SchoolIcon from '@mui/icons-material/School';

import './NavBar.css';

type iconType = "Home" | "Experience" | "Projects" | "Education";

export default function NavBar() {
	const [isDrawerOpen, setDrawerOpen] = React.useState<boolean>(false);
	const navButtons: iconType[] = ['Experience', 'Projects', 'Education'];

	const toggleDrawer =(open: boolean) =>
	(event: React.KeyboardEvent | React.MouseEvent) => {
		if (
			event &&
			event.type === 'keydown' &&
			((event as React.KeyboardEvent).key === 'Tab' ||
				(event as React.KeyboardEvent).key === 'Shift')
		) {
			return;
		}

		setDrawerOpen(open)
	};

	const listIcon = (icon: iconType) => {
		if (icon === "Home") {
			return <HomeIcon />
		} else if (icon === "Experience") {
			return <WorkIcon /> 
		} else if (icon === "Projects") {
			return <CastleIcon />
		} else if (icon === "Education") {
			return <SchoolIcon />
		}
	}

	const list = () => (
    <Box
			sx={{ width: 'auto' }}
      role="presentation"
      onClick={toggleDrawer(!isDrawerOpen)}
      onKeyDown={toggleDrawer(!isDrawerOpen)}
    >
      <List>
				<Link href={`/`}>
					<ListItem key={"Home"} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								{listIcon("Home")}
							</ListItemIcon>
							<ListItemText primary={"Home"} />
						</ListItemButton>
					</ListItem>
				</Link>
        {navButtons.map((text, index) => (
					<Link key={text} href={`/${text.replace(/\s/g, "")}`}>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									{listIcon(text)}
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItemButton>
						</ListItem>
					</Link>
        ))}
      </List>
      <Divider />
    </Box>
  );

	return (
		<span className="nav-bar">
			<div className="hidden md:inline-block">
				<span>
					&nbsp;&nbsp;<Link href={`/`}>Home</Link>&nbsp;&nbsp;/
				</span>
				{navButtons.map((nav, i) => (
					<span key={nav}>
						&nbsp;&nbsp;<Link href={`/${nav.replace(/\s/g, "")}`}>{nav}</Link>&nbsp;&nbsp;
						{ i !== navButtons.length - 1 && "/"}  
					</span>
					
				))}
			</div>
			<React.Fragment key="Drawer">
				<Button className="md:hidden" onClick={toggleDrawer(!isDrawerOpen)}>
					<MenuIcon />
					<SwipeableDrawer
            open={isDrawerOpen}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            {list()}
          </SwipeableDrawer>
				</Button>
			</React.Fragment>
		</span>
	)
} 