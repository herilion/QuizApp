let nom = document.querySelector('#username');
let email = document.querySelector('#email');
let lastUser = document.querySelector('.lastUser');
let lastEmail = document.querySelector('#lastEmail');
const verificationEmail = /^[a-zA-Z0-9_.]{3,25}@[a-z]{5,}\.[a-z]{2,10}$/;
const errorMessage = document.getElementsByClassName('error-message')
const pageAccueil = document.querySelector('#pageAccueil');
const quizs = document.querySelector('#quiz1');
const lastPage = document.querySelector('#lastpage');
const btnSuivant = document.querySelector('.buttonSuiv1')
const btnCommencer = document.querySelector('.button');
const btnQuitter = document.querySelector('.buttonQuit1')
const btnAccueil = document.querySelector('.buttonAccueil1')

btnCommencer.addEventListener('click', function() {
        let vrai = false;
        if (nom.value.length == 0) {
            errorMessage[0].textContent = "N'oubliez pas de renseigner votre nom"
            vrai = false;
        } else if (nom.value.length < 3) {
            errorMessage[0].textContent = "Entrez un nom valide"
            vrai = false;
        } else {
            errorMessage[0].textContent = ""
            vrai = true;
        }
        if (email.value.length == 0) {
            errorMessage[1].textContent = "N'oubliez pas de renseigner votre email"
            vrai = false;
        } else if (!verificationEmail.test(email.value)) {
            erroMessage[1].textContent = "Entrez un email correct"
            vrai = false;
        } else {
            errorMessage[1].textContent = ""
            vrai = true;
        }
        if (vrai) {
            quiz1.style.display = 'block';
            pageAccueil.style.display = 'none';
            lastPage.style.display = 'none';


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
    if (mm > 0 && quiz1.style.display == 'block') {
        minuteur1.innerText = mm;
        mm--;
    } else if (mm == 0) {
        NextQuestion();
        mm = 60;
        m = 100;
    }

}, 1000);

//fonction pour renouveller les questionnaires

function Question(menu, phrase, assertion, correct) {
    this.menu = menu;
    this.phrase = phrase;
    this.assertion = assertion;
    this.correct = correct;
}
//liste des questions

const listQuestions = [
    new Question("Question 2/15", "Comment faire appelle à une fonction nommée « sum »?", ["sum()", "call function sum()", "call sum()", "Aucune de ces réponses n’est vraie."], 0),
    new Question("Question 3/15", "Quel est le bon endroit pour insérer un code JavaScript?", ["La section 'head'", "La section 'body'", "Les deux sections 'head' et 'body' sont correcte", "Aucune de ces réponses n’est vraie."], 1),
    new Question("Question 4/15", "cochez un framework php", ["express", "rails", "laravel", "spring "], 2),
    new Question("Question 5/15", "React js est un ", ["language", "framework", "library", "IDE "], 2),
    new Question("Question 6/15", "Quelle est la syntaxe correcte pour faire référence à un script externe appelé « myscript.js »? ", ["\<script href=\"myscript.js\"\>", "\<script name=\"myscript.js\">", "\<script src=\"myscript.js\"\>", "Tout les réponses sont vrais"], 3),
    new Question("Question 7/15", "Le fichier externe de JavaScript doit contenir la balise <script>?", ["Vrai", "Faux", "Toutes reponses sont bonnes", "Je ne sais pas"], 3),
    new Question("Question 8/15", "Comment écrivez-vous « Hello World » dans une boîte d’alerte?", ["msg(\"Hello World \");", "alert(\"Hello World \");", "alertBox(\"Hello World \");", "msgBox(\"Hello World \");"], 2),
    new Question("Question 9/15", "Comment écrire une condition IF en JavaScript? ", ["if a = 2 then", "if a = 2", "if a == 2 else", "if (a == 2)"], 2),
    new Question("Question 10/15", "Comment écrire une condition IF pour vérifier si « a » n’est PAS égal à 2? ", ["f a <> 2", "if (a != 2)", "if a =! 2 then", "if (a <> 2)"], 2),
    new Question("Question 11/15", "Comment créer une fonction en JavaScript? ", ["function f()", "function = f()", "function:f()", "Aucune de ces réponses n’est vraie."], 2),
    new Question("Question 12/15", "Quelle est la syntaxe correcte pour vérifier la valeur de « c » ? ", ["if (c == \"XYZ \") then { } else { }", "if (c = \"XYZ \") then { } else { }", "if (c == \"XYZ \") { } else { }", "if (c = \"XYZ \") { } else { }"], 2),
    new Question("Question 13/15", "JavaScript est-il un langage sensible à la casse?", ["Oui", "Non", "Oui et Non", "Je ne sais pas"], 0),
    new Question("Question 14/15", "Quelle est la sortie de cette ligne : String.fromCharCode(65) ?", ["1", "A", "Erreur", "False"], 1),
    new Question("Question 15/15", "Quel événement utilisez-vous pour exécuter quelque chose une fois le chargement du page est terminé?", ["onfinished", "onload", "onunload", "oncomplete"], 1),
];

const titre = document.querySelector('#quiz1 p');
const menu = document.querySelector('#quiz1 h3');
const assertions = document.querySelectorAll('#quiz1 label span');
let numeroQuestion = -1;

//fonction pour le bouton suivant
const NextQuestion = function() {
    numeroQuestion++;
    titre.textContent = listQuestions[numeroQuestion].phrase;
    menu.textContent = listQuestions[numeroQuestion].menu;

    for (let i = 0; i < assertions.length; i++) {
        assertions[i].textContent = listQuestions[numeroQuestion].assertion[i]
    }
}
btnSuivant.addEventListener('click', function() {
    NextQuestion(this);
    mm = 60;
    m = 100;

});
//bouton quitter
btnQuitter.addEventListener('click', function() {
    quiz1.style.display = 'none';
    lastPage.style.display = 'block';
    console.log(lastUser, nom);
    lastUser.innerText = nom.value;
    lastEmail.innerText = email.value;

});

///Bouton accueil du lastPage
btnAccueil.addEventListener('click', function() {
    pageAccueil.style.display = 'block';
    lastPage.style.display = 'none';
    quiz1.style.display = 'none';

});