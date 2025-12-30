import Icon, { IconNames } from '../icon/Icon';
import styles from './CommentInput.module.scss';

export default function CommentInput() {
	return (
		<div className={styles.container}>
			<div className={styles.inputArea}>
				<div contentEditable="plaintext-only" className={styles.input} />
				<div className={styles.buttonContainer}>
					<button>
						Comment
						<Icon marginLeft='4px' size='16px' name={IconNames.send}></Icon>
					</button>
				</div>
			</div>
		</div>

	)
}