const parallax = document.getElementById('parallax');

window.addEventListener('scroll',function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY=offset*-1.2 + "px";
})

const body = document.querySelector('body');
const progress = document.querySelector('.progress');

window.addEventListener('scroll',()=>{
    let scrollValue = window.scrollY;
    let articleHeight = body.clientHeight-window.innerHeight;

    let percent = (scrollValue/articleHeight)*100;
    progress.style.width = percent + "%";
});