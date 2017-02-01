import firebase from 'firebase'

const config = {
  apiKey: "Your API Key",
  authDomain: "yourdomain.firebaseapp.com",
  databaseURL: "https://yourdomain.firebaseio.com",
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth