import React from 'react';
import '../styles/SignIn.css';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { vEmail, vPassword } from '../utils/validation';

class SignIn extends React.Component{
  render(){
    return(
      <div className="signin">
        <div className="signin_wrapper">

          <div className="signin_form">
            <Formik
              initialValues={{ email:"", password:"" }}

              validationSchema = { Yup.object({
                email: vEmail(),
                password: vPassword()
              })}

              onSubmit = {(values) => {
                this.props.signIn(values)
              }}
            >
              {props => 
              <form onSubmit={props.handleSubmit}>
                <input 
                  id="email"
                  name="email" 
                  type="email"
                  placeholder="email"
                  defaultValue={props.values.email}
                  onChange={props.handleChange} /><br />

                <input 
                  id="password"
                  name="password" 
                  type="password"
                  placeholder="password"
                  defaultValue={props.values.password}
                  onChange={props.handleChange} /><br />

                <button className="submit_btn" type="submit">LOGIN</button><br />
              </form>}
            </Formik>
          </div>

          <div className="signin_register">
            <p>Not registered? 
              <span className="signin_register_create">Create an account</span>
            </p>
          </div>
          
        </div>
      </div>
    )
  }
}

export default SignIn;