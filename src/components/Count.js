import React, {Component} from 'react'
import {add,minus,store,add2} from '../App'
import {connect} from 'react-redux'

class Count extends Component {
  state = {
    count : 0
  }

    render() {
        return (
            <div>
                <h1>count : {this.props.number}</h1>
                <button onClick={ this.props.add}> + </button>
                <button onClick={ this.props.add2}> +2 </button>
                <button onClick={ this.props.minus}> - </button>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
  return {number : state.number}
}



const mapDispatchToProps = (dispatch) => {
  return {
    add : () => store.dispatch( add () ),
    add2 : () => store.dispatch( add2 (2)) ,
    minus : () => store.dispatch( minus() )
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Count)
