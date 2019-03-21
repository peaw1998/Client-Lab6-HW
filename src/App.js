
import React, {Component} from 'react';
// import './App.css';
 import TaskList from './todo/TaskList'
 import InputTask from "./todo/InputTask";
import {createStore,combineReducers,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import Github from './Github/IndexGithub'
import axios from 'axios'
import thunk from 'redux-thunk'

export const addtask = (value) => ({
  type:"ADDTASK",
  payload: value
})

export const getGitFail = () => ({
  type : 'GET_GIT_FAIL'
})

export const getGitsuccess = (value) => ({
  type:'GET_GIT_SUCCESS',
  payload : value
})


export const getGit = () => async (dispatch) => {
  try {
      const res = await axios.get(`http://api.github.com/users/Peaw1998`)
      const resbody = await res.data
      dispatch(getGitsuccess(resbody))
  }
  catch (error) {
    console.error(error)
    dispatch(getGitFail())
  }
}

export const gitReducer = (state = 0, action) => {
  switch (action.type) {
    case 'GET_GIT_FAIL' :
        console.log('action:failed')
        return action.payload

    case 'GET_GIT_SUCCESS' :
        console.log('action:',action.payload)
        return action.payload
    default:
        return state
  }
    
    
}


//==========================================================
const initState = {

    tasks : 
    [
      {
      id: 1 , task:'reading book'
      },
      {id : 2 ,task : 'play game'},
    ]
    
}


const taskReducer = (state = initState , action) => {
  console.log(state)
  const tmp = state.tasks.length - 1 
  
  switch(action.type){
    case "ADDTASK":
          state = {
           ...state,

           tasks:[...state.tasks,{id:state.tasks[tmp].id+1,task:action.payload}]
          }
           
             
           
    default:
  }
  return state
}
const rootReducer = combineReducers({
  taskPass : taskReducer,
  gitPass : gitReducer
})
export const store = createStore(rootReducer,applyMiddleware(thunk))

// store.subscribe( ()=> {
//   console.log('update store ', store.getState())
// })

// store.dispatch({
//   type:"ADDTASK",
//   payload:{
//     id:3,task:"readbook"
//   }
// })



class App extends Component {

   render() {   
       return (
         <Provider store={store}>
              <div>
                  {/* <h1>Todo</h1> */}
                  {/* <TaskList tasks={this.state.tasks}/> */}
                  {/* <TaskList/> */}
                  {/* <InputTask addTask={this.addTask} id={this.state.id}/> */}
                  {/* <InputTask/> */}
                  <br/>
                  <hr/>
                  <Github />
              </div>
         </Provider>
           
       );
   }
}

export default App;
