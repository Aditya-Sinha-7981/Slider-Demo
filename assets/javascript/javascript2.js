const sliderContainer = document.querySelectorAll(".container") 

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    effect: "coverflow", 
    coverflowEffect: {
        rotate: 41,
        depth: 150,        
        stretch: 0,
        scale: 1
    },
  
    pagination: {
      el: '.swiper-pagination',
    },  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
});

for (let i = 0; i < sliderContainer.length; i++) {
    let children = sliderContainer[i].childElementCount

    if(children < 10){
        console.log(children)
        sliderContainer[i].style['overflow-y'] = 'auto';
        sliderContainer[i].style['align-content'] = 'center';
    }
}