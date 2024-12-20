const sideHeader = document.querySelector('.container-main-side-header');
const cards = document.querySelector('.container-main-side-cards');

cards.addEventListener('scroll', ()=>{
    if(cards.scrollTop > 0){
        sideHeader.classList.add('scroll-shadow');
    }else{
        sideHeader.classList.remove('scroll-shadow');
    }
})
