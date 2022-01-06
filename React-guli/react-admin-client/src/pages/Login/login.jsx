import React, { Component } from 'react'
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {useNavigate} from "react-router-dom"
import "./login.less"
import { httpLogin } from '../../api/login';

/**
 * 登录组件
 */
export default class Login extends Component {

    

    onFinish =async (event) => {
          let res = await  httpLogin(event)
          if(!res.status){
              const navigate = useNavigate()
              navigate("/")
            message.success("登录成功！")
          }else{
            message.error("登录失败！请检查用户名和密码！")
          }
      
    }

    render() {
        return (
            <div className='login'>
                <header className='login-header'>
                    <img src={require('../../assets/logo.png')} alt="" />
                    <h1>React项目：后台管理系统</h1>
                </header>
                <section className='login-content'>
                    <h2>用户登录</h2>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: '请输入用户名!' }, { min: 2, message: '用户名至少两位!' },
                            { max: 12, message: '用户名最长12位!' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                  if (!value || /[0-9a-zA-Z_]+$/.test(getFieldValue('username'))) {
                                    return Promise.resolve();
                                  }
                                  return Promise.reject(new Error('请输入数字、字母、下划线!'));
                                },
                              }),]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: '请输入密码!' }, { min: 5, message: '密码至少五位!' },
                            { max: 16, message: '密码最长16位!' },
                            
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}
