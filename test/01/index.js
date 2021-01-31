const board = document.querySelector('#board')




function createBoard(size) {
    
    for (let i = 0; i<size*size; i++) {
        const test = document.createElement('div')
        test.className = 'cell'
        board.appendChild(test)
        }
}

createBoard(4);


// console.log(board.childElementCount)