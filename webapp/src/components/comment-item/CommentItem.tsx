import styles from './CommentItem.module.scss'
import Counter from '../counter/Counter';
import { IconNames } from '../icon/Icon';

export interface ICommentItemProps {
	author : string,
	title : string,
	message : string,
	followed : boolean,
	date : string,
	likes: number,
	gridArea?: string
}

export default function CommentItem(props:ICommentItemProps) {
	const { author, title, message, followed, date, likes, gridArea } = props;

	return <div className={styles.container} style={{gridArea: gridArea}}>
		<div style={{gridArea: 'author'}}>
			<div className={styles.author}>{author}</div>
			{followed && (
				<div className={styles.following}>Following</div>
			)}
		</div>
		<div style={{gridArea: 'title'}}>{title}</div>
		<div style={{gridArea: 'message'}}>{message}</div>
		<Counter gridArea='likes' counter={likes} iconName={IconNames.favorite} participating={false}></Counter>
		<div className={styles.date} style={{gridArea: 'date'}}>{date}</div>
	</div>
}