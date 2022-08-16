
  // Scroll Animation
  AOS.init({
    duration: 2000, // values from 0 to 3000, with step 50ms
    mirror: true, // whether elements should animate out while scrolling past them

  });



// Mobile Menu
const hamburger = document.querySelector('#menu');
menu.addEventListener('click', () => {
    menu.classList.add('open');
    menu.classList.remove('close');

})

$('#sidebar').Sidebar({
    openTriggerId:'menu',

    // header text
    header: 'Company Name',
  
    // header link
    headerRef: '#',
  
    // menu width
    width: 300,
  
    // background color
    sidebarColor: '#6151F9',
  
    // color of close button
    closeButtonColor: 'white',
  
    // color of header text
    headerColor: 'white',
  
    // text color
    textColor: 'white',
  
    // text alignment
    textAlign: 'left',
  
    // customize the close icon here
    closeButtonIcon: '&times;',
    
  });

  $('#sidebar-close').click(function(){
console.log('ready close');
menu.classList.remove('open');
menu.classList.add('close');

});
 


//comments carousel
$(document).ready(function(){
  var owl = $('.owl-carousel');

  owl.owlCarousel({
    items:1,
    center:true,
    autoWidth:false,
    autoplay:true,
    autoplayTimeout:3000,
  });
  
  // Go to the next item
$('.owl-next').click(function() {
  console.log('next');
  owl.trigger('next.owl.carousel',);
})
// Go to the previous item
$('.owl-prev').click(function() {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  console.log('prev');

  owl.trigger('prev.owl.carousel');
})

});


