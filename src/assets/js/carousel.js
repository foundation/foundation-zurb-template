import $ from 'jquery';

import 'owl.carousel2';

$(document).ready(function() {
  $('.carousel-testimonial.owl-carousel').owlCarousel({
    loop: true,
    items: 1,
    nav: true,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    // animateOut: 'fadeOut',
    // animateIn: 'fadeIn',
    dots: true
  });

  $('.carousel-card-section-mobile.owl-carousel').owlCarousel({
    loop: true,
    items: 1,
    nav: true,
    center: true,
    stagePadding: 25,
    margin: 10,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    // animateOut: 'fadeOut',
    // animateIn: 'fadeIn',
    dots: true
  });

  $('.carousel-card-section.owl-carousel').owlCarousel({
    loop: true,
    items: 3,
    nav: true,
    margin: 15,
    autoplay: false,
    dots: true,
    navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="70.4" height="70.4" viewBox="0 0 70.4 70.4"><g id="Group_5972" data-name="Group 5972" transform="translate(15738 -7040)"><circle id="Ellipse_73" data-name="Ellipse 73" cx="35.2" cy="35.2" r="35.2" transform="translate(-15738 7040)" fill="#f9f9f9"/><path id="Path_800" data-name="Path 800" d="M-15714.65,7034.283l-15.5,15.5,15.5,15.5" transform="translate(19.803 24.994)" fill="none" stroke="#000" stroke-width="1"/></g></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="70.4" height="70.4" viewBox="0 0 70.4 70.4"><g id="Group_5972" data-name="Group 5972" transform="translate(-15667.6 7110.4) rotate(180)"><circle id="Ellipse_73" data-name="Ellipse 73" cx="35.2" cy="35.2" r="35.2" transform="translate(-15738 7040)" fill="#f9f9f9"/><path id="Path_800" data-name="Path 800" d="M-15714.65,7034.283l-15.5,15.5,15.5,15.5" transform="translate(19.803 24.994)" fill="none" stroke="#000" stroke-width="1"/></g></svg>'],
    responsive:{
      0:{
        items:1,
        nav:true,
        center: true,
        stagePadding: 25
      },
      641: {
        items:3,
        nav:true,
        center: false
      },
    }
  });
});
