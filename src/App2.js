import React , {Component} from 'react'
import {Provider} from 'react-redux'
import { combineReducers ,createStore} from 'redux';
import Github from ''

const intiState = {
    count : 0,
    name : "",
    lname : "",
    value:[]
}

export const add = () => {
   return {
       type:"ADD",
       payload:1
   }
}

export const setName = () => {
    return {
        type : "SETNAME",
        payload:"Supanut"
    }
}

export const setLname = () => {
    return {
        type : "SETLNAME",
        payload:"Laddayam"
    }
}



const myReuder1 = (state = intiState, action) => {
    switch(action.type){
        case "ADD" :
        state = {
            ...state,
             count: state.count += action.payload,
             value : [...state.value,action.payload]
        }
        break;
        case "SETNAME" :
        state = {
             ...state,
            name : state.name = action.payload
        }
        break;
        case "SETLNAME":
        state = {
            // ...state,
            ...state.lname = action.payload
        }
        default:
    }
    return state
} 


const rootReducer = combineReducers({
    reducer1 : myReuder1
})
const store = createStore(rootReducer)

store.subscribe( () => {
    console.log('App2 -> ' , store.getState())
})


// store.dispatch( add() )
// store.dispatch( add() )
// store.dispatch( add() )
// store.dispatch( setLname() )

store.dispatch( setName()) 



class App2 extends Component {

    render () {
        return (
            <Provider store={store}>
                <div>

                </div>  
            </Provider>
            
        )
    }
}

export default App2