import Icon, { IconNames } from "../icon/Icon";
import styles from './Counter.module.scss';

export interface ICounterProps {
	iconName: string,
	counter: number,
	participating: boolean,
	participatingIconColor?: string,
	gridArea?: string
}

export default function Counter(props: ICounterProps) {
	const { iconName, counter, participating, participatingIconColor, gridArea } = props;

	return <div className={styles.container} style={{gridArea: gridArea}}>
		<Icon name={iconName} 
			filled={participating} 
			marginRight="5px"
			color={participating ? participatingIconColor : "inherit"} ></Icon>
		{counter}
	</div>
}