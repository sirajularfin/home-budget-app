import { StyleSheet } from 'react-native';

const baseButton = {
	padding: 10,
	borderRadius: 5,
	alignItems: 'center',
	marginVertical: 5,
};

const ButtonStyles = StyleSheet.create({
	primaryButton: {
		...baseButton,
		backgroundColor: '#3498db',
	},
	secondaryButton: {
		...baseButton,
	},
	dangerButton: {
		...baseButton,
		backgroundColor: '#ff0000',
	},
});

export default ButtonStyles;
