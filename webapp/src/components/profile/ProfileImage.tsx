import styles from './ProfileImage.module.scss'

export interface IProfileImageProps {
	mainImageUrl: string,
	secondaryImageUrl: string,
	translateY?: string,
	translateX?: string,
	top?: number;
	left?: number;
	flex?: number;
	position?: 'absolute' | 'relative' | undefined
}

export function ProfileImage(props: IProfileImageProps) {
	const { translateX = "0px", translateY = "0px", mainImageUrl, secondaryImageUrl, flex, top, left, position } = props;

	return (
		<div className={styles.container} style={{ translate: `${translateX} ${translateY}`, flex: flex, top: top, left: left, position: position }}>
			<img src={mainImageUrl} className={styles.image1}></img>
			<img src={secondaryImageUrl} className={styles.image2}></img>
		</div>
	)
}