import React from 'react';
import store from './store'
import { Provider } from 'mobx-react'

import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
import 'antd/dist/antd.css'

import Order from './routes/order'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <NavLink to='/order'>订单</NavLink>
          <Route path='/order' component={Order}></Route>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
