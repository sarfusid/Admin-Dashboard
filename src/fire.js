import firebase from 'firebase';
import 'firebase/auth';
  const firebaseConfig = {
    apiKey: "AIzaSyAm_57g3BllHBnkb97aJSVRwhrpAtakDiM",
    authDomain: "dashboard-n.firebaseapp.com",
    projectId: "dashboard-n",
    storageBucket: "dashboard-n.appspot.com",
    messagingSenderId: "527889360585",
    appId: "1:527889360585:web:f515ab64fabcd7182f4f18"
  };
const fire = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export default fire;
