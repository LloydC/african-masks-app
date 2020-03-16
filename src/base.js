import * as firebase from 'firebase';
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAobLcWKdg8bmXVqQRPfB2o2IWxA51AWIQ",
    authDomain: "african-masks-app.firebaseapp.com",
    databaseURL: "https://african-masks-app.firebaseio.com",
    projectId: "african-masks-app",
    storageBucket: "african-masks-app.appspot.com",
    messagingSenderId: "679233135635",
    appId: "1:679233135635:web:01ce33a7298b9fcd248be6"
})

export default app;