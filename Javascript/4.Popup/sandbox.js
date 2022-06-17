
const button = document.querySelector('button');
const popup_w = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');
button.addEventListener('click',()=>{
    console.log("clicked");
    popup_w.style.display = 'block';
});
close.addEventListener('click',()=>{
    popup_w.style.display = 'none';
});

popup_w.addEventListener('click',()=>{
    popup_w.style.display = 'none';
});
