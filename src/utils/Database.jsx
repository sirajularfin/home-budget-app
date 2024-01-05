import SQLite from 'react-native-sqlite-storage';

const TABLE_NAME = 'BudgetItems';

// Open a database
const db = SQLite.openDatabase({ name: 'BudgetDB', location: 'default' });

// Create a table
const initDatabase = () => {
	db.transaction((tx) => {
		tx.executeSql(
			`CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (Id INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, PlannedAmount REAL, ActualAmount REAL)`,
			[],
			(tx, results) => {
				console.log('Table created successfully');
			},
			(error) => {
				console.error('Error creating table:', error);
			}
		);
	});
};

// Insert data into the table
const insertData = (name, plannedAmount, actualAmount) => {
	db.transaction((tx) => {
		tx.executeSql(
			`INSERT INTO ${TABLE_NAME} (Name, PlannedAmount, ActualAmount) VALUES (?, ?, ?)`,
			[name, plannedAmount, actualAmount],
			(tx, results) => {
				console.log('Data inserted successfully');
			},
			(error) => {
				console.error('Error inserting data:', error);
			}
		);
	});
};

// Query data from the table
const getAllItems = () => {
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				`SELECT * FROM ${TABLE_NAME}`,
				[],
				(tx, results) => {
					const rows = results.rows;
					const items = [];
					for (let i = 0; i < rows.length; i++) {
						items.push(rows.item(i));
					}
					resolve(items);
				},
				(error) => {
					console.error('Error querying data:', error);
					reject(error);
				}
			);
		});
	});
};

// Delete the items in the table
const deleteAllItems = () => {
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				`DELETE FROM ${TABLE_NAME}`,
				[],
				(tx, results) => {
					console.log('All items deleted successfully');
					resolve();
				},
				(error) => {
					console.error('Error deleting items:', error);
					reject(error);
				}
			);
		});
	});
};

export { initDatabase, insertData, getAllItems, deleteAllItems };
