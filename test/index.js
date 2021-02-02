const board = document.querySelector('#board')
const cellWrap = document.querySelector('.cell-wrap')

// 

const boardCoords = [
    4,0,0,1,0,0,0,4,0,0,0,1,0,0,4,
    0,3,0,0,0,2,0,0,0,2,0,0,0,3,0,
    0,0,3,0,0,0,1,0,1,0,0,0,3,0,0,
    1,0,0,3,0,0,0,1,0,0,0,3,0,0,1,
    0,0,0,0,3,0,0,0,0,0,3,0,0,0,0,
    0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,
    0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,
    4,0,0,1,0,0,0,5,0,0,0,1,0,0,4,
    0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,
    0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,
    0,0,0,0,3,0,0,0,0,0,3,0,0,0,0,
    1,0,0,3,0,0,0,1,0,0,0,3,0,0,1,
    0,0,3,0,0,0,1,0,1,0,0,0,3,0,0,
    0,3,0,0,0,2,0,0,0,2,0,0,0,3,0,
    4,0,0,1,0,0,0,4,0,0,0,1,0,0,4,
]



const premiumObj = {
  1: {
    name: 'DL',
    color: '#5c77a1'
  },
  2: {
    name: 'TL',
    color: '#023785'
  },
  3: {
    name: 'DW',
    color: 'SALMON'
  },
  4: {
    name: 'TW',
    color: '#a9687d'
  },
  5: {
    name: '⭑',
    color: '#a9687d'
  },
}

function create(size) {
  for (let i = 0; i<size*size; i++) {
  const div = document.createElement('div')
    div.classList.add('cell')
    cellWrap.appendChild(div)
    cellWrap.style.gridTemplateColumns = `repeat(${size}, auto)`
    cellWrap.style.width = `${39*size}px`
    cellWrap.style.height = `${39*size}px`
  }

  function premiumStyles() {
    const cell = document.querySelectorAll('.cell')

      for (let i=0; i<225; i++) {
        for (const key in premiumObj) {
          if (boardCoords[i] !== 0) {
            cell[i].classList.add('premium')
          } if (boardCoords[i] == key) {
            cell[i].style.backgroundColor = premiumObj[key].color
            cell[i].textContent = premiumObj[key].name

            // console.log(`i: ${i}, key: ${key}, 
            // board name: ${boardCoords[i]}, ${premiumObj[key].name}`);
          }
        }
      };
  }

  premiumStyles();

};

create(15);








// let cellIdx2 = {
//   'ct': [112,],
//   'tw': [0, 7, 105],
//   'tl': [20, 76, 80],
//   'dw': [16, 32, 48, 64],
//   'dl': [3, 36, 45, 52, 92, 96, 108]
// };

// let cellIdx = {
//   'ct': [112,],
//   'tw': [0, 7, 14, 105, 119, 210, 217, 224],
//   'tl': [20, 24, 76, 80, 84, 88,136, 140, 144, 148, 215, 219],
//   'dw': [16, 28, 32, 42, 48, 56, 64, 70, 154, 160, 168, 176, 182, 192, 196, 208],
//   'dl': [3, 11, 36, 38, 45, 52, 59, 92, 96, 98, 102, 108, 116,122, 126, 128,132, 165, 172, 179, 186, 188, 213, 221],
// };


// function premiumCells(selector, cn, text, sp, style) {
//   const elem = document.querySelectorAll(selector);
//   for (const c of sp) {
//       // const elem = document.querySelectorAll(selector);
//       elem[c].classList.add(cn)
//       elem[c].style.backgroundColor = style
//       elem[c].textContent = text.toUpperCase();
//       // i+=9-3
//       }
// }

// premiumCells('.cell', 'premium', '⭑', cellIdx.ct, '#a9687d')
// premiumCells('.cell', 'premium', 'TW', cellIdx.tw, '#a9687d')
// premiumCells('.cell', 'premium', 'TL', cellIdx.tl, '#023785')
// premiumCells('.cell', 'premium', 'DL', cellIdx.dl, '#5c77a1')
// premiumCells('.cell', 'premium', 'DW', cellIdx.dw, 'salmon')



function clickAttacher(selector, cn) {
    const elem = document.querySelectorAll(selector);
    for (const e of elem) {
      e.addEventListener('click', () => {
        e.classList.toggle(cn)
      });
    }
  }

clickAttacher('.cell', 'active')