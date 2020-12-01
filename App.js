import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from './assets/logo.png';

export default function App() {
	return (
		<View style={styles.container}>
			{/* <Image source={logo} style={styles.logo}  /> */}

			{/* <Text style={styles.instruction}>
				To share a photo from your phone with a friend, just press the button below!
			</Text> */}

			<Text style={styles.instruction}>Hello World!</Text>
			<StatusBar style="auto" />

			{/* <TouchableOpacity onPress={() => alert('Hello World!')} style={styles.touchable}>
				<Text style={styles.touchableText}>Pick a photo</Text>
			</TouchableOpacity> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'yellow',
		alignItems: 'center',
		justifyContent: 'center'
	},
	logo: {
		width: 305,
		height: 159,
		marginBottom: 10
	},
	instruction: {
		color: 'red',
		fontSize: 40,
		fontWeight: 'bold',
		marginHorizontal: 15
	},
	touchable: {
		backgroundColor: 'blue',
		padding: 20,
		borderRadius: 5
	},
	touchableText: {
		fontSize: 20,
		color: '#fff'
	}
});
