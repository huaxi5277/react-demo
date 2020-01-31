import React,{Component} from 'react'
import PropTypes from 'prop-types'
class Context extends Component {
    static contextTypes = {
        index : PropTypes.number
    }
   constructor(props){
       super(props)
   }
   render(){
       return (
   <div>{this.context.index}</div>
       )
   }
}

export default Context