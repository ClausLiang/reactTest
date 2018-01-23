import React from 'react'
export default class BodyIndex extends React.Component{
    componentWillMount () {
        console.log('willMount')
    }

    componentDidMount () {
        console.log('didMount')
    }
    constructor () {
        super () // 调用基类的所有的初始化方法
        this.state = {username: 'Parry'}
    }
    render () {
        setTimeout(() => {
            this.setState({username: 'hh'})
        }, 4000)
        return (
            <div>
                <h2>页面的主体内容</h2>
                <p>{this.state.username}</p>
                <p>用户ID：{this.props.userId}</p>
            </div>
        )
    }
}