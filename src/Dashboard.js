import React, { Component } from 'react'
import {getEmployee} from './Actions/employee.action'
import {connect} from 'react-redux'

class Dashboard extends Component {
    componentDidMount(){
        this.props.getEmployee()
    }
    render() {

      
      
        return (
            
            <div>
               <h3> EmployeeS List</h3>
               <table>
                   <thead>
                       <tr>
                           <th>S.NO</th>
                           <th>Name</th>
                           <th>Age</th>
                           <th>Gender</th>
                           <th>Email</th>
                           <th>Mobile</th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                           this.props.employees ? this.props.employees.map(emp => <tr>
                               <td>{emp.id}</td>
                               <td>{emp.name}</td>
                               <td>{emp.age}</td>
                               <td>{emp.gender}</td>
                               <td>{emp.email}</td>
                               <td>{emp.phoneNo}</td>
                           </tr>) : null
                       }
                   </tbody>
               </table>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        getEmployee: () => dispatch(getEmployee())
    }
}

const mapStateToProps = state =>{
    console.log(state)
    return{
        employees: state.employees
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)