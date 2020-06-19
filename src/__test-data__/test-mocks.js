const ERRORS_COUNT = 3;

const questionGenre = {
  type: `genre`,
  genre: `rock`,
  answers: [{
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `rock`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `blues`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `jazz`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `rock`,
  }],
};

const questionArtist = {
  type: `artist`,
  song: {
    artist: `Third`,
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  },
  answers: [{
    picture: `pic-one`,
    artist: `First`,
  }, {
    picture: `pic-two`,
    artist: `Second`,
  }, {
    picture: `pic-three`,
    artist: `Third`,
  }],
};

const questions = [
  questionGenre,
  questionArtist,
];


export {
  ERRORS_COUNT,
  questionArtist,
  questionGenre,
  questions,
};
