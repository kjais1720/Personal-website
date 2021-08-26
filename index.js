const animatedText=document.querySelectorAll(".animatedText")
const nav = document.querySelector("nav")
const navToggle = document.querySelector('.hamburger')

navToggle.addEventListener('click',()=>{
    nav.classList.toggle('active')
    navToggle.classList.toggle('is-active')
});

var prevScrollPos = window.pageYOffset;


window.onscroll = ()=>{

    navToggle.classList.remove('is-active')
    nav.classList.remove("active")

    var currentScrollPos = window.pageYOffset;
    if(currentScrollPos > 200){
        nav.classList.add("showBg");
    }
    else{
        nav.classList.remove("showBg");
    }
    if (prevScrollPos > currentScrollPos){
        nav.style.top='0'
    } else {
        nav.style.top='-200px';
    }
    prevScrollPos = currentScrollPos
}



animatedText.forEach(text =>{
    text.innerHTML = text.innerText
            .split('')
            .map((letter,idx) => `<span style="transition-delay:${idx * 100}ms;">${letter}</span>`)
            .join('');
    })

window.onload=toggle;
function toggle(){
    setTimeout(()=>{
        document.body.classList.add('loaded');
        setTimeout(()=>{
            animatedText.forEach(e=>{
                e.classList.toggle('active');
            })
        },400);
    },2500);
};

var paragraphExpand;
var paraSelector;
var expandButton;
var expandButtonSelector;
function expandParagraph(parent){
    paraSelector = '.card:nth-child('+parent+') .card-text p'
    expandButtonSelector = '.card:nth-child('+parent+') .card-text .read-more';

    expandButton = document.querySelector(expandButtonSelector);
    paragraphExpand = document.querySelector(paraSelector);
    console.log(paragraphExpand);
    paragraphExpand.classList.toggle('expand');
    if(expandButton.innerText === '...read more'){
        expandButton.innerText = 'read less';
    } else{
        expandButton.innerText = '...read more';
    }
}


ScrollOut({
// once:true,
// targets:['[data-scroll]','.card h2','.card::before'],
threshold:0.4
});