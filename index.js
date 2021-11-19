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
    const userName = '<your_username>';
    const password = '<your_password>';

    const userData = await auth.signInWithEmailAndPassword(auther, userName, password);
    // const refresh = userData.user.refreshToken;
    console.log({ idToken: await userData.user.getIdToken() });
})()
