const scoresUL = document.querySelector('#scores');
const playerName = document.querySelector('#playerName');
const playerScore = document.querySelector('#playerScore');
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/d8Z0U9F6AcA5mlS8sMJJ/scores/';


export const getAllScores = async() => {
  const res = await fetch(url);
  const result = await res.json();
  let scoreHTML=``;
  result.result.forEach(element => {
    scoreHTML += `
    <li class="score">
      <div>${element.user}</div> : <div>${element.score}</div>
    </li>
    `
  });
  scoresUL.innerHTML = scoreHTML;  
}

export const addNewScore = async() => {
  if(playerName.value.trim() !== '' && playerScore.value !== ''){
    let data = {user:playerName.value.trim(), score: playerScore.value};

    const res = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(data)
    });
  }
  const formEl = document.querySelector('#formEl');
  formEl.reset()
}