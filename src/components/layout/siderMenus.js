/*
 * @Author: zhanghongqiao@hiynn.com 
 * @Date: 2018-02-11 15:09:38 
 * @Description: 左边菜单导航
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-02-12 14:06:55
 */

import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'
import siderNav from '../../static/siderNav.json'

const { SubMenu } = Menu

const SiderMenus = ({match}) => {
  return (
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
      {
        siderNav.map((items, i) => {
          console.log(items.key)
           if(!items.child) {
             return (
              <Menu.Item key={items.key}>
                <Link to={`/${items.key}`}>
                  <Icon type={items.key} />
                  <span>{items.name}</span>
                </Link>
            </Menu.Item>
             )
           }else{
            return (
              <SubMenu
                key = {items.key}
                title = {<span>
                  <Icon type={items.key} />
                  <span>{items.name}</span></span>}>
              {
                // 子导航
                items.child && items.child.map((item) => {
                  return (
                    <Menu.Item key={item.key}>
                      <Link to={`/${item.key}`}>{item.name}</Link>
                    </Menu.Item>
                  )
                })
              }
            </SubMenu>)
           }
        })
      }
    </Menu>    
    </div>
  )
}
export default SiderMenus