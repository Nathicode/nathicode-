document.body.onload = () => {
    document.body.style.animationName = "body"
}
document.body.onscroll = function(){
    document.querySelector(".scr").style.animationName += "scroll"
    document.querySelector(".scrs").style.animationName = "scroll"
}
window.scrollTo(300, 500);