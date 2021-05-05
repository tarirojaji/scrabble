import { letters } from './letters.js';

function drag() {
  const pointsCal = document.querySelector('.points')
  let parr = new Set()
  let idarr = new Set()
  let p = []
  let pnt = 0

  let score = 0
  let test = []

  let map = new Map();


  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  

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

  // e.target.textConent = '';
  // e.target.append(dragged);
  // dragged.style.position = 'absolute';
  // e.target.removeEventListener('dragover', dragOverHandler);
  // e.target.removeEventListener('drop', dropHandler);

  
  if (!e.currentTarget.hasChildNodes()) {
    e.currentTarget.append(dragged);
    dragged.style.position = 'absolute';
    // dragged.style.opacity = `${80}%`;
    // console.log(dragged.textContent.toLowerCase())
  }
  
  // for (const key in letters) {
  //   if (dragged.textContent.toLowerCase() == key) {

  //     points += letters[key].points
  //     console.log(points);
  //     pointsCal.textContent = `Points: ${points}`

  //   }
  // }

  for (const key in letters) {
    if (dragged.textContent.toLowerCase() == key) {
      // console.log(dragged.id);

      let points = letters[key].points;

      parr.add(`${dragged.id}: ${points}`)
      console.log(parr);
      
      for (let i of parr) {
        // console.log(i);
        // pnt += parseInt(i.charAt(i.length-1));
        pnt = eval(i.charAt(i.length-1))

      }
      console.log(pnt);
      p.push(pnt)
      // console.log(p);

      pointsCal.textContent = `Points: ${p.reduce(reducer)}`


      map.set(dragged.id, letters[key].points);
      console.log(map);



      // let o = [{
      //   i: letters[key].points
      // }]

      
      // let uni = [...new Set(o.map(item => item.i))];
      // console.log(uni)

      // console.log(idarr);

      // idarr.add(dragged.id)
      // console.log(idarr);
      // if(idarr.has(dragged.id) == true) {
      //   points += letters[key].points
      //   // parr.push(points)
      //   // console.log(points);
      // }
      
      
      // pointsCal.textContent = `Points: ${points}`
      // pointsCal.textContent = `Points: ${pnt}`

      
    }
  }

  // console.log(parr);




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

}

export { drag }