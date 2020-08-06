import React from 'react';
import './App.css';
import Todomenu from './compoment/Todomenu/todomenu';
import { Spin } from 'antd';
import {connect} from 'react-redux'

function App(props) {
  return (
    <div className="App">
      <Spin spinning={props.loading}>
        <Todomenu />
      </Spin>
    </div>
  );
}

const mapStateToProps = state => {
  const { loading } = state.loadingReducer;
  return { loading }
}


export default connect(mapStateToProps)(App);