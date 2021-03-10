import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, makeStyles, TextField, Typography} from '@material-ui/core';
import { useForm } from "react-hook-form";
import logo from '../Logo.png';
import googleIcon from '../Icon/google.png';
import fbIcon from '../Icon/fb.png';
import './Login.css';


//useStyles-start
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
//useStyles-end





//socialStyles-start
const socialStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
//socialStyles-end





const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };


  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const classes = useStyles();
  const socialClasses = socialStyles();

  const provider = new firebase.auth.GoogleAuthProvider();
  var fbProvider = new firebase.auth.FacebookAuthProvider();
  
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };


  const handleFbSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };
  


  const { register, handleSubmit } = useForm();
  // const onSubmit = (data) => console.log(data);
  const onSubmit = (e) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(e.email, e.password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  };

  return (
    <>
<Container className="loginContainer" component="main" maxWidth="xs">
<CssBaseline/>
<div className={classes.paper}>
<img
    style={{ width: "100px", paddingTop: "10px" }}
    src={logo}
    alt=""
    srcSet=""
    />
<Typography component="h1" variant="h5">
            Login
</Typography>

           <form
            onSubmit={handleSubmit(onSubmit)}
            className={classes.form}
            noValidate
            >
            <TextField
              variant="outlined"
              margin="normal"
              inputRef={register}
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              inputRef={register}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={
                <Checkbox
                  inputRef={register}
                  name="remember"
                  color="primary"
                  defaultValue={false}
                />
              }
              label="Remember me"
            />
             <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleGoogleSignIn}
            >
              Login
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>

          </form>
</div>

</Container>



<center>
        <h3 style={{ color: "white", marginTop: "15px" }}>Or</h3>
        <button onClick={handleGoogleSignIn} className="socialButton">
          <div className={socialClasses.root}>
            <Grid
              direction="row"
              justify="flex-start"
              alignItems="center"
              container
              spacing={1}
            >
              <Grid item xs={1}>
                <img className="socailIcon" src={googleIcon} alt="" srcSet="" />{" "}
              </Grid>
              <Grid item xs={11}>
                Continue with Google
              </Grid>
            </Grid>
          </div>
        </button>
        <br />
        <button
          onClick={handleFbSignIn}
          style={{ marginBottom: "20px" }}
          className="socialButton"
        >
          <div className={socialClasses.root}>
            <Grid
              direction="row"
              justify="flex-start"
              alignItems="center"
              container
              spacing={1}
            >
              <Grid item xs={1}>
                <img className="socailIcon" src={fbIcon} alt="" srcSet="" />{" "}
              </Grid>
              <Grid item xs={11}>
                Continue with Facebook
              </Grid>
            </Grid>
          </div>
        </button>
      </center>
    </>
  );
};

export default Login;