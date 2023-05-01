import keyObj from './keys-obj'

function creacteKeyBoard() {
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard'); 
    keyboard.insertAdjacentElement('afterbegin' , createKeys (keyObj,'eng'))
    return keyboard
}

export function createKeys (obj,layout = 'eng'){
    const board = document.createElement('div');
    board.classList.add('keyboard__rows')
    for(let key in  obj) {
        const keyboardRow = document.createElement('div');
        keyboardRow.classList.add('keyboard__row');
        for(let i in obj[key]){
            const btnKey = document.createElement('div');
            btnKey.classList.add('keyboard__key');
            if(Object.keys(obj[key][i]).includes(layout)){
                console.log()
                if(obj[key][i][layout] === 'ControlLeft'){
                    btnKey.innerHTML = 'Ctrl'
                }
                else if(obj[key][i][layout] === 'ControlRight'){
                    btnKey.innerHTML = 'Ctrl'
                }
                else if(obj[key][i][layout] === 'ArrowRight'){
                    btnKey.innerHTML = '&#8658'
                }
                else if(obj[key][i][layout] === 'ArrowDown'){
                    btnKey.innerHTML = '&#8659'
                }
                else if(obj[key][i][layout] === 'ArrowLeft'){
                    btnKey.innerHTML = '&#8656'
                }
                else if(obj[key][i][layout] === 'MetaLeft'){
                    btnKey.innerHTML = 'Win'
                }
                else if(obj[key][i][layout] === 'AltLeft'){
                    btnKey.innerHTML = 'Alt'
                }
                else if(obj[key][i][layout] === 'AltRight'){
                    btnKey.innerHTML = 'Alt'
                }
                else if(obj[key][i][layout] === 'Space'){
                    btnKey.innerHTML = ' '
                }
                else if(obj[key][i][layout] === 'ShiftLeft'){
                    btnKey.innerHTML = 'Shift'
                }
                else if(obj[key][i][layout] === 'ShiftRight'){
                    btnKey.innerHTML = 'Shift'
                }
                else if(obj[key][i][layout] === 'Backslash'){
                    btnKey.innerHTML = '&#x5c'
                }
                else if(obj[key][i][layout] === 'CapsLock'){
                    btnKey.innerHTML = 'Caps Lock'
                }
                else{
                    btnKey.innerHTML = obj[key][i][layout]
                }
                btnKey.setAttribute('data' , i)
                
            }
            keyboardRow.insertAdjacentElement('afterbegin' , btnKey)
        }
        board.insertAdjacentElement('afterbegin' , keyboardRow)
    }
    return board
}


export default creacteKeyBoard




