'use client'

import { useState } from 'react';
import Icon, { IconNames } from '../icon/Icon';
import styles from './NavBar.module.scss';
import Counter from '../counter/Counter';

export interface INavBarProps {
	docked?:boolean
}

export default function NavBar(props:INavBarProps) {
	const [menuIsOpen, setMenuIsOpen] = useState(false); 
	const {docked = false} = props;
	const dockedClass = docked ? styles.docked : '';

	return <div className={`${styles.main} ${dockedClass}`}>
		<nav className={menuIsOpen ? styles.open : styles.closed}>
			<a href="#" data-action="menu-button" onClick={() => setMenuIsOpen(true)}>
				<Icon name={IconNames.menu}></Icon>
			</a>
			<a href="#" className={styles.home_link} data-size="medium">Home</a>
			<Counter counter={5} participating={true} iconName={IconNames.notifications} participatingIconColor='red'></Counter>
			<a href="#" data-size="small">Login</a>
			<div className={styles.close_link}>
				<a href="#" onClick={() => setMenuIsOpen(false)}>
				<Icon name={IconNames.close}></Icon>
				</a>
			</div>
		</nav>
	</div>
}
