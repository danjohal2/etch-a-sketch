

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
    
    let hover = () => {
      let squares = document.querySelectorAll('.square');
      squares.forEach(square => square.addEventListener('mouseover', ()=> {
          square.style.backgroundColor = 'black';
      }));   
      }; hover(); 
    
  
    let erase = () => {
      let squares = document.querySelectorAll('.square');
      squares.forEach(square => {
        square.style.backgroundColor = "white";
      }); 
    }; 
  
  
    const resetButton = document.querySelector('.reset');
    resetButton.addEventListener('click', erase);

  //check the console, square isnt defined when using new grid button
    const newgrid = document.querySelector('.newgrid'); //newgrid button
    newgrid.addEventListener('click', function(){
      let newnum = +prompt("Enter a number between 1 and 100");
      if (newnum >= 1 && newnum <= 100) {
        /* document.querySelector('div').removeChild(square) */;
        document.querySelector('.container').innerHTML = '';
        createGrid(newnum);
        hover();
      } else {
       prompt("Invalid entry");
      
      }
    })

	function setColors() {
    const colors = document.querySelectorAll('.square');
      colors.forEach(grid => grid.addEventListener('mouseover', function() {
        let red = Math.floor(Math.random()*255);
        let green = Math.floor(Math.random()*255);
        let blue = Math.floor(Math.random()*255);
        color = `rgb(${red}, ${green}, ${blue})`;
        grid.style.backgroundColor = color;
          /* let squares = document.querySelectorAll('.square');
          squares.forEach(square => {
            square.style.backgroundColor = color;
          }); */
      }));
  }
  
  

  
  let colorchooser = document.querySelector('.colorsOn');
  colorchooser.addEventListener('click', setColors);   

  let colorchooserdefault = document.querySelector('.colorsOff');
  colorchooserdefault.addEventListener('click', hover);

  };
  
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
 