const sliderContainer = document.querySelectorAll(".container")



const swiper = new Swiper('.swiper', {
    // Optional parameters  mobile(1.5), tablet(2.5), desktop(3)
    loop: true,
    slidesPerView: 1.5,
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

    breakpoints:{
      769:{
        slidesPerView: 3,
      },
      426:{
        slidesPerView: 2.5,
      }
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