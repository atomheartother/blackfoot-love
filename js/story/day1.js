/* global monogatari */

const Day1 = {
  Day1: [
    'show scene class with fadeIn 1000',
    'play music raindrops',
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
    'nico Tout le monde, {{player.name}} nous rejoint en milieu d\'année, j\'éspère que vous serez suffisamment chaleureux et accueillants, arriver dans une nouvelle école n\'est pas toujours facile!',
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
          onRevert() {
            monogatari.storage().affinity.max -= 1;
          },
        },
        Colorieur: {
          Text: "J'étais à e-artsoap, où j'étudiais le coloriage.",
          Do: 'jump Colorieur',
          onChosen() {
            monogatari.storage().affinity.kevin += 1;
            monogatari.storage().school = 2;
          },
          onRevert() {
            monogatari.storage().affinity.kevin -= 1;
          },
        },
        Rebel: {
          Text: "J'allais pas beaucoup en cours, j'ai oublié...",
          Do: 'jump Rebel',
          onChosen() {
            monogatari.storage().affinity.pm += 1;
            monogatari.storage().school = 3;
          },
          onRevert() {
            monogatari.storage().affinity.pm -= 1;
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
    "Des murmures traversent la classe après ma réponse embarassée. J'entends quelques chuchotements dans le brouhaha...",
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
    },
  ],
  Day1KevinPraise: [
    'show character kevin shy with fadeIn',
    'kevin Wow, {{player.name}}, je ne savais pas que tu étais colorieur! Je suis président du club de coloriage!',
    'hide character kevin with fadeOut',
    'Je souris timidement et me retourne vers mon cahier. Alors que le cours commence, le sourire de Kevin reste dans ma tête...',
    'jump Day1EndofMorning',
  ],
  Day1KevinNormal: [
    'show character kevin default with fadeIn',
    "kevin Ça s'est bien passé! Bienvenue dans la classe, {{player.name}}!",
    'hide character kevin with fadeOut',
    'Je souris timidement et me retourne vers mon cahier. Alors que le cours commence, je souris intérieurement.',
    'jump Day1EndofMorning',
  ],
  Day1EndofMorning: [
    'On dirait que je me suis déjà fait un ami!',
    'show scene black with fadeIn duration 1s',
    'play sound bell',
    'wait 500',
    'show scene class with fadeIn duration 1s',
    'Je ne suis vraiment pas fortiche en Maths, et le niveau à Blackfoot Academy est plus élevé que je pensais...\nAlors que la cloche sonne pour indiquer la fin du cours, je réalise que je vais devoir travailler fort pour garder le niveau!',
    'kevin {{player.name}}!',
    'show character kevin default with fadeIn',
    'Je me retourne pour voir Kevin qui me sourit - il a déjà rangé ses affaires dans son sac et se lève.',
    'show character pm default at right with fadeIn',
    "Me retournant pour parler à Kevin, je vois que l'étudiant à skateboard s'est levé de son bureau en vitesse, et s'apprète à s'eclipser par la porte de derrière.",
    "Le suivant du coin de l'oeil, je vois qu'il sort un paquet de cigarettes de sa veste en douce.",
    'show character pm shy at right',
    "Alors que je le fixe du regard, l'étudiant se tourne vers moi et me fait un clin d'oeil... Puis sort de la classe discrètement!!",
    'show character pm default at right',
    'wait 200',
    'hide character pm with fadeOut',
    'kevin Alors, {{player.name}}?',
    "Oups, Kevin essaie de me parler, je ne l'écoutais pas du tout!",
    'p Euh, pardon, quoi?',
    "kevin Pfff... Je te demandais si tu voulais que je te fasse faire un tour de l'école avant le déjeuner?",
    {
      Choice: {
        NotPM: {
          Text: "Visiter l'école avec Kevin.",
          Do: "J'accepte l'offre de Kevin et nous sortons de la salle en discutant",
        },
        PM: {
          Text: "<strike>Refuser l'offre de Kevin et suivre l'étudiant au skateboard</strike> (<b>TODO</b>)",
          Do: "<i>Ce choix n'est pas disponible pour la démo!</i>",
          onChosen() {
            monogatari.storage().affinity.pm += 1;
          },
          onRevert() {
            monogatari.storage().affinity.pm -= 1;
          },
        },
      },
    },
    'hide character kevin with fadeOut',
    'stop music with fade 0.5',
    'show scene hall1 with fadeIn',
    "Je suis Kevin à travers les couloirs alors qu'il me montre le premier étage de Blackfoot Academy.",
    'play music daylight',
    "La salle des profs, les différentes salles de réunion... Kevin me dit quelques mots sur chaque salle, je suis chanceux de l'avoir rencontré!",
    "Une fois notre tour terminé, alors que nous nous approchons de la caféteria, un des haut-parleurs de l'école grésille et une voix grave en sort.",
    'unknwn <b>{{player.name}}, veuillez vous présenter au bureau du conseil des étudiants! {{player.name}}, merci.</b>',
    'p Ah!',
    'show character kevin default with fadeIn',
    'kevin Tiens, {{player.name}}, tu sais ce que te veux le conseil des étudiants?',
    "p Euh, oui, je crois que je n'ai pas encore finalisé mon inscription, un truc dans ce genre là?",
    'kevin Ah ben oui, ils doivent prendre ta photo et tout! Vas-donc les voir, je vais déjeuner, rejoins-moi après si tu veux!',
    'hide character kevin with fadeOut',
    "Et sur ce, il s'éclipse vers la caféteria.",
    "Grâce à Kevin, j'ai maintenant une bonne idée d'où sont les différentes salles et, même si ça me prend un moment, je finis par trouver le bureau du conseil des étudiants...",
    'show scene studentCouncil with fadeIn',
    '... Complètement vide!',
    "p B-bonjour? Il y a quelqu'un?",
    "Un peu nerveux, je m'avance dans le bureau. L'ambiance ici est bizarrement oppressante...",
    "p Je suis {{player.name}}, vous m'avez appelé, un peu plus tôt...",
    'p Ah!',
    'La porte claque derrière moi et je me retourne pour voir...',
    'show character leslie default',
    'p Aaah!',
    'Devant moi se trouve un grand délinquant qui parle avec une voix tonitruante.',
    "unknwn T'es là pour la photo, c'est ça?",
    "p Ah, euh, oui... Désolé, j'ai pas d'argent à vous donner...",
    'Je me résigne à me faire racketer pour ma photo.',
    "unknwn Hein? Quoi? Mais non, c'est gratuit.",
    "leslie Moi c'est Léo, mais tout le monde m'appelle Leslie.",
    "J'ai toujours un peu peur, mals Léo ne semble pas aussi dangereux qu'au premier abord.",
    'p Et vous êtes... Un professeur qui surveille le bureau des éudiants?',
    "Leslie éclate de rire et me tape dans le dos - m'envoyant valser dans une étagère.",
    'leslie Ha ha ha! Non, je suis une étudiante, comme toi! Et ta chef de classe!',
    "Tiens, c'est vrai, maintenant que j'y pense j'avais déjà vu sa tête en me présentant.",
    'hide character leslie with fadeOut',
    "Je m'excuse profusément alors que Leslie me demande de prendre des poses étranges pour ma photo.",
    'p Euh, on peut pas juste prendre une photo norm-',
    'leslie NON!',
    'p Aaah!',
    "La session de photo dure quelques minutes, quand elle se termine je remercie Leslie et m'éclipse.\nFinalement, elle n'est pas si mal...",
    'show scene hall1 with fadeIn',
    "p Hmm, il reste 30 minutes avant la fin de la pause déjeuner, j'ai encore un peu de temps...",
    'Alors que je flâne dans les couloirs de ma nouvelle école, une pensée me vient: quand serais-je habitué à Blackfoot Academy?',
    '"Tout est si étrange ici...", me dis-je en passant à côté de quelques étudiants qui ont réquisitionné une salle de classe et... y jouent à la console.',
    "Je tourne la tête pour les regarder en marchant, mais c'est dur de voir à quel jeu ils jouent avec toute cette fumée...",
    'Attends, fumée?!',
    'Je me retourne juste à temps pour voir un étudiant marchant le nez dans un bouquin, une cigarette électronique au bec, et qui me fonce droit dessus!',
    'p W-woow!!',
    "Je trébuche à moitié en essayant de l'éviter, décidément aujourd'hui! Je m'apprête à tomber, ferme les yeux et me prépare à l'impact...",
    'show scene black',
    'Mais rien ne vient.',
    'Non seulement ça, mais je sens une main sur mon dos qui me soutient!',
    'p Huh?',
    'show scene hall1 with fadeIn',
    'show character max default',
    "J'ouvre les yeux pour voir que l'étudiant m'a rattrapé, toujours les yeux plongés dans son bouquin.\nJe rougis un peu alors que je me redresse et que sa main quitte mon dos.",
    'p Um, merci beau-',
    'unknwn Attention.',
    'hide character max with fadeOut',
    'Toujours sans me regarder, il continue de marcher dans sa direction originale.',
    "Bouche-bée, je réalise qu'il a dû me rattraper à une main parce qu'il tenait son vape dans l'autre.",
    {
      Choice: {
        Dialog: 'Je devrais sûrement le remercier, mais il ne semblait pas très intéressé.',
        NotPM: {
          Text: 'Aller manger',
          Do: "Je secoue la tête et décide d'aller manger. Bizarre, tout de même...",
        },
        Max: {
          Text: "<strike>Suivre l'étudiant mystérieux pour le remercier</b> (<b>TODO</b>)",
          Do: "<i>Ce choix n'est pas disponible pour la démo!</i>",
          onChosen() {
            monogatari.storage().affinity.max += 1;
          },
          onRevert() {
            monogatari.storage().affinity.max -= 1;
          },
        },
      },
    },
    'show scene cafet with fadeIn',
    'Je rejoins rapidement la caféteria et y trouve Kevin assis à une table avec quelques étudiants.',
    "J'hésite à m'approcher d'eux mais il me fait rapidement signe de la main vers une place libre à côté de lui.",
    'show character kevin default with fadeIn',
    "Je salue les autres étudiants et m'installe, tout le monde a quasiment fini de manger - y compris Kevin - mais alors que tout le monde se lève pour partir, lui reste et discute avec moi.",
    "Je lui parle de Leslie, puis de l'étudiant étrange à cigarette électronique, et il rit.",
    "kevin Ah, c'était sûrement Max, t'inquiètes pas il est souvent comme ça quand il est concentré.",
    'p Ah, tu le connais?',
    'kevin ...',
    'Kevin hésite puis me fait un sourire en coin.',
    'show character kevin shy',
    "kevin On peut dire ça, oui... On... S'entend bien en tout cas, hehe.",
    'Huh... Je ne sais pas que faire de cette expression pensive sur le visage de Kevin..',
    'show character kevin default with fadeIn',
    "Est-ce que Max serait son petit ami? Alors que je m'apprête à en demander plus, Kevin change d'expression et se tourne vers moi",
  ],
};
