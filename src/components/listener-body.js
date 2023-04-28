import keys from './keys-obj';
import { createKeys } from './keyboard';

function searchElements() {
    const keyboardRow = document.querySelector('.keyboard__rows');
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
    let layout = 'eng'
    let keyBoardNow = document.querySelectorAll('.keyboard__key')
    element.addEventListener('keydown', (e) => {
        // console.log(e.code)
        if(e.code === 'ShiftLeft' || e.code === 'ShiftRight'){
            searchElements();
            layout = 'shiftEng'
            keyboard.insertAdjacentElement('afterbegin' , createKeys(keys , layout))
            keyBoardNow = document.querySelectorAll('.keyboard__key')
        }
        if(e.code === 'CapsLock'){
            if(capsLock){
                capsLock = false
                searchElements();
                layout = 'eng'
                keyboard.insertAdjacentElement('afterbegin' , createKeys(keys , layout))
                keyBoardNow = document.querySelectorAll('.keyboard__key')
            }else{
                capsLock = true
                searchElements();
                layout = 'CapsLockEng'
                keyboard.insertAdjacentElement('afterbegin' , createKeys(keys , layout))
                keyBoardNow = document.querySelectorAll('.keyboard__key')
            }
        }

        keyBoardNow.forEach(item=>{
            if(e.code === item.getAttribute('data') ){
                item.classList.add('keyboard__key-active');
                if(e.code === 'Tab' && item.getAttribute('data') === 'Tab'){
                    e.preventDefault()
                    return myTextArea.innerHTML += ' ' + ' ';
                }
                if(e.code === 'Enter') {
                    return myTextArea.innerHTML += '\n'
                }
                if(e.code === 'Backspace') {
                    return myTextArea.innerHTML = myTextArea.textContent.slice(0,-1)
                }
                if(e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
                    return myTextArea
                }
                if(e.code === 'AltLeft' || e.code === 'AltRight') {
                    return myTextArea
                }
                if(e.code === 'ControlLeft' || e.code === 'ControlRight') {
                    return myTextArea
                }
                if(e.code === 'MetaLeft') {
                    return myTextArea
                }
                else{
                    return myTextArea.innerHTML +=item.textContent
                }
                
            }
            
        })
    })

    element.addEventListener('keyup', (e) => {
        if(e.code === 'ShiftLeft' || e.code === 'ShiftRight'){
            e.preventDefault();
            searchElements();
            layout = 'eng'
            keyboard.insertAdjacentElement('afterbegin' , createKeys(keys , layout))
            keyBoardNow = document.querySelectorAll('.keyboard__key')
        }
        keyBoardNow.forEach(item=>{
            if(e.code === item.getAttribute('data')){
                item.classList.remove('keyboard__key-active')
            }
        })
    })

    return keyboard

}

export default listener