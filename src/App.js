import React from 'react';
import './App.css';
import Login from './Login'
import {connect} from 'react-redux'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Dashboard from './Dashboard'

class  App extends React.Component {
  componentDidMount(){
    if(this.props.auth === true){
      this.props.history.push('/employee-list')
    }else if(this.props.auth === false){
      this.props.history.push('/login')
    }
  }

  render(){
    return (
      <div className="App">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/employee-list" component={Dashboard} />
            <Route path="/login" component={Login} />
          </Switch>
        
      </div>
    )
  }
    
}

const mapStateToProps = state => {
  return {
    auth:state.auth
  }
}

export default withRouter(connect(mapStateToProps)(App));
