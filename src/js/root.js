import React from 'react'
import ReactDom from 'react-dom'
import Index from './index'
import ComponentList from './components/list'
import {HashRouter, Switch, Route} from 'react-router-dom'

export default class Root extends React.Component{
    render () {
        return (
            <HashRouter>
                <Switch>
                    <Route component={Index} path="/" exact></Route>
                    <Route component={ComponentList} path="/list/:id/:name"></Route>
                </Switch>
            </HashRouter>
        )
    }
}
ReactDom.render(<Root/>, document.getElementById('example'))