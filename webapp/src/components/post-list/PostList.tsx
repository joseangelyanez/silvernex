import { ReactNode } from 'react';
import styles from './PostList.module.scss'
import Icon, { IconNames } from '../icon/Icon';
import Button, { ButtonTypes } from '../button/Button';

interface IPostListProps {
	children: ReactNode
}

export default function PostList(props : IPostListProps) {
	const { children } = props;

	return <div className={styles.postList}>
		{ children }	
	</div>
}