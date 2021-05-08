import { letters } from './letters.js';
import { cellPos, specialObj } from './cellPos.js';
const ltrs = Object.keys(letters); // replace with Array of letters with n  each

export function clickAttacher(selector, cn) {
  const elem = document.querySelectorAll(selector);
  for (const e of elem) {
    e.addEventListener('click', () => {
      e.classList.toggle(cn);
      console.log('clicked');
    });
  }
}

//

export function startClick() {
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

//

export function shuffleClick() {
  const btnShuffle = document.querySelector('#btnShuffle');
  const tiles = document.querySelectorAll('.tiles');

  btnShuffle.addEventListener('click', () => {
    for (const t of tiles) {
      if (t.parentElement.classList.contains('slot')) {
        const randomLtr = ltrs[Math.floor(Math.random() * ltrs.length)].toUpperCase();
        t.textContent = randomLtr;
        console.log('clicked');
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

//

export function shuffleBoard() {
  const shuffleBoard = document.querySelector('#shuffleBoard');
  const cell = document.querySelectorAll('.cell');


  shuffleBoard.addEventListener('click', () => {
    // First clear the baord
    for (const c of cell) {
      c.classList.remove('special');
      c.style.backgroundColor = '';
    }

    for (let i = 0; i < 15 * 15; i++) {
      // randomize cell coordinates
      const shuffled = cellPos.sort(() => Math.random() - 0.5);

      // eslint-disable-next-line no-restricted-syntax
      for (const key in specialObj) {
        if (shuffled[i] !== 0) {
          cell[i].classList.add('special');
        // eslint-disable-next-line eqeqeq
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

export function setClick() {
  const btnSet = document.querySelector('#btnSet');
  // const tiles = document.querySelectorAll('.tiles');

  btnSet.addEventListener('click', () => {
    // console.log('clicked');
  });
}
