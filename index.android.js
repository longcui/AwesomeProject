/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * test
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
    Image,
  View
} from 'react-native';

class Fruit extends Component {
  render() {
    return (
        <Text>{this.props.name}</Text>
    );
  }
}

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showText: true
        }

        setInterval(() => {
            this.setState( previousState => {
                return {
                    showText: !previousState.showText
                }
            });
        }, 1000);
    }

    render(){
        // let display = this.state.showText == true ? this.props.text : "";
        if(this.state.showText){
            return <Text>{this.props.text}</Text>
        } else {
            return <Text></Text>
        }
    };
}


export default class Bananas extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View>
              <Fruit name='d'/>
              <Fruit name='e'/>

              <Blink text="ha ha!"/>
            </View>
        );
    }
}

export  class HelloWorldApp extends Component {
  render() {
    console.log("aa");
    return (
        <Text>Hello !~</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => Bananas);
