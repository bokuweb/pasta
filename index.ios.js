'use strict';
import HomeScreen from './app/screens/home-screen.js';
const  React = require('react-native');
let {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View,
} = React;

class Pasta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bootstrapped: false
    }
  }
  render() {
    return (
        <Navigator
          initialRoute={{name: 'My First Scene', index: 0}}
          renderScene={(route, navigator) =>
             <MySceneComponent
             name={route.name}
             onForward={() => {
               var nextIndex = route.index + 1;
               navigator.push({
                 name: 'Scene ' + nextIndex,
                 index: nextIndex,
               });
             }}
             onBack={() => {
               if (route.index > 0) {
                 navigator.pop();
               }
             }}
             />
         }
        />
    );
  }
}

class MySceneComponent extends  React.Component {
  render() {
	return (
		<View>
  		<Text>{this.props.name}</Text>
  		</View>
    )
  }
  
}
AppRegistry.registerComponent('Pasta', () => Pasta);
