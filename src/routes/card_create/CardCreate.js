import React from 'react'
import {
  Row,
  Col,
  Input,
  Radio,
  DatePicker,
  Checkbox,
  Switch,
  Button
} from 'antd';
import './style.scss'
const { RangePicker } = DatePicker
const { TextArea } = Input

export default class CardCreate extends React.Component {
  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    }
    const options = [
      '包邮', '消费折扣', '积分回馈倍率', '获得好友体验卡'
    ]
    return(
      <div className='card_create'>

        <div className='card_create_wrap'>
          <div>
            <div className='card_create_title'>基本信息</div>
            <Row type='flex' align='middle' style={{margin: '20px 0'}}>
              <Col span={4}>
                <span className='card_create_label'>名称：</span>
              </Col>
              <Col span={4}>
                <Input placeholder='最多9个字' />
              </Col>
            </Row>

            <Row style={{margin: '20px 0'}}>
              <Col span={4}>
                <span className='card_create_label'>背景设置：</span>
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

            <Row style={{margin: '20px 0'}}>
              <Col span={4}>
                <span className='card_create_label'>卡有效期：</span>
              </Col>
              <Col span={8}>
                <Radio.Group>
                  <Radio value={1} style={{display: 'block'}}>
                    <span>永久有效</span>
                  </Radio>
                  <Radio value={2} style={{display: 'block'}}>
                    <span>领卡时起</span>
                  </Radio>
                  <Radio value={1} style={{display: 'block'}}>
                    <RangePicker />
                  </Radio>
                </Radio.Group>
              </Col>
            </Row>

            <Row style={{margin: '20px 0'}}>
              <Col span={4}>
                <span className='card_create_label'>领取设置：</span>
              </Col>
              <Col span={8}>
                <Radio.Group>
                  <Radio value={1} style={{display: 'block'}}>
                    <span>可直接领取</span>
                  </Radio>
                  <Radio value={2} style={{display: 'block'}}>
                    <span>需付费领取</span>
                  </Radio>
                  <Radio value={1} style={{display: 'block'}}>
                    <span>满足下列任一条件即到账</span>
                  </Radio>
                </Radio.Group>
              </Col>
            </Row>

            <Row style={{margin: '20px 0'}}>
              <Col span={4}>
                <span className='card_create_label'>使用须知：</span>
              </Col>
              <Col span={8}>
                <TextArea rows={4} />
              </Col>
            </Row>

            <Row type='flex' align='middle' style={{margin: '20px 0'}}>
              <Col span={4}>
                <span className='card_create_label'>客服电话：</span>
              </Col>
              <Col span={6}>
                <Input placeholder='请输入手机号或固定电话' />
              </Col>
            </Row>


          </div>

          <div>
            <div className='card_create_title'>权益信息</div>
            <Row style={{margin: '20px 0'}}>
              <Col span={4}>
                <span className='card_create_label'>权益：</span>
              </Col>
              <Col span={4}>
                <Checkbox.Group options={options} />
              </Col>
            </Row>

            <Row style={{margin: '20px 0'}}>
              <Col span={4}>
                <span className='card_create_label'>领取卡包：</span>
              </Col>
              <Col span={8}>
                <div>领卡礼包仅在权益卡首次领取和续费时发放</div>
                {
                  options.map((ele,idx)=>{
                    return (
                      <div key={ele}>
                        <Checkbox>{ele}</Checkbox>
                      </div>
                    )
                  })
                }
              </Col>
            </Row>
          </div>

          <div>
            <div className='card_create_title'>高级设置</div>
            <Row type='flex' align='middle' style={{margin: '20px 0'}}>
              <Col span={4}>
                <span className='card_create_label'>激活设置：</span>
              </Col>
              <Col span={4}>
                <Switch defaultChecked />
              </Col>
            </Row>

            <Row style={{margin: '20px 0'}}>
              <Col span={4}>
                <span className='card_create_label'>同步微信卡包：</span>
              </Col>
              <Col span={8}>
                <div>未绑定认证的服务号或订阅号，去绑定</div>
                <div>未认证的订阅号或服务号建议申请代制卡券</div>
              </Col>
            </Row>

            <Row type='flex' align='middle' style={{margin: '20px 0'}}>
              <Col span={4}>
                <span className='card_create_label'>过期设置：</span>
              </Col>
              <Col span={4}>
                <span>卡过期后，消费者变更至</span>
              </Col>
            </Row>
          </div>
        </div>

        <div className='card_create_btns'>
          <Button type="primary">保存</Button>
          <Button>取消</Button>
        </div>
      </div>
    )
  }
}
