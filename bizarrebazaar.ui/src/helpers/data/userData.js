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

const loginUser = (user) => firebase.auth().signInWithEmailAndPassword(user.email, user.password)
  .then((cred) => {
    cred.user.getIdToken()
      .then((token) => sessionStorage.setItem('token', token));
  });

const signInUser = (firebaseInfo) => new Promise((resolve, reject) => {
  firebase.auth().signInWithEmailAndPassword(firebaseInfo.email, firebaseInfo.password)
    .then((cred) => cred.user.getIdToken())
    .then((token) => sessionStorage.setItem('token', token))
    .catch((err) => reject(err));
});

const addUser = (newUserObj, firebaseInfo) => new Promise((resolve, reject) => {
  firebase.auth().createUserWithEmailAndPassword(firebaseInfo.email, firebaseInfo.password)
    .then((cred) => cred.user.getIdToken())
    .then((token) => sessionStorage.setItem('token', token))
    .then(() => resolve(axios.post(`${baseUrl}`, newUserObj)))
    .catch((err) => reject(err));
});

export default { loginUser, addUser, signInUser };
