import React from 'react'
export default class BodyIndex extends React.Component{
    render () {
        var userName = 'lily'
        var boolInput = true
        var html = 'abc&nbsp;def'
        return (
            <div>
                <h2>页面的主体内容</h2>
                <p>{userName == '' ? '用户未登录' : '用户名：' + userName}</p>
                {/*这里是注释*/}
                <p><input type="button" value="默认按钮" disabled={boolInput}/></p>
                <p>{html}</p>
                <p dangerouslySetInnerHTML={{__html: html}}></p>
            </div>
        )
    }
}