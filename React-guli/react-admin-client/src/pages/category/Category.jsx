import React, { Component, useRef } from 'react'
import { Card, Icon, Button, Table, Space, message, Modal } from 'antd'
import { PlusOutlined, ArrowRightOutlined } from '@ant-design/icons';
import "./category.less"
import LinkButton from '../../components/LinkButton/LinkButton';
import { httpGetList, httpUpdateCategoryName } from "../../api/http"
import ModalForm from "./ModalForm"

export default class Category extends Component {

    constructor(props) {
        super(props);
        this.modalRef = React.createRef();
        this.state = {
            dataSource: [],
            title: "一级分类列表",
            isFirstList: true,
            isloading: false,
            parentId: "0",//分类列表ID
            parentName: "",//分类名称
            isModalVisible: false,//弹框
            isAdd: 0,//0表示添加 1表示更新
        }
    }

    componentDidMount() {
        this.getProductList();
    }
    //获取分类列表
    getProductList = async () => {
        this.setState({ isloading: true })
        let res = await httpGetList({ parentId: this.state.parentId });
        this.setState({ isloading: false })
        if (res && res.data) {
            this.setState({ dataSource: res.data })
        } else {
            message.error("请求失败！");
        }
    }
    //查看子分类
    showChildCate = (record) => {
        this.setState((state) => ({
            parentId: record._id,
            parentName: record.name,
            isFirstList: false,
        }), () => {
            this.getProductList();
        })
    }

    //点击一级列表返回
    showFirst = () => {
        this.setState((state) => ({
            parentId: "0",
            parentName: "",
            isFirstList: true,

        }), () => {
            this.getProductList();
        })
    }

    //修改分类
    modifyCategory = (record) => {
        this.record = record;
        this.setState({
            isModalVisible: true,
            isAdd: 1,
        })
    }

    //添加分类
    addCatagory = () => {
        this.setState({
            isModalVisible: true,
            isAdd: 0,
        })
        this.record = "";

    }

    //关闭对话框
    handleCancel = () => {
        this.setState({
            isModalVisible: false,
        })
    }

    //确认对话框
    handleOk = async (record) => {


        if (this.state.isAdd == 0) {
            let isFinish = await this.modalRef.current.onFinish();
            if(isFinish){
                console.log(isFinish);
            }else{
                message.error("请完善表单！",1);
            }
        }

        if (this.state.isAdd == 1) {
            // let res = await httpUpdateCategoryName({categoryId, categoryName})
        }
    }

    render() {
        const { loading, isFirstList, title, parentName, isModalVisible, isAdd } = this.state;
        const columns = [
            {
                title: '分类的名称',
                dataIndex: 'name',
                key: "1"
            },
            {
                title: '操作',
                key: "2",
                render: (text, record) => (
                    <span >
                        <LinkButton onClick={() => this.modifyCategory(record)}>修改分类</LinkButton>
                        {isFirstList ? <LinkButton onClick={() => this.showChildCate(record)}>查看子分类</LinkButton> : ""}
                    </span>
                ),
            },
        ];
        return (

            <Card
                className="category-card"
                title={isFirstList ? (<LinkButton >{title}</LinkButton>) : (<span>
                    <LinkButton onClick={() => this.showFirst()}>{title}</LinkButton><ArrowRightOutlined />
                    <span>
                        {parentName}</span></span>)}
                extra={<Button type="primary" onClick={this.addCatagory} icon={<PlusOutlined />} >添加</Button>}
            >
                <Table
                    bordered
                    rowKey={record => record._id}
                    loading={loading}
                    dataSource={this.state.dataSource}
                    columns={columns}
                    pagination={{ defaultPageSize: 5 }}
                />
                {/* 添加和更新弹框 */}
                <Modal
                    title={isAdd == 0 ? "添加分类" : "修改分类"}
                    visible={isModalVisible}
                    onOk={() => this.handleOk(this.record)}
                    onCancel={this.handleCancel}
                >
                    <ModalForm {...this.record} ref={this.modalRef} />
                </Modal>
            </Card>


        )
    }
}
