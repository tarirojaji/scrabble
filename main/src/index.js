import { cellPos, premiumObj } from './modules/cellPos.js';
import { letters } from './modules/letters.js';
// import { dragStartHandler } from './modules/drag.js';


const board = document.querySelector('#board'); // currently not in use
const cellWrap = document.querySelector('.cell-wrap');
const slotWrap = document.querySelector('.slot-wrap');
const boardSize = 15;
const numTiles = 7;


// array of letters for testing
const arr = ['D', 'I', 'O', 'J', 'O', 'J', 'O'];
const ltr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';


//

function createBoard(size) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const div = document.createElement('div');
      div.classList.add('cell', 'dropzone');
      div.setAttribute('data-row', i);
      div.setAttribute('data-col', j);
      div.id = `${i}${j}`;
      cellWrap.appendChild(div);
      cellWrap.style.gridTemplateColumns = `repeat(${size}, auto)`;
      // NOTE: Loop & rename ID to eg. 00,01,02,etc or a1,a2...d5,d6,etc.
      // div.id = `cl${i}`
      // cellWrap.style.width = `${29*size}px`
      // cellWrap.style.height = `${29*size}px`
    }
  }


  function premiumStyles() {
    const cell = document.querySelectorAll('.cell');

    for (let i = 0; i < size * size; i++) {
      for (const key in premiumObj) {
        if (cellPos[i] !== 0) {
          cell[i].classList.add('premium');
        } if (cellPos[i] == key) {
          cell[i].style.backgroundColor = premiumObj[key].color;
          cell[i].textContent = premiumObj[key].name;
          cell[i].classList.add(premiumObj[key].name);

          // console.log(`i: ${i}, key: ${key},
          // board name: ${cellPos[i]}, ${premiumObj[key].name}`);
        }
      }
    }
  }

  premiumStyles();


  function slots() {
    for (let i = 0; i < 7; i++) {
      const slot = document.createElement('div');
      slot.classList.add('slot');
      slot.id = `cl${i + size * size}`;
      slotWrap.appendChild(slot);
      slot.setAttribute('draggable', true);
      const randomLtr = ltr[Math.floor(Math.random() * ltr.length)];
      slot.textContent = randomLtr;
      // slotWrap.style.gridTemplateColumns = `repeat(${size}, auto)`
      // slotWrap.style.width = `${29*size}px`
      // slotWrap.style.height = `${29*size}px`
    }
  }

  slots();
}


createBoard(boardSize);


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
  const slot = document.querySelectorAll('.slot');

  for (const s of slot) {
    btnStart.addEventListener('click', () => {
      btnStart.textContent = 'SET';
      s.style.visibility = 'visible';
      console.log('clicked');
    });
  }
}

startClick();


// function shuffleClick() {
//   const btnShuffle = document.querySelector('.btnShuffle');
//   const slot = document.querySelectorAll('.slot');

//   for (const s of slot) {
//     btnShuffle.addEventListener('click', () => {
//       for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//         s.textContent = arr[i]
//     }

//     });
//   }

// }

// shuffleClick();


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
  // dragged.style.position = 'absolute'
  // dragged.style.right = `${0}px`
  dragged.style.opacity = `${80}%`;


  e.currentTarget.append(dragged);
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


// NOTES: export/import drag function/s
//        stop special cells text being pushed out after drap/drop
//        fix cell-wrapper from vanishing after drag and drop
//        edit cell ids / adjust dropzone to cell-wrapper only..if possible
//        have a look at z-index for positioning
