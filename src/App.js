import React from 'react';
import './App.css'
import SignIn from './components/SignIn'
import Main from './components/Main'
import { observer, inject } from 'mobx-react'

@inject('userStore')
@observer
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = { 
      isSignIn : false, // false : 처음에 로그인 안한 상태
    }
  }

 signIn = (values) => {
  const { email } = values;
  const { userStore } = this.props;
  userStore.setUsermail(email)
  this.setState({
    isSignIn: true
  })
}

  render(){
    const { isSignIn } = this.state
    return (
      isSignIn 
      ? <div className="content_container"><Main /></div> 
      : <div className="signin_container"><SignIn signIn={this.signIn} /></div>
    )
  }
}

export default App;