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
// Initialize Firebase
firebase.initializeApp(config);

var leadsRef = firebase.database()

let meuIP = getIp(function (meuIP) {

    //Processo de envio de informações ao Firebase
    window.addEventListener('load', function () {
        let f = document.getElementById('contactForm')


        function saveuser(name, email, date, tipo) {




            leadsRef.ref("leads").push().set({

                    Nome: name,
                    EMAIL: email,
                    DATA: date,
                    IP: meuIP,
                    TIPO: tipo

                })



                .then(function (docRef) {

                    if (alert('Salvo Com Sucesso')) {
                        f.elements['name'].value = "";
                        f.elements['email'].value = "";
                    }
                })
                .catch(function (error) {
                    console.error("Error adding document: ", error);
                });
            // Limpando form
            document.getElementById('contactForm').reset();
        }


        f.addEventListener('submit', function (e) {
            let nome = f.elements['name'].value
            let email = f.elements['email'].value
            let date = completeDate();
            let tipo = classificaTipo(email);
            saveuser(nome, email, date, tipo)
            e.preventDefault();
            console.log(e);
        })

        // f.addEventListener('submit', function () {
        //     window.location.href = "https://firebasestorage.googleapis.com/v0/b/jalecando-7go.appspot.com/o/e-book-Curriculo-med.pdf?alt=media&token=ca45fcf1-c77d-4b61-9824-9a7e75b02288";
        //     e.preventDefault();
        //     console.log(e);
        // }).delay(4000)

    });
});

// DATA 
function completeDate() {
    now = new Date();
    year = "" + now.getFullYear();
    month = "" + (now.getMonth() + 1);
    if (month.length == 1) {
        month = "0" + month;
    }
    day = "" + now.getDate();
    if (day.length == 1) {
        day = "0" + day;
    }
    hour = "" + now.getHours();
    if (hour.length == 1) {
        hour = "0" + hour;
    }
    minute = "" + now.getMinutes();
    if (minute.length == 1) {
        minute = "0" + minute;
    }
    second = "" + now.getSeconds();
    if (second.length == 1) {
        second = "0" + second;
    }
    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
}

// Pegando o IP
function getIp(callback) {
    function response(s) {
        callback(window.userip);

        s.onload = s.onerror = null;
        document.body.removeChild(s);
    }

    function trigger() {
        window.userip = false;

        var s = document.createElement("script");
        s.async = true;
        s.onload = function () {
            response(s);
        };
        s.onerror = function () {
            response(s);
        };

        s.src = "https://l2.io/ip.js?var=userip";
        document.body.appendChild(s);
    }

    if (/^(interactive|complete)$/i.test(document.readyState)) {
        trigger();
    } else {
        document.addEventListener('DOMContentLoaded', trigger);
    }
}


// ------------ tipo

classificaTipo = (email) => {
    let dominio = email.substring(email.indexOf("@") + 1, email.length);

    let listaConsumidor = [
        'gmail.com',
        'uol.com.br',
        'ig.com.br',
        'outlook.com',
        'outlook.com.br',
        'hotmail.com',
        'hotmail.com.br',
        'bol.com.br',
        'icloud.com',
        'terra.com.br',
        'globo.com',
        'yahoo.com.br',
        'yahoo.com.br'
    ];

    if (listaConsumidor.includes(dominio)) {
        return 'B2C';
    } else {
        return 'B2B';
    }

}