import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";


export const initializeLoginFramework = () => {
    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}




//usual sign-in
export const handleGoogleSignIn=()=>{
    var googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth()
    .signInWithPopup(googleProvider)
    .then(res=> {
                 const {displayName, email} = res.user;
                 const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    success: true
                  };
                  return signedInUser;
                })
    .catch((err) => {
                 console.log(err);
                 console.log(err.message);
    });
}


//sign-out
export const handleSignOut = () => {
    return firebase.auth().signOut()
    .then(res => {
      const signedOutUser = {
        isSignedIn: false,
        name: '',
        email: '',
        error: '',
        success: false
      }
      return signedOutUser;
    }).catch(err => {
      // An error happened.
    });
  }


  //sign up
  export const createUserWithEmailAndPassword=(name,email,password)=>{
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((res) => {
        const newUserInfo=res.user;
        newUserInfo.error = '';//this is how we add property to a variable,we just added error
        newUserInfo.success = true;//we just added success
        return newUserInfo;
      })
      .catch((error) => {
        const newUserInfo={};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        return newUserInfo;
      });
  }

  //sign in after cross-checking newUser or, not
  export const signInWithEmailAndPassword = (email, password) =>{
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(res => {
      const newUserInfo = res.user;
      newUserInfo.error = '';
      newUserInfo.success = true;
      return newUserInfo;
    })
    .catch(function(error) {
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;
    });
 }