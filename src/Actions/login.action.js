import * as type from './types'

export function loginAction(credentials){
    debugger
    return{
        type: type.LOGIN,
        credentials
    }
}