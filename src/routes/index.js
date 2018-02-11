import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import SiderMenus from '../components/layout/siderMenus'

export const SiderMenusRoute = () => (
  <Router>
    <Route path='*' component={SiderMenus}/>
  </Router>
)
  