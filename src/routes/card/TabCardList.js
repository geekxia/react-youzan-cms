import React from 'react'
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

export default class TabCardList extends React.Component {
  constructor(props) {
    super(props)
  }
  // 新建权益卡 按钮 点击事件
  skipToCardCreate() {
    console.log('----------------', this.props)
    // 调用父组件的props事件，实现路由跳转
    this.props.onSkip()
  }
  render() {
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
        dataIndex: 'age',
        key: 'age'
      },
      {
        title: '有效期',
        // width: 100,
        dataIndex: 'age1',
        key: 'age1'
      },
      {
        title: '权益',
        // width: 100,
        dataIndex: 'age2',
        key: 'age2'
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

    const data = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York Park',
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 40,
        address: 'London Park'
      }
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
              onSearch={value => console.log(value)}
            />
            </Col>
          </Row>
        </div>

        {/*三个筛选按钮*/}
        <div>
        <Tabs type="card">
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
            columns={columns}
            dataSource={data}
            scroll={{ x: 1000 }}
            pagination={{pageSize: 4}} />
        </div>

      </div>
    )
  }
}
