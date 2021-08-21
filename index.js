const animatedText=document.querySelectorAll(".animatedText")


animatedText.forEach(text =>{
    text.innerHTML = text.innerText
            .split('')
            .map((letter,idx) => `<span style="transition-delay:${idx * 100}ms;">${letter}</span>`)
            .join('');
    })

// setTimeout(() => {
//     animatedText.forEach(e=>{
//         e.classList.toggle('active');
//     })
// }, 1000);

function toggle(){
    animatedText.forEach(e=>{
        e.classList.toggle('active');
    })
}