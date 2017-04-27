import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyAb8dv2zAXkd9a9ej_rREXcTrT02uSoGKk",
    authDomain: "todo-5c57f.firebaseapp.com",
    databaseURL: "https://todo-5c57f.firebaseio.com",
    projectId: "todo-5c57f",
    storageBucket: "todo-5c57f.appspot.com",
    messagingSenderId: "951511493909"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export const firebaseRef = firebase.database().ref();
export default firebase;
