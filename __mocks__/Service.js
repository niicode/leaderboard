const scores = [
  {
    user: 'jose',
    score: 10,
  },
  {
    user: 'nike',
    score: 5,
  },
  {
    user: 'doe',
    score: 20,
  },
];

export default class Services {
  getGameScore = () => new Promise((resolve) => {
    resolve(scores);
  }).then((data) => data);

  addGameScore = (name, score) => new Promise((resolve) => {
    const newScore = {
      user: name,
      score,
    };
    scores.push(newScore);
    resolve(newScore);
  });
}