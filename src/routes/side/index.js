/**
 * Side容器组件
 */
import React from 'react';
import {connect} from 'react-redux';
import * as actions from "./store/actionCreator";
import {bindActionCreators} from 'redux';
import store from '../../store';
import './index.css';
import axios from 'axios';

class Side extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {show, list, showSide} = this.props;
    console.log('side========', this.props)
    if (show) {
      return (
        <div onClick={() => {
          showSide(false)
        }}>
          <ul className="list">
            {
              (list || []).map((item, index) => {
              return <li className="item" key={index}>{item.name}</li>
            })
            }
          </ul>
        </div>
      )
    } else {
      return null;
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/list.json').then((res) => {
      const data = res.data.data;
      const action = actions.getListAction(data);
      store.dispatch(action)
    })
  }
}

function mapStateToProps(state) {
  return {
    show: state.side.show,
    list: state.side.list
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({showSide: actions.showSideAction}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Side);