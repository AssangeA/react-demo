import React, { Component  } from 'react'
import { withRouter } from 'react-router-dom';
import { Modal, } from 'antd';
import storageUtils from '../../utils/storageUtils';
import menoryUtils from "../../utils/memoryUtils"
import "./head.less"
import { QuestionCircleOutlined } from '@ant-design/icons';
import memoryUtils from '../../utils/memoryUtils';
import LinkButton from '../LinkButton/LinkButton';




export  class Header extends Component {

    state = {
        isModalVisible: false,
    }

    //打开退出框
    handleClick = () => {
        this.setState({ isModalVisible: true });
    }

    handleOk = () => {
        storageUtils.removeUser();
        menoryUtils.user={};
        this.setState({ isModalVisible: false });
        this.props.history.replace("/login");
    };

    handleCancel = () => {
        this.setState({ isModalVisible: false });
    };

    confirm=()=> {
        Modal.confirm({
            title: '',
            icon: <QuestionCircleOutlined  />,
            content: '确定退出吗？',
            okText: '确认',
            cancelText: '取消',
            onOk:this.handleOk,
            onCancel:this.handleCancel
        });
    }


    render() {
        return (
            <div className="head">
                <div className="head-top">
                    <span>欢迎您,{memoryUtils.user.username}</span>
                    {/* <span className="head-top-out" onClick={this.confirm}>退出</span> */}
                    <LinkButton onClick={this.confirm} >退出</LinkButton>
                </div>
                <div className="head-bottom">
                    <div className="head-bottom-left">首页</div>
                    <div className="head-bottom-right">
                        <span>2019-5-12 10:12:23</span>
                        <img src="http://api.map.baidu.com/images/weather/day/qing.png" alt="weather" />
                        <span>晴</span>
                    </div>
                </div>
               
            </div>
        )
    }
}


export default withRouter(Header)