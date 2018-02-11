import React from 'react'
import { Layout } from 'antd'
import RootHeader from './components/layout/rootHeader'
import { SiderMenusRoute } from './routes'
const { Sider } = Layout

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      collapsed: false
    };
    this.onCollapse = (collapsed) => {
      this.setState({ collapsed })
    }
  }
  render() {
    return (
      <Layout style={{minHeight: '100vh'}}>
        <RootHeader />
        <Layout style={{PaddingTOp: '64px'}}>
          <Sider
            width={200}
            style={{background: '#333'}}
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            className='fixed'
          >
          <SiderMenusRoute />
          </Sider>
          
        </Layout>
      </Layout>
    )
  }
}
// 