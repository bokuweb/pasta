'use strict';
import  React from 'react-native';
import HomeScreen from './app/screens/home-screen.js';

const {
  AppRegistry,
  StyleSheet,
  Navigator,
  NavigatorIOS,
  Text,
  View
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
        <NavigatorIOS
          ref="mainNav"
          style={styles.container}
          initialRoute={{
            component: HomeScreen,
            title: 'Pasta',
            //leftButtonTitle: 'Back',
            rightButtonIcon: require('image!NavBarButtonPlus'),
            //rightButtonTitle: "test",
            onRightButtonPress: () => {
              this.refs.mainNav.navigator.push({
                component: NewFeed,
                title: 'New Feed',
              });
            }
          }}
        />
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
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
