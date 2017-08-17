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
var buffer = require('buffer');

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

    	var errorCtrl = <View />;

    	if(this.state.badCredentials){
    		errorCtrl = 
    		<Text style={styles.error}>
    			The username and password provided did not work.
    		</Text>;
    	}

    	if(this.state.unknownError){
    		errorCtrl = 
    		<Text style={styles.error}>
    			Unexpected issue encountered.
    		</Text>;
    	}

        return (
        <View style={styles.container}>
	        <Image style= {styles.logo}
	        	source={{ uri: "Octocat", isStatic: true }} />
	        <Text style={styles.heading}>Jamie's Totally Rad {"\n"}Github Browser</Text>

	        <TextInput style={styles.input}
	        	onChangeText={(text)=> this.setState({username: text})}
	        	placeholder="Github Username" />
	        <TextInput style={styles.input}
	        onChangeText={(text)=> this.setState({password: text})}
	        	placeholder="Github Password" secureTextEntry={ true }/>
	        <TouchableHighlight style={styles.button} onPress={this.onLoginPressed.bind(this)}>
	        	<Text style={styles.buttonText}>
	        		Login
	        	</Text>
        	</ TouchableHighlight>
        	{errorCtrl}
        	<ActivityIndicator animating={this.state.showProgress} size="large"
        	style = {styles.loader} />	
        </View>
        );
    }
    onLoginPressed(){
    	console.log('Attempting to login username ' + this.state.username);
    	this.setState({showProgress: true});

    	var b = new buffer.Buffer(this.state.username + ':' + this.state.password);
    	
    	var encodeAuth = b.toString('base64');

    	fetch('https:api.github.com/user', {
    		headers: {
    			'Authorization' : 'Basic ' + encodeAuth
    		}
    	})
    	.then((response)=> {
    		if(response.status >= 200 && response.status < 300){
    			return response;
    		}
    		if(response.status == 401){
    			throw {
    				badCredentials: response.status == 401,
    				unknownError: response.status != 401
    			}
    		}

    		throw 'Unknown error'
    	})
    	.then((response)=> {
    		return response.json();
    	})
    	.then((results)=> {
    		console.log(results);
    		this.setState({showProgress: false});
    	})
    	.catch((err)=> {
    		console.log('login failed: ' + err);
    		this.setState(err);
    	})
    	.finally(()=> {
    		this.setState({showProgress:false});
    		this.setState({animating: false});
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

