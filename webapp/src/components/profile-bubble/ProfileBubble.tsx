import styles from './ProfileBubble.module.scss'

const LargeSizeWidth = "64px";
const SmallSizeWidth = "48px";

export enum Sizes {
	Small, Large
}

export interface IProfileBubbleProps {
	mainImageUrl: string,
	size?: Sizes,
	gridArea?: string
}

export function ProfileBubble(props: IProfileBubbleProps) {
	const { mainImageUrl, size=Sizes.Large, gridArea } = props;
	const sizeWidth = size == Sizes.Large ? LargeSizeWidth : SmallSizeWidth;

	return (
		<img src={mainImageUrl} className={styles.main} style={{width: sizeWidth, gridArea: gridArea}}></img>	
	)
}