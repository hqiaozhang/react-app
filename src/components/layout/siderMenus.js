/*
 * @Author: zhanghongqiao@hiynn.com 
 * @Date: 2018-02-11 15:09:38 
 * @Description: 左边菜单导航
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-02-11 17:59:52
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
  const itemLists = props.charts.map((d, i) =>
    <SubMenu
      key={d.key}
      title={<span><Icon type={d.key} /><span>{d.typeName}</span></span>}
    >
    </SubMenu>  
  )
  console.log(itemLists)
  return  itemLists
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
    
    <MenuItems charts={charts} />
  </Menu>    
  </div>
)

export default SiderMenus