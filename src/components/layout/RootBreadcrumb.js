/*
 * @Author: zhanghongqiao@hiynn.com 
 * @Date: 2018-02-12 09:53:33 
 * @Description: 右边内容部分
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-02-12 10:39:24
 */

import React from 'react'
import { Breadcrumb } from 'antd' 
import {
  Link
} from 'react-router-dom'

 const RootBreadcrumb = ({match}) => {
  const urlArr = match.url.split('/')
  const len = urlArr.length
  let temArr = ['']
  const home = '首页'
  const names = {
    'tabels': '简单表格',
    'asyc-tables': '简单异步表格',
    'profile': '个人信息',
    'd3-charts': 'D3.js 图表',
    'd3-charts-bar': '柱状图',
    'd3-charts-pie': '饼图',
    'd3-charts-area': '面积图',
    'd3-charts-line': '拆线图',
    'd3-charts-radar': '雷达图'
  }
  return (
    <Breadcrumb style={{ margin: '12px 0' }}>
      {
        temArr[0] === temArr[1] && <Breadcrumb.Item>{home}</Breadcrumb.Item>
      }
      {
        temArr[0] !== temArr[1] && urlArr.map((item, i) => {
          let key = item !== '' ? item : 'home'
          if(item !== ''){
            temArr.push(item)
          }
          if(i !== len - 1){
            return (
              <Breadcrumb.Item key={key}>
                <Link to={temArr.join('/')}>
                  {item !== '' ? names[item] : home}
                </Link>
              </Breadcrumb.Item>
            )
          }else{
            return (<Breadcrumb.Item key={key}>{names[item] ? names[item] : item}</Breadcrumb.Item>)
          }
        })
      }
    </Breadcrumb>
  )
 }

 export default RootBreadcrumb