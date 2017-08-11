'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
	 Text
	, TextInput
	, TouchableHighlight
	, View
	, Image
	, StyleSheet
	, Component
	, ActivityIndicator
} = ReactNative;
var TimerMixin = require('react-timer-mixin');


import { AppRegistry

	 } from 'react-native';
 class Login extends React.Component {
 	constructor(props){
 		super(props);
 		this.state = {
 			showProgress: false
 		}
 	}
    render() {
        return (
        <View style={styles.container}>
	        <Image style= {styles.logo}
	        	source={{ uri: "Octocat", isStatic: true }} />
	        <Text style={styles.heading}>Jamie's Totally Rad {"\n"}Github Browser</Text>
	        <TextInput style={styles.input}
	        	// onChangeText={(text)=> this.setState({username: text})}
	        	placeholder="Github Username" />
	        <TextInput style={styles.input}
	        onChangeText={(text)=> this.setState({password: text})}
	        	placeholder="Github Password" secureTextEntry={ true }/>
	        <TouchableHighlight style={styles.button} onPress={this.onLoginPressed.bind(this)}>
	        	<Text style={styles.buttonText}>
	        		Login
	        	</Text>
        	</ TouchableHighlight>
        	<ActivityIndicator animating={this.state.showProgress} size="large"
        	style = {styles.loader} />
        	
        </View>
        );
    }
    onLoginPressed(){
    	console.log('Attempting to login username ' + this.state.username);
    	this.setState({showProgress: true});

    	fetch('https:api.github.com/search/repositories?q=react')
    	.then((response)=> {
    		return response.json();
    	})
    	.then((results)=> {
    		console.log(results);
    		this.setState({showProgress: false});
    	});
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
	},
	loader: {

		marginTop:20
	}
})

module.exports = Login;

