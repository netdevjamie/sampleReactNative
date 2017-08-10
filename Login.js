import React from 'react';

import { AppRegistry, Text, TextInput, TouchableHighlight, View, Image, StyleSheet } from 'react-native';

export default class Login extends React.Component {
    render() {
        return (
        <View style={styles.container}>
	        <Image style= {styles.logo}
	        	source={{ uri: "Octocat", isStatic: true }} />
	        <Text style={styles.heading}>Jamie's Totally Rad {"\n"}Github Browser</Text>
	        <TextInput style={styles.input}
	        	placeholder="Github Username" />
	        <TextInput style={styles.input}
	        	placeholder="Github Password" secureTextEntry="true"/>
	        <TouchableHighlight style={styles.button}>
	        	<Text style={styles.buttonText}>
	        		Login
	        	</Text>
        	</ TouchableHighlight>
        </View>
        );
    }
} 

var styles = StyleSheet.create({
	container: {
		backgroundColor: '#F5FCFF',
		flex: 1,
		paddingTop:40,
		alignItems: 'center',
		padding: 12
	},
	logo: {
		width:66,
		height: 55
	},
	heading: {
		fontSize: 25,
		marginTop: 10
	},
	input: {
		height:50,
		width: 350,
		marginTop: 10,
		padding: 4,
		fontSize: 18,
		borderWidth: 1,
		borderColor: '#48bbec'
	},
	button: {
		height: 50,
		backgroundColor: '#48BBEC',
		alignSelf: 'stretch',
		marginTop:10,
		justifyContent: 'center'

	},
	buttonText: {
		fontSize: 22,
		color: '#FFF',
		alignSelf: 'center'
	}
})

module.exports = Login;

