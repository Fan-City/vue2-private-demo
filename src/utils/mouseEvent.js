// 鼠标移动特效
document.addEventListener("mousemove", function (e) {
    let body = document.querySelector("body");
    let heart = document.createElement("span");
    heart.className = "mousemoveSpan";
    let x = e.clientX;
    let y = e.clientY;
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';

    let size = Math.random()*30;
    heart.style.height = size + 'px';
    heart.style.width = size + 'px';
    heart.style.transform = `rotate(${Math.random()*360}deg)`
    body.appendChild(heart);
    setTimeout(function(){
        body.removeChild(heart)
    },1000);
})