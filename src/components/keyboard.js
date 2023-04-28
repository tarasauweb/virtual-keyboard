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
            if(element === 'ArrowDown'){
                btnKey.innerHTML = `&#8659`
            }
            if(element === 'ArrowUp'){
                btnKey.innerHTML = `&#8657`
            }
            if(element === 'ArrowLeft'){
                btnKey.innerHTML = `&#8656`
            }
            if(element === 'ArrowRight'){
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
            if(element === 'Backslash'){
                btnKey.innerHTML = `&#x5c`
            }
            if(element === 'CapsLock'){
                btnKey.innerHTML = `Caps Lock`
            }
            if(element === 'Enter'){
                btnKey.innerHTML = `Enter`
            }
            if(element === 'Backquote'){
                btnKey.innerHTML =  '`'
            }
            if(element === 'Quote'){
                btnKey.innerHTML = `'`
            }
            if(element === 'Comma'){
                btnKey.innerHTML = `,`
            }
            if(element === 'Period'){
                btnKey.innerHTML = `.`
            }
            if(element === 'Semicolon'){
                btnKey.innerHTML = `;`
            }
            if(element === 'BracketLeft'){
                btnKey.innerHTML = `[`
            }
            if(element === 'BracketRight'){
                btnKey.innerHTML = `]`
            }
            if(element === 'Slash'){
                btnKey.innerHTML = `/`
            }
            if(element === 'Equal'){
                btnKey.innerHTML = `=`
            }
            if(element === 'Minus'){
                btnKey.innerHTML = `-`
            }
            if(element === 'Digit1'){
                btnKey.innerHTML = `1`
            }
            if(element === 'Digit2'){
                btnKey.innerHTML = `2`
            }
            if(element === 'Digit3'){
                btnKey.innerHTML = `3`
            }
            if(element === 'Digit4'){
                btnKey.innerHTML = `4`
            }
            if(element === 'Digit5'){
                btnKey.innerHTML = `5`
            }
            if(element === 'Digit6'){
                btnKey.innerHTML = `6`
            }
            if(element === 'Digit7'){
                btnKey.innerHTML = `7`
            }
            if(element === 'Digit8'){
                btnKey.innerHTML = `8`
            }
            if(element === 'Digit9'){
                btnKey.innerHTML = `9`
            }
            if(element === 'Digit0'){
                btnKey.innerHTML = `0`
            }
            if(element === 'MetaLeft'){
                btnKey.innerHTML = `Win`
            }
           
            if(element.includes('Key')){
                console.log(typeof element)
                // element.innerHTML = element.slice(0,-1)
            }
        });
        board.insertAdjacentElement('afterbegin' , keyboardRow)
    }
    return board
}


export default creacteKeyBoard




