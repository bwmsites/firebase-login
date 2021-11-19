const firebase = require('firebase/app');
const auth = require('firebase/auth');

const app = firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
})

const auther = auth.getAuth(app);

(async () => {
    const userData = await auth.signInWithEmailAndPassword(auther, '', '');
    // const refresh = userData.user.refreshToken;
    console.log({ idToken: await userData.user.getIdToken() });
})()
