import React , {Component} from 'react';
import Child from '../src/components/Child'

class App extends Component {
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
        <Child number={this.state.number} _handle={this._handle}></Child>
        <button type="button" onClick={()=>{this._handle()}}>点我看作用域</button>
      </div>
    )
  }
}

export default App;
