
const width = window.screen.width
const height = window.screen.height

const LEFT =    37
const UP =      38
const RIGHT =   39
const DOWN =    40
const LAUNCH =  32
const VEL =     20
const VEL_M =   10

var pos_hn =  (width / 2)
var pos_vn =  height - 300
var pos_hm1 = pos_hn + 10
var pos_hm2 = pos_hn + 75

var pos_vm =  height - 270
var sec=0, min=0, hou=0
var life = 3
var alien = 0
var pause = false
var missile = 0
var flag1 = 0
var flag2 = 0;


function loadGame() {

    let plane = document.querySelector("#plane");
    let missile1 = document.querySelector("#missile1");
    let missile2 = document.querySelector("#missile2");

    plane.style.top = pos_vn + "px"
    plane.style.left = pos_hn + "px"

    missile1.style.top = pos_vm + "px"
    missile1.style.left = pos_hm1 + "px"

    missile2.style.top = pos_vm + "px"
    missile2.style.left = pos_hm2 + "px"

    document.querySelector("#time").textContent = mountTime();
    document.querySelector("#life").textContent = "LIFE: " + life;
    document.querySelector("#alien").textContent = "ALIEN: " + alien;
    
    setInterval(() => {

        if(!pause) {
            document.querySelector("#time").textContent = mountTime()
        }

    }, 1000)
}

function mountTime() {

    let txt;
    sec++

    if(sec == 60) {
        min++
        if(min == 60) {
            hou++
            min = 0;
        }
        sec = 0
    }

    if(hou < 10) txt = "0" + hou + ":"
    else txt = hou + ":"
    if(min < 10) txt += "0" + min + ":"
    else txt += min + ":"
    if(sec < 10) txt += "0" + sec
    else txt += sec

    return txt
}

function press(e) {


    let plane = document.querySelector("#plane");
    let missile1 = document.querySelector("#missile1");
    let missile2 = document.querySelector("#missile2");

    switch(e.keyCode) {

        case 80 || 112:  
            setPause()
            break
        
        case LEFT:
            if(pos_hn >= 340 && !pause) {
                pos_hn -= VEL 
                if(flag1 == 0) pos_hm1 -= VEL
                if(flag2 == 0) pos_hm2 -= VEL  
            }
            break
        
        case RIGHT:
            if(pos_hn <= 1200 && !pause) {
                pos_hn += VEL
                if(flag1 == 0) pos_hm1 += VEL  
                if(flag2 == 0) pos_hm2 += VEL  
            }
            break
        
        case LAUNCH:
            if(flag2 == 0 && !pause) {
                launch()
            }
            break
    }

    if(!pause) {
        plane.style.left = pos_hn + "px"
        missile1.style.left = pos_hm1 + "px"
        missile2.style.left = pos_hm2 + "px"
    }
}

function setPause() { 
    
    let p = document.querySelector("#pause");
    pause = !pause

    if(pause) p.style.visibility = "visible"
    else p.style.visibility = "hidden"
}

function launch() {

    let mis
    let id
    let pos = pos_vm
    
    if(flag1 == 0) {
        mis = document.querySelector("#missile1");
        flag1 = 1;
    }
    else if(flag2 == 0) {
        mis = document.querySelector("#missile2")
        flag2 = 1;
    }

    id = setInterval(() => {
     
        pos -= VEL_M  
        mis.style.top = pos + "px"

        if(pos < -10) {
            restartMissile()
            clearInterval(id)
        }

    }, 10)

}

function restartMissile() {

    let mis1
    let mis2
    
    if(flag2 == 1) {

        mis1 = document.querySelector("#missile1");
        pos_hm1 = pos_hn + 10
        mis1.style.left = pos_hm1 + "px"
        mis1.style.top = pos_vm + "px"

        mis2 = document.querySelector("#missile2");
        pos_hm2 = pos_hn + 75
        mis2.style.left = pos_hm2 + "px"
        mis2.style.top = pos_vm + "px"

        flag1 = 0
        flag2 = 0
    }
}

// https://www.w3schools.com/charsets/ref_html_ascii.asp