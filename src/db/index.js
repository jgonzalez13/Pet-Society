import Firebase from 'firebase'


let config = {
  apiKey: "AIzaSyCwlOzHO7-Nf3Qoq9dLki86YRyAfmxvkfo",
  authDomain: "hack-79913.firebaseapp.com",
  databaseURL: "https://hack-79913.firebaseio.com",
  projectId: "hack-79913",
  storageBucket: "hack-79913.appspot.com",
  messagingSenderId: "725754870809"
}

let app = Firebase.initializeApp(config);

export default app