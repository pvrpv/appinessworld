import * as type from './types'

export function getEmployee(){
    debugger
    return dispatch => {
        return fetch('http://5d63b57826046800144d6cf7.mockapi.io/happiness-world').
        then(res => res.json()).
        then(jres => {
            debugger
            dispatch(employeeAction(jres))
        })
    }
}

export function employeeAction(emp){
    return {
        type: type.FETCH_EMPLOYEE,
        emp
    }
}