// import * as morseCode from './morseCode.js'
var clickBox = document.getElementById('clickBox');

class htmlConsole {
    constructor (logWindow) {
        this.logWindow = logWindow
    }
    log (logPhrase) {
        this.logWindow.innerHTML = `${logPhrase}<br/>${this.logWindow.innerHTML}` 
    }
}

var html = new htmlConsole(document.getElementById('htmlConsole'));


function clickBoxOnMouseDown () {
    html.log('mouseDown\n');
    // Get Time of mousedown
    // update css of outputbox
    // return time of mousedown
}


function clickBoxOnMouseUp (mouseDownTime) {
    html.log('mouseUp');
    // Get Time of mouseup
    // update css of outputbox
    // return time between mouseDown and mouseUp
}

clickBox.onmousedown = clickBoxOnMouseDown;
clickBox.onmouseup   = clickBoxOnMouseUp;
// alert()