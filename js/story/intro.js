const Intro = [
  "Ça y est, c'est mon premier jour dans ma nouvelle école... Et je suis paralysé devant la barrière.",
  'play music smooth',
  'show scene schoolEntrance with fadeIn',
  "L'année a commencé depuis plus d'un mois, donc tout le monde se connait déjà… Comment vais-je faire pour m’y retrouver ? Est-ce que les gens vont se moquer de moi ? Je n’étais déjà pas très populaire dans mon ancienne école...",
  'Blackfoot Academy... On m’a dit que cette école était bizarre.',
  'Je me demande ce que qui m’attend derrière cette barrière. Une nouvelle vie, de nouveaux amis ?',
  'Peut-être même... L’amour ?',
  'unknwn Wooooow !',
  'show scene black',
  'play sound slap',
  'Quelque chose me rentre dedans à pleine force, et je tombe par terre. Aie!',
  'unknwn Oh non, zut! Tu vas bien? Désolé, je t’avais pas vu!',
  'show scene schoolEntrance with fadeIn',
  'wait 1000',
  'J’attrape la main tendue et me relève. J’ai un peu mal aux fesses. Devant moi se tient un garçon de mon âge avec les cheveux frisés et une petite barbe.',
  'show character kevin default with fadeIn',
  'unknwn Hey... je t’ai jamais vu ici, tu t’appelles comment ?',
  {
    Input: {
      Text: "Je m'appelle...",
      Validation(input) {
        return input.trim().length > 0;
      },
      Save(input) {
        this.storage({
          player: {
            name: input,
          },
        });
        return true;
      },
      Revert() {
        this.storage({
          player: {
            name: '',
          },
        });
      },
      Warning: 'Entrez un nom!',
    },
  },
  'p {{player.name}}... Je m’appelle {{player.name}}. Tu pourrais faire attention à où tu vas quand même!',
  'unknwn Héhé… Désolé, j’avais vraiment peur d’arriver en retard...',
  "Il me sourit timidement. Il a effectivement l'air d'être le genre à être en retard! Enfin bon, je n'ai rien de cassé au moins...",
  'kevin Moi c’est Kevin, tu es nouveau à Blackfoot Academy, {{player.name}} ?',
  'p Oui, c’est mon premier jour… Je ne sais pas trop où aller d’ailleurs, je dois aller dans la classe 3-2, tu sais où c’est?',
  'show character kevin surprised',
  'kevin La classe 3-2? Mais c’est ma cl-',
  'play sound bell',
  '...',
  'kevin Oh non, on va être en retard, viens!',
  'hide character kevin with fadeOut',
  "Il me prend par la main et se met à courir vers l'école avant que j’aie le temps de comprendre ce qui m’arrive - ou de rougir!",
  'Effectivement, Blackfoot Academy semble être une école bien étrange… J’ai hâte d’y vivre de belles aventures!',
  'clear',
  'stop sound',
  'stop music with fade 1',
  'show scene black with fadeIn duration 1s',
  // 'show video intro immersive with controls close',
  'jump Day1',
];
