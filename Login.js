import React from 'react';

import { AppRegistry, Text, View, StyleSheet } from 'react-native';

export default class Login extends React.Component {
    render() {
        return (
        <View style={styles.container}>
        </View>
        );
    }
} 

var styles = StyleSheet.create({
	container: {
		backgroundColor: '#333',
		flex: 1
	}
})

module.exports = Login;

