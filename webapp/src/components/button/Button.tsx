import { ReactNode } from 'react';
import styles from './Button.module.scss'
import Icon, { IconNames } from '../icon/Icon';

export enum ButtonTypes {
	Regular,
	TextBox,
	Icon
}

export interface IButtonProps {
	children: ReactNode,
	iconName?: string,
	type?: ButtonTypes
}

function RenderRegularButton(props: IButtonProps) {
	const { children } = props;
	return <button className={styles.regular}>{children}</button>
}

function RenderTextBoxButton(props: IButtonProps) {
	const { children } = props;
	return <button className={styles.textBox}>{children}</button>
}

function RenderIconButton(props: IButtonProps) {
	const { children, iconName } = props;
	return <div className={styles.icon}>
		<Icon name={iconName ?? IconNames.favorite}></Icon>
		<button className={styles.button}>
		{children}
		</button>
	</div>
}

export default function Button(props: IButtonProps) {
	const { type } = props;

	switch (type) {
		case undefined:
		case ButtonTypes.Regular:
			return RenderRegularButton(props);
		case ButtonTypes.Icon:
			return RenderIconButton(props);
		case ButtonTypes.TextBox:
			return RenderTextBoxButton(props);
	}
}