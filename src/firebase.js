import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAEge7jVGLMaODUTxtXxn-K5-KPwy_zz5s",
    authDomain: "humble-2b891.firebaseapp.com",
    projectId: "humble-2b891",
    storageBucket: "humble-2b891.appspot.com",
    messagingSenderId: "326622751695",
    appId: "1:326622751695:web:742ad437db70e5356680ba",
    measurementId: "G-L2FTMSRB9L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;