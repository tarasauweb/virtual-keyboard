import keyObj from './keys-obj';
import { createKeys } from './keyboard';

function searchElements () {
    const keyboardRow = document.querySelector('.keyboard__row');
    const keyboardKeys = document.querySelectorAll('.keyboard__keys');
    keyboardKeys.forEach(item=>item.remove());
    keyboardRow.remove()
}

function listener (element) {
    const myTextArea = document.querySelector('.textarea');
    const keyboard = document.querySelector('.keyboard');
    let shfitDown = false;
    let capsLock = false;
    let keyBoardNow = document.querySelectorAll('.keyboard__key')
    element.addEventListener('keydown' , (e)=>{
        console.log(e)
        if(e.key === 'Shift'){
            if(!shfitDown){
                searchElements ();
                shfitDown = true;
                keyBoardNow = keyObj.shiftEng
                keyboard.insertAdjacentElement('afterbegin' , createKeys (keyObj.shiftEng))
                keyBoardNow = document.querySelectorAll('.keyboard__key')
                return keyboard
            }
        }
        if(e.key === 'CapsLock'){
            if(!capsLock){
                capsLock = true;
                searchElements ();
                keyBoardNow = keyObj.capsLockEng
                keyboard.insertAdjacentElement('afterbegin' , createKeys (keyObj.capsLockEng))
                keyBoardNow = document.querySelectorAll('.keyboard__key')
                return keyboard
            }else{
                capsLock = false;
                searchElements ();
                keyBoardNow = keyObj.eng
                keyboard.insertAdjacentElement('afterbegin' , createKeys (keyObj.eng))
                keyBoardNow = document.querySelectorAll('.keyboard__key')
                return keyboard
            }
        }

        keyBoardNow.forEach(item=>{
            if(item.getAttribute('data') === e.code || item.getAttribute('data') === e.key){
                item.classList.add('keyboard__key-active')
                myTextArea.textContent += item.textContent
            }
        })
    
    })
    element.addEventListener('keyup' , (e)=>{
        if(e.key === 'Shift'){
            shfitDown = false;
            searchElements ();
            keyBoardNow = keyObj.eng
            keyboard.insertAdjacentElement('afterbegin' , createKeys (keyObj.eng)), keyBoardNow
            keyBoardNow = document.querySelectorAll('.keyboard__key');
            return keyboard
        }
        keyBoardNow.forEach(item=>{
            if(item.getAttribute('data') === e.code || item.getAttribute('data') === e.key){
                item.classList.remove('keyboard__key-active')
            }
        })
    })
    
    
    
}

export default listener