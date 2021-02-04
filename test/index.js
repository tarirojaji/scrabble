import { cellPos, premiumObj } from './modules/boardPos.js';


const board = document.querySelector('#board'); //currently not in use
const cellWrap = document.querySelector('.cell-wrap');
const slotWrap = document.querySelector('.slot-wrap');
const boardSize = 15;



// 

function createBoard(size) {
  for (let i = 0; i<size*size; i++) {
  const div = document.createElement('div')
    div.classList.add('cell')
    cellWrap.appendChild(div)
    cellWrap.style.gridTemplateColumns = `repeat(${size}, auto)`
    cellWrap.style.width = `${29*size}px`
    cellWrap.style.height = `${29*size}px`
  };


  function premiumStyles() {
    const cell = document.querySelectorAll('.cell');

      for (let i=0; i<size*size; i++) {
        for (const key in premiumObj) {
          if (cellPos[i] !== 0) {
            cell[i].classList.add('premium')
          } if (cellPos[i] == key) {
            cell[i].style.backgroundColor = premiumObj[key].color
            cell[i].textContent = premiumObj[key].name

            // console.log(`i: ${i}, key: ${key}, 
            // board name: ${cellPos[i]}, ${premiumObj[key].name}`);
          }
        }
      };
  };

  premiumStyles();



  function slots() {
    for (let i = 0; i<7; i++) {
      const slot = document.createElement('div')
        slot.classList.add('slot')
        slotWrap.appendChild(slot)
        // slotWrap.style.gridTemplateColumns = `repeat(${size}, auto)`
        // slotWrap.style.width = `${29*size}px`
        // slotWrap.style.height = `${29*size}px`
      };
    
  }
  
  slots();

};































createBoard(boardSize);




function clickAttacher(selector, cn) {
    const elem = document.querySelectorAll(selector);
    for (const e of elem) {
      e.addEventListener('click', () => {
        e.classList.toggle(cn)
        console.log('clicked')
      });
    }
  };

clickAttacher('.cell', 'active');
clickAttacher('.slot', 'active');


