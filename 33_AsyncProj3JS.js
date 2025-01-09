const random_color = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let index = 0; index < 6; index++) {
        color+= hex[Math.floor(Math.random()*16)]
    }
    return color;
}

let intervalId;
const startChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeBGcolor,1000)
    }

    function changeBGcolor(){
        document.body.style.backgroundColor = random_color()   
    }
}
const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null   // To clean Code
}

document.getElementById('start').addEventListener('click',startChangingColor)
document.getElementById('stop').addEventListener('click',stopChangingColor)