import { ReactNode } from 'react';
import styles from './PostBox.module.scss'
import Icon, { IconNames } from '../icon/Icon';
import Button, { ButtonTypes } from '../button/Button';

export default function PostBox() {
	return <div className={styles.container}>
		<div className={styles.mainButtonContainer}>
			<img src="/images/profile.png" alt="" />
			<Button type={ButtonTypes.TextBox}>What is Vicky doing?</Button>
		</div>
		<div className={styles.postOptions}>
			<Button type={ButtonTypes.Icon} iconName={IconNames.photo}>
				Photo
			</Button>
			<Button type={ButtonTypes.Icon} iconName={IconNames.video}>
				Video
			</Button>
			<Button type={ButtonTypes.Icon} iconName={IconNames.news}>
				News
			</Button>
		</div>
	</div>
}