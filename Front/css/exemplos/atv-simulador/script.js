const colors = ['violet', 'lightsalmon', 'lightblue', 'lightyellow', 'orange', 'lightgreen'];
var index_color = 0;

const formats = ['0%', '50%'];
var index_format = 0;

function clickColor(val) {

    var box, boxes;
    if(val != index_color) {
        // Remove class
        box = document.querySelector('#box'+index_color);
        box.classList.remove("border");

        // Add Class
        index_color = val;
        box = document.querySelector('#box'+index_color);
        box.classList.add("border");

        // Change Format Color
        box = document.querySelector('#format0');
        box.style.setProperty('background-color', colors[index_color]);
        box = document.querySelector('#format1');
        box.style.setProperty('background-color', colors[index_color]);

        // Change Color - Boxes Example
        boxes = document.querySelectorAll('#box');
        for (let i=0 ; i < boxes.length; i++) {
            boxes[i].style.setProperty('background-color', colors[index_color]);
        }
    }
}

function clickFormat(val) {

    let format, boxes;
    if(index_format != val) {
        // Remove class
        format = document.querySelector('#format'+index_format);
        format.classList.remove("border");

        // Add Class
        index_format = val;
        format = document.querySelector('#format'+index_format);
        format.classList.add("border");

        // Change Format - Boxes Example
        boxes = document.querySelectorAll('#box');
        for (let i=0 ; i < boxes.length; i++) {
            boxes[i].style.setProperty('border-radius', formats[index_format]);
        }
    }
}

function changeSize(val) {

    boxes = document.querySelectorAll('#box');
    for (let i=0 ; i < boxes.length; i++) {
        boxes[i].style.setProperty('width', val+'px');
        boxes[i].style.setProperty('height', val+'px');
    }
}

function changeDirection(val) {

    // flex-direction
    let main = document.querySelector('#main');
    main.style.setProperty('flex-direction', val);
}

function changeJustify(val) {
    // justify-content
    let main = document.querySelector('#main');
    main.style.setProperty('justify-content', val);
}

function changeAlign(val) {
    // align-items
    let main = document.querySelector('#main');
    main.style.setProperty('align-items', val);
}