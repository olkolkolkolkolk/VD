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
  const counts = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0 };
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
      message = "Vous êtes une personne rêveuse et romantique. Du style à chercher l’amour avec un grand A, un amour fort et surtout solide, un amour qui dure. Vous voulez grandir avec votre moitié, vieillir avec elle et finir votre vie tranquillement, chaussons aux pieds, main dans la main avec votre partenaire. Mais cette envie, cet espoir d’une histoire pareille, est ternie par un sentiment de décalage : l’amour intemporel, c’est beau mais également dur à trouver. <br> Alors pourquoi ne pas tenter L'Étrange Histoire de Benjamin Button ? L’histoire improbable, touchante et tragique d’un homme qui naquit à 80 ans et vécu sa vie à l’envers." ;
      break;
    case "B":
      message = "L’amour, un grand mot et bien peu d’explications. C’est un but, un sentiment que vous chassez, l’occasion pour vous de sortir d’une solitude qui vous oppresse. Mais le souci c’est que personne ne vous a jamais donné les codes : comment faire ? Pour trouver la bonne personne, pour attirer son attention, pour la garder ? Une multitude de questions, mais bien peu de réponses, vous laissant avec le sentiment d’être perdu et de ne pas comprendre comment fonctionne l’Amour" <br> "Le personnage principal de Her, Theodore, ressentait la même chose : cela a abouti à l’acquisition de Samantha, une intelligence artificielle avec laquelle Theodore, va pouvoir tromper sa solitude.";
      break;
    case "C":
      message = "Une sensation d’être différent, trop en décalage pour trouver quelqu’un qui vous ressemble et, plus important encore, qui vous comprenne. Une sensation de solitude, mêlée à une envie d’ailleurs et un romantisme timide : ça vous parle ? Car, d’après le test, cela devrait vous ressembler. » <br> « Et c’est également le cas d’Elisa, dans La forme de l’eau. Femme de ménage muette dans un laboratoire gouvernemental ultra-secret, elle vit une existence des plus solitaires. Jusqu’à la capture d’une créature étrange, un humanoide amphibien, avec qui elle établit le contact et auquel elle va s’attacher de plus en plus.";
      break;
    case "D":
      message = "Les rencontres classiques, bien peu pour vous : vous aimez les histoires drôles, improbables, rencontrer des personnes très différentes de vous et découvrir de nouvelles choses. Cela n’empêche pas une certaine timidité mais, et nous sommes d’accord sur ce point, l’amour manquerait cruellement de piquant sans un peu de maladresse. <br> Et la maladresse, c’est quelque chose que connait Sacha, une vampire qui se refuse à tuer des humains dans Vampire humaniste cherche suicidaire consentant. Suite à un ultimatum de ses parents, qui veulent quelle apprenne à chasser elle-même, elle fera la rencontre de Paul, un adolescent suicidaire, qui veut bien rendre service à Sacha en se sacrifiant." ;
      break;
    case "E":
      message = "Un cas classique de serial lover : vous avez un cœur gros, immense, peut-être même « trop » grand, diraient certains. Vous aimez vite, fort, passionnément, sans prendre de pincettes. Le coup de foudre, vous l’avez expérimenté, et plus d’une fois : vous vous projetez vite, vous vous retrouvez rapidement à rêver d’un futur à deux et vous n’hésitez pas à l’exprimer. Cela a parfois conduit à quelques déconvenues amoureuses, aussi douloureuses que votre amour était fort, mais comme diraient vos proches, « vous n’avez jamais retenu la leçon » et ne perdez pas votre foi en le Grand Amour.  <br> C’est également le cas de Tom dans 500jours ensemble : un romantique désespéré, et son histoire d’amour de 500jours avec Summer. ";
      break;
    case "F":
      message = "Dur dur de comprendre l’amour, et encore plus de le partager. Des moments passionnés, explosifs, suivis par des phases de latence et de gêne. Une danse hésitante, un pas en avant, deux pas en arrière, sans qu’on ne sache véritablement à quoi elle va aboutir. En espérant que l’issue soit un duo, et pas une tragédie. <br> Cette valse hésitante, le film Le secret de Brokeback Mountain l’explore à travers la relation d’Ennis et de Jack, deux bergers dont l’idylle se verra empêchée par les mœurs de l’époque, une peur de s’engager et bien d’autres obstacles. ";
      break;
    case "G":
      message = "Les histoires ennuyeuses, très peu pour vous. Votre vie de couple doit être pimentée, que dis-je, explosive ! Vous avez besoin de rire, d’enchainer les situations improbables avec votre moitié, d’avoir un million d’anecdotes à raconter et bien plus d’aventures futures à partager. <br> Alors, pourquoi ne pas vous divertir en regardant Mr et Mme Smith ? La vie de couple de deux tueurs à gage travaillant pour des entreprises différentes et dissimulant leur profession à leur moitié. ";
      break;
    case "H":
      message = "Ce n’est pas vraiment le moment de vous parler d’amour, hein ? Vous êtes plutôt désabusé à ce sujet, trop de déceptions, vous n’avez plus la patience pour ces bêtises. <br> Alors que diriez vous d’un bon condensé de manipulations, de faux-semblants, d’amour vache et de retour de karma ? Rassurez vous avec Gone Girl, nulle mièvrerie ne vous fera lever les yeux au ciel, le déroulé sera même plutôt cathartique. ";
      break;
    case "I":
      message = "Le romantique de service, le timide tout gêné et maladroit, c’était vous il y a encore peu, n’est-ce pas ? Depuis vous avez grandi, appris à vous maitriser, mais vous gardez ce don de vous retrouver dans des situations rocambolesques, bon gré mal gré, dès que l’amour est impliqué. <br>  C’est également le cas de Ted dans Mary à tout prix : tombé amoureux de Mary lorsqu’ils étaient au lycée,   il n’a jamais pu lui déclarer sa flamme, et ne s’en est jamais remis. Alors, 13 ans plus tard, il décide d’engager un détective privé pour la retrouver et enfin lui déclarer sa flamme. Un plan mis à mal par le fait que le détective tombe lui aussi amoureux de Mary… et que d’autres admirateurs s’en mêlent. ";
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
  resultDiv.innerHTML = `<h2>Aoutch ! Au final, la question ne se pose pas : vous venez de recevoir un message. Elle n’a pas été séduite et vous envoie un message exprimant son désintérêt. Heureusement, grâce à votre superbe équipe de bibliothécaires, vous ne passerez pas votre soirée seule : un super DVD vous tiendra compagnie ! Curieux de connaître votre match ? Cliquez ici ! </h2>`;

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
