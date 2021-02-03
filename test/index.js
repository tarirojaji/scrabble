const board = document.querySelector('#board');
const cellWrap = document.querySelector('.cell-wrap');
const boardSize = 15;



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
];



const premiumObj = {
  1: {
    name: 'DL',
    color: '#5c77a1',
    index: [
      3, 11, 36, 38, 45, 52, 59, 92, 96, 98, 102,108, 116, 
      122, 126, 128,132, 165, 172, 179, 186, 188, 213, 221
    ],
  },
  2: {
    name: 'TL',
    color: '#023785',
    index: [20, 24, 76, 80, 84, 88,136, 140, 144, 148, 215, 219],
  },
  3: {
    name: 'DW',
    color: '#e49288',
    index: [16, 28, 32, 42, 48, 56, 64, 70, 154, 160, 168, 176, 182, 192, 196, 208],
  },
  4: {
    name: 'TW',
    color: '#a9687d',
    index: [0, 7, 14, 105, 119, 210, 217, 224],
  },
  5: {
    name: '⭑',
    color: '#a9687d',
    index: [112],
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
  };

  function premiumStyles() {
    const cell = document.querySelectorAll('.cell');

      for (let i=0; i<size*size; i++) {
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
  };

  premiumStyles();

};

create(boardSize);





function clickAttacher(selector, cn) {
    const elem = document.querySelectorAll(selector);
    for (const e of elem) {
      e.addEventListener('click', () => {
        e.classList.toggle(cn)
      });
    }
  };

clickAttacher('.cell', 'active');



