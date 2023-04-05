// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwTT5kj-qpAfQ90Bpp7_djfaoBdhfrpOU",
    authDomain: "todo-e19e9.firebaseapp.com",
    projectId: "todo-e19e9",
    storageBucket: "todo-e19e9.appspot.com",
    messagingSenderId: "1040453223614",
    appId: "1:1040453223614:web:0150c4aa8abe7e88128aef",
    measurementId: "G-QVQC22VDYX"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
 export default app;