


var fan = document.querySelector('.fan');
var btn = document.querySelector('#btn');

var rotationAngle = 0; 
var speed = 0; 
var maxSpeed = 10; 
var isFanOn = false;
var animationFrame;

function rotateFan() {
    if (isFanOn) {
        if (speed < maxSpeed) {
            speed += 0.2; 
        }
    }

    rotationAngle += speed;
    fan.style.transform = `rotate(${rotationAngle}deg)`; 

    animationFrame = requestAnimationFrame(rotateFan);
}

function stopFan() {
    
    if (speed > 0.1) {  
        speed *= 0.98;  
        rotationAngle += speed;
        fan.style.transform = `rotate(${rotationAngle}deg)`;
        animationFrame = requestAnimationFrame(stopFan);
    } else {
        speed = 0; 
        cancelAnimationFrame(animationFrame); 
    }
}

btn.addEventListener("click", function () {
    if (!isFanOn) {
        btn.innerHTML = "OFF";
        btn.classList.add("on");
        isFanOn = true;
        rotateFan(); 
    } else {
        btn.innerHTML = "ON";
        btn.classList.remove("on");
        isFanOn = false;
        stopFan(); 
    }
});

