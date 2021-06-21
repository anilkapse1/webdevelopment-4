$(document).ready(function(){
  $(".menu_trigger").click(function(){
      $(".mainnav").slideToggle();
      $(this).toggleClass('change');
    });

    $(".dash").click(function(){
      $("#dashboard").show();
      $("#webdesign").hide();
      $(".dash").css("color","#59c8bf");
      $(".web").css("color","#b5b5b5");
    });

    $(".web").click(function(){
      $("#dashboard").hide();
      $("#webdesign").show();
      $(".dash").css("color","#b5b5b5");
      $(".web").css("color","#59c8bf");
    });

// code for heroimage start2
$('.slick-dots').slick({
 slidesToShow: 3,
 slidesToScroll: 3,
 arrows: false,
 // fade: true,
 asNavFor: '.heroimage',
 focusOnSelect: true
});

  $('.heroimage').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    //asNavFor: '.slick-dots',
    dots:false,
    autoplay:true,
    autoplaySpeed: 2000,
    focusOnSelect: true
   });
   $(".slick-track .slick-slide[data-slick-index='"+0+"']").addClass("sa");

   $('.heroimage').on('afterChange', function(event, slick, currentSlide, nextSlide){
     $(".slick-track .slick-slide").removeClass("sa");
     $(".slick-track .slick-slide[data-slick-index='"+currentSlide+"']").addClass("sa");
  });

// code for heroimage end


// code for team member section start
  $('.slider-for').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   fade: true,
   asNavFor: '.myslider'
 });

$('.myslider').slick({
infinite: true,
asNavFor: '.slider-for',
focusOnSelect: true,
speed: 500,
slidesToShow: 5,
slidesToScroll: 1,
autoplay:true,
responsive: [
  {
    breakpoint: 2500,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true

    }
  },
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true

    }
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true

    }
  },

  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]
});
// $('.myslider').on('afterChange', function(event, slick, currentSlide, nextSlide){
//   $(".slick-slide").addClass("pstn");
//   $(".slick-current").removeClass("pstn");
  // $(".slick-slide img").removeClass("sa",{duration:200});
  // $(".slick-current img").addClass("sa");
// });

// code for team member section end

// code for image loader end
function preload(arrayOfImages) {
  $(arrayOfImages).each(function(){
    $('<img/>')[0].src = this;
      });
  }
  preload([
    'images/m1.jpg',
    'images/m2.jpg',
    'images/m3.jpg',
    'images/m4.jpg',
    'images/m5.jpg',
  ]);
});
// code for image load end
