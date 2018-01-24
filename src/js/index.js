var React = require('react')
var ReactDom = require('react-dom')
import ComponentHeader from './components/header'
import ComponentFooter from './components/footer'
import BodyIndex from './components/bodyIndex'

class Index extends React.Component{
    render () {
        return (
            <div>
                <ComponentHeader></ComponentHeader>
                <BodyIndex userId={123}></BodyIndex>
                <ComponentFooter></ComponentFooter>
            </div>
        )
    }
}
ReactDom.render(<Index/>, document.getElementById('example'))