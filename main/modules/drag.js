function drag() {
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



  if (!e.currentTarget.hasChildNodes()) {
    e.currentTarget.append(dragged);
    dragged.style.position = 'absolute';
    // dragged.style.opacity = `${80}%`;
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

export { drag }