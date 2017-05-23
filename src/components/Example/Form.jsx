import React from 'react';
import { Form, Input, Select, Checkbox, Button ,DatePicker,Radio} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const { RangePicker } = DatePicker;
const RadioGroup = Radio.Group;
import styles from './Form.less';

const CheckboxGroup = Checkbox.Group;

function checkboxOnChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

const plainOptions = ['星期日', '星期一', '星期二','星期三','星期四','星期五','星期六'];


const mockData = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
    disabled: i % 3 < 1,
  });
}

function onChange(value,dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}
function onOk(value) {
  console.log('onOk: ', value);
}
function onChangeNew(value,dateString) {
  console.log('ruleSelected Time: ', value);
  console.log('ruleFormatted Selected Time: ', dateString);
}
function onOkNew(value) {
  console.log('ruleOnOk: ', value);
}
function handleChange(value) {
  console.log(`selected ${value}`);
}

class RadioGroupM extends React.Component {
  state = {
    value: 1,
  }
  onChange = (e) => {
    //console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }
  render() {
    return (
      <RadioGroup onChange={this.onChange} value={this.state.value}>
        <Radio value={1}>默认</Radio>
        <Radio value={2}>追加时间戳</Radio>
        <Radio value={3}>从第集开始</Radio>
      </RadioGroup>
    );
  }
}

class RegistrationForm extends React.Component {

  state = {
    confirmDirty: false,
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };
    return (
      <Form onSubmit={this.handleSubmit}>
    <FormItem
          {...formItemLayout}
          label={(
            <span>
              规则名称
            </span>
          )}
          hasFeedback
        >
          {getFieldDecorator('nickname', {
            rules: [{ required: true, message: '请输入规则名称!', whitespace: true }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              描述
            </span>
          )}
          hasFeedback
        >
          {getFieldDecorator('des')(
            <Input type="textarea" placeholder="description" autosize={{ minRows: 2, maxRows: 6 }} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              频道名称
            </span>
          )}
        >
          {getFieldDecorator('pinDao', {
            rules: [{ required: true, message: '请输入频道名称!'}],
          })(
            <Select style={{ width: 120 }} onChange={handleChange}>
              <Option value="aa">11</Option>
              <Option value="cc">22</Option>
              <Option value="dd" disabled>33</Option>
              <Option value="ee">44</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              星期
            </span>
          )}>
          {getFieldDecorator('week')(
            <CheckboxGroup options={plainOptions} onChange={checkboxOnChange} />
          )}
        </FormItem>
       <FormItem
          {...formItemLayout}
          label={(
            <span>
              节目开始时间范围
            </span>
          )}
        >
          {getFieldDecorator('date')(
            <RangePicker
              showTime
              format="YYYY-MM-DD HH:mm:ss"
              placeholder={['Start Time', 'End Time']}
              onChange={onChange}
              onOk={onOk}
              style={{marginBottom:20}}
            />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              节目名称包含
            </span>
          )}
          hasFeedback
        >
          {getFieldDecorator('jmNam', {
            rules: [{ required: true, message: '请输入节目名称!', whitespace: true }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              内容包选择
            </span>
          )}
        >
          {getFieldDecorator('neiRongBao')(
            <div>
              <Input/>
            </div>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              开始的集数或期数
            </span>
          )}
          hasFeedback
        >
          {getFieldDecorator('jishu')(
            <RadioGroupM/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              规则有效日期范围
            </span>
          )}
        >
          {getFieldDecorator('ruleDate')(
            <RangePicker
              showTime
              format="YYYY-MM-DD HH:mm:ss"
              placeholder={['Start Time', 'End Time']}
              onChange={onChangeNew}
              onOk={onOkNew}
              style={{marginBottom:20}}
            />
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large">确定</Button>
          <Button htmlType="submit" size="large" style={{marginLeft:10}}>取消</Button>
        </FormItem>
      </Form>
    );
  }
}
const WrappedRegistrationForm = Form.create()(RegistrationForm);

const Example = () => {

  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <span className={styles.title}>表单示例</span>
      </div>
      <div className={styles.form_content}>
        <WrappedRegistrationForm />
      </div>
    </div>
  )
}
Example.propTypes = {};
export default Example;
