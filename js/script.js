/* global monogatari */
/* global characters */
/* global Intro */
/* global Day1 */

// Define the messages used in the game.
monogatari.action('message').messages({
  Help: {
    title: 'Help',
    subtitle: 'Some useful Links',
    body: '<p><a href=\'https://developers.monogatari.io/documentation/\'>Documentation</a> - Everything you need to know.</p><p><a href=\'https://monogatari.io/demo/\'>Demo</a> - A simple Demo.</p>',
  },
});

// Define the notifications used in the game
monogatari.action('notification').notifications({
});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration('credits', {

});

// Define the Particles JS Configurations used in the game
monogatari.action('particles').particles({

});

// Define the images that will be available on your game's image gallery
monogatari.assets('gallery', {

});

// Define the music used in the game.
monogatari.assets('music', {
  smooth: 'smooth.mp3',
});

// Define the voice files used in the game.
monogatari.assets('voices', {

});

// Define the sounds used in the game.
monogatari.assets('sounds', {
  bell: 'school_bell.mp3',
  slap: 'slap.mp3',
});

// Define the videos used in the game.
monogatari.assets('videos', {
  intro: 'generic.mp4',
});

// Define the images used in the game.
monogatari.assets('images', {

});

// Define the backgrounds for each scene.
monogatari.assets('scenes', {
  schoolEntrance: 'schoolEntrance.png',
  class: 'class.jpg',
  hall1: 'hall1.jpg',
  studentCouncil: 'studentcouncil.jpg',
});


// Define the Characters
monogatari.characters({
  p: {
    Name: '{{player.name}}',
    color: '#ee2222',
  },
  kevin: {
    Name: 'Kevin',
    color: 'purple',
    directory: 'Kevin',

    Images: {
      default: 'default.png',
      surprised: 'surprised.png',
      shy: 'shy.png',
    },
  },
  leslie: {
    Name: 'Leslie',
    color: 'blue',
    directory: 'Leslie',
    Images: {
      default: 'default.png',
    },
  },
  max: {
    Name: 'Maxime',
    directory: 'Maxime',
    color: 'black',
    Images: { default: 'default.png' },
  },
  nico: {
    Name: 'Nicolas-sensei',
    directory: 'Nicolas',
    color: 'green',
    Images: { default: 'default.png' },
  },
  unknwn: {
    Name: '???',
    color: 'lightgrey',
  },
});

monogatari.script({
  // Put chapters here
  Intro,
  ...Day1,
  // The game starts here.
  Start: [
    'jump Day1',
  ],
});
