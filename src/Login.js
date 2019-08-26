import React from 'react'
import { Form, Icon, Input, Button } from 'antd';
import {loginAction} from './Actions/login.action'
import {connect} from 'react-redux'

class NormalLoginForm extends React.Component {
  state={
    username:'',
    password:''
  }

  handledChange(e){
    this.setState({
      [e.target.id]:e.target.value
    })
  }

  componentDidMount(){
    if(this.props.auth === true){
      this.props.history.push('/employee-list')
    }else if(this.props.auth === false){
      this.props.history.push('/login')
    }
  }

  handleSubmit = e => {
    debugger;
    console.log(this.state)
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.loginAction(this.state)
        this.props.history.push('/employee-list')
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please enter your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              id="username"
              onChange={(e) => this.handledChange(e)}
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please enter your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              id="password"
              onChange={(e) => this.handledChange(e)}
            />,
          )}
        </Form.Item>
        <Form.Item>
         
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
         
        </Form.Item>
      </Form>
    );
  }
}

const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);

const mapDispatchToProps = dispatch =>{
  return{
    loginAction: (credentials) => dispatch(loginAction(credentials))
  }
}

const mapStateToProps = state => {
  return{
    auth:state.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)