import { letters } from './letters.js';

function drag() {
  const pointsCal = document.querySelector('.points');


  const map = new Map();


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


    // eslint-disable-next-line no-restricted-syntax
    for (const key in letters) {
      // eslint-disable-next-line eqeqeq
      if (dragged.textContent.toLowerCase() == key) {
      // console.log(dragged.id);

        // const points = letters[key].points;

        map.set(dragged.id, letters[key].points);

        let total = 0;
        map.forEach((value) => {
          total += value;
        });

        console.log(`${total} total!`);
        console.log(map);

        pointsCal.textContent = `Points: ${total}`;
      }
    }
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

export { drag };
