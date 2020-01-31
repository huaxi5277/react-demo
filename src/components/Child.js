import React, {Component} from 'react'
// 联系父子组件通信
class Child extends Component {
 constructor(props){
   super(props)
 }
 _handleChile = ()=>{
     console.log(this);
     
 }
 render(){
     const  {number} = this.props
     return (
     <div>
          <p>{number}</p>
          <button onClick={()=>this.props._handle()}>点我看父传子组件的this</button>
          <button onClick={()=>this._handleChile()}>点我看子组件的this</button>
     </div>
     )
 }
}

export default Child