const keyObj = {
    eng:{
        row5:['ControlLeft' , 'MetaLeft' , 'AltLeft' , 'Space' , 'AltRight' , 'ArrowLeft' , 'ArrowDown' , 'ArrowRight' , 'ControlRight' ].reverse(),
        row4:[`ShiftLeft` ,  'KeyZ' , 'KeyX' , 'KeyC' , 'KeyV' , 'KeyB' , 'KeyN' , 'KeyM' , 'Comma' , 'Period' , 'Slash' , 'ArrowUp',`ShiftRight`].reverse(),
        row3:['CapsLock' , 'KeyA' , 'KeyS' , 'KeyD' , 'KeyF' , 'KeyG' , 'KeyH' , 'KeyJ' , 'KeyK' , 'KeyL' , 'Semicolon' , `Quote` , 'Enter'].reverse(),
        row2:['Tab' , 'KeyQ' , 'KeyW' , 'KeyE' , 'KeyR' , 'KeyT' , 'KeyY' , 'KeyU' , 'KeyI' , 'KeyO' , 'KeyP' , 'BracketLeft', 'BracketRight' , 'Backslash'].reverse(),
        row1:['Backquote' , 'Digit1','Digit2','Digit3','Digit4','Digit5','Digit6','Digit7','Digit8','Digit9','Digit0','Minus', 'Equal', 'Backspace'].reverse(),
    },
    shiftEng:{
        row5:['ControlLeft' , 'Win' , 'AltLeft' , 'Space' , 'AltRight' , 'ArrowLeft' , 'ArrowDown' , 'ArrowRight' , 'ControlRight' ].reverse(),
        row4:[`ShiftLeft` ,  'Z' , 'X' , 'C' , 'V' , 'B' , 'N' , 'M' , '<' , '>' , '?' , 'ArrowUp',`ShiftRight`].reverse(),
        row3:['CapsLock' , 'A' , 'S' , 'D' , 'F' , 'G' , 'H' , 'J' , 'K' , 'L' , ':' , `"` , 'Enter'].reverse(),
        row2:['Tab' , 'Q' , 'W' , 'E' , 'R' , 'T' , 'Y' , 'U' , 'I' , 'O' , 'P' , '{', '}' , '|'].reverse(),
        row1:['~' , '!','@','#','$','%','^','&','*','(',')','_', '+', 'Backspace'].reverse(),
    },
    capsLockEng:{
        row5:['ControlLeft' , 'Win' , 'AltLeft' , 'Space' , 'AltRight' , 'ArrowLeft' , 'ArrowDown' , 'ArrowRight' , 'ControlRight' ].reverse(),
        row4:[`ShiftLeft` ,  'Z' , 'X' , 'C' , 'V' , 'B' , 'N' , 'M' , ',' , '.' , '/' , 'ArrowUp',`ShiftRight`].reverse(),
        row3:['CapsLock' , 'A' , 'S' , 'D' , 'F' , 'G' , 'H' , 'J' , 'K' , 'L' , ';' , `'` , 'Enter'].reverse(),
        row2:['Tab' , 'Q' , 'W' , 'E' , 'R' , 'T' , 'Y' , 'U' , 'I' , 'O' , 'P' , '[', ']' , 'slash'].reverse(),
        row1:['`' , 1,2,3,4,5,6,7,8,9,0,'-', '=', 'Backspace'].reverse(),
    },
    bel:{
        row5:['ControlLeft' , 'Win' , 'AltLeft' , 'Space' , 'AltRight' , 'ArrowLeft' , 'ArrowDown' , 'ArrowRight' , 'ControlRight' ].reverse(),
        row4:[`ShiftLeft` ,  'я' , 'ч' , 'с' , 'м' , 'і' , 'т' , 'ь' , 'б' , 'ю' , '.' , 'ArrowUp',`ShiftRight`].reverse(),
        row3:['CapsLock' , 'ф' , 'ы' , 'в' , 'а' , 'п' , 'р' , 'о' , 'л' , 'д' , 'ж' , `э` , 'Enter'].reverse(),
        row2:['Tab' , 'й' , 'ц' , 'у' , 'к' , 'е' , 'н' , 'г' , 'ш' , 'ў' , 'з' , 'х', 'ъ' , 'slash'].reverse(),
        row1:[`ё`, 1,2,3,4,5,6,7,8,9,0,'-', '=', 'Backspace'].reverse()
    },
    shiftBel:{
        row5:['ControlLeft' , 'Win' , 'AltLeft' , 'Space' , 'AltRight' , 'ArrowLeft' , 'ArrowDown' , 'ArrowRight' , 'ControlRight' ].reverse(),
        row4:[`ShiftLeft` ,  'Я' , 'Ч' , 'С' , 'М' , 'I' , 'Т' , 'Ь' , 'Б' , 'Ю' , ',' , 'ArrowUp',`ShiftRight`].reverse(),
        row3:['CapsLock' , 'Ф' , 'Ы' , 'В' , 'А' , 'П' , 'Р' , 'О' , 'Л' , 'Д' , 'Ж' , `Э` , 'Enter'].reverse(),
        row2:['Tab' , 'Й' , 'Ц' , 'У' , 'К' , 'Е' , 'Н' , 'Г' , 'Ш' , 'Ў' , 'З' , 'Х', 'Ъ' , '/'].reverse(),
        row1:[`Ё`, '!','"','№',';','%',':','?','*','(',')','_', '+', 'Backspace'].reverse()
    },
    capsLockBel:{
        row5:['ControlLeft' , 'Win' , 'AltLeft' , 'Space' , 'AltRight' , 'ArrowLeft' , 'ArrowDown' , 'ArrowRight' , 'ControlRight' ].reverse(),
        row4:[`ShiftLeft` ,  'Я' , 'Ч' , 'С' , 'М' , 'I' , 'Т' , 'Ь' , 'Б' , 'Ю' , '.' , 'ArrowUp',`ShiftRight`].reverse(),
        row3:['CapsLock' , 'Ф' , 'Ы' , 'В' , 'А' , 'П' , 'Р' , 'О' , 'Л' , 'Д' , 'Ж' , `Э` , 'Enter'].reverse(),
        row2:['Tab' , 'Й' , 'Ц' , 'У' , 'К' , 'Е' , 'Н' , 'Г' , 'Ш' , 'Ў' , 'З' , 'Х', 'Ъ' , '/'].reverse(),
        row1:[`Ё`, 1,2,3,4,5,6,7,8,9,0,'-', '=', 'Backspace'].reverse()
    }

    
}

const keys = {
    row5:{
        ControlLeft:{
            eng:'ControlLeft',
            bel:'ControlLeft'
        },
        MetaLeft:{
            eng:'MetaLeft',
            bel:'MetaLeft'
        },
        AltLeft:{
            eng:'AltLeft',
            bel:'AltLeft'
        },
        Space:{
            eng:'Space',
            bel:'Space'
        },
        AltRight:{
            eng:'AltRight',
            bel:'AltRight'
        },
        ArrowLeft:{
            eng:'ArrowLeft',
            bel:'ArrowLeft'
        },
        ArrowDown:{
            eng:'ArrowDown',
            bel:'ArrowDown'
        },
        ArrowRight:{
            eng:'ArrowRight',
            bel:'ArrowRight'
        },
        ControlRight:{
            eng:'ControlRight',
            bel:'ControlRight'
        },
    },
    row4:{
        ShiftLeft:{
            eng:'ShiftLeft',
            bel:'ShiftLeft'
        },
        KeyZ:{
            eng:'z',
            bel:'я'
        },
        KeyX:{
            eng:'x',
            bel:'ч'
        },
        KeyC:{
            eng:'c',
            bel:'с'
        },
        KeyV:{
            eng:'v',
            bel:'м'
        },
        KeyB:{
            eng:'b',
            bel:'i'
        },
        KeyN:{
            eng:'n',
            bel:'т'
        },
        KeyM:{
            eng:'m',
            bel:'ь'
        },
        Comma:{
            eng:'<',
            bel:'б'
        },
        Period:{
            eng:'>',
            bel:'ю'
        },
        Slash:{
            eng:'/',
            bel:'.'
        },
        ArrowUp:{
            eng:'&#8657',
            bel:'&#8657'
        },
        ShiftRight:{
            eng:'ShiftRight',
            bel:'ShiftRight'
        }
    }

}

export default keyObj