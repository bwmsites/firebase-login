const firebase = require('firebase/app');
const auth = require('firebase/auth');

const app = firebase.initializeApp({
    apiKey: "AIzaSyBCYD2i5CIeOKA2-RKN9AYFyW5eDLIKPrg",
    authDomain: "kinnd-app-dev.firebaseapp.com",
    databaseURL: "https://kinnd-app-dev-default-rtdb.firebaseio.com",
    projectId: "kinnd-app-dev",
    storageBucket: "kinnd-app-dev.appspot.com",
    messagingSenderId: "797548152597",
    appId: "1:797548152597:web:9a05c1545e4cd26fcfcb1c"
})

const auther = auth.getAuth(app);

(async () => {
    const userData = await auth.signInWithEmailAndPassword(auther, 'bruno.skarlata@gmail.com', '123456');
    // const refresh = userData.user.refreshToken;
    console.log({ idToken: await userData.user.getIdToken() });
})()