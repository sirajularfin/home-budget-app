import ButtonStyles from '../styles/ButtonStyles';
import ContainerStyles from '../styles/ContainerStyles';
import InputField from '../components/InputField';
import React, { useState } from 'react';
import TypographyStyles from '../styles/TypographyStyles';
import { Text, TouchableOpacity, View, ToastAndroid } from 'react-native';
import { insertData } from '../utils/Database';

/**
 * It renders the screen where user can add new items.
 * @screen
 */
const BudgetEntryScreen = ({ navigation }) => {
	const [name, setName] = useState('');
	const [plannedAmount, setPlannedAmount] = useState('');
	const [actualAmount, setActualAmount] = useState('');

	const resetForm = () => {
		setName('');
		setActualAmount('');
		setPlannedAmount('');
	};

	const handleFormSubmit = () => {
		insertData(name, parseFloat(plannedAmount), parseFloat(actualAmount));
		ToastAndroid.show('Data saved successfully', ToastAndroid.SHORT);
		resetForm();
	};

	return (
		<View style={ContainerStyles.sectionContainer}>
			<Text style={TypographyStyles.headingText}>Please enter the below fields: </Text>
			<InputField
				title='Name'
				keyboardType='default'
				value={name}
				onChange={(value) => setName(value)}
			/>
			<InputField
				title='Planned amount'
				keyboardType='numeric'
				value={plannedAmount}
				onChange={(value) => setPlannedAmount(value)}
			/>
			<InputField
				title='Actual amount'
				keyboardType='numeric'
				value={actualAmount}
				onChange={(value) => setActualAmount(value)}
			/>
			<View style={ContainerStyles.buttonContainer}>
				<TouchableOpacity
					style={ButtonStyles.primaryButton}
					onPress={handleFormSubmit}>
					<Text style={TypographyStyles.primaryButtonText}>Save</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={ButtonStyles.secondaryButton}
					onPress={() => navigation.navigate('budgetlisting')}>
					<Text style={TypographyStyles.secondaryButtonText}>Show items</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default BudgetEntryScreen;
