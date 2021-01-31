const board = document.querySelector('.board')
const cellWrap = document.querySelector('.cell-wrap')



function createBoard(size) {
    
    for (let i = 0; i<size*size; i++) {
        const test = document.createElement('div')
        test.className = 'cell'
        cellWrap.appendChild(test)
        // board.style.gridTemplateColumns = `repeat(${size}, auto)`
        cellWrap.style.gridTemplateColumns = `repeat(${size}, auto)`
        cellWrap.style.width = `${39*size}px`
        cellWrap.style.height = `${39*size}px`
        }
}

createBoard(15);


// function clickA() {
//     const cell = document.querySelectorAll('.cell')
//     for (const c of cell) {
//         c.addEventListner('click', () => {
//         c.classList.toggle('on')
//     });
//     }
// }

// clickA();


function clickAttacher(selector, cn) {
    const elem = document.querySelectorAll(selector);
  
    for (const e of elem) {
      e.addEventListener('click', () => {
        e.classList.toggle(cn)
        // e.textContent = '*'
        console.log(elem[1])
      });
    }
  }

clickAttacher('.cell', 'active')


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


// name every single square
// assign classes to matching square

// const pos = {
//   tW3: {
//     A1: 0,
//     H1: 7,
//     O1: 14,
//     A8: 98,
//     O8: 112,
//     A15: 214,
//     H15: 234,
//     O15: 249,
//   }
// }

let tW3 = {
  name: 'triple',
  cords: [0, 7, 14, 105, 119, 210, 217, 224,]
}

console.log(tW3.cords)

// function bl() {
//   if (7 in tW3.cords) {
//   console.log(tW3)
//   }
// }

// bl();

function test(selector, cn, text) {
  const elem = document.querySelectorAll(selector);
  for (const c of tW3.cords) {
      // const elem = document.querySelectorAll(selector);
      elem[c].classList.add(cn)
      elem[c].textContent = text.toUpperCase();
      // i+=9-3
      }
}

test('.cell', 'active', 'triple word score')