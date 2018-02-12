/*
 * @Author: zhanghongqiao@hiynn.com 
 * @Date: 2018-02-12 09:33:59 
 * @Description: 首页
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-02-12 11:16:04
 */
import React from 'react'
import { Row, Col, Card, Timeline, Icon } from 'antd'

/**
 * 图库
 * @returns 图库布局
 */
function Charts() {
  return <div className='gutter-box'>
    <Card bordered={false}>
      <div className='clearfix y-center'>
        <div className='pull-left mr-m'>
          <Icon type='dot-chart' className='text-2x text-danger' />
        </div>
        <div className='clearfix'>
          <div className="text-nuted">图库</div>
          <h2>36</h2>
        </div>
      </div>
    </Card>
  </div>
}

/**
 * 文档
 * @returns 文档布局
 */
function Document() {
  return <div className='gutter-box'>
    <Card>
      <div className='clearfix y-center'>
        <div className='pull-left mr-m'>
          <Icon type='file-text' className='text-2x' />
        </div>
        <div className='clearfix'>
          <div className='text-muted'>文档</div>
          <h2>3011</h2>
        </div>
      </div>
    </Card>
  </div>
}
 
/**
 * 当前任务进度
 * @returns 任务进度布局  
 */
function Task() {
  return <Col className="gutter-row" md={8}>
    <div className="gutter-box">
      <Card bordered={false}>
        <div className="pb-m">
          <h3>任务</h3>
          <small>10个已经完成，2个待完成，1个正在进行中</small>
        </div>
          <a className="card-tool"><Icon type="sync" /></a>
          <Timeline>
            <Timeline.Item color="green">新版本迭代会</Timeline.Item>
            <Timeline.Item color="green">完成网站设计初版</Timeline.Item>
            <Timeline.Item color="red">
                <p>联调接口</p>
                <p>功能验收</p>
            </Timeline.Item>

            <Timeline.Item color="#108ee9">
                <p>登录功能设计</p>
                <p>权限验证</p>
                <p>页面排版</p>
            </Timeline.Item>
          </Timeline>
      </Card>
    </div>
  </Col>
}

function Photo() {
  return <div className="gutter-box">
    <Card bordered={false}>
      <div className="clearfix y-center">
        <div className="pull-left mr-m">
          <Icon type="camera" className="text-2x text-info" />
        </div>
        <div className="clearfix">
          <div className="text-muted">照片</div>
          <h2>802</h2>
        </div>
      </div>
    </Card>
  </div>
}

/**
 * 文章
 * @returns 文章布局
 */
function Article() {
  return <div className="gutter-box">
    <Card bordered={false}>
      <div className="clearfix y-center">
        <div className="pull-left mr-m">
          <Icon type="mail" className="text-2x text-success" />
        </div>
        <div className="clearfix">
          <div className="text-muted">文章</div>
          <h2>102</h2>
        </div>
      </div>
    </Card>
  </div>
}

 export default class Home extends React.Component {
   render() {
    return (
      <div className='gutter-example button-demo'>
        <Row gutter={10}>
        <Col className='gutter-row'  md={4}>
          <Charts />
          <Document />
        </Col>
          <Col className="gutter-row" md={4}>
            <Photo />
            <Article />
          </Col>

          {/* 图表 */}
        <Col className="gutter-row" md={16}>
          <div className="gutter-box">
            <Card bordered={false} className={'no-padding'}>
                {/* {<EchartsProjects />} */}
            </Card>
          </div>
        </Col>
        {/* 任务进度 */}
        <Task />
        </Row>
      </div>
    )
   }
 }
