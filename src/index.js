import './style.css';
import { addNewScore, getAllScores } from './modules/updateScores.js';

const refreshButton = document.querySelector('#refresh');
const addButton = document.querySelector('#addButton');

getAllScores();

addButton.addEventListener('click', () => {
  addNewScore();
});

refreshButton.addEventListener('click', () => {
  getAllScores();
});