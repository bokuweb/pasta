'use strict';

import React, {
  Component,
  StyleSheet,
  NavigatorIOS,
  Text,
  View
} from 'react-native';

import HomeScreen from '../screens/home-screen.js';
import NewFeed from '../screens/NewFeed.js';

export default class Pasta extends Component {
  constructor(props) {
    super(props);
  }

  getItems() {
    return this.props.feed.items;
  }

  render() {
    return (
        <NavigatorIOS
          ref="mainNav"
          style={styles.container}
          initialRoute={{
            component: HomeScreen,
            title: 'Pasta',
            passProps: {getItems:this.getItems.bind(this)},
            backButtonTitle: 'Back',
            rightButtonIcon: require('image!NavBarButtonPlus'),
            //rightButtonTitle:'add',
            onRightButtonPress: () => {
              this.refs.mainNav.navigator.push({
                component: NewFeed,
                title: 'New Feed',
                passProps:  this.props
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
