/**
 * header容器组件
 */
import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../side/store/actionCreator';
import {bindActionCreators} from 'redux';
import store from '../../store/index';

class Header extends React.Component {

  showSide1 = () => {
    let {show} = this.props;
    store.dispatch(actions.showSideAction(!show))
  }

  render() {
    let {title, showSide, show} = this.props;
    console.log('header========', this.props, store)
    return (
      <div
        style={{height: '50px', display: 'flex', alignItems: 'center', background: 'green'}}>
        <button
          // onClick={() => {
          //   showSide(!show)
          // }}
          onClick={this.showSide1}
        >{show ? '隐藏' : '显示'}菜单
        </button>
        <span style={{color: '#fff', marginLeft: '15px'}}>{title}</span>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    title: state.header.title,
    show: state.side.show
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({showSide: actions.showSideAction}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
