/* global monogatari */

const Day1 = {
  Day1: [
    'show scene class with fadeIn',
    "Courant juste après Kevin, j'arrive dans la salle de classe essoufflé... Tout le monde est déjà assis et nous regarde!",
    'show character kevin default at center with fadeIn',
    "kevin Ouf! On dirait que Nicolas-sensei n'est pas encore là!",
    'show character nico default at right with fadeIn',
    'nico ...',
    'nico Bonjour à tous.',
    'show character kevin surprised',
    'kevin Wah! Nicolas-sensei!',
    'hide character kevin with fadeOut',
    'Kevin s\'enfuit vite vers une place libre dans la classe, et je me retrouve face au professeur.',
    'show character nico default at center with move',
    'nico Tu es {{player.name}}, c\'est bien ça? Bienvenue dans la classe 3-2.',
    'Je ne sais pas trop que répondre donc je hoche la tête. Le professeur se tourne vers la classe.',
    'nico Tout le monde, {{player.name}} nous rejoint en milieu d\'année, j\'éspère que vous serez accueillants',
    'nico Nous travaillons toujours sur le pack d\'arrivée donc vous devrez vous débrouiller sans. {{player.name}}, veux-tu te présenter à la classe?',
    'Je sens la pression monter alors que je me présente devant tous ces visages inconnus. Depuis le milieu de la classe, Kevin me lance un sourire d\'encouragement et j\'inspire décisivement...',
    'p Um, bonjour, je m\'appelle {{player.name}}, j\'ai 16 ans, et euh...',
    'Je perds mes mots, par où commencer? Je ne sais pas vraiment me présenter...',
    'nico Tu transfères ici depuis une autre école, non? Où étudiais-tu avant?',
    {
      Choice: {
        Dialog: "Tiens, c'est vrai, merci Nicolas-sensei! Avant de venir à Blackfoot Academy...",
        Developer: {
          Text: "J'étudiais à Epitoc, un lycée spécialisé dans la technologie!",
          Do: 'jump Developer',
          onChosen() {
            monogatari.storage().affinity.max += 1;
            monogatari.storage().school = 1;
          },
        },
        Colorieur: {
          Text: "J'étais à e-artsoap, où j'étudiais le coloriage.",
          Do: 'jump Colorieur',
          onChosen() {
            monogatari.storage().affinity.kevin += 1;
            monogatari.storage().school = 2;
          },
        },
        Rebel: {
          Text: "J'allais pas beaucoup en cours, j'ai oublié...",
          Do: 'jump Rebel',
          onChosen() {
            monogatari.storage().affinity.pm += 1;
            monogatari.storage().school = 3;
          },
        },
      },
    },
  ],
  Developer: [
    "p J'étais à Epitoc, un lycée spécialisé dans la technologie!",
    'Quelques têtes se tournent vers un étudiant avec une cigarette électronique sur son bureau, qui ne me regarde qu\'à moitié. J\'entends quelques chuchotements...',
    'unknwn Wow, Epitoc!',
    "unknwn Qu'est-ce que c'est sexy!",
    'unknwn Les étudiants Epitoc sont vraiment les plus beaux et les plus forts!',
    'jump PostSchool',
  ],
  Colorieur: [
    "p J'étais à e-artsoap, une super école pour les étudiants créatifs... J'adore colorier!",
    "Ouch, est-ce que j'ai été un peu trop enthousiaste? Mais quelques étudiants sourient, donc finalement c'est peut-être pas si mal... J'entends quelques uns des étudiants parler à voix basse...",
    "unknwn Un colorieur? C'est des vraies études ça?",
    'unknwn Ben oui, on a même un club de coloriage!',
    "unknwn Moi on m'a dit qu'ils regardaient surtout des photos de chats toute la journée...",
    'jump PostSchool',
  ],
  Rebel: [
    "p Haha, euh, pour être honnête, j'allais si peu en cours, j'ai un peu oublié le nom de mon ancienne école...",
    "Des murmures traversent la classe après ma réponse. J'entends quelques chuchotements dans le brouhaha...",
    'unknwn Un rebelle!',
    'unknwn Cool!',
    'unknwn Ça manquait justement de désordre ici!',
    'jump PostSchool',
  ],
  PostSchool: [
    "nico Un peu de silence s'il-vous-plaît!",
    "nico Vous aurez tout le temps de parler à notre nouvelle recrue à la pause, pour l'instant, c'est cours de Maths!",
    'nico {{player.name}}, tu peux prendre la place libre près de la fenêtre.',
    'hide character nico with fadeOut',
    "Je me dirige vers la chaise désignée, suivi du regard par quasiment toute la salle... Je remarque tout de même un étudiant qui n'a pas l'air très intéressé par moi, tout au fond de la classe.",
    "Me demandans pourquoi cet étudiant particulier avait attiré mon attention, je vois qu'il semble faire du skate sous son bureau! Les deux pieds sur la planche, il la fait osciller silencieusement en regardant dehors par la fenêtre. Étrange...",
    "Arrivé à ma place, je réalise que Kevin est assis juste derrière moi! Je m'assois rapidement et, alors que le cours commence et que tout le monde sort son cahier de Maths, il me tapote sur l'épaule et me fait un signe du pouce.",
    {
      Conditional: {
        Condition() {
          return this.storage('school') === 2;
        },
        True: 'jump Day1KevinPraise',
        False: 'jump Day1KevinNormal',
      },
    }],
  Day1KevinPraise: [
    'kevin Wow, {{player.name}}, je ne savais pas que tu étais colorieur! Je suis président du club de coloriage!',
    'Je souris timidement et me retourne vers mon cahier. Alors que le cours commence, le sourire de Kevin reste dans ma tête...',
    'jump Day1EndofMorning',
  ],
  Day1KevinNormal: [
    "kevin Ça s'est bien passé! Bienvenue dans la classe, {{player.name}}!",
    'Je souris timidement et me retourne vers mon cahier. Alors que le cours commence, je souris intérieurement.',
    'jump Day1EndofMorning',
  ],
  Day1EndofMorning: [
    'On dirait que je me suis déjà fait un ami!',
    'FADE OUT & SONS ici',
    'Je ne suis vraiment pas fortiche en Maths, et le niveau à Blackfoot Academy est plus élevé que je pensais... Alors que la cloche sonne pour indiquer la fin du cours, je réalise que je vais devoir travailler fort pour garder le niveau!',
    'kevin {{player.name}}!',
    'show character kevin default with fadeIn',
    'Je me retourne pour voir Kevin qui me sourit - il a déjà rangé ses affaires dans son sac et se lève.',
    "kevin Veux-tu que je te fasse faire un tour de l'école avant le déjeuner?",
    "Alors que Kevin attend ma réponse, je remarque que l'étudiant à skateboard semble avoir quitté son bureau en vitesse pour s'eclipser par la porte de derrière.",
    {
      Choice: {
        Text: "Refuser l'offre de Kevin et suivre l'inconnu au skateboard",
        Do: 'jump Day1FollowPm',
        onChosen() {
          monogatari.storage().affinity.pm += 1;
        },
      },
      Colorieur: {
        Text: "Visiter l'école avec Kevin.",
        Do: 'jump Day1FollowKevin',
      },
    },
  ],
};
