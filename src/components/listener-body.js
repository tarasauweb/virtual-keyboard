import keyObj from './keys-obj';
import { createKeys } from './keyboard';

function searchElements() {
    const keyboardRow = document.querySelector('.keyboard__row');
    const keyboardKeys = document.querySelectorAll('.keyboard__keys');
    keyboardKeys.forEach(item => item.remove());
    keyboardRow.remove()
}
function listener(element) {
    const myTextArea = document.querySelector('.textarea');
    const keyboard = document.querySelector('.keyboard');
    let capsLock = false;
    let belLang = false;
    let ctrlRight = false;
    let altRight = false;
    let keyBoardNow = document.querySelectorAll('.keyboard__key')
    element.addEventListener('keydown', (e) => {
        if (e.key === 'Shift') {
            searchElements();
            keyboard.insertAdjacentElement('afterbegin', createKeys(keyObj.shiftEng))
            keyBoardNow = document.querySelectorAll('.keyboard__key')
            e.preventDefault()
        }
        if (e.key === 'CapsLock') {
            if (!capsLock) {
                capsLock = true;
                searchElements();
                keyboard.insertAdjacentElement('afterbegin', createKeys(keyObj.capsLockEng))
                keyBoardNow = document.querySelectorAll('.keyboard__key')

            } else {
                capsLock = false;
                searchElements();
                keyboard.insertAdjacentElement('afterbegin', createKeys(keyObj.eng))
                keyBoardNow = document.querySelectorAll('.keyboard__key')

            }
        }
        keyBoardNow.forEach(item => {
            console.log(e.code)
            if(e.code === 'ControlRight'){
                ctrlRight = true;
                e.preventDefault();
            }
            if(e.code === 'AltRight' ){
                altRight = true;
                e.preventDefault();
            }
            if(ctrlRight && altRight){
                if(belLang){
                    belLang = false;
                    searchElements();
                    keyboard.insertAdjacentElement('afterbegin', createKeys(keyObj.eng))
                    keyBoardNow = document.querySelectorAll('.keyboard__key')
                }else{
                    belLang = true
                    
                    searchElements();
                    keyboard.insertAdjacentElement('afterbegin', createKeys(keyObj.bel))
                    keyBoardNow = document.querySelectorAll('.keyboard__key')
                }
                
            }
            if (item.getAttribute('data') === e.code || item.getAttribute('data') === e.key) {
                
                if (item.getAttribute('data') === 'Tab') {
                    e.preventDefault()
                    myTextArea.innerHTML += ' ' + ' ';
                    item.classList.add('keyboard__key-active');
                    return myTextArea;
                }
                if (item.getAttribute('data') === 'Backspace') {
                    const text = myTextArea.textContent.slice(0, -1)
                    myTextArea.textContent = text
                    item.classList.add('keyboard__key-active');
                    return myTextArea;
                }
                if (item.getAttribute('data') === 'CapsLock') {
                    if(capsLock){
                        item.classList.add('keyboard__key-active');
                        return myTextArea;
                    }
                    else{
                        item.classList.remove('keyboard__key-active');
                        return myTextArea;
                    }
                    
                }
                if (item.getAttribute('data') === 'ShiftLeft' || item.getAttribute('data') === 'ShiftRight') {

                    item.classList.add('keyboard__key-active');
                    return myTextArea;
                }
                if (item.getAttribute('data') === 'Space') {
                    item.classList.add('keyboard__key-active');
                    myTextArea.innerHTML += ' ';
                    return myTextArea;
                }
                if (item.getAttribute('data') === 'ControlLeft' || item.getAttribute('data') === 'ControlRight') {
                    item.classList.add('keyboard__key-active');
                    return myTextArea;
                }
                if (item.getAttribute('data') === 'AltLeft' || item.getAttribute('data') === 'AltRight') {
                    item.classList.add('keyboard__key-active');
                    return myTextArea;
                }
                if (item.getAttribute('data') === 'Enter') {
                    item.classList.add('keyboard__key-active');
                    myTextArea.innerHTML += '\n';
                    return myTextArea;
                }
                else {
                    item.classList.add('keyboard__key-active')
                    myTextArea.textContent += item.textContent;
                    return myTextArea;
                }
            }
            else{
                if(item.getAttribute('data') === 'ў' && e.code === 'KeyO' || item.getAttribute('data') === 'Ў' && e.code === 'KeyO') {
                    myTextArea.textContent += item.textContent;
                    item.classList.add('keyboard__key-active');
                    return myTextArea;
                }
                if(item.getAttribute('data') === 'і' && e.code === 'KeyB' || item.getAttribute('data') === 'I' && e.code === 'KeyB' ) {
                    myTextArea.textContent += item.textContent;
                    item.classList.add('keyboard__key-active');
                    return myTextArea;
                }
                
            }
        })

    })

    element.addEventListener('keyup', (e) => {
        if(e.code === 'ControlRight'){
            ctrlRight = false
        }
        if(e.code === 'AltRight' ){
            altRight = false
        }
        if (e.key === 'Shift') {
            searchElements();
            keyboard.insertAdjacentElement('afterbegin', createKeys(keyObj.eng));
            keyBoardNow = document.querySelectorAll('.keyboard__key');
        }
        keyBoardNow.forEach(item => {
            if(item.getAttribute('data') === 'CapsLock'){
                return item
            }
            if (item.getAttribute('data') === e.code || item.getAttribute('data') === e.key) {
                item.classList.remove('keyboard__key-active')
            }
            else{
                item.classList.remove('keyboard__key-active')
            }
        })
    })

    return keyboard

}

export default listener