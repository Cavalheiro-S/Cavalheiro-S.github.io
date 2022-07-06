const swiper = new Swiper('.carousel', {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides:true,
    centeredSlidesBounds:true,
    loop: true,
    autoplay:{
      delay: 4000,
      disableOnInteraction:false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
      960:{
        slidesPerView: 2,
        spaceBetween: 40
      }
    }
  });


const listenerCarousel = () => {

}

export default listenerCarousel;