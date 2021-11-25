const animatedText=document.querySelectorAll(".animatedText")
const nav = document.querySelector("nav")
const navToggle = document.querySelector('.hamburger')
const blob = document.querySelector('.blob');

navToggle.addEventListener('click',()=>{
    nav.classList.toggle('active')
    navToggle.classList.toggle('is-active')
    blob.classList.toggle('show')
});

var prevScrollPos = window.pageYOffset;


window.onscroll = ()=>{

    navToggle.classList.remove('is-active')
    nav.classList.remove("active")
    blob.classList.remove('show')

    var currentScrollPos = window.pageYOffset;
    if(currentScrollPos > 200){
        nav.classList.add("showBg");
    }
    else{
        nav.classList.remove("showBg");
        blob.classList.remove('show');
    }
    if (prevScrollPos > currentScrollPos){
        nav.style.top='0'
    } else {
        nav.style.top='-200px';
        blob.classList.remove('show');
    }
    prevScrollPos = currentScrollPos
}



animatedText.forEach(text =>{
    text.innerHTML = text.innerText
            .split('')
            .map((letter,idx) => `<span style="transition-delay:${idx * 100}ms;">${letter}</span>`)
            .join('');
    })


// animatedText.forEach(text => text.style.opacity=0);

window.onload=toggle;
function toggle(){
    setTimeout(()=>{
        document.body.classList.add('loaded');
        // animatedText[0].classList.add('active');
        setTimeout(()=>{
            animatedText.forEach(e=>{
                    e.classList.add('active');
                })
            // animatedText[1].classList.add('active');
            // setTimeout(()=>animatedText[1].classList.add('active'),1000);
            // typeText(animatedText[0]);
            // typeText(animatedText[1]);
        },400);
    },200);

};

//Render text like a typewriter
function typeText(text){
    const translatedText = text.innerText;
    text.innerHTML = '';
    text.style.opacity = 1;
    var counter=0;
    var finalText='';
    
    const typing = setInterval(()=>{
        if(counter<translatedText.length){
            finalText = translatedText.slice(0,counter+1);
            text.innerHTML = finalText;
            counter++;
        } else{
            clearInterval(typing);
        }
    },100);
}

//To add the function to expand the paragraph
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
        container.style.height=4.2+'rem';
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
    direction: 'horizontal',
    loop: true,
    allowTouchMove:true,
    effect:"cards",
    grabCursor:true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  
  });