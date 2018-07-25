import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyB9YzyQ0cj7GASHeWFYFgUppNodofl5tB8',
  authDomain: 'resto-member.firebaseapp.com',
  databaseURL: 'https://resto-member.firebaseio.com',
  projectId: 'resto-member',
  storageBucket: 'resto-member.appspot.com',
  messagingSenderId: '400511441745'
}

const app = firebase.initializeApp(config)

export default {
  database: firebase.database(app)
}
