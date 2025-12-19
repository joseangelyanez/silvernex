'use client'

import Image from "next/image";
import styles from "./page.module.scss";
import { Icon } from "./ui/components/Icon";
import { useState } from "react";

export default function Home() {	
	const [menuIsOpen, setMenuIsOpen] = useState(false); 

	return (
		<main className={styles.main}>
			<nav className={menuIsOpen ? styles.open : styles.closed}>
				<a href="#" data-action="menu-button" onClick={() => setMenuIsOpen(true)}>
					<Icon name="menu"></Icon>
				</a>
				<a href="#" className={styles.home_link} data-size="medium">Home</a>
				<a href="#" data-size="medium">Shop</a>
				<a href="#" data-size="medium">About</a>
				<a href="#" data-size="small">Login</a>
				<div className={styles.close_link}>
					<a href="#" onClick={() => setMenuIsOpen(false)}>
						<Icon name="close"></Icon>
					</a>
				</div>
			</nav>
		</main>
	);
}
