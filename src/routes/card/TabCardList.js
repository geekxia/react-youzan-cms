import React from 'react'
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router'
import {
  Button,
  Row,
  Col,
  Input,
  Tabs,
  Table
} from 'antd'
const { Search } = Input
const { TabPane } = Tabs

@inject('store') @observer
class TabCardList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tabKey: "0"
    }
  }
  componentDidMount() {
    this.props.store.CardStore.getCardList()
  }
  // 新建权益卡 按钮 点击事件
  skipToCardCreate() {
    console.log('----------------', this.props)
    // 调用父组件的props事件，实现路由跳转
    // this.props.onSkip()
    this.props.history.push('/card/create')
  }
  // 分页查询
  pageChange(e) {
    console.log(e.current)
    this.props.store.CardStore.getCardListOfPage(e.current)
  }
  // 根据状态进行筛选
  statusChange(e) {
    console.log(e)
    this.setState({
      tabKey: e
    })
    this.props.store.CardStore.getCardListOfStatus(e)
  }
  // 根据关键字搜索
  searchChange(e) {
    console.log(e)
    this.props.store.CardStore.getCardListOfSearch(e)
  }



  render() {
    let { list2, list1 } = this.props.store.CardStore
    // 处理“权益”数据的中文显示
    list2.map((ele,idx)=>{
      let str = ''
      ele.rights.map((ele2, idx2)=>{
        switch (ele2) {
          case 1:
            str += '包邮'
            break;
          case 2:
            str += '消费折扣'
            break;
          case 3:
            str += '积分回馈倍率'
            break;
          case 4:
            str += '获取好友体验卡'
            break;
          default:
        }
      })
      list2[idx].rights_zh = str
    })
    const columns = [
      {
        title: '权益卡名称',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '领取条件',
        dataIndex: 'condition',
        key: 'condition',
        render: (text, row, index)=>{
          let zh = ''
          switch (row.condition) {
            case 1:
              zh = '可直接领取'
              break;
            case 2:
              zh = '需付费购买'
              break;
            case 3:
              zh = '满足指定条件'
              break;
            default:
          }
          return (<span>{zh}</span>)
        }
      },
      {
        title: '有效期',
        dataIndex: 'period',
        key: 'period',
        render: (text, row, index)=>{
          let zh = ''
          switch (row.period) {
            case 1:
              zh = '永久有效'
              break;
            case 2:
              zh = '领卡时起'
              break;
            default:
              zh = row.period
          }
          return (<span>{zh}</span>)
        }
      },
      {
        title: '权益',
        dataIndex: 'rights_zh',
        key: 'rights_zh',
      },
      {
        title: '操作',
        key: 'operation',
        fixed: 'right',
        width: 180,
        align: 'right',
        render: () => {
          return(
            <div className='pct_row_actions'>
              <a>查看成员</a>
              <a>发卡</a>
              <a>编辑</a>
            </div>
          )
        },
      },
    ];



    return (
      <div className="page_card_tab1">
        {/*按钮+搜索框*/}
        <div className='pct_top'>
          <Row>
            <Col span={4}>
              <Button onClick={this.skipToCardCreate.bind(this)} type='primary'>新建权益卡</Button>
            </Col>
            <Col span={14}></Col>
            <Col span={6}>
            <Search
              placeholder="请输入权益卡名称"
              onSearch={this.searchChange.bind(this)}
            />
            </Col>
          </Row>
        </div>

        {/*三个筛选按钮*/}
        <div>
        <Tabs type="card" activeKey={this.state.tabKey} onChange={this.statusChange.bind(this)}>
          <TabPane tab="使用中" key="1">
          </TabPane>
          <TabPane tab="已禁用" key="2">
          </TabPane>
          <TabPane tab="已过期" key="3">
          </TabPane>
        </Tabs>
        </div>

        {/*表格区域*/}
        <div>
          <Table
            onChange={this.pageChange.bind(this)}
            rowKey='id'
            columns={columns}
            dataSource={list2}
            scroll={{ x: 1000 }}
            pagination={{pageSize: 2, total: list1.length }} />
        </div>

      </div>
    )
  }
}
export default withRouter(TabCardList)
