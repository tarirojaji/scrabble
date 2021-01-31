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

let TW = {
  name: 'triple',
  cords: [0, 7, 14, 105, 119, 210, 217, 224,]
  // 0, 7, 105 mirror these indexes
}


// let cellIdx = {
//   'ct': [112,],
//   'tw': [0, 7, 105],
//   'tl': [20, 76, 80],
//   'dw': [16, 32, 48, 64],
//   'dl': [3, 36, 45, 52, 92, 96, 108]
// };

let cellIdx = {
  'ct': [112,],
  'tw': [0, 7, 14, 105, 119, 210, 217, 224,],
  'tl': [20, 24, 76, 80, 84, 88,136, 140, 144, 148, 215, 219],
  // 'dw': [16, 32, 48, 64],
  // 'dl': [3, 36, 45, 52, 92, 96, 108]
};

for (const e of cellIdx.ct) {
  if (112 === e) {
    console.log('yes')
  }
}
// for (let i = 0; i <= 14; i++) {
//   for (let j = 0; j <= 14; j++) {
//     let ci = [i,j]
//     // console.log(box);
//   }
// }


function test(selector, cn, text, sp, style) {
  const elem = document.querySelectorAll(selector);
  for (const c of sp) {
      // const elem = document.querySelectorAll(selector);
      elem[c].classList.add(cn)
      elem[c].style.backgroundColor = style
      elem[c].textContent = text.toUpperCase();
      // i+=9-3
      }
}

test('.cell', 'active', '⭑', cellIdx.ct, 'salmon')
test('.cell', 'active', 'TW', cellIdx.tw, '#a9687d')
test('.cell', 'active', 'TL', cellIdx.tl, '#6881a9')


// let prCells = [(r='',"T2d3T3d2T.D3t3t3D3D3d.d3D2d2D3d3D2d4D5D5t3t3t3t3d3d.d3d2T2d3".replace(/./g,c=>(c=+c?'.'.repeat(c):c,r=c+r,c))+'X'+r).match(/.{15}/g).join`
// `]
// // console.log(f)

// for (let i = 0;i<2;i++) {
//   for (const pc of prCells) {
//       if (pc.indexOf(pc[i]) in cellIdx)
//       console.log(ff[i])
//   }
// }

