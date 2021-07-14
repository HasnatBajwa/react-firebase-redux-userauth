import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyBCvMds_tfu2esuIp268f9S26AzNVcDRDo",
    authDomain: "fir-user-auth-7e1d2.firebaseapp.com",
    projectId: "fir-user-auth-7e1d2",
    storageBucket: "fir-user-auth-7e1d2.appspot.com",
    messagingSenderId: "55023283133",
    appId: "1:55023283133:web:9883f3f050b16c2675c0d4",
    measurementId: "G-SZKTKNDDJZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();