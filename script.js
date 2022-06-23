function validationForm() {
    const nom = document.querySelector('#username');
    const email = document.querySelector('#email');
    const verificationEmail = /^[a-zA-Z0-9_.]{3,25}@[a-z]{5,}\.[a-z]{2,10}$/;
    const error_message = document.getElementsByClassName('error-message')
    let vrai = false;
    if (nom.value.length == 0) {
        error_message[0].textContent = "N'oubliez pas de renseigner votre nom"
        vrai = false;
    } else if (nom.value.length < 3) {
        error_message[0].textContent = "Entrez un nom valide"
        vrai = false;
    } else {
        error_message[0].textContent = ""
        vrai = true;
    }
    if (email.value.length == 0) {
        error_message[1].textContent = "N'oubliez pas de renseigner votre email"
        vrai = false;

    } else if (!verificationEmail.test(email.value)) {
        error_message[1].textContent = "Entrez un email correct"
        vrai = false;
    } else {
        error_message[1].textContent = ""
        vrai = true;
    }
    if (vrai) {
        const quizs = document.querySelector('#quiz1');
        const PageAccueil = document.querySelector('#pageAccueil');
        PageAccueil.style.display = 'none';
        quiz1.style.display = 'block';
    }
}
//progressbar
let m = 100;
setInterval(() => {
    if (m >= 0 && quiz1.style.display == 'block') {
        document.getElementById("progressBarB").style.width = m + '%';
        m--;
    }

}, 600);

// debut minuteur

let mm = 60;
setInterval(() => {
    if (mm >= 0 && quiz1.style.display == 'block') {
        minuteur1.innerText = mm;
        mm--;
    }

}, 1000);

//fonction pour renouveller les questionnaires

function Question(phrase, assertion, correct) {
    this.phrase = phrase;
    this.assertion = assertion;
    this.correct = correct;
}
//liste des questions

const listQuestions = [
    new Question("Comment faire appelle à une fonction nommée « sum »?", ["sum()", "call function sum()", "call sum()", "Aucune de ces réponses n’est vraie."], 0),
    new Question("Quel est le bon endroit pour insérer un code JavaScript?", ["La section 'head'", "La section 'body'", "Les deux sections 'head' et 'body' sont correcte", "Aucune de ces réponses n’est vraie."], 1),
    new Question("cochez un framework php", ["express", "rails", "laravel", "spring "], 2),
    new Question("React js est un ", ["language", "framework", "library", "IDE "], 2),
    new Question("Quelle est la syntaxe correcte pour faire référence à un script externe appelé « myscript.js »? ", ["\<script href=\"myscript.js\"\>", "\<script name=\"myscript.js\">", "\<script src=\"myscript.js\"\>", "Tout les réponses sont vrais"], 3),
    new Question("Le fichier externe de JavaScript doit contenir la balise <script>?", ["Vrai", "Faux", "Toutes reponses sont bonnes", "Je ne sais pas"], 3),
    new Question("Comment écrivez-vous « Hello World » dans une boîte d’alerte?", ["msg(\"Hello World \");", "alert(\"Hello World \");", "alertBox(\"Hello World \");", "msgBox(\"Hello World \");"], 2),
    new Question("Comment écrire une condition IF en JavaScript? ", ["if a = 2 then", "if a = 2", "if a == 2 else", "if (a == 2)"], 2),
    new Question("Comment écrire une condition IF pour vérifier si « a » n’est PAS égal à 2? ", ["f a <> 2", "if (a != 2)", "if a =! 2 then", "if (a <> 2)"], 2),
    new Question("Comment créer une fonction en JavaScript? ", ["function f()", "function = f()", "function:f()", "Aucune de ces réponses n’est vraie."], 2),
    new Question("Quelle est la syntaxe correcte pour vérifier la valeur de « c » ? ", ["if (c == \"XYZ \") then { } else { }", "if (c = \"XYZ \") then { } else { }", "if (c == \"XYZ \") { } else { }", "if (c = \"XYZ \") { } else { }"], 2),
    new Question("JavaScript est-il un langage sensible à la casse?", ["Oui", "Non", "Oui et Non", "Je ne sais pas"], 0),
    new Question("Quelle est la sortie de cette ligne : String.fromCharCode(65) ?", ["1", "A", "Erreur", "False"], 1),
    new Question("Quel événement utilisez-vous pour exécuter quelque chose une fois le chargement du page est terminé?", ["onfinished", "onload", "onunload", "oncomplete"], 1),
    new Question("Quel mot clé intercepte toutes les valeurs sauf celles spécifiées?", ["All", "Any", "Default", "otherwise"], 2),
];

const titre = document.querySelector('#quiz1 p');
const assertions = document.querySelectorAll('#quiz1 label span');
let numeroQuestion = -1;

//fonction pour le bouton suivant
function nextPage() {
    numeroQuestion++;
    titre.textContent = listQuestions[numeroQuestion].phrase;
    for (let i = 0; i < assertions.length; i++) {
        assertions[i].textContent = listQuestions[numeroQuestion].assertion[i]
    }
}
//bouton quitter

function QuitterPage() {
    const lastPage = document.querySelector('#lastpage')
    quiz1.style.display = 'none';
    lastPage.style.display = 'block'
}


///