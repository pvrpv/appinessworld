import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import {connect} from 'react-redux'

const ProtectedRoute = ({ component: Comp, loggedIn, path, ...rest }) => {
    return (
      <Route
        path={path}
        {...rest}
        render={props => {
          return loggedIn ? (
            <Comp {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  prevLocation: path,
                  error: "You need to login first!",
                },
              }}
            />
          );
        }}
      />
    );
  };
// const mapStateToProps = state => {
//     return{
//         loggedIn: state.auth
//     }
// }

  export default ProtectedRoute