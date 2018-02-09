import React from 'react'
import ReactDom from 'react-dom'
import Index from './index'
import ComponentList from './components/list'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

export default class Root extends React.Component{
    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route component={Index} path="/" exact></Route>
                    <Route component={ComponentList} path="/list"></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}
ReactDom.render(<Root/>, document.getElementById('example'))