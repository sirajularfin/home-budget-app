import { StyleSheet } from 'react-native';

const buttonText = {
	fontSize: 16,
	fontWeight: 'bold',
	textTransform: 'uppercase',
};

const TypographyStyles = StyleSheet.create({
	regularText: {
		fontSize: 16,
		color: '#333',
	},

	headingText: {
		color: '#333',
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 15,
	},

	primaryButtonText: {
		...buttonText,
		color: '#fff',
	},
	secondaryButtonText: {
		...buttonText,
		color: '#3498db',
	},
	dangerButtonText: {
		...buttonText,
		color: '#FFFFFF',
	},
});

export default TypographyStyles;
