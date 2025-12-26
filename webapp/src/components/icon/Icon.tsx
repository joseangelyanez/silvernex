import styles from './Icon.module.scss';

const FilledSuffix = "-filled";

export class IconNames {
	static pets = 'pets';
	static favorite = 'favorite';
	static menu = 'menu';
	static close = 'close';
	static comment = 'comment';
	static photo = 'photo';
	static video = 'video';
	static news = 'news';
	static plus = 'plus';
	static notifications = 'notifications';
	static groups = 'groups';
}

export interface IIconProps {
	name: string;
	size?: string;
	marginRight?: string;
	filled?: boolean;
	color?: string
}

export default function Icon(props: IIconProps) {
	const { size = "24px", name, marginRight = "5px", filled = false, color = "inherit" } = props;

	return (
		<svg className={styles.icon} style={{ width: size, height: size, marginRight: marginRight, color: color }}>
			<use href={`/icons.svg#${filled ? name + FilledSuffix : name}`} />
		</svg>
	);
}
