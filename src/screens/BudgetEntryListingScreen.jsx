import ButtonStyles from '../styles/ButtonStyles';
import ContainerStyles from '../styles/ContainerStyles';
import React, { useEffect, useState } from 'react';
import TableStyles from '../styles/TableStyles';
import TypographyStyles from '../styles/TypographyStyles';
import { FlatList, Text, TouchableOpacity, View, ToastAndroid } from 'react-native';
import { deleteAllItems, getAllItems } from '../utils/Database';

/**
 * It renders a the existing budget entries.
 * @screen
 */
const BudgetEntryListingScreen = () => {
	const [budgetList, setBudgetList] = useState([]);
	useEffect(() => {
		getAllItems().then((items) => {
			console.log('All Items:', items);
			setBudgetList(items);
		});
	}, []);
	if (budgetList.length == 0) {
		return (
			<View style={ContainerStyles.sectionContainer}>
				<Text style={TypographyStyles.headingText}>Please add something to display!</Text>
			</View>
		);
	}
	return (
		<View style={ContainerStyles.sectionContainer}>
			<View style={TableStyles.table}>
				<View style={TableStyles.row}>
					<Text style={TableStyles.headerCell}>Name</Text>
					<Text style={TableStyles.headerCell}>Planned Amount</Text>
					<Text style={TableStyles.headerCell}>Actual Amount</Text>
				</View>
				<FlatList
					data={budgetList}
					renderItem={({ item }) => (
						<View style={TableStyles.row}>
							<Text style={TableStyles.cell}>{item.Name}</Text>
							<Text style={TableStyles.cell}>{item.PlannedAmount}</Text>
							<Text style={TableStyles.cell}>{item.ActualAmount}</Text>
						</View>
					)}
				/>
			</View>
			<TouchableOpacity
				style={ButtonStyles.dangerButton}
				onPress={() =>
					deleteAllItems().then(() => {
						setBudgetList([]);
						ToastAndroid.show('All data deleted successfully', ToastAndroid.SHORT);
					})
				}>
				<Text style={TypographyStyles.dangerButtonText}>Clear</Text>
			</TouchableOpacity>
		</View>
	);
};
export default BudgetEntryListingScreen;
