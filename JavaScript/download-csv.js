var config = {
    apiKey: "AIzaSyC66z6fwxCsS12Z3StfAAoqL7w_ZeehhRM",
    authDomain: "blogyourspace-firebase.firebaseapp.com",
    databaseURL: "https://blogyourspace-firebase.firebaseio.com",
    projectId: "blogyourspace-firebase",
    storageBucket: "blogyourspace-firebase.appspot.com",
    messagingSenderId: "234498213014",
    appId: "1:234498213014:web:94f43ed3289c8c6bb7eeb7",
    measurementId: "G-5824TQ9FX1"
};

firebase.initializeApp(config);

window.addEventListener('load', function () {
    /*
    function getLeads(){
        const leads = firebase.database().ref('leads');
        alert('oi');
    }
    */
   
   let form = document.getElementById('btnLeads');
   
   form.addEventListener('submit', function (e) {
       alert('oi');        
       //getLeads();
   });
   

});

