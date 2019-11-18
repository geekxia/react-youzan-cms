import React from 'react'
import { Row, Col, Button, Input, Radio, Table } from 'antd'
const { Search } = Input

export default class TabCardList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    console.log('===================', this.props)
  }
  statusChange(e) {
    console.log(e.target.value)
  }
  tableChange(e) {
    console.log('table', e)
  }
  skipToCardCreate() {
    console.log()
    this.props.onCreate()

  }
  render() {
    const columns = [
    {
      title: '权益卡名称',
      width: 100,
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '领取条件',
      width: 100,
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: '有效期',
      dataIndex: 'address',
      key: '1',
      width: 150,
    },
    {
      title: '权益',
      dataIndex: 'address',
      key: '2',
      width: 150,
    },
    {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      width: 180,
      render: () => {
        return (
          <div className='card_list_row_handle'>
            <a>查看成员</a>
            <a>发卡</a>
            <a>编辑</a>
          </div>
        )
      },
    },
  ];

  const data = [];
  for (let i = 0; i < 50; i++) {
    data.push({
      key: i,
      name: `Edrward ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
    });
  }
    return (
      <div className='tab_card_list'>
        <div style={{paddingBottom: '15px'}}>
          <Row>
            <Col span={4}>
              <Button type='primary' onClick={this.skipToCardCreate.bind(this)}>新建权益卡</Button>
            </Col>
            <Col span={15}></Col>
            <Col span={5}>
              <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{  }}
              />
            </Col>
          </Row>
        </div>
        <div style={{borderBottom: '1px solid #eee'}}>
          <Radio.Group onChange={this.statusChange.bind(this)}>
            <Radio.Button value="1">使用中</Radio.Button>
            <Radio.Button value="2">已禁用</Radio.Button>
            <Radio.Button value="3">已过期</Radio.Button>
          </Radio.Group>
        </div>
        <div>
          <Table
            columns={columns}
            dataSource={data}
            onChange={this.tableChange.bind(this)}
            scroll={{ x: 1200, y: 300 }} />
        </div>
      </div>
    )
  }
}
