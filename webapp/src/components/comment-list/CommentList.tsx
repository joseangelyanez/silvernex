import { ReactNode } from 'react'
import styles from './CommentList.module.scss'
import { ProfileBubble, Sizes } from '../profile-bubble/ProfileBubble'
import CommentItem from '../comment-item/CommentItem'
import CommentInput from '../comment-input/CommentInput'

export default function CommentList() {
	return <div className={styles.container}>
		<ProfileBubble 
			size={Sizes.Small} mainImageUrl='/images/profile-01.png'
		>
		</ProfileBubble>
		<CommentInput></CommentInput>

		<ProfileBubble 
			size={Sizes.Small} mainImageUrl='/images/profile-01.png'
		>
		</ProfileBubble>
		<CommentItem
			author='Jose Yanez'
			date='1w'
			followed={true}
			likes={1}
			message='What a nice sunset!! What a nice sunset!! What a nice sunset!! What a nice sunset!! What a nice sunset!! '
			title="Vicky's favorite What a nice sunset!! What a nice sunset!! What a nice sunset!! What a nice sunset!! "
			key={1}
		></CommentItem>
	</div>
}