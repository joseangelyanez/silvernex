import Button, { ButtonTypes } from '../button/Button';
import { IconNames } from '../icon/Icon';
import styles from './ActionCard.module.scss'

const SeparatorColor = "#f0f0f0";

export interface IActionCardProps {
	title: string,
	secondaryImageUrls?: string[],
	subtitle: string,
	actionText: string,
	iconName: string
}

export function ActionCard(props: IActionCardProps) {
	const { secondaryImageUrls = [], subtitle, title: name, actionText, iconName } = props;

	return (
		<div className={styles.container}>
			<div className={styles.textContainer}>
				<h3>{name}</h3>
				{secondaryImageUrls.map(imageUrl =>
					<img 
						key={imageUrl}
						src={imageUrl} className={styles.secondaryImageUrl}>	
					</img>
				)}
				<div className={styles.subtitle}>{subtitle}</div>
				<hr color={SeparatorColor} />
				<Button type={ButtonTypes.Icon} iconName={iconName} >{ actionText }</Button>
			</div>
		</div>
	)
}