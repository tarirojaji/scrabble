const board = document.querySelector('#board')
const cellWrap = document.querySelector('.cell-wrap')



// function createBoard(size) {
    
//     for (let i = 0; i<size*size; i++) {
//         const cell = document.createElement('div')
//         cell.classList.add('cell')
//         cellWrap.appendChild(cell)
//         // board.style.gridTemplateColumns = `repeat(${size}, auto)`
//         cellWrap.style.gridTemplateColumns = `repeat(${size}, auto)`
//         cellWrap.style.width = `${39*size}px`
//         cellWrap.style.height = `${39*size}px`
//         }



// }

// createBoard(15);



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
const cellBonusMap={
  0: {
      "value": "",
      "color": "white"
  },
  1: {
      "value": "DLS",
      "color": "lightblue"
  },
  2: {
      "value": "TLS",
      "color": "purple"
  },
  3: {
      "value": "DWS",
      "color": "pink"
  },
  4: {
      "value": "TWS",
      "color": "#a9687d"
  },
  5: {
    "value": "DWS",
    "color": "pink"
  },
};

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

    for (let i = 0; i<225; i++) {
        if (boardCoords[i] !== 0) {
        cell[i].classList.add('premium')
      } if (boardCoords[i] === 4) {
        cell[i].style.backgroundColor = '#a9687d'
        cell[i].textContent = 'TW'
      } if (boardCoords[i] === 3) {
        cell[i].style.backgroundColor = 'SALMON'
        cell[i].textContent = 'DW'
      } if (boardCoords[i] === 2) {
        cell[i].style.backgroundColor = '#023785'
        cell[i].textContent = 'TL'
      } if (boardCoords[i] === 1) {
        cell[i].style.backgroundColor = '#5c77a1'
        cell[i].textContent = 'DL'
      } if (boardCoords[i] === 5) {
        cell[i].style.backgroundColor = '#a9687d'
        cell[i].textContent = '⭑'
      }
  }
}
premiumStyles();

};

create(15);





// function test(selector, cn, text) {
//     const elem = document.querySelectorAll(selector);
//     for (let i = 0; i<15; i+=7) {
//         // const elem = document.querySelectorAll(selector);
//         elem[i].classList.add(cn)
//         elem[i].textContent = text.toUpperCase();
//         // i+=9-3
//         }
//         elem[112].classList.add(cn)
//         elem[112].textContent = '⭑'
//         elem[112].style.fontSize = '100%'

// }

// test('.cell', 'active', 'triple word score')


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