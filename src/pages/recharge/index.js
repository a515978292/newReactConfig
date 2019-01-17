import React, { Component } from 'react';
import './index.less'

import { Button ,Pagination } from 'antd';
class App extends Component {
  render() {
    return (
      <div className={'bigBox'}>
          <Button type={'primary'}>123</Button>
          <Pagination defaultCurrent={1} total={50} />
      </div>
    );
  }
  
  componentWillMount(){
    
  }
}

export default App;
