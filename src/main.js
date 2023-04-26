import './style.scss'
import title from './components/title';
import createTextArea from './components/textarea';
import creacteKeyBoard from './components/keyboard';
import description from './components/description';
const body = document.body;
const mainTitle = title('Virtual Keyboard');
body.insertAdjacentHTML('afterbegin' , mainTitle);
body.insertAdjacentHTML('afterbegin' , createTextArea());
body.insertAdjacentElement('afterbegin' , creacteKeyBoard());
body.insertAdjacentHTML('beforeend' , description())