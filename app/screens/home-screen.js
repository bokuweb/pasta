'use strict';

import  React from 'react-native';
import { connect } from 'react-redux/native';

const {
  //ActivityIndicatorIOS,
  //ActionSheetIOS,
  //AsyncStorage,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} = React;

// var ActionSheetIOS = require('ActionSheetIOS');

//var BUTTONS = [
//  'Remove Feed',
//  'Back',
//];

//var DESTRUCTIVE_INDEX = 0;
//var CANCEL_INDEX = 1;

class HomeScreen extends  React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <ScrollView style={styles.scrollView}>
        {this.props.getItems().map((item) => {
          return this._renderFeed(item)
        })}
      </ScrollView>
    );
  }


/*
  componentWillMount() {
    FeedStore.addChangeListener(this._updateFeedsFromStore.bind(this));
    this._updateFeedsFromStore();
  }

  componentWillUnmount() {
    FeedStore.removeChangeListener(this._updateFeedsFromStore.bind(this));
  }

  _updateFeedsFromStore() {
    this.setState({feeds: FeedStore.getState()});
  }

  _showFeedActionSheet(feed) {
    ActionSheetIOS.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: CANCEL_INDEX,
      destructiveButtonIndex: DESTRUCTIVE_INDEX
    },
    (buttonIndex) => {
      switch(buttonIndex) {
        case 0:
          AppActions.removeFeed(feed);
          this.props.navigator.pop();
          break;
      }
    });
  }
*/
  _showFeedDetails(feed:any) {
    Api.fetchRss(feed.feedUrl)
    .then((res) => {
      if(res.responseStatus == 200) {
        var entries = res.responseData.feed.entries;
          this.props.navigator.push ({
            component: FeedDetail,
            title: feed.title,
            //rightButtonIcon: require('image!NavBarButtonSettings'),
            onRightButtonPress: () => {this._showFeedActionSheet(feed)},
            passProps: {
              entries: entries
            }
          })
        } else {
        AlertIOS.alert(res.responseDetails);
      }
    });
  }

  _renderFeed(item) {
    return (
      <TouchableHighlight
        underlayColor="rgba(0,0,0,.1)"
        //onPress={() => { this._showFeedDetails(feed) }}
        key={item.length}>
        <View style={styles.wrapper}>
          <View style={styles.header}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        <View style={styles.footer}>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}
var styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  wrapper: {
    paddingTop: 20,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e9e9e9',
  },
  title: {
    paddingTop: 2,
    paddingBottom: 3,
    paddingRight: 15,
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    color: "#B4AEAE",
    fontSize: 12,
    marginBottom: 5,
  },
  smallText: {
    fontSize: 11,
    textAlign: 'right',
    color: "#B4AEAE",
  }
});
var styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  wrapper: {
    paddingTop: 80,
  }
});

module.exports = HomeScreen;
