import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
//import {initializeApp} from 'firebase/app';
const firebaseConfig = {
  apiKey: 'AIzaSyD2ITa4SNdOv2RNSlxoQl48GfgDEgljOUs',
  authDomain: 'wechat-1b0e6.firebaseapp.com',
  projectId: 'wechat-1b0e6',
  storageBucket: 'wechat-1b0e6.appspot.com',
  messagingSenderId: '879428777687',
  appId: '1:879428777687:web:43b4cc5924293653c16292',
  measurementId: 'G-CC10BGBPBQ',
};
//const firebase = initializeApp(firebaseConfig);
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export {firebase};
