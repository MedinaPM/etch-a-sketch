//grid creation
function gridCreation() {
  let gridSize = prompt('How many squares?');

  if(gridSize > 100 || gridSize <= 0) {
    alert("pick a number between 1 and 100!");
    gridCreation();
  } else {
    for (let i = 0; i < gridSize; i++) {
      createColumn(i);
      for (let j = 0; j < gridSize; j++) {
        createSquares(i);
      }
    }
  }
  play();
}
//
function createColumn(i) {
  let container = document.querySelector('div.container');
  let content = document.createElement('div');
  content.classList.add(`column-${i}`, 'c-style');
  container.appendChild(content);
}
//
function createSquares(i) {
  let container = document.querySelector(`div.column-${i}`);
  let content = document.createElement('div');
  content.classList.add('square');
  container.appendChild(content);
}

//squares colored on mouseover
function play() {
  let squares = document.querySelectorAll("div.square");
  //
  squares.forEach(square => square.addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = 'black';
  }))
}