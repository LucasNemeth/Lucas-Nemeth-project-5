import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyALhgjyO_nxgg9Do-nH9CGwMvOE-9p4FyE",
    authDomain: "lucas-nemeth-project-5.firebaseapp.com",
    databaseURL: "https://lucas-nemeth-project-5.firebaseio.com",
    projectId: "lucas-nemeth-project-5",
    storageBucket: "lucas-nemeth-project-5.appspot.com",
    messagingSenderId: "656764515209",
    appId: "1:656764515209:web:e31e6147109ecfc0502758"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;