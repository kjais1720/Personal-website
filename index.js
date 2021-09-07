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
    },100);

};

var expandButton;
var paraHeight;
var containerSelector;
var container;

var expanded = false;

function expandParagraph(cardNumber){

    containerSelector = '.card:nth-child('+cardNumber+') .card-text .overview'

    container = document.querySelector(containerSelector);
    expandButton = container.nextElementSibling;

    container.classList.toggle('expand');
    paraHeight= container.children[0].offsetHeight;


    if(!expanded){
        container.style.height=paraHeight+25+'px';
        expanded=true;
    } else{
        expanded=false;
        container.style.height=5.6+'rem';
    }


    if(expandButton.innerText === '...read more'){
        expandButton.innerText = 'read less';
    } else{
        expandButton.innerText = '...read more';
    }

}



ScrollOut({
    once:true,
    threshold:0.4
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    allowTouchMove:true,
    effect:"cards",
    // autoplay:{
    //     delay:3000
    // },
    grabCursor:true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });