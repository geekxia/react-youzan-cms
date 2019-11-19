import React from 'react'
import { inject, observer } from 'mobx-react'
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
      searchText: ''
    }
  }
  componentDidMount() {
    console.log(this.props)
    this.props.store.CardStore.getCardList()
  }
  // 新建权益卡 按钮 点击事件
  skipToCardCreate() {
    console.log('----------------', this.props)
    // 调用父组件的props事件，实现路由跳转
    this.props.onSkip()
  }
  tableChange(e) {
    this.props.store.CardStore.getCardListOfPage(e.current, e.pageSize)
  }
  statusChange(e) {
    console.log(e)
    this.props.store.CardStore.getCardListOfStatus(e)
  }
  searchChange(e) {
    console.log(e)
    this.props.store.CardStore.getCardListOfSearch(e)
  }

  render() {
    let { list2, pageList } = this.props.store.CardStore
    const columns = [
      {
        title: '权益卡名称',
        // width: 100,
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '领取条件',
        // width: 100,
        dataIndex: 'condition_zh',
        key: 'condition_zh'
      },
      {
        title: '有效期',
        // width: 100,
        dataIndex: 'period',
        key: 'period'
      },
      {
        title: '权益',
        // width: 100,
        dataIndex: 'rights_zh',
        key: 'rights_zh',
        render: (text, row, idx)=>{
          let arr = []
          row.rights_zh.map((ele, idx)=>{
            arr.push(<div key={idx}>{ele}</div>)
          })
          return arr
        }
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
        <Tabs type="card" onChange={this.statusChange.bind(this)}>
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
            rowKey='id'
            columns={columns}
            dataSource={pageList}
            scroll={{ x: 1000 }}
            onChange={this.tableChange.bind(this)}
            pagination={{pageSize: 2, total: list2.length}} />
        </div>

      </div>
    )
  }
}
export default TabCardList
