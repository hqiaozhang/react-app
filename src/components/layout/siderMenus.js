/*
 * @Author: zhanghongqiao@hiynn.com 
 * @Date: 2018-02-11 15:09:38 
 * @Description: 左边菜单导航
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-02-11 18:19:21
 */

import React from 'react'
import { Menu, Icon, Badge } from 'antd'
import { Link } from 'react-router-dom'
import SubMenu from 'antd/lib/menu/SubMenu';
import charts from '../../static/charts.json'
 

/**
 * 渲染子类
 * @param {object} props  
 */
function MenuItem(props) {
  console.log('props', props)
  const menuItem = props.subType.map((d) => 
    <Menu.Item key='/{d.key}'>
      <Link to='/{d.key}'>{d.name}</Link>
    </Menu.Item> 
  )
  return menuItem
}

function MenuItems(props) {
   return props.charts.map((d, i) =>
    <SubMenu
      key={d.key}
      title={<span><Icon type={d.key} /><span>{d.typeName}</span></span>}  
    >
    </SubMenu>  
  )
  
}

const SiderMenus = ({match}) => (
  <div style={{paddingBottom: '120px'}}>
  <Menu 
    theme='dark' 
    defaultSelectedKeys={[match.url]} 
    selectedKeys={[match.url]} 
    defaultOpenKeys={['sub4']} 
    mode='inline'>
    <Menu.Item key='/'>
      <Link to='/'>
        <Icon type='home' />
        <span>首页</span>
      </Link>
    </Menu.Item>
    {/* <MenuItems charts={charts} /> */}
    
    {/* 表格 */}
    <SubMenu
        key="sub1"
        title={<span><Icon type="switcher" /><span>表格</span></span>}
      >
        <Menu.Item key="/tables"><Link to="/tables">简单表格</Link></Menu.Item>
        <Menu.Item key="/asyc-tables"><Link to="/asyc-tables">简单异步表格</Link></Menu.Item>
      </SubMenu>
      {/* 个人中心 */}
      <SubMenu
        key="sub2"
        title={<span><Icon type="user" /><span>个人中心</span></span>}
      >
        <Menu.Item key="/profile"><Link to="/profile">个人信息</Link></Menu.Item>
      </SubMenu>
      {/* 数学图形 */}
      <SubMenu
        key="sub3"
        title={<span><Icon type="dot-chart" /><span>数学图形</span></span>}
      >
        <Menu.Item key="/simple-math-chart"><Link to="/simple-math-chart">常用函数图像</Link></Menu.Item>
        <Menu.Item key="/archimedean-spiral-line"><Link to="/archimedean-spiral-line">阿基米德螺线</Link></Menu.Item>
        <Menu.Item key="/equiangular-spiral-line"><Link to="/equiangular-spiral-line">等角螺线</Link></Menu.Item>
        <Menu.Item key="/exponential-spiral-line"><Link to="/exponential-spiral-line">指数函数图像-极坐标</Link></Menu.Item>
        <Menu.Item key="/logarithmic-spiral-line"><Link to="/logarithmic-spiral-line">对数函数图像-极坐标</Link></Menu.Item>
      </SubMenu>
  </Menu>    
  </div>
)

export default SiderMenus