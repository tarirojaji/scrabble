import { cellPos, specialObj, cellPos02 } from './modules/cellPos.js';
import { letters, ltrArr, ltrsRemaining } from './modules/letters.js';
import { drag } from './modules/drag.js';
import { clickAttacher ,startClick, shuffleClick, shuffleBoard, setClick } from './modules/clicks.js'


const board = document.querySelector('#board'); // currently not in use
const cellWrap = document.querySelector('.cell-wrap');
const slotWrap = document.querySelector('.slot-wrap');
const size = 15;
const numTiles = 7;


// const ltr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ltrs = Object.keys(letters) //replace with Array of letters with n  each


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

// DRAG AND DROD
drag();

// CLICK FUNCTIONS:
startClick();
setClick();
shuffleClick();
clickAttacher('.cell', 'active');
clickAttacher('.tiles', 'active');
shuffleBoard();




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
