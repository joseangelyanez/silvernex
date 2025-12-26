import { ReactNode } from 'react'
import styles from './Layout.module.scss'

export interface ILayoutProps {
	top: ReactNode;
	bar1: ReactNode;
	children: ReactNode;
	bar2: ReactNode;
	bar3: ReactNode;
}

export default function Layout(props: ILayoutProps) {
	const { top, bar1, bar2, bar3, children } = props;
	return <div className={styles.container}>
		<div className={styles.top} style={{gridArea: 'top'}}>
			{top}
		</div>
		<div className={styles.bar1}  style={{gridArea: 'bar1'}}>
			<div className={styles.barContent}>{bar1}</div>
		</div>
		<div className={styles.content} style={{gridArea: 'content'}}>{children}</div>
		<div className={styles.bar2} style={{gridArea: 'bar2'}}>
			<div className={styles.barContent}>{bar2}</div>
		</div>
		<div className={styles.bar3} style={{gridArea: 'bar3'}}>
			<div className={styles.barContent}>{bar3}</div>
		</div>
	</div>
}