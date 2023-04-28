import keys from './keys-obj';
import { createKeys } from './keyboard';

function searchElements() {
    const keyboardRow = document.querySelector('.keyboard__rows');
    const keyboardKeys = document.querySelectorAll('.keyboard__keys');
    keyboardKeys.forEach(item => item.remove());
    keyboardRow.remove()
}
function activeKeyBoard(obj , myLayout , myKeyBoard , keysNow){
    searchElements();
    let layout = myLayout
    myKeyBoard.insertAdjacentElement('afterbegin' , createKeys(obj , layout))
    keysNow = document.querySelectorAll('.keyboard__key');
    return keysNow 
}
function listener(element) {
    const myTextArea = document.querySelector('.textarea');
    const keyboard = document.querySelector('.keyboard');
    let capsLock = false;
    let belLang = false;
    let ctrlLeft = false;
    let altLeft = false;
    let layout = 'eng'
    let keyBoardNow = document.querySelectorAll('.keyboard__key')
    element.addEventListener('keydown', (e) => {
        // console.log(e.code)
        if(e.code === 'ControlLeft'){
            ctrlLeft = true;
        }
        if(e.code === 'AltLeft'){
            altLeft = true;
        }
        if(ctrlLeft&&altLeft){
            if(!belLang){
                
                belLang = true;
                
                capsLock === true ? layout = 'CapsLockBel' : layout = 'bel'
                keyBoardNow = activeKeyBoard(keys , layout , keyboard , keyBoardNow);
            }else{
                belLang = false
                capsLock === true ? layout = 'CapsLockEng' : layout = 'eng'
                keyBoardNow = activeKeyBoard(keys , layout , keyboard , keyBoardNow);
            }
        }
        if(e.code === 'ShiftLeft' || e.code === 'ShiftRight'){
            if(!belLang){
                layout = 'shiftEng';
                keyBoardNow = activeKeyBoard(keys , layout , keyboard , keyBoardNow);
            }
            else{
                layout = 'shiftBel'
                keyBoardNow = activeKeyBoard(keys , layout , keyboard , keyBoardNow);
            }
            
        }
        if(e.code === 'CapsLock'){
            if(capsLock){
                capsLock = false;
                if(!belLang){
                    layout = 'eng';
                    keyBoardNow = activeKeyBoard(keys , layout , keyboard , keyBoardNow);
                }
                else{
                    layout = 'bel';
                    keyBoardNow = activeKeyBoard(keys , layout , keyboard , keyBoardNow);
                }
            }else{
                capsLock = true;
                if(!belLang){
                    layout = 'CapsLockEng';
                    keyBoardNow = activeKeyBoard(keys , layout , keyboard , keyBoardNow);
                }
                else{
                    layout = 'CapsLockBel';
                    keyBoardNow = activeKeyBoard(keys , layout , keyboard , keyBoardNow);
                }
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
                if(e.code === 'CapsLock') {
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
            if(!belLang){
                capsLock === true ? layout = 'CapsLockEng' : layout = 'eng'
                keyBoardNow = activeKeyBoard(keys , layout , keyboard , keyBoardNow);
            }
            
            else{
                capsLock === true ? layout = 'CapsLockBel' : layout = 'bel'
                keyBoardNow = activeKeyBoard(keys , layout , keyboard , keyBoardNow);
            }
        }
        if(e.code === 'ControlLeft'){
            ctrlLeft = false;
        }
        if(e.code === 'AltLeft'){
            altLeft = false;
        }
        keyBoardNow.forEach(item=>{
            if(e.code === 'CapsLock' && capsLock && item.getAttribute('data') === 'CapsLock'){
                return item.classList.add('keyboard__key-active')
            }
            if(e.code === item.getAttribute('data')){
                item.classList.remove('keyboard__key-active')
            }
        })
    })

    return keyboard

}

export default listener