import InputFieldStyles from '../styles/InputFieldStyles';
import React, { useState } from 'react';
import TypographyStyles from '../styles/TypographyStyles';
import { TextInput, Text, View } from 'react-native';

/**
 * It renders the input fields in the BudgetEntryScreen.
 * @component
 */
const InputField = ({ title, keyboardType, value, onChange }) => {
	const [flag, setFlag] = useState(false);
	return (
		<View>
			<Text style={TypographyStyles.regularText}>{title}</Text>
			<TextInput
				style={flag ? InputFieldStyles.textInputOnFocus : InputFieldStyles.textInputOnBlur}
				autoCapitalize='none'
				autoCorrect={false}
				keyboardType={keyboardType}
				onFocus={() => setFlag(true)}
				onBlur={() => setFlag(false)}
				value={value}
				onChangeText={onChange}
			/>
		</View>
	);
};

export default InputField;
