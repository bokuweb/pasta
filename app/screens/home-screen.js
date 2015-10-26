'use strict';

import  React from 'react-native';

const {
  //ActivityIndicatorIOS,
  //ActionSheetIOS,
  //AsyncStorage,
  //ScrollView,
  StyleSheet,
  Text,
  //TouchableHighlight,
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
		<View  style={styles.wrapper}>
  		  <Text>ssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
  		</View>
    );
  }
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

  _showFeedDetails(feed:any) {
    Api.fetchRss(feed.feedUrl)
    .then((res) => {
      if(res.responseStatus == 200) {
        var entries = res.responseData.feed.entries;
          this.props.navigator.push ({
            component: FeedDetail,
            title: feed.title,
            rightButtonIcon: require('image!NavBarButtonSettings'),
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

  _renderFeed(feed:any) {
    return (
      <TouchableHighlight
        underlayColor="rgba(0,0,0,.1)"
        onPress={() => { this._showFeedDetails(feed) }}
        key={feed.length}>
        <View style={styles.wrapper}>
          <View style={styles.header}>
            <Text style={styles.title}>{feed.title}</Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.description}>{feed.description}</Text>
            <Text style={styles.smallText}>{feed.feedUrl}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
*/

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
