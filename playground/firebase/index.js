import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAb8dv2zAXkd9a9ej_rREXcTrT02uSoGKk",
  authDomain: "todo-5c57f.firebaseapp.com",
  databaseURL: "https://todo-5c57f.firebaseio.com",
  projectId: "todo-5c57f",
  storageBucket: "todo-5c57f.appspot.com",
  messagingSenderId: "951511493909"
};
firebase.initializeApp(config);

const firebaseRef = firebase.database().ref();



// set
firebaseRef.set({
  appName: {
    name: 'Todo App',
    version: '3.4.2'
  },
  isRunning: true,
  user: {
    name: 'zac',
    age: 19
  }
}).then(() => {
  console.log('set worked!')
}, (e) => {
  console.log('set failed!')
});

firebaseRef.child('appName').set({
  name: 'King'
})



// update
firebaseRef.update({
  isRunning: false,
  'appName/name': 'Todo'
});

firebaseRef.child('appName').update({
  'name': 'Todo Application'
})

firebaseRef.update({
  'appName/name': 'Todo',
  'user/name': 'Simon'
})

firebaseRef.child('appName').update({
  'name': 'earl'
})

firebaseRef.child('user').update({
  'name': 'sweatshirt'
})



// delete
firebaseRef.child('user/age').remove();

// by setting value = null that deletes it
firebaseRef.child('user').update({
  name: null
})

firebaseRef.child('appName').update({
  name: null,
  version: '3.14.15.926'
})



// fetch
firebaseRef.once('value').then((snapshot) => {
  console.log('Got Database', snapshot.val());
}, (e) => {
  console.log(e);
});

firebaseRef.child('app').once('value').then((snapshot) => {
  console.log('Got Database', snapshot.key, snapshot.val());
}, (e) => {
  console.log(e);
});

// on listens for any data changes and returns them in the snapshot
firebaseRef.on('value', (snapshot) => {
  console.log('Got Value', snapshot.val())
});
firebaseRef.off() // stops the on() listener

const logVersionChanges = (snapshot) => {
  console.log('new version - ', snapshot.val())
};
firebaseRef.child('appName').child('version').on('value', logVersionChanges);
firebaseRef.off(logVersionChanges); // just removes the logVersionChanges listener



// array
let notesRef = firebaseRef.child('notes') // notes is an array or note objects

// append to array - this will be give a unique id as a key
let newNoteRef = notesRef.push({
  text: 'Walk Dog'
});

// listen for different events in the array
notesRef.on('child_added', (note) => {
  console.log('child_added - ', note)
})

notesRef.on('child_changed', (note) => {
  console.log('child_changed - ', note)
})

notesRef.on('child_removed', (note) => {
  console.log('child_removed - ', note)
})
