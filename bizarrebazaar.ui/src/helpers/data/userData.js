import axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/auth';
import { baseUrl } from '../constants.json';

axios.interceptors.request.use((request) => {
  const token = sessionStorage.getItem('token');

  if (token != null) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
}, (err) => Promise.reject(err));

const loginUser = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password)
  .then((cred) => {
    cred.user.getIdToken()
      .then((token) => sessionStorage.setItem('token', token));
  })
  .catch((err) => console.error(err));

const loginWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((cred) => {
    cred.user.getIdToken()
      .then((token) => sessionStorage.setItem('token', token));
  });
};

const registerUser = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((cred) => {
    cred.user.getIdToken()
      .then((token) => {
        sessionStorage.setItem('token', token);
      });
  });

const addUserToDatabase = (userObj) => axios.post(`${baseUrl}/user`, userObj);

const getUserByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/user/userId/${uid}`)
    .then((result) => resolve(result))
    .catch((error) => reject(error));
});

const getUserByName = (userName) => axios.get(`${baseUrl}/user/username/${userName}`);

const GetUserByEmail = (email) => axios.get(`${baseUrl}/user/email/${email}`);

// get user by email to compare when componentdidmount runs in app.js
// have firebaseobj (userObj) databaseobj is currentUser
// compare fbuserobj email with currentuser email
// make sure to have API return current user object if it is in the database
// 1 create new fetch call in datafile
// 2 create new method in userController in VS GetUserByEmail

export default {
  loginUser, registerUser, loginWithGoogle, addUserToDatabase, getUserByUid, getUserByName, GetUserByEmail,
};
