import React from 'react'
import { Tabs } from 'antd'
import TabCardList from './TabCardList'
import './style.scss'
const { TabPane } = Tabs

export default class Card extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log(this.props)
  }
  skipToCardCreate() {
    this.props.history.push('/card/create')
  }
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Tab 1" key="1">
            <TabCardList
              onCreate={this.skipToCardCreate.bind(this)}
            ></TabCardList>
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    )
  }
}
