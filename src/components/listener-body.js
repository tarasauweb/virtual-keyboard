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
function getPosition(ctrl) {
    ctrl.focus();
    let postion = ctrl.selectionStart
    const lengthStr = ctrl.textContent.length
    if(postion<lengthStr){
        let chanhePosition = lengthStr - postion
        ctrl.innerHTML = ctrl.textContent.slice(0,-1)
        ctrl.selectionStart = lengthStr - chanhePosition
    }
    return ctrl
}

function listener(element) {
    const myTextArea = document.querySelector('.textarea');
    const keyboard = document.querySelector('.keyboard');
    let capsLock = false;
    let belLang = false;
    let ctrlLeft = false;
    let altLeft = false;
    let layout = 'eng';
    let keyBoardNow = document.querySelectorAll('.keyboard__key');
    let listerkeysShiftUp = (e)=>{
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
    let listenerShiftDown = ()=>{
       
        if(!belLang){
            layout = 'shiftEng';
            keyBoardNow = activeKeyBoard(keys , layout , keyboard , keyBoardNow);
        }
        else{
            layout = 'shiftBel'
            keyBoardNow = activeKeyBoard(keys , layout , keyboard , keyBoardNow);
        }
        if(capsLock){
            const keyCapsLock = document.querySelector('.keyboard__key[data="CapsLock"]')
            keyCapsLock.classList.add('keyboard__key-active')
        }
    }
    let listenrCapsLock = (e)=>{
        
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
        }
        
        else{
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
        
        return capsLock
    }
    let changeLang = ()=>{
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
    element.addEventListener('click' , (e)=>{
        if(e.target.getAttribute('data')){
            if(
                e.target.getAttribute('data').includes('Key') || 
                e.target.getAttribute('data').includes('Digit')||
                e.target.getAttribute('data').includes('BracketLeft')||
                e.target.getAttribute('data').includes('BracketRight')||
                e.target.getAttribute('data').includes('Backslash')||
                e.target.getAttribute('data').includes('Backquote')||
                e.target.getAttribute('data').includes('Minus')||
                e.target.getAttribute('data').includes('Equal')||
                e.target.getAttribute('data').includes('Quote')||
                e.target.getAttribute('data').includes('Semicolon')||
                e.target.getAttribute('data').includes('Comma')||
                e.target.getAttribute('data').includes('Period')||
                e.target.getAttribute('data').includes('Slash')||
                e.target.getAttribute('data').includes('ArrowUp')||
                e.target.getAttribute('data').includes('ArrowDown')||
                e.target.getAttribute('data').includes('ArrowLeft')||
                e.target.getAttribute('data').includes('ArrowRight')
            ){
                myTextArea.innerHTML += e.target.textContent
            }
        }
        if(e.target.getAttribute('data') === 'Delete'){
            getPosition(myTextArea)
        }
        if(e.target.getAttribute('data') === 'Enter'){
            return myTextArea.innerHTML += '\n'
        }
        if(e.target.getAttribute('data') === 'Space'){
            return myTextArea.innerHTML += ' '
        }
        if(e.target.getAttribute('data') === 'CapsLock'){
            listenrCapsLock(e)
            if(capsLock){
                const keyCapsLock = document.querySelector('.keyboard__key[data="CapsLock"]')
                keyCapsLock.classList.add('keyboard__key-active')
            }
        }
        if(e.target.getAttribute('data') === 'Backspace') {
            return myTextArea.innerHTML = myTextArea.textContent.slice(0,-1)
        }
        if(e.target.getAttribute('data') === 'Tab'){
            e.preventDefault()
            return myTextArea.innerHTML += ' ' + ' ';
        }
        
    })
    element.addEventListener('mousedown' , (e)=>{
        
        if(e.target.getAttribute('data') === 'ShiftLeft' || e.target.getAttribute('data') === 'ShiftRight'){
            listenerShiftDown()
        }
        if(e.target.getAttribute('data') === 'ControlLeft'){
            ctrlLeft = true
        }
        if(e.target.getAttribute('data') === 'AltLeft'){
            altLeft = true
        }
        if(ctrlLeft&&altLeft){
            changeLang()
        }
        
    })
    element.addEventListener('mouseup' , (e)=>{
        if(e.target.getAttribute('data') === 'ShiftLeft' || e.target.getAttribute('data') === 'ShiftRight'){
            listerkeysShiftUp(e)
        }
        if(e.target.getAttribute('data') === 'ControlLeft'){
            ctrlLeft = false
        }
        if(e.target.getAttribute('data') === 'AltLeft'){
            altLeft = false
        }
        
    })
    
    element.addEventListener('keydown', (e) => {
        // console.log(e.code)
        if(e.code === 'ControlLeft'){
            ctrlLeft = true;
        }
        if(e.code === 'AltLeft'){
            altLeft = true;
        }
        
        if(ctrlLeft&&altLeft){
            changeLang()
        }
        if(e.code === 'ShiftLeft' || e.code === 'ShiftRight'){
            listenerShiftDown(e)
            
        }
        if(e.code === 'CapsLock'){
            listenrCapsLock()
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
                    return myTextArea
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
                if(e.code === 'Delete'){
                    getPosition(myTextArea)
                }
                else{
                    return myTextArea.innerHTML +=item.textContent
                }
            }
        })
    })
    element.addEventListener('keyup', (e) => {
        if(e.code === 'ShiftLeft' || e.code === 'ShiftRight'){
            listerkeysShiftUp(e)
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
            if(item.getAttribute('data') === 'CapsLock' && capsLock){
                item.classList.add('keyboard__key-active')
            }
        })
    })
    return keyboard
}

export default listener