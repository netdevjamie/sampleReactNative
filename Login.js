import React from 'react';

import { AppRegistry, Text, View, Iamge, StyleSheet } from 'react-native';

export default class Login extends React.Component {
    render() {
        return (
        <View style={styles.container}>
	        <Image style= {styles.logo}
	        source={require('image!Octocat')} />
        </View>
        );
    }
} 

var styles = StyleSheet.create({
	container: {
		backgroundColor: '#333',
		flex: 1
	},
	logo: {
		width:66,
		height: 55
	}
})

module.exports = Login;

