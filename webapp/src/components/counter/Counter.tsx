import Icon, { IconNames } from "../icon/Icon";
import styles from './Counter.module.scss';

export interface ICounterProps {
	iconName: string,
	counter: number,
	participating: boolean,
	participatingIconColor?: string
}

export default function Counter(props: ICounterProps) {
	const { iconName, counter, participating, participatingIconColor } = props;

	return <div className={styles.container}>
		<Icon name={iconName} filled={participating} color={participating ? participatingIconColor : "inherit"} ></Icon>
		{counter}
	</div>
}