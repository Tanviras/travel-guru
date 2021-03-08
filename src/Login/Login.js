import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../App';
import './Login.css';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, handleGoogleSignIn, handleSignOut, initializeLoginFramework } from './LoginManager';

const Login = () => {

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
      });

      initializeLoginFramework();

      const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };




// handleResponse
const handleResponse = (res, redirect) =>{
    setUser(res);
    setLoggedInUser(res);
    if(redirect){
        history.replace(from);
    }
  }

  //sign in with google
const googleSignIn = () => {
    handleGoogleSignIn()
    .then(res => {
      handleResponse(res, true);
    })
}


//sign out
const signOut = () => {
    handleSignOut()
    .then(res => {
        handleResponse(res, false);
    })
}





const [newUser, setNewUser] = useState(false);
//submit
const handleSubmit = (e) => {
    // submission when creating new account- newUser: true
    if(newUser && user.email && user.password){
      createUserWithEmailAndPassword(user.name, user.email, user.password)
      .then(res => {
        handleResponse(res, true);
      })
    }





    //submission when existing user- newUser: false
    if(!newUser && user.email && user.password){
        signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          handleResponse(res, true);
        })
      }
      e.preventDefault();
    }


//validation
    const handleBlur = (e) => {
        let isFieldValid = true;
        if(e.target.name === 'email'){
          isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name === 'password'){
          const isPasswordValid = e.target.value.length > 6;
          const passwordHasNumber =  /\d{1}/.test(e.target.value);
          isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if(isFieldValid){
          const newUserInfo = {...user};
          newUserInfo[e.target.name] = e.target.value;
          setUser(newUserInfo);
        }
      }
      
    return (
        <div style={{textAlign: 'center'}}>

        {/* toggling between sign in and sign out */}
          { user.isSignedIn ? <button onClick={signOut}>Sign Out</button> :
                              <button onClick={googleSignIn}>Sign In with Google</button>
          }
          <br/>



          {/* verification */}
          {
            user.isSignedIn && <div>
            <p>Welcome, {user.name}!</p>
            <p>Your email: {user.email}</p>
            </div>
          }

        {/* Are you a new user? */}
        <input type="checkbox" name="newUser" onChange={() => setNewUser(!newUser)} />
        <label htmlFor="newUser">New User?</label>

        <form onSubmit={handleSubmit}>
        {newUser && <input name="name" type="text" onBlur={handleBlur} placeholder="Your name"/>}
        <br/>

        <input type="text" name="email" onBlur={handleBlur} placeholder="Your Email address" required/>
        <br/>
        <input type="password" name="password" onBlur={handleBlur} placeholder="Your Password" required/>
        <br/>
        <input type="submit" value={newUser ? 'Sign up' : 'Sign in'}/>
       </form>
          


        </div>
    );
};

export default Login;