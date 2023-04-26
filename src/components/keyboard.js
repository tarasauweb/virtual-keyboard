function creacteKeyBoard() {
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard'); 
    keyboard.insertAdjacentElement('afterbegin' , createKeys (keyObj.eng))
    return keyboard
}

function createKeys (obj){
    const board = document.createElement('div');
    board.classList.add('keyboard__row')
    for(let key in  obj) {
        const keyboardRow = document.createElement('div');
        keyboardRow.classList.add('keyboard__keys')
        obj[key].reverse().forEach(element => {
            const btnKey = document.createElement('div')
            btnKey.classList.add('keyboard__key')
            btnKey.textContent = element;
            btnKey.setAttribute('data' , element);
            keyboardRow.insertAdjacentElement('afterbegin' , btnKey)
            if(element === 'arr-down'){
                btnKey.innerHTML = `&#8659`
            }
            if(element === 'arr-up'){
                btnKey.innerHTML = `&#8657`
            }
            if(element === 'arr-left'){
                btnKey.innerHTML = `&#8656`
            }
            if(element === 'arr-right'){
                btnKey.innerHTML = `&#8658`
            }
        });
        board.insertAdjacentElement('afterbegin' , keyboardRow)
    }
    return board
}


export default creacteKeyBoard

const keyObj = {
    eng:{
        row5:['Ctrl' , 'Win' , 'Alt' , 'space' , 'Alt' , 'arr-left' , 'arr-down' , 'arr-right' , 'Ctrl' ],
        row4:[`Shift` ,  'z' , 'x' , 'c' , 'v' , 'b' , 'n' , 'm' , ',' , '.' , '/' , 'arr-up',`Shift`],
        row3:['Caps Lock' , 'a' , 's' , 'd' , 'f' , 'g' , 'h' , 'j' , 'k' , 'l' , ';' , `'` , 'Enter'],
        row2:['Tab' , 'q' , 'w' , 'e' , 'r' , 't' , 'y' , 'u' , 'i' , 'o' , 'p' , '[', ']' , '/'],
        row1:['`' , 1,2,3,4,5,6,7,8,9,0,'-', 'Backspace'],
    },

}


