import React from 'react'

import {
  Form,
  Input,
  Button,
  Select,
  Radio,
  Typography
} from 'antd';
import {FormInstance} from 'antd/es/form';

const {Option} = Select;
const {Title} = Typography;

const layout = {
  labelCol: {
    span: 2
  },
  wrapperCol: {
    span: 4
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};

class ReportForm extends React.Component<{commitValues: (arg0: any) => void}, {checked: string}> {
  constructor(props : any) {
    super(props);
    this.state = {
      checked: ''
    };
  }

  formRef = React.createRef < FormInstance > ();

  onFinish = (values: any) => {
    this.props.commitValues(values)
  };

  onReset = () => {
    this.formRef.current !.resetFields();
  };

  onCheckboxChange = (value : string) => {
    this.setState({checked: value});
  };

  render() {

    const scheduled: boolean = this.state.checked === 'scheduled';

    return (
      <Form {...layout}
        ref={
          this.formRef
        }
        name="control-ref"
        onFinish={
          this.onFinish
      }>
        {/* ---------------------------------------------------------------- */}

        <Title level={4}>Details</Title>
        <Form.Item name="Type" label="Type"
          rules={
            [{
                required: true
              }]
        }>
          <Select placeholder="Placeholder" allowClear>
            <Option value="Executive Summary">Executive Summary</Option>
            <Option value="Executive Summary 1">Executive Summary 1</Option>
            <Option value="Executive Summary 2">Executive Summary 2</Option>
          </Select>
        </Form.Item>
        <Form.Item name="company" label="Company"
          rules={
            [{
                required: true
              }]
        }>
          <Select placeholder="Placeholder" allowClear>
            <Option value="Company Name 1">Company Name 1</Option>
            <Option value="Company Name 2">Company Name 2</Option>
            <Option value="Company Name 3">Company Name 3</Option>
          </Select>
        </Form.Item>
        <Form.Item name="name" label="Name"
          rules={
            [{
                required: true
              }]
        }>
          <Input/>
        </Form.Item>

        {/* ---------------------------------------------------------------- */}

        <Title level={4}>Settings</Title>

        <Form.Item name="Selection" label=""
          rules={
            [{
                required: true
              }]
        }>
          <Radio.Group>
            <Radio name="Export Now" value="Export Now"
              onChange={
                () => this.onCheckboxChange('now')
            }>Export Now</Radio>
            <br/>
            <br/>
            <Radio name="Scheduled" value="Scheduled"
              onChange={
                () => this.onCheckboxChange('scheduled')
            }>Scheduled</Radio>
          </Radio.Group>
        </Form.Item>


        <Form.Item name="Recurrence" label="Recurrence"
          rules={
            [{
                required: scheduled
              }]
        }>
          <Select placeholder="Placeholder" allowClear>
            <Option value="Daily">Daily</Option>
            <Option value="Weekly">Weekly</Option>
            <Option value="Monthly">Monthly</Option>
          </Select>
        </Form.Item>

        <Form.Item name="On" label="On"
          rules={
            [{
                required: scheduled
              }]
        }>
          <Select placeholder="Placeholder" allowClear>
            <Option value="Monday">Monday</Option>
            <Option value="Tuesday">Tuesday</Option>
            <Option value="Wednesday">Wednesday</Option>
          </Select>
        </Form.Item>

        <Form.Item name="Reporting Interval" label="Reporting Interval"
          rules={
            [{
                required: scheduled
              }]
        }>
          <Select placeholder="Placeholder" allowClear>
            <Option value="Last 7 days">Last 7 days</Option>
            <Option value="Last 30 days">Last 30 days</Option>
          </Select>
        </Form.Item>


        {/* ---------------------------------------------------------------- */}

        <div style={{visibility: 'hidden'}}>
        <Form.Item {...tailLayout}>
          <Button id="manarie" type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button"
            onClick={
              this.onReset
          }>
            Reset
          </Button>
        </Form.Item>
        </div>
      </Form>
    );
  }
}

export default ReportForm;
