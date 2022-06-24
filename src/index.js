import './style.css'; 
import { addNewScore, getAllScores } from './modules/updateScores';

const refreshButton = document.querySelector('#refresh');
const addButton = document.querySelector('#addButton');

getAllScores();

addButton.addEventListener('click', (e) => {
  addNewScore(); 
})

refreshButton.addEventListener('click', (e) => {
  getAllScores(); 
})