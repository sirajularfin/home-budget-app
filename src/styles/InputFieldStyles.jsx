import { StyleSheet } from 'react-native';

const baseInput = {
	height: 50,
	marginTop: 10,
	paddingLeft: 10,
	borderRadius: 5,
	marginBottom: 20,
};

const InputFieldStyles = StyleSheet.create({
	textInputOnBlur: {
		...baseInput,
		backgroundColor: '#e7e4e4',
	},
	textInputOnFocus: {
		...baseInput,
		borderWidth: 1,
		borderColor: '#e7e4e4',
		backgroundColor: '#fff',
	},
});

export default InputFieldStyles;
