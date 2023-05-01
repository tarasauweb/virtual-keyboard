import './style.scss'
import title from './components/title';
import createTextArea from './components/textarea';
import creacteKeyBoard from './components/keyboard';
import description from './components/description';
import listener from './components/listener-body';
const body = document.body;
const mainTitle = title('Virtual Keyboard');
const textarea = createTextArea()
body.insertAdjacentHTML('afterbegin' , mainTitle);
body.insertAdjacentHTML('afterbegin' , textarea);
body.insertAdjacentElement('afterbegin' , creacteKeyBoard());
body.insertAdjacentHTML('beforeend' , description())
listener(body)