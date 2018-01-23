import React from 'react'
import BodyChild from './bodyChild'
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
    }
    handleChildValueChange (event) {
        this.setState({age: event.target.value})
    }
    render () {
        setTimeout(() => {
            this.setState({username: 'hh'})
        }, 4000)
        return (
            <div>
                <h2>页面的主体内容</h2>
                <p>name:{this.state.username}</p>
                <p>age:{this.state.age}</p>
                <p>用户ID：{this.props.userId}</p>
                <button onClick={this.changeUserInfo.bind(this)}>更名</button>
                <BodyChild handleChildValueChange={this.handleChildValueChange.bind(this)}></BodyChild>
            </div>
        )
    }
}