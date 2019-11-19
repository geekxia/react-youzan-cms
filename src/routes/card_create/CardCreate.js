import React from 'react'
import './style.scss'
import {
  Row,
  Col,
  Input,
  Radio,
  DatePicker,
  Checkbox,
  Icon,
  Switch,
  Select,
  Button
} from 'antd'
const { RangePicker } = DatePicker
const { TextArea } = Input
const { Option } = Select

export default class CardCreate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      card: {
        name: '',
        period: 1,
        condition: 1,
        rights: []
      }
    }
  }

  periodChange(e) {
    console.log(e.target.value)
  }
  dateChange(e) {
    console.log(e[0].format('YYYY-MM-DD'))
    console.log(e[1].format('YYYY-MM-DD'))
  }

  render() {
    const options1 = [
      { label: '包邮', value: '1' },
      { label: '消费折扣', value: '2' },
      { label: '积分回馈倍率', value: '3' },
      { label: '获取好友体验卡', value: '4' }
    ]
    const options2 = [
      { label: '送积分', value: '1' },
      { label: '送优惠券', value: '2' },
      { label: '送赠品', value: '3' }
    ]
    const options3 = [
      { label: '非会员', value: '1' },
      { label: '会员', value: '2' },
      { label: 'VIP会员', value: '3' }
    ]
    return (
      <div className='page_card_create'>

        <div className="pcc_block_wrap">
          {/*基本信息 块*/}
          <div className='pcc_block'>
            <div className='pcc_block_title'>基本信息</div>

            <Row type='flex' align='middle' className='pcc_block_row'>
              <Col span={4}>
                <span className='pcc_block_lable'>名称：</span>
              </Col>
              <Col span={10}>
                <Input placeholder="最多输入9个字符" />
              </Col>
            </Row>

            <Row className='pcc_block_row'>
              <Col span={4}>
                <span className='pcc_block_lable'>背景设置：</span>
              </Col>
              <Col span={4}>
                <Radio.Group>
                  <Radio value={1}>
                    <span>背景色</span>
                  </Radio>
                  <Radio value={2}>
                    <span>背景图</span>
                  </Radio>
                </Radio.Group>
              </Col>
            </Row>

            <Row className='pcc_block_row'>
              <Col span={4}>
                <span className='pcc_block_lable'>卡有效期：</span>
              </Col>
              <Col span={9}>
                <Radio.Group onChange={this.periodChange.bind(this)}>
                  <Radio value={1} className='pcc_block_radio'>
                    <span>永久有效</span>
                  </Radio>
                  <Radio value={2} className='pcc_block_radio'>
                    <span>领卡时起</span>
                  </Radio>
                  <Radio value={3} className='pcc_block_radio'>
                    <RangePicker onChange={this.dateChange.bind(this)} />
                  </Radio>
                </Radio.Group>
              </Col>
            </Row>

            <Row className='pcc_block_row'>
              <Col span={4}>
                <span className='pcc_block_lable'>领取设置：</span>
              </Col>
              <Col span={8}>
                <Radio.Group>
                  <Radio value={1} className='pcc_block_radio'>
                    <span>可直接领取</span>
                  </Radio>
                  <Radio value={2} className='pcc_block_radio'>
                    <span>需付费购买</span>
                  </Radio>
                  <Radio value={3} className='pcc_block_radio'>
                    <span>满足下列任一条件即到账</span>
                  </Radio>
                </Radio.Group>
              </Col>
            </Row>

            <Row className='pcc_block_row'>
              <Col span={4}>
                <span className='pcc_block_lable'>使用须知：</span>
              </Col>
              <Col span={10}>
                <TextArea rows={4} />
              </Col>
            </Row>

            <Row type='flex' align='middle' className='pcc_block_row'>
              <Col span={4}>
                <span className='pcc_block_lable'>客服电话：</span>
              </Col>
              <Col span={10}>
                <Input placeholder="请输入固定电话或手机号" />
              </Col>
            </Row>
          </div>

          {/*权益礼包 块*/}
          <div className='pcc_block'>
            <div className='pcc_block_title'>权益礼包</div>

            <Row className='pcc_block_row'>
              <Col span={4}>
                <span className='pcc_block_lable'>权益：</span>
              </Col>
              <Col span={10}>
                {
                  options1.map((ele,idx)=>{
                    return(
                      <div key={idx}>
                        <Checkbox>{ele.label}</Checkbox>
                      </div>
                    )
                  })
                }
                <div><a>更多权益</a></div>
              </Col>
            </Row>

            <Row className='pcc_block_row'>
              <Col span={4}>
                <span className='pcc_block_lable'>领卡礼包：</span>
              </Col>
              <Col span={10}>
                <div>领卡礼包仅在权益卡首次领取和续费时发放</div>
                {
                  options2.map((ele,idx)=>{
                    if (idx === 2) {
                      return(
                        <div key={idx}>
                          <Checkbox>{ele.label}</Checkbox>
                          <Icon type='apple'></Icon>
                        </div>
                      )
                    } else {
                      return(
                        <div key={idx}>
                          <Checkbox>{ele.label}</Checkbox>
                        </div>
                      )
                    }

                  })
                }
                <div>权益不够用？<a>去配置权益</a></div>
              </Col>
            </Row>
          </div>

          {/*高级设置 块*/}
          <div className='pcc_block'>
            <div className='pcc_block_title'>高级设置</div>

            <Row type='flex' align='middle' className='pcc_block_row'>
              <Col span={4}>
                <span className='pcc_block_lable'>激活设置：</span>
              </Col>
              <Col span={10}>
                <Switch defaultChecked size="small" />
                <span className='pcc_block_link'>预览</span>
              </Col>
            </Row>

            <Row className='pcc_block_row'>
              <Col span={4}>
                <span className='pcc_block_lable'>同步微信卡包：</span>
              </Col>
              <Col span={10}>
                <div>未绑定认证的服务号或订阅号，<a>去绑定</a></div>
                <div>未认证的订阅号或服务号建议<a>申请代制卡券</a></div>
              </Col>
            </Row>

            <Row className='pcc_block_row'>
              <Col span={4}>
                <span className='pcc_block_lable'>分享设置：</span>
              </Col>
              <Col span={10}>
                <Checkbox>允许分享</Checkbox>
              </Col>
            </Row>

            <Row type='flex' align='middle' className='pcc_block_row'>
              <Col span={4}>
                <span className='pcc_block_lable'>过期设置：</span>
              </Col>
              <Col span={15}>
                <span className='pcc_block_gap'>卡过期后，消费者变更至</span>
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="请选择会员级别"
                  optionFilterProp="children"
                >
                  {
                    options3.map((ele,idx)=>{
                      return(
                        <Option key={idx} value={ele.value}>{ele.label}</Option>
                      )
                    })
                  }
                </Select>
              </Col>
            </Row>
          </div>
        </div>

        {/*按钮区域 块*/}
        <div className='pcc_block_btns'>
          <Button className='pcc_block_btn' type="primary">保存</Button>
          <Button className='pcc_block_btn'>取消</Button>
        </div>
      </div>
    )
  }
}
