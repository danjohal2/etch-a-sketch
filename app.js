let createGrid = (number = 16) => {
for(i = 0; i < number ** 2; i++) {
	const container = document.querySelector('.container');
	container.style.display = 'grid';
  container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
  const square = document.createElement('div');
  square.classList.add('square');
  container.appendChild(square);
  };
  hover();
};
   
let hover = () => {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseover', ()=> {
        square.style.backgroundColor = 'black'
    }))
}

  


  /* let squares = document.querySelectorAll('.square');
   squares.forEach(square => {
  // on mouseover
    square.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = 'rgb(0,0,0)';
  
    })
  }) 
  // this one ^ will lag if you have a large number of squares, do event bubbling/delegation instead
};

*/

createGrid();