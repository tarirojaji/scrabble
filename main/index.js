import { cellPos, specialObj, cellPos02 } from './modules/cellPos.js';
import { letters, ltrArr, ltrsRemaining } from './modules/letters.js';
// import { dragStartHandler } from './modules/drag.js';


const board = document.querySelector('#board'); // currently not in use
const cellWrap = document.querySelector('.cell-wrap');
const slotWrap = document.querySelector('.slot-wrap');
const size = 15;
const numTiles = 7;


// array of letters for testing
// const arr = ['D', 'I', 'O', 'J', 'O', 'J', 'O'];
// const ltr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ltrs = Object.keys(letters) //replace with Array of letters with n  each


//

function createBoard() {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const div = document.createElement('div');
      div.classList.add('cell', 'dropzone');
      div.id = `${i}${j}`;
      cellWrap.appendChild(div);
      cellWrap.style.gridTemplateColumns = `repeat(${size}, auto)`;

    }
  }

  function specialCells() {
    const cell = document.querySelectorAll('.cell');

    for (let i = 0; i < size * size; i++) {
      for (const key in specialObj) {
        if (cellPos[i] !== 0) {
          cell[i].classList.add('special');
        } if (cellPos[i] == key) {
          cell[i].style.backgroundColor = specialObj[key].color;
          // cell[i].textContent = specialObj[key].name;
          cell[i].classList.add(specialObj[key].name);

          // console.log(`i: ${i}, key: ${key},
          // board name: ${cellPos[i]}, ${specialObj[key].name}`);
        }
      }
    }

    // for (let i = 0; i < size * size; i++) {
    //   if(cellPos[i] !== 0) {
    //   cell[i].textContent = cellPos[i]
    //   cell[i].textContent
    //   }
    // }

  }

  specialCells();


  // function slots() {
  //   for (let i = 0; i < 7; i++) {
  //     const slot = document.createElement('div');
  //     slot.classList.add('slot');
  //     slot.id = `cl${i + size * size}`;
  //     slotWrap.appendChild(slot);
  //     slot.setAttribute('draggable', true);
  //     const randomLtr = ltr[Math.floor(Math.random() * ltr.length)];
  //     slot.textContent = randomLtr;
  //     // slotWrap.style.gridTemplateColumns = `repeat(${size}, auto)`
  //   }
  // }

  // slots();


  function slots() {
    // let rack = []
    for (let i = 0; i < numTiles; i++) {
      const slot = document.createElement('div');
      const tiles = document.createElement('div');

      slot.classList.add('slot', 'dropzone');
      tiles.classList.add('tiles')
      tiles.id = `cl${i + size * size}`;

      slotWrap.appendChild(slot);
      slot.appendChild(tiles)
      tiles.setAttribute('draggable', true);

      // const randomLtr = ltrs[Math.floor(Math.random() * ltrs.length)].toUpperCase();
      const randomLtr = ltrArr[Math.floor(Math.random() * ltrArr.length)].toUpperCase();
      tiles.textContent = randomLtr;

      // for (const r of rack) {
      //   tiles.textContent = r;
      // }

    }
  }

  slots();
}

// INIT FUNCTIONS
createBoard();
ltrsRemaining();



function clickAttacher(selector, cn) {
  const elem = document.querySelectorAll(selector);
  for (const e of elem) {
    e.addEventListener('click', () => {
      e.classList.toggle(cn);
      console.log('clicked');
    });
  }
}

clickAttacher('.cell', 'active');
clickAttacher('.slot', 'active');


// improve this function??? improve all the funcs lololol
function startClick() {
  const btnStart = document.querySelector('.btnStart');
  const tiles = document.querySelectorAll('.tiles');

  for (const t of tiles) {
    btnStart.addEventListener('click', () => {
      btnStart.textContent = 'SET';
      t.style.visibility = 'visible';
      console.log('clicked');
    });
  }


    // btnStart.addEventListener('click', () => {
    //   btnStart.textContent = 'SET';
    //   slotWrap.style.visibility = 'visible';
    //   console.log('clicked');
    // });

}

startClick();


function shuffleClick() {
  const btnShuffle = document.querySelector('#btnShuffle');
  const tiles = document.querySelectorAll('.tiles');

  btnShuffle.addEventListener('click', () => {
    for (const t of tiles) {
      if (t.parentElement.classList.contains('slot')) {
        const randomLtr = ltrs[Math.floor(Math.random() * ltrs.length)].toUpperCase();
        t.textContent = randomLtr;
        console.log('clicked')
      }
      }
    });


  // btnShuffle.addEventListener('click', () => {
  //   for (const s of slot) {
  //     for (let i = arr.length - 1; i > 0; i--) {
  //       const j = Math.floor(Math.random() * (i + 1));
  //       [arr[i], arr[j]] = [arr[j], arr[i]];
  //       s.textContent = arr[i]
  //       console.log('clicked')
  //     }
  //   }
  // });

  // for (const s of slot) {
  //   btnShuffle.addEventListener('click', () => {
  //     for (let i = array.length - 1; i > 0; i--) {
  //       const j = Math.floor(Math.random() * (i + 1));
  //       [array[i], array[j]] = [array[j], array[i]];
  //       s.textContent = arr[i]
  //   }
  //   });
  // }

}

shuffleClick();





function shuffleBoard() {
  const shuffleBoard = document.querySelector('#shuffleBoard');
  const cell = document.querySelectorAll('.cell');



  shuffleBoard.addEventListener('click', () => {

    // First clear the baord
    for (const c of cell) {
      c.classList.remove('special')
      c.style.backgroundColor = '';
    }

    for (let i = 0; i < 15 * 15; i++) {
      // randomize cell coordinates
      const shuffled = cellPos.sort(() => Math.random() - 0.5)

      for (const key in specialObj) {
        if (shuffled[i] !== 0) {
          cell[i].classList.add('special');
        } if (shuffled[i] == key) {
          cell[i].style.backgroundColor = specialObj[key].color;
          // cell[i].textContent = specialObj[key].name;
          cell[i].classList.add(specialObj[key].name);

        }
      }
    }

    });

  // shuffleBoard.addEventListener('click', () => testran());
  // function testran() {
  //   for (let i = 0; i < 15 * 15; i++) {
  //     for (const key in specialObj) {
  //       if (shuffled[i] !== 0) {
  //         cell[i].classList.add('special');
  //       } if (shuffled[i] == key) {
  //         cell[i].style.backgroundColor = specialObj[key].color;
  //         cell[i].textContent = specialObj[key].name;
  //         cell[i].classList.add(specialObj[key].name);
  //       }
  //     }
  //   }
  // }







    // button.addEventListener("click", () => generateRandomPicture(imageArray));

    // function generateRandomPicture(array){
    //   let randomNum = Math.floor(Math.random() * array.length); 
    //   image.setAttribute("src", array[randomNum]);}






}

shuffleBoard();



function dragStartHandler(e) {
  const data = e.target.id;
  e.dataTransfer.setData('text/plain', data);
}

function dragOverHandler(e) {
  e.preventDefault();
}

function dropHandler(e) {
  const data = e.dataTransfer.getData('text/plain');
  const dragged = document.getElementById(data);



  if (!e.currentTarget.hasChildNodes()) {
    e.currentTarget.append(dragged);
    dragged.style.position = 'absolute';
    // dragged.style.opacity = `${80}%`;
  }



}

const dropzones = document.querySelectorAll('.dropzone');
for (const dropzone of dropzones) {
  dropzone.addEventListener('dragover', dragOverHandler);
  dropzone.addEventListener('drop', dropHandler);
}

const divs = document.querySelectorAll('div');
for (const div of divs) {
  div.addEventListener('dragstart', dragStartHandler);
}














// NOTES:
// export/import drag function/s
//stop special cells text being pushed out after drap/drop DONE
//fix cell-wrapper from vanishing after drag and drop DONE
//have a look at z-index for positioning DONE
//fix hasChildNodes for speciel cells, how to drop only once DONE
// clear board after every shuffleboard click DONE

//edit cell ids / adjust dropzone to cell-wrapper only..if possible
//fix drag & drop for special cells with childNode, textcontent
// fix > if tile on board, do NOT shuffle
// remove item from bag if in rack or board
