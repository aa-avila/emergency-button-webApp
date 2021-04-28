// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDkIdRZdnfYCWOFrQWDCfBIrEGxq7StKRM",
    authDomain: "arduino-pruebas.firebaseapp.com",
    databaseURL: "https://arduino-pruebas.firebaseio.com",
    projectId: "arduino-pruebas",
    storageBucket: "arduino-pruebas.appspot.com",
    messagingSenderId: "315616907209",
    appId: "1:315616907209:web:745f910cf9c5ce86ba6218",
    measurementId: "G-T2EMJS7PKV",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// -----------------------------------------------------------------------

var db = firebase.database();

var redStateRef = db.ref("alert_red");
var greenStateRef = db.ref("alert_green");

var alertRed_state = 0;
var alertGreen_state = 0;

redStateRef.on('value', (snapshot) => {
    const data = snapshot.val();
    alertRed_state = data;
    //console.log(alertRed_state);
    if (alertRed_state === 0) {
        document.getElementById('btn-red-alert').classList.replace("red-state-on", "red-state-off");
    } else {
        document.getElementById('btn-red-alert').classList.replace("red-state-off", "red-state-on");
    }
});

greenStateRef.on('value', (snapshot) => {
    const data = snapshot.val();
    alertGreen_state = data;
    //console.log(alertGreen_state);
    if (alertGreen_state === 0) {
        document.getElementById('btn-green-alert').classList.replace("green-state-on", "green-state-off");
    } else {
        document.getElementById('btn-green-alert').classList.replace("green-state-off", "green-state-on");
    }
});


const handleBtn_red = async () => {
    if (alertRed_state === 0) {
        await db.ref('alert_red').set(1);
    } else {
        await db.ref('alert_red').set(0);
    }
}

const handleBtn_green = async () => {
    if (alertGreen_state === 0) {
        await db.ref('alert_green').set(1);
    } else {
        await db.ref('alert_green').set(0);
    }
}
