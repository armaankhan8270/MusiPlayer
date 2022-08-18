import {getFirestore,} from 'firebase/firestore'
import { getStorage } from 'firebase/storage';
import {initializeApp} from 'firebase/app'
import firebase from 'firebase/compat/app';
const firebaseConfig = {
    apiKey: "AIzaSyDQEzXJibbS7THymUiuOA3dwjgPUea8l1A",
    authDomain: "musicplayer-fcb26.firebaseapp.com",
    projectId: "musicplayer-fcb26",
    storageBucket: "musicplayer-fcb26.appspot.com",
    messagingSenderId: "498096777953",
    appId: "1:498096777953:web:ffc251ff8d9973704525a0",
    measurementId: "G-RYMB3LNRLC"
  };
const app=firebase.initializeApp(firebaseConfig)
export const db=getFirestore(app)
export const storage=getStorage(app)