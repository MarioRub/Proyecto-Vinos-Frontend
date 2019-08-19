import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyAB_44MUsXiPlcj5ymkqElH0qISDW3DK10",
  authDomain: "hondumallprincipal.firebaseapp.com",
  databaseURL: "https://hondumallprincipal.firebaseio.com",
  projectId: "hondumallprincipal",
  storageBucket: "hondumallprincipal.appspot.com",
  messagingSenderId: "987610124998"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;