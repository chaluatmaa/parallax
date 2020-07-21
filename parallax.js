const parallax = document.getElementById('parallax');

window.addEventListener('scroll',function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY=offset*-1.2 + "px";
})

const body = document.querySelector('body');
const progress = document.querySelector('.progress');

progress.style.height = '4px';
progress.style.background = `linear-gradient(to right, red , orange , yellow , green , white)`;
progress.style.position = 'fixed';
progress.style.bottom = '0px';
progress.style.left = '0px';
window.addEventListener('scroll',()=>{
    let scrollValue = window.scrollY;
    let articleHeight = body.clientHeight-window.innerHeight;

    let percent = (scrollValue/articleHeight)*100;
    progress.style.width = percent + "%";
});
