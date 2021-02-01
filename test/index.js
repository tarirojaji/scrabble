const board = document.querySelector('#board')
const cellWrap = document.querySelector('.cell-wrap')



function createBoard(size) {
    
    for (let i = 0; i<size*size; i++) {
        const cell = document.createElement('div')
        cell.classList.add('cell')
        cellWrap.appendChild(cell)
        // board.style.gridTemplateColumns = `repeat(${size}, auto)`
        cellWrap.style.gridTemplateColumns = `repeat(${size}, auto)`
        cellWrap.style.width = `${39*size}px`
        cellWrap.style.height = `${39*size}px`
        }



}

createBoard(15);





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

let cellIdx = {
  'ct': [112,],
  'tw': [0, 7, 14, 105, 119, 210, 217, 224],
  'tl': [20, 24, 76, 80, 84, 88,136, 140, 144, 148, 215, 219],
  'dw': [16, 28, 32, 42, 48, 56, 64, 70, 154, 160, 168, 176, 182, 192, 196, 208],
  'dl': [3, 11, 36, 38, 45, 52, 59, 92, 96, 98, 102, 108, 116,122, 126, 128,132, 165, 172, 179, 186, 188, 213, 221],
};


function premiumCells(selector, cn, text, sp, style) {
  const elem = document.querySelectorAll(selector);
  for (const c of sp) {
      // const elem = document.querySelectorAll(selector);
      elem[c].classList.add(cn)
      elem[c].style.backgroundColor = style
      elem[c].textContent = text.toUpperCase();
      // i+=9-3
      }
}

premiumCells('.cell', 'premium', '⭑', cellIdx.ct, '#a9687d')
premiumCells('.cell', 'premium', 'TW', cellIdx.tw, '#a9687d')
premiumCells('.cell', 'premium', 'TL', cellIdx.tl, '#023785')
premiumCells('.cell', 'premium', 'DL', cellIdx.dl, '#5c77a1')
premiumCells('.cell', 'premium', 'DW', cellIdx.dw, 'salmon')


// let prCells = [(r='',"T2d3T3d2T.D3t3t3D3D3d.d3D2d2D3d3D2d4D5D5t3t3t3t3d3d.d3d2T2d3".replace(/./g,c=>(c=+c?'.'.repeat(c):c,r=c+r,c))+'X'+r).match(/.{15}/g).join`
// `]
// // console.log(f)

// for (let i = 0;i<2;i++) {
//   for (const pc of prCells) {
//       if (pc.indexOf(pc[i]) in cellIdx)
//       console.log(ff[i])
//   }
// }

function clickAttacher(selector, cn) {
    const elem = document.querySelectorAll(selector);
  
    for (const e of elem) {
      e.addEventListener('click', () => {
        e.classList.toggle(cn)
      });
    }
  }

clickAttacher('.cell', 'active')