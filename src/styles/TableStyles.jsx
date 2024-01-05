import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const TableStyles = StyleSheet.create({
	table: {
		width: width - 30,
		borderColor: '#333',
		borderWidth: 1,
		borderRadius: 5,
	},
	row: {
		flexDirection: 'row',
		//justifyContent: 'space-around',
		borderBottomColor: '#333',
		borderBottomWidth: 1,
		backgroundColor: '#f0f0f0',
	},
	headerCell: {
		width: (width - 30) / 3,
		textAlign: 'center',
		paddingVertical: 10,
		fontWeight: 'bold',
		color: '#333',
	},
	cell: {
		width: (width - 30) / 3,
		textAlign: 'center',
		paddingVertical: 10,
		color: '#333',
	},
});

export default TableStyles;
