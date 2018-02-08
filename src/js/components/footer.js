import React from 'react'
var footerCss = require('../../css/footer.css')
export default class ComponentFooter extends React.Component{
    render () {
        return (
            <footer className={footerCss.miniFooter}>
                <h1>这里是页脚一般放置版权等信息</h1>
            </footer>
        )
    }
}