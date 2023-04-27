import keyObj from './keys-obj'

function creacteKeyBoard() {
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard'); 
    keyboard.insertAdjacentElement('afterbegin' , createKeys (keyObj.eng))
    return keyboard
}

export function createKeys (obj){
    const board = document.createElement('div');
    board.classList.add('keyboard__row')
    for(let key in  obj) {
        const keyboardRow = document.createElement('div');
        keyboardRow.classList.add('keyboard__keys')
        obj[key].forEach(element => {
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
            if(element === 'ShiftLeft' || element === 'ShiftRight'){
                btnKey.innerHTML = `Shift`
            }
            if(element === 'ControlLeft' || element === 'ControlRight'){
                btnKey.innerHTML = `Ctrl`
            }
            if(element === 'AltLeft' || element === 'AltRight'){
                btnKey.innerHTML = `Alt`
            }
            if(element === 'Space'){
                btnKey.innerHTML = ``
            }
            if(element === 'slash'){
                btnKey.innerHTML = `&#x5c`
            }
        });
        board.insertAdjacentElement('afterbegin' , keyboardRow)
    }
    return board
}


export default creacteKeyBoard




