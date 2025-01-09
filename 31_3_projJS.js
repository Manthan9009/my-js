const clock = document.getElementById("clock");

setInterval(function(){
    clock.innerHTML = `${new Date().toLocaleTimeString()}`
},1000)