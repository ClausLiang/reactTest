import React from 'react'
export default class ComponentList extends React.Component{
    componentWillMount () {
        console.log(this.props.match.params.id)
    }
    render () {
        return (
            <div>
                <h2>这里是列表页面。ID：{this.props.match.params.id}，name：{this.props.match.params.name}</h2>
            </div>
        )
    }
}