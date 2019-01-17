import React from 'react';
import ReactDOM from 'react-dom';
import {Recharge}  from './route' //首次加载优化
import * as serviceWorker from './serviceWorker';
import {HashRouter as Router,Route,Switch} from 'react-router-dom'

ReactDOM.render(
      <Router>
          <Switch>
             <Route component={Recharge} path="/"></Route>
          </Switch>
      </Router>  
      
      , 
  document.getElementById('root'));

serviceWorker.unregister();
