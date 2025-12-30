import { ReactNode } from 'react'
import Icon, { IconNames } from '../icon/Icon'
import styles from './PostItem.module.scss'
import Counter from '../counter/Counter';
import CommentList from '../comment-list/CommentList';

export interface IPostItemProps {
	children: ReactNode,
	message: string | undefined,
	likes?: number,
	comments?: string[],
	liked: boolean,
	commented: boolean
}

export function PostItem(props: IPostItemProps) {
	const { children, message, likes = 0, comments = [], liked, commented } = props;
	return (
		<div className={styles.container}>
			{(message &&
				<div className={styles.message}>{message}</div>
			)}
			<div className={styles.childrenContainer}>{children}</div>
			<div className={styles.footer}>
				<Counter participating={liked} iconName={IconNames.favorite} counter={likes} participatingIconColor='red'></Counter>
				<Counter participating={commented} iconName={IconNames.comment} counter={comments.length}></Counter>
			</div>
			<CommentList></CommentList>
		</div>
	)
}