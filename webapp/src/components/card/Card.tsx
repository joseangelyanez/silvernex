import Icon from '../icon/Icon'
import { ProfileImage } from '../profile/ProfileImage'
import styles from './Card.module.scss'

export interface ICardProps {
	url: string
}

export function Card(props: ICardProps) {
	return (
		<div className={styles.container}>
			<img src="/images/photo1.png" className={styles.top}></img>
			<div className={styles.bottom}>

				<div className={styles.username}>
					<ProfileImage
						position='relative'
						secondaryImageUrl='/images/profile-01.png'
						mainImageUrl="/images/profile.png"
						translateY='-10px'
						translateX='5px'
						flex={1}></ProfileImage>
					
					<div className={styles.subject}>
						<Icon name='pets' size='24px' marginRight='10px'></Icon>
						Vicky
					</div>
				</div>
				<div className={styles.content}>
					<strong>@jyanez</strong> - This is the text of the post.
				</div>
				<div className={styles.footer}>
					December, 24th 2025
				</div>
			</div>
		</div>
	)
}