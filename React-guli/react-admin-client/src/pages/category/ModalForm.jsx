import React, { Component } from 'react'
import { Form, Select, Input } from "antd"

const [Item, Option] = [Form.Item, Select.Option];
export default class ModalForm extends Component {

    formRef = React.createRef();

    componentDidMount() {

    }

    onFinish = async () => {
       try {
        return await this.formRef.current.validateFields();
       } catch (error) {
          return false;
       }
       
    }

    render() {
        const { name } = this.props || "";
        console.log(this.props);
        return (
            <Form ref={this.formRef} layout="vertical" >
                <Form.Item label="Field A" name="title" rules={[
                    {
                        required: true,
                        message: '请选择分类',
                    },
                ]} >
                    <Select initialvalues="default"  >
                        <Option value="default">一级列表</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Field A"  name="dese" rules={[
                    {
                        required: true,
                        message: '请输入分类名称',
                    },
                ]} >
                    <Input placeholder="请输入分类名称" value={name} />
                </Form.Item>
            </Form>
        )
    }
}
