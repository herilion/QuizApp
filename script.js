const nom = document.querySelector('#username');
const email = document.querySelector('#email');
const lastUser = document.querySelector('.lastUser');
const lastEmail = document.querySelector('#lastEmail');
const verificationEmail = /^[a-zA-Z0-9_.]{3,25}@[a-z]{2,}\.[a-z]{2,10}$/;
const errorMessage = document.getElementsByClassName('error-message')
const pageAccueil = document.querySelector('#pageAccueil');
const quizs = document.querySelector('#quiz1');
const lastPage = document.querySelector('#lastpage');
const btnSuivant = document.querySelector('.buttonSuiv1')
const btnCommencer = document.querySelector('.button');
const btnQuitter = document.querySelector('.buttonQuit1')
const btnAccueil = document.querySelector('.buttonAccueil1')
const listInput = document.querySelectorAll('#reponse1 input')
const lastScore = document.querySelector('#scoreFinal span');
const resultEchec = document.querySelector('#Image #imgEchec');
const resultReussite = document.querySelector('#Image #imgReussite');
const label = document.querySelector('.bored')
const label1 = document.querySelector('.bored1')
const radio = document.querySelectorAll('.radio')

//Validation du formulaire et Button commencer

btnCommencer.addEventListener('click', () => {
    let vrai1 = 4;
    let vrai2 = 5;
    if (nom.value.length == 0) {
        errorMessage[0].textContent = "N'oubliez pas de renseigner votre nom"
        label.style.border = 'red solid 1px';
        vrai1 = 2;
    } else if (nom.value.length < 3) {
        errorMessage[0].textContent = "Entrez un nom valide"
        label.style.border = 'red solid 1px';
        vrai1 = 2;
    } else {
        errorMessage[0].textContent = ""
        vrai1 = 3;
        label.style.border = 'red solid 1px';
    }
    if (email.value.length == 0) {
        errorMessage[1].textContent = "N'oubliez pas de renseigner votre email"
        label1.style.border = 'red solid 1px';
        vrai2 = 2;
    } else if (!verificationEmail.test(email.value)) {
        errorMessage[1].textContent = "Entrez un email correct"
        label1.style.border = 'red solid 1px';
        vrai2 = 2;
    } else {
        errorMessage[1].textContent = ""
        vrai2 = 3;
    }
    if (vrai1 == 3) {
        label1.style.border = 'none';
    } else if (vrai2 == 3) {
        label.style.border = 'none';
    }
    if (vrai1 == 3 && vrai2 == 3) {
        label1.style.border = 'none';
        label.style.border = 'none';
        pageAccueil.style.display = 'none';
        lastPage.style.display = 'none';
        quizs.style.display = 'block';
        NextQuestion(this);

    }

})
//progressbar
let m = 100;

setInterval(() => {
    if (m >= 0 && quiz1.style.display == 'block') {
        document.getElementById("progressBarB").style.width = m + '%';
        m--;
    }

}, 600);

let mm = 60; // minuteur

setInterval(() => {
    if (mm == -1) {
        NextQuestion();
        mm = 60;
        m = 100;
    } else if (mm >= 0 && quiz1.style.display == 'block') {
        minuteur1.innerText = mm;
        mm--;
    }

}, 1000);


//class Questions

class Question {
    constructor(menu, phrase, assertion, correct) {
        this.menu = menu;
        this.phrase = phrase;
        this.assertion = assertion;
        this.correct = correct;
    }
}
//liste des questions

const listQuestions = [
    new Question("Question 1/15", "Dans quel balise HTML plaçons-nous le code JavaScript?", ["la balise js", "La balise javascript", "La balise script", "La balise rel"], 2),
    new Question("Question 2/15", "Comment faire appelle à une fonction nommée « sum »?", ["sum()", "call function sum()", "call sum()", "Aucune de ces réponses n’est vraie."], 0),
    new Question("Question 3/15", "Quel est le bon endroit pour insérer un code JavaScript?", ["La section 'head'", "La section 'body'", "Les deux sections 'head' et 'body' sont correcte", "Aucune de ces réponses n’est vraie."], 1),
    new Question("Question 4/15", "cochez un framework php", ["express", "rails", "laravel", "spring "], 2),
    new Question("Question 5/15", "React js est un ", ["language", "framework", "library", "IDE "], 2),
    new Question("Question 6/15", "Quelle est la syntaxe correcte pour faire référence à un script externe appelé « myscript.js »? ", ["\<script href=\"myscript.js\"\>", "\<script name=\"myscript.js\">", "\<script src=\"myscript.js\"\>", "Tout les réponses sont vrais"], 2),
    new Question("Question 7/15", "Le fichier externe de JavaScript doit contenir la balise <script>?", ["Vrai", "Faux", "Toutes reponses sont bonnes", "Je ne sais pas"], 1),
    new Question("Question 8/15", "Comment écrivez-vous « Hello World » dans une boîte d’alerte?", ["msg(\"Hello World \");", "alert(\"Hello World \");", "alertBox(\"Hello World \");", "msgBox(\"Hello World \");"], 1),
    new Question("Question 9/15", "Comment écrire une condition IF en JavaScript? ", ["if a = 2 then", "if a = 2", "if a == 2 else", "if (a == 2)"], 3),
    new Question("Question 10/15", "Comment écrire une condition IF pour vérifier si « a » n’est PAS égal à 2? ", ["if a <> 2", "if (a != 2)", "if a =! 2 then", "if (a <> 2)"], 1),
    new Question("Question 11/15", "Comment créer une fonction en JavaScript? ", ["function f()", "function = f()", "function:f()", "Aucune de ces réponses n’est vraie."], 0),
    new Question("Question 12/15", "Quelle est la syntaxe correcte pour vérifier la valeur de « c » ? ", ["if (c == \"XYZ \") then { } else { }", "if (c = \"XYZ \") then { } else { }", "if (c == \"XYZ \") { } else { }", "if (c = \"XYZ \") { } else { }"], 2),
    new Question("Question 13/15", "JavaScript est-il un langage sensible à la casse?", ["Oui", "Non", "Oui et Non", "Je ne sais pas"], 0),
    new Question("Question 14/15", "Quelle est la sortie de cette ligne : String.fromCharCode(65) ?", ["1", "A", "Erreur", "False"], 1),
    new Question("Question 15/15", "Quel événement utilisez-vous pour exécuter quelque chose une fois le chargement du page est terminé?", ["onfinished", "onload", "onunload", "oncomplete"], 1),
];

const titre = document.querySelector('#quiz1 p');
const menu = document.querySelector('#quiz1 span');
const assertions = document.querySelectorAll('#quiz1 label span');
let numeroQuestion = -1;

let score = 0;

//fonction pour le bouton suivant
const NextQuestion = () => {
    numeroQuestion++;
    titre.textContent = listQuestions[numeroQuestion].phrase;
    menu.textContent = listQuestions[numeroQuestion].menu;
    btnSuivant.style.background = '#89c7a4';
    btnSuivant.style.cursor = 'not-allow';
    if (numeroQuestion == 14) {
        quizs.style.display = 'none';
        lastPage.style.display = 'block';
        lastUser.innerText = nom.value;
        lastEmail.innerText = email.value;
        afficheScore(this);

    }

    for (let i = 0; i < assertions.length; i++) {
        assertions[i].textContent = listQuestions[numeroQuestion].assertion[i]
    }
    listInput.forEach((element, index) => {
        if (element.checked && listQuestions[numeroQuestion].correct == index) {
            score++;
        }
        element.checked = false;
    });
    console.log(score);
}

btnSuivant.addEventListener('click', () => {
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked == true) {
            NextQuestion(this);
            mm = 60;
            m = 100;
        }
    }
});

for (let i = 0; i < assertions.length; i++) {
    console.log(assertions[i]);
    assertions[i].addEventListener('click', function () {
        btnSuivant.style.background = 'rgb(18, 119, 8)';
        btnSuivant.style.cursor = 'pointer';
    })
}

//bouton quitter de l'applicationQ
btnQuitter.addEventListener('click', (e) => {
    e.preventDefault()
    quizs.style.display = 'none';
    lastPage.style.display = 'block';
    lastUser.innerText = nom.value;
    lastEmail.innerText = email.value;
    afficheScore(this);

});

///Bouton accueil du lastPage
btnAccueil.addEventListener('click', () => {
    window.location.reload();
});
const afficheScore = () => {
    lastScore.textContent = score;
    if (score < 8) {
        resultReussite.style.display = 'none';

    } else if (score >= 8) {
        resultEchec.style.display = 'none';

    }

}

//coding by Heritier LIONGE