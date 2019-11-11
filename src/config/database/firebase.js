import firebase from "firebase"

//web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyAtcSZUqGkSQkorrdw9N23smBOaNLc3bUw",
	authDomain: "latenightmart.firebaseapp.com",
	databaseURL: "https://latenightmart.firebaseio.com",
	projectId: "latenightmart",
	storageBucket: "latenightmart.appspot.com",
	messagingSenderId: "74539223456",
	appId: "1:74539223456:web:4b7d1e01046c5835"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const FacebookProvider = new firebase.auth.FacebookAuthProvider();

export default firebase;

