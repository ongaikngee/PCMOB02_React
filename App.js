import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from './assets/thechild.jpg';

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.fillerContainer}></View>


			<View style={styles.titleContainer}>
			<Image source={logo} style={styles.logo}  />

			<Text style={styles.instruction}>
				The child
			</Text>

			<Text style={styles.para}>Cute little thing, big eyes, slow blinks, pointy ears</Text>
			<StatusBar style="auto" />

			<TouchableOpacity onPress={() => alert('Hello World!')} style={styles.touchable}>
				<Text style={styles.touchableText}>Pick a photo</Text>
			</TouchableOpacity>
			</View>

			<View style={styles.fillerContainer}></View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#EF476F',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection:"column",

	},titleContainer:{
		backgroundColor:"orange",
		width:400,
		alignItems:"center",
		padding:10,
		borderRadius:30,
	},
	fillerContainer:{
		backgroundColor:"#FFD166",
		width:300,
		height:300,
		margin:10,
	},
	logo: {
		width: 305,
		height: 159,
		marginBottom: 10,
		borderRadius:20,
	},
	instruction: {
		color: '#FFD166',
		fontSize: 40,
		fontWeight: 'bold',
		textAlign: "center",
		marginHorizontal: 15
	},
	para: {
		color: 'lightgrey',
		fontSize: 20,
		textAlign: "center",
		marginHorizontal: 15
	},
	touchable: {
		backgroundColor: 'blue',
		padding: 20,
		borderRadius: 5,
		margin: 10,
	},
	touchableText: {
		fontSize: 20,
		color: '#fff'
	}
});
