import React from 'react'
import ComponentHeader from './components/header'
import ComponentFooter from './components/footer'
import BodyIndex from './components/bodyIndex'
import {Link} from 'react-router-dom'

import 'antd/dist/antd.css'

export default class Index extends React.Component{
    render () {
        return (
            <div>
                <ComponentHeader></ComponentHeader>
                <BodyIndex userId={123}></BodyIndex>
                <ComponentFooter></ComponentFooter>
                <Link to='/list/123/lyg'>点击这里跳转</Link>
            </div>
        )
    }
}