let currentQuestion = 1; // on commence à la question 1

function next() {
  // Vérifier si une réponse est sélectionnée pour la question actuelle
  const radios = document.getElementsByName("question" + (currentQuestion - 1));
  let answered = false;
  for (const radio of radios) {
    if (radio.checked) {
      answered = true;
      break;
    }
  }
  if (!answered) {
    alert("Veuillez choisir une réponse avant de continuer.");
    return; // sortir de la fonction pour forcer la réponse
  }

  // Cacher la question courante
  const currentDiv = document.getElementById("q" + currentQuestion);
  if (currentDiv) {
    currentDiv.style.display = "none";
  }

  currentQuestion++;

  // Afficher la question suivante
  const nextDiv = document.getElementById("q" + currentQuestion);
  if (nextDiv) {
    nextDiv.style.display = "block";
  } else {
    alert("Test terminé ! Merci de votre participation.");
    // Ici tu peux afficher les résultats ou rediriger
  }
}

const totalQuestions = 8;
const answers = [];

function next() {
  const radios = document.getElementsByName("question" + (currentQuestion - 1));
  let selectedValue = null;

  for (const radio of radios) {
    if (radio.checked) {
      selectedValue = radio.value;
      break;
    }
  }

  if (!selectedValue) {
    alert("Veuillez choisir une réponse avant de continuer.");
    return;
  }

  // Stocker la réponse
  answers.push(selectedValue);

  // Cacher la question courante
  const currentDiv = document.getElementById("q" + currentQuestion);
  if (currentDiv) {
    currentDiv.style.display = "none";
  }

  currentQuestion++;

  if (currentQuestion <= totalQuestions) {
    // Afficher la question suivante
    const nextDiv = document.getElementById("q" + currentQuestion);
    if (nextDiv) {
      nextDiv.style.display = "block";
    }
  } else {
    // Fin du test
    showResults();
  }
}

function showResults() {
  // Compter les réponses
  const counts = { A: 0, B: 0, C: 0, D: 0, E: 0 };
  for (const ans of answers) {
    counts[ans]++;
  }

  // Trouver la réponse la plus fréquente
  let maxCount = 0;
  let maxLetter = null;
  for (const letter in counts) {
    if (counts[letter] > maxCount) {
      maxCount = counts[letter];
      maxLetter = letter;
    }
  }

  // Message personnalisé selon la lettre dominante
  let message = "";
  switch (maxLetter) {
    case "A":
      message = "Vous êtes plutôt créatif et original ! 🎨";
      break;
    case "B":
      message = "Vous êtes logique et analytique ! 🧠";
      break;
    case "C":
      message = "Vous êtes empathique et chaleureux ! ❤️";
      break;
    case "D":
      message = "Vous êtes aventurier et audacieux ! 🏔️";
      break;
    case "E":
      message = "Nouvelle variable 🏔️";
      break;
    default:
      message = "Test terminé !";
  }

// Ajouter un div résultat sous les questions
  const container = document.getElementById("questions");

  // Cacher toutes les questions
  for (let i = 1; i <= totalQuestions; i++) {
    const q = document.getElementById("q" + i);
    if (q) q.style.display = "none";
  }

  // Créer ou mettre à jour un div résultat
  let resultDiv = document.getElementById("result");
  if (!resultDiv) {
    resultDiv = document.createElement("div");
    resultDiv.id = "result";
    container.appendChild(resultDiv);
  }
  resultDiv.innerHTML = `<h2>Résultat du test</h2><p>${message}</p>`;

  // Modifier le bouton
  const btn = document.querySelector("button");
  btn.textContent = "Restart";
  btn.onclick = restartTest;
}


function restartTest() {
  currentQuestion = 1;
  answers.length = 0;

  // Supprimer le div résultat
  const resultDiv = document.getElementById("result");
  if (resultDiv) {
    resultDiv.remove();
  }

  // Réafficher la première question, cacher les autres
  for (let i = 1; i <= totalQuestions; i++) {
    const div = document.getElementById("q" + i);
    if (div) {
      div.style.display = (i === 1) ? "block" : "none";

      // Réinitialiser les choix radio
      const radios = div.querySelectorAll('input[type="radio"]');
      radios.forEach(radio => radio.checked = false);
    }
  }

  // Remettre le bouton à "Next"
  const btn = document.querySelector("button");
  btn.textContent = "Next Question";
  btn.onclick = next;
}
