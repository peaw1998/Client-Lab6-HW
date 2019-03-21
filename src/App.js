
import React, {Component} from 'react';
import {createStore,combineReducers,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import Github from './Github/IndexGithub'
import axios from 'axios'
import thunk from 'redux-thunk'


export const getGitFail = () => ({
  type : 'GET_GIT_FAIL'
})

export const getGitsuccess = (gits) => ({
  type:'GET_GIT_SUCCESS',
  gits
})


export const getGit = (USER) => async (dispatch) => {
  console.log('USER =  '+USER)
  try {
    const res = await axios.get(`http://api.github.com/users/${USER}`)
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
   

    case 'GET_GIT_SUCCESS' :
        console.log('action:',action.gits)
        return action.gits

    case 'GET_GIT_FAIL' :
        console.log('action:failed')
        return action.gits    
    default:
        return state
  }
}


//==========================================================
const rootReducer = combineReducers({
  gitPass : gitReducer
})
export const store = createStore(rootReducer,applyMiddleware(thunk))

class App extends Component {

   render() {   
       return (
         <Provider store={store}>
              <div>
                
                  <br/>
                  <hr/>
                  <Github />
              </div>
         </Provider>
           
       );
   }
}

export default App;
