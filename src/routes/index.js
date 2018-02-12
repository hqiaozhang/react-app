import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from '../containers/Home'
import User from '../containers/User'
import PieCharts from '../containers/charts/pie'
import SiderMenus from '../components/layout/SiderMenus'
import RootBreadcrumb from '../components/layout/RootBreadcrumb'

// 左边导航
export const SiderMenusRoute = () => (
  // 注意，不加Router要报错，便是参考案例没有加
  <Router>
    <Route path='*' component={SiderMenus}/>
  </Router>
)

// 右边内容布局板块
export const RootBreadcrumbRoute = () => 
  <Router>
    <Route path='*' component={RootBreadcrumb}/>
  </Router>

// 右边内容切换 
export const ContentRoute = () =>
  <Router> 
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/user' component={User} />
      <Route path='/d3-charts-pie' component={PieCharts} /> 
    </Switch>
  </Router>  

{/* <Router> 
<Switch>
  <Route path="/" component={SiderMenus}>
    <IndexRoute  component={Home} />
    <Route exact path='/user' component={User} />
  </Route>
</Switch>
</Router>   */}