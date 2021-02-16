const square = document.querySelectorAll('.square');
const ghost = document.querySelectorAll('.ghost');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;
let currentTime = timeLeft.textContent;

const randomSquare = () => {
  square.forEach(className => {
    className.classList.remove('ghost')
  });
  let randomPosition = square[Math.floor(Math.random() * 9)];
  randomPosition.classList.add('ghost');

  hitPosition = randomPosition.id;
}

square.forEach(id => {
  id.addEventListener('click', () => {
    if (id.id === hitPosition) {
      result = result + 1;
      score.textContent = result;
      hitPosition = null;
    }
  })
});

const moveGhost = () => {
  let timerId = null;
  timerId = setInterval(randomSquare, 500);
}

moveGhost();

const countDown = () => {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime === 0) {
    clearInterval(timerId);
    alert('GAME OVER! Your final score is ' + result);
  }
}

let timerId = setInterval(countDown, 1000);
