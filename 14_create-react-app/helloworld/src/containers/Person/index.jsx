import React, { Component } from 'react'
import { connect } from "react-redux"
import { nanoid } from 'nanoid'
import { createAddPersonAction } from "../../redux/actions/person"


class Person extends Component {
    handleAdd = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = { id: nanoid(), name, age }
        this.props.addPerson(personObj)
        this.nameNode.value=""
        this.ageNode.value=""
    }
    render() {
        const { personArr, count } = this.props
        return (
            <div>
                <hr />
                <h2>我是Person组件</h2>
                <h4>总和为：{count}</h4>
                <input type="text" ref={c => this.nameNode = c} placeholder='输入名字' />
                <input type="text" ref={c => this.ageNode = c} placeholder='输入年龄' />
                <button onClick={this.handleAdd} >添加</button>
                <ul>
                    {
                        personArr.map((person) => {
                            return <li key={person.id}>{person.name} ------------------{person.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}



export default connect(
    (state) => {
        return ({
            count: state.count,
            personArr: state.personArr
        })
    },
    ({
        addPerson: createAddPersonAction
    })
)(Person)