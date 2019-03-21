import {createStore,combineReducers} from 'redux'
import React, {Component} from 'react'

const initState = {
    count : 0 ,
    name : "",
    lname: ""
}

export const add = () => {
    return {
        type : "ADD",
        payload: 500
    }
}

export const setname = () => {
    return {
        type : "setName",
        payload : "Supanut"
    }
}

export const setlname = () => {
    return {
        type : "setLname",
        payload : "tian"
    }
}


const myReducer2 = (state = initState, action) => {
    switch(action.type) {
        case "setName" :
            state = {
                ...state,
                name : state.name = action.payload
            }
        break
        case "setLname" :
            state = {
                ...state ,
                lname : state.lname = action.payload
            }
        break
        default:
    }
    return state
}

const myReducer1 = (state = initState, action) => {
    switch(action.type) {
        case "ADD" :
            state = {
                ...state,
                count : state.count += action.payload
            }
        break
        default:
    }
    return state
}

const rootReducer = combineReducers({
    reducer1 : myReducer1,
    reducer2 : myReducer2
})
const store = createStore(rootReducer)


store.subscribe( () => {
    console.log("this : " , store.getState())
})

store.dispatch( add() )
store.dispatch( setname() )
store.dispatch( setlname())


class App3 extends Component {
    render (){
        return (
            <div>

            </div>
        )
    }
}

export default App3
