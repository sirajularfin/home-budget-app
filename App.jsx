import React, { useEffect } from 'react';
import BudgetEntryListingScreen from './src/screens/BudgetEntryListingScreen';
import BudgetEntryScreen from './src/screens/BudgetEntryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { initDatabase } from './src/utils/Database';

const Stack = createNativeStackNavigator();

const App = () => {
	useEffect(() => {
		initDatabase();
	}, []);
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='budgetentry'>
				<Stack.Screen
					name='budgetentry'
					component={BudgetEntryScreen}
					options={{ title: 'Budget Entry' }}
				/>
				<Stack.Screen
					name='budgetlisting'
					component={BudgetEntryListingScreen}
					options={{ title: 'Budget Entry Listing' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
