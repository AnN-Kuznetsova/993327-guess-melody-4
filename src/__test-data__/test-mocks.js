const ERRORS_COUNT = 3;

const AVATAR_URL = `https://api.adorable.io/avatars/128`;

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
    artist: `Jim Beam`,
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  },
  answers: [{
    picture: `${AVATAR_URL}}`,
    artist: `John Snow`,
  }, {
    picture: `${AVATAR_URL}}`,
    artist: `Jack Daniels`,
  }, {
    picture: `${AVATAR_URL}}`,
    artist: `Jim Beam`,
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
