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
        //<Counter
        //  counter={state.count}
        //  {...bindActionCreators(counterActions, dispatch)} />
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
