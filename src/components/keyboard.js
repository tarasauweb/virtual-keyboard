function creacteKeyBoard() {
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard'); 
    keyboard.insertAdjacentElement('afterbegin' , createKeys (keyObj))
    return keyboard
}

function createKeys (obj){
    const board = document.createElement('div')
    board.classList.add('keyboard__board')
    for(let key in  obj.eng) {
        // console.log(obj.eng)
        const keyboardRow = document.createElement('div');
        keyboardRow.classList.add('keyboard__row')
        obj.eng[key].reverse().forEach(element => {
            console.log(element)
            const btnKey = document.createElement('div')
            btnKey.classList.add('keyboard__key')
            btnKey.textContent = element;
            btnKey.setAttribute('data' , element);
            keyboardRow.insertAdjacentElement('afterbegin' , btnKey)
        });
        return keyboardRow
    }
}


export default creacteKeyBoard

const keyObj = {
    eng:{
        row1:['`' , 1,2,3,4,5,6,7,8,9,0,'-', 'Backspace']
    },

}


