import React from 'react'
import { Layout } from 'antd'
import RootHeader from './components/layout/RootHeader'
import { SiderMenusRoute, ContentRoute, RootBreadcrumbRoute } from './routes'

const { Content, Sider } = Layout

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
        {/* 头部 */}
        <RootHeader />
        {/* 左边 */}
        <Layout style={{PaddingTOp: '64px'}}>
          <Sider
            width={200}
            style={{background: '#333'}}
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            className='fixed'>
            
            {/* 左边导航部分 */}
            <SiderMenusRoute />
          </Sider>

          {/* 右边内容部分 */}
          <Layout className={this.state.collapsed ? 'content-normal' : 'content-max'}>
            <RootBreadcrumbRoute />
            {/* 右边内容切换部分 */}
            <Content style={{margin: 0, minHeight: 280}}>
              <ContentRoute />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}
