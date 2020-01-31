import React , {Component} from 'react';
// import Child from '../src/components/Child'
import PropsTypes from 'prop-types'
// import Context from '../src/components/Context'
import Refs from '../src/components/Refs'
class App extends Component {
  static childContextTypes = {
    index : PropsTypes.number
}
getChildContext(){
  return {
    index : this.state.number
  }
}
  constructor(props){
    super(props)
    this.state = {
      number : 0
    }
  }
  _handle(){
    console.log(this)
  }
  render(){
    return (
      <div>
        {/* <Child number={this.state.number} _handle={this._handle}></Child> */}
        {/* <Context></Context>    */}
        {/* <button type="button" onClick={()=>{this._handle()}}>点我看作用域</button> */}
        <Refs></Refs>
      </div>
    )
  }
}

export default App;
