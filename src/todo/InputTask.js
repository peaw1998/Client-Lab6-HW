
import React, {Component}  from 'react';
import {connect} from 'react-redux'
import { addtask ,store} from '../App'


class InputTask extends Component {

   state = {task:''}

   handleChange = (e) => {
       this.setState({ [e.target.name] : e.target.value });
   }

   render() {
       return (
           <div>
               <input type="hidden" name="id" value={this.props.id} /><br/>
               <input type="text" name="task" onChange={this.handleChange} /> <br/>
               <button onClick={() => store.dispatch(addtask(this.state.task))}>Add</button>
           </div>
       )
   }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTasks : () => dispatch( addtask() )
    }
}

export default connect(mapDispatchToProps)(InputTask)
