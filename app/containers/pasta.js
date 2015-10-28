'use strict';

import React, {
  Component,
  StyleSheet,
  NavigatorIOS,
  Text,
  View
} from 'react-native';

import {bindActionCreators} from 'redux';
//import Counter from '../components/counter';
//import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux/native';
import HomeScreen from '../screens/home-screen.js';
import NewFeed from '../screens/NewFeed.js';

connect(state => ({
  state: state.counter
}));

export default class Pasta extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { state, dispatch } = this.props;
    return (
        <NavigatorIOS
          ref="mainNav"
          style={styles.container}
          initialRoute={{
            component: HomeScreen,
            title: 'Pasta',
            backButtonTitle: 'Back',
            rightButtonIcon: require('image!NavBarButtonPlus'),
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
