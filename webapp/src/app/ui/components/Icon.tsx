import styles from './Icon.module.scss';

export function Icon({ name }: { name: string }) {
	return (
		<svg className={styles.icon}>
			<use href={`/icons.svg#${name}`} />
		</svg>
	);
}
