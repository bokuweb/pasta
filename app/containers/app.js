'use strict';

import {bindActionCreators} from 'redux';
import * as actions from '../actions/feed-action';
import { connect } from 'react-redux/native';
import Pasta from './pasta';

function mapStateToProps(state)  {
  return state;
  //  items : state.feed.items
  //};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pasta);

