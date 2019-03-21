import React,{Component} from 'react'
import {connect} from 'react-redux'
import {store , getGit} from '../App'

class Index extends Component {

    componentDidMount() {
        console.log('props :',this.props)
        this.props.getGit()
    }

    render() {
        return (
            <div>
                <h1>{this.props.value.login}</h1> <br/>
                <img src={this.props.value.avatar_url}/>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        value : state.gitPass
    }   
}

const mapDispatchToProps = (dispatch) => {
    return {
        getGit : () => dispatch( getGit() )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Index)