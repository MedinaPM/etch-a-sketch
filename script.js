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

  squares.forEach(square => square.addEventListener('mouseover', function(e) {
    if (square.classList.length <= 11) {
      e.target.classList.add(square.classList.length)
    };
    square.style.backgroundColor = getColor(
      square.style.backgroundColor, square.classList[(square.classList.length - 1)]
    )
  }));
}

//color picking based on iteration
function getColor(fill, iter) {
  if (iter == 1) {
    return randomRGB();
  } else if (iter >= 11) {
    return `rgb(0, 0, 0)`;
  } else {
    return shade(fill, iter);
  }
}
//
function randomRGB() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}
//shade 10% if square has a color
function shade(fill, iter) {
  let array = fill.replace(/[^0-9,]/g, '').split(',');
  let n = (iter - 1) / 10;
  let red = (array[0] / (1.1 - n)) * (1 - n);
  let green = (array[1] / (1.1 - n)) * (1 - n);
  let blue = (array[2] / (1.1 - n)) * (1 - n);

  return `rgb(${red}, ${green}, ${blue})`;
}