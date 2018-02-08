import React from 'react'
import PropTypes from 'prop-types'
import BodyChild from './bodyChild'

import ReactMixin from 'react-mixin'
import MixinLog from './mixins'
const defaultProps = {
    username: '默认的用户名'
}
export default class BodyIndex extends React.Component{
    componentWillMount () {
        console.log('willMount')
    }

    componentDidMount () {
        console.log('didMount')
    }
    constructor () {
        super () // 调用基类的所有的初始化方法
        this.state = {username: 'Parry', age: 18}
    }
    changeUserInfo () {
        this.setState({username: '改了名字'})
        this.refs.mySubmit.style.color = 'red'

        MixinLog.log()
    }
    handleChildValueChange (event) {
        this.setState({age: event.target.value})
    }
    render () {
        return (
            <div>
                <p>自身的name:{this.state.username}</p>
                <p>自身的age:{this.state.age}</p>
                <button ref='mySubmit' onClick={this.changeUserInfo.bind(this)}>更名</button>
                <p>接收父页面的属性，userId：{this.props.userId}，username: {this.props.username}</p>
                <BodyChild {...this.props} handleChildValueChange={this.handleChildValueChange.bind(this)}></BodyChild>
            </div>
        )
    }
}

// 针对接收的参数做限制
BodyIndex.propTypes = {
    userId: PropTypes.number
}
BodyIndex.defaultProps = defaultProps

ReactMixin(BodyIndex.prototype, MixinLog)