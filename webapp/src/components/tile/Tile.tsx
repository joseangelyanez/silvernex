import { ReactNode } from 'react'
import styles from './Tile.module.scss'

export interface ITileProps {
	children: ReactNode
}

export function Tile(props: ITileProps) {
	const { children } = props;

	return (
		<div className={styles.container}>
			{children}
		</div>
	)
}