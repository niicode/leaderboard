import './index.css';
import Services from './modules/Service.js';

const form = document.querySelector('.form');
const report = document.querySelector('.report');
const refresh = document.querySelector('.refresh');
const listUl = document.querySelector('.list');

const service = new Services();

const renderScores = () => {
  const scores = service.getGameScores();
  scores.then((data) => {
    const list = data.result.sort((a, b) => b.score - a.score);
    const listHTML = list.map((item) => `<li>⚽ ${item.user.toUpperCase()}: ${item.score}</li>`).join('');
    listUl.innerHTML = listHTML;
    listUl.childNodes.forEach((item, index) => {
      if (index % 2 === 1) {
        item.classList.add('even');
      }
    });
  });
  listUl.innerHTML = '<li>Loading...</li>';
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = e.target.querySelector('#name').value;
  const score = e.target.querySelector('#score').value;
  service.addGameScore(name, score).then((data) => {
    if (data.result === 'Leaderboard score created correctly.') {
      report.innerHTML = 'Great you added successfully';
      report.style.padding = '1rem';
      setTimeout(() => {
        report.innerHTML = '';
        report.style.padding = '0';
      }, 3000);
      form.reset();
    } else {
      report.innerHTML = 'Process failed try again';
    }
  });
});

refresh.addEventListener('click', renderScores);
exports.renderScores = renderScores;
