/*
 * @Author: zhanghongqiao@hiynn.com 
 * @Date: 2018-02-11 11:44:06 
 * @Description: 头部导航
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-02-11 15:54:45
 */

import React from 'react'
import { Layout, Menu, Badge, Icon, Avatar } from 'antd'

const { SubMenu } = Menu
const { Header } = Layout

const RootHeader = () => (
  <Header className='header clearfix fixed'>
    <div className='logo'>LOGO</div>
    <div className='left-menu' style={{float: 'left', width: '50%'}}>
      <Menu
        theme='dark'
        mode='horizontal'
        defaultSelectedKeys={['2']}
        style={{lineHeight: '64px'}}
      >
        <Menu.Item key='left-menu-2'>图表</Menu.Item>
        <Menu.Item key='left-menu-3'>文档</Menu.Item>
      </Menu>
    </div>
    <div className='right-menu' style={{float: 'right', width: '30%'}}>
      <Menu
        theme='dark'
        mode='horizontal'
        style={{lineHeight: '64px', float: 'right'}}
      >
        <Menu.Item key='right-menu-1'>
          <Badge count={20} overflowCount={10} style={{marginLeft: 10}}>
            <Icon type='notification' />
          </Badge>
        </Menu.Item>

        <SubMenu title={<Badge dot><Avatar shape='square' icon='user' /></Badge>}>
          <Menu.ItemGroup title='用户中心'>
            <Menu.Item key='setting: 1'>你好-userName</Menu.Item>
            <Menu.Item key='setting: 2'>个人信息</Menu.Item>
            <Menu.Item key='logout'>退出登录</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup>
            <Menu.Item key='setting:3'>个人设置</Menu.Item>
            <Menu.Item key='setting:4'>系统设置</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    </div>
  </Header>
)

export default RootHeader
