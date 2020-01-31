import React , {Component} from 'react'

class Refs extends Component {
    constructor(props){
        super(props)
    }
    change(){
        console.log(this.refs.InputElement);
        
    }
    render(){
        return (
            <div>
               <form  method="post" action="/login" ref={(node)=>{
                    console.log(node);
                    
               }} >
               <input ref="InputElement"/>
               <button type="submit" onClick={()=>this.change()}>看看Refs</button>
               </form>
            </div>
        )
    }
}
export default Refs