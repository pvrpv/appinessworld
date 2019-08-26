import * as type from '../Actions/types'

const initialState = {
    user:{
        username:"hruday@gmail.com",
        password:'hruday123'
    },
    employees:null,
    auth: false
}

function rootReducer(state = initialState, action) {
    switch(action.type){
        case type.LOGIN:
          debugger
         if( action.credentials.normal_login_username=== state.user.username && action.credentials.normal_login_password === state.user.password){
            return{
              ...state,
              auth: true
            }
         }

         case type.FETCH_EMPLOYEE:
           debugger
           return{
             ...state,
             employees: [...action.emp]
           }

         default:
          return state 
    } 
}

export default rootReducer