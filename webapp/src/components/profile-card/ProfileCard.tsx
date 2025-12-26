import Button, { ButtonTypes } from '../button/Button';
import { IconNames } from '../icon/Icon';
import styles from './ProfileCard.module.scss'

const SeparatorColor = "#f0f0f0";

export interface IProfileCardProps {
	name: string,
	backgroundImageUrl: string,
	mainImageUrl: string,
	secondaryImageUrls: string[],
	subtitle: string,
	location: string
}

export function ProfileCard(props: IProfileCardProps) {
	const { backgroundImageUrl, mainImageUrl, secondaryImageUrls, subtitle, location, name } = props;


	return (
		<div className={styles.container}>
			<img src={backgroundImageUrl} className={styles.backgroundImageUrl}></img>
			<img src={mainImageUrl} className={styles.mainImageUrl}></img>
			<div className={styles.textContainer}>
				<h3>{name}</h3>
				{secondaryImageUrls.map(imageUrl =>
					<img 
						key={imageUrl}
						src={imageUrl} className={styles.secondaryImageUrl}>	
					</img>
				)}
				<div className={styles.subtitle}>{subtitle}</div>
				<div className={styles.location}>{location}</div>
				<hr color={SeparatorColor} />
				<Button type={ButtonTypes.Icon} iconName={IconNames.plus} >Add New Pet</Button>
			</div>
		</div>
	)
}