$ (function () {
  // modal chat button start
    $(window).scroll(function () {
      let scrollup = $(window).scrollTop()
      if (scrollup > 800) {
      $(`#menu`).addClass(`menufixed`)
      $(`.upbutton`).fadeIn()
      // scrollUp start
      $(`.scrollup`).slideDown()
      // scrollup end
      } else {
      $(`#menu`).removeClass(`menufixed`)
      $(`.upbutton`).fadeOut()
      // scrollup start
      $(`.scrollup`).slideUp()
      // scrollup end
      }
    })
    $(`.upbutton`).scroll (function () {
      $(`html,body`).animate({
        scrollTop:0 
      },1200)
     })
  // modal chat button end

  // SCROLL UP START
 $(`.scrollup`).click (function () {
    
  $(`html,body`).animate({
      scrollTop:0
  },800)

 })
  // SCROLL UP END

    // SCREEN MOOD START
    $(window).scroll(function () {
      let scrollup = $(window).scrollTop()
      
      if (scrollup > 1000) {

          $(`.screenMood `).addClass(`screenfixed`)
          $(`.display`).fadeIn()
      } else {
          $(`.screenMood `).removeClass(`screenfixed`)
          $(`.display`).fadeOut()
      }
  })
    // SCREEN MOOD END

  //banner slick slider  start
    $('#banner').slick({
      arrows:false,
      dots:true, 
      dotsClass: "banner_slider_dot container",
      autoplay: true,
      autoplaySpeed: 1600,
      slidesToScroll: 1,
    });
  //banner slick slider  end

  // tooltip start
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
  // tooltip end

  // beauty cream slick slider start
  $('#arrivSlider').slick({
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow:".beautyleft",
    nextArrow:".beautyright",
    responsive: [
      {
      breakpoint: 991,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows:false,
        }
      },
      {
      breakpoint: 767,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows:false,
        }
      },
      {
      breakpoint: 575,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        mobileFirst:true,
        }
      }
    ]
  });

  // beauty cream slick slider end

  // DEALS DAYS START
  // COUNT DOWN START

  $(".timer")
  .countdown("2033/07/16", function(event) {
    $(`.days`).html(event.strftime('%D '));
    $(`.hour`).html(event.strftime(' %H'));
    $(`.min`).html(event.strftime('%M'));
    $(`.sec`).html(event.strftime('%S'));
  });
  // COUNT DOWN END

  //  deals slick slider start
  $('#dealSlider').slick({
  arrows:false,
  dots:true, 
  dotsClass: "deal_slider_dot ",
  autoplay: true,
  autoplaySpeed: 1500,
  slidesToScroll: 1,
  responsive: [
    {
    breakpoint: 767,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      mobileFirst:true,
      }
    },
  ]
  });
//  deals slick slider end
// DEALS DAYS END

 // LATEST NEWS START
  $('#latestSlider').slick({
  arrows:false,
  dots:true, 
  dotsClass: "newsBox_slider_dot container",
  autoplay: true,
  autoplaySpeed: 1600,
  slidesToShow: 4,
  slidesToScroll: 4,
  variableWidth: false,
  centerPadding: '0px',
  responsive: [
    {
    breakpoint: 768,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      mobileFirst:true,
      centerPadding: '0px',
      }
    },
    {
    breakpoint: 575,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      mobileFirst:true,
      }
    },
    {
    breakpoint: 768,
      settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows:false,
      mobileFirst:true,
      }
    },
  ]
  });
  // LATEST NEWS END

  // SPECIAL VIDEO VENOBOX START
  new VenoBox({
    selector: ".venoBox"
  });
  // SPECIAL VIDEO VENOBOX END
 

// ********************* ABOUT US PAGE START / 2nd PAGE ********************************
// ABOUT PAGE COUNTER UP START
// LINE NUMBER -- 492 --
// ABOUT PAGE COUNTER UP END

// LEADERSHIP START
// LEADER SLIDER START
 $('#leaderSlider').slick({
  speed: 800,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow:".leaderleft",
  nextArrow:".leaderright",
  centerPadding:"0px",
  responsive: [
    {
    breakpoint: 991,
      settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows:false,
      }
    },
    {
    breakpoint: 767,
      settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows:false,
      }
    },
    {
    breakpoint: 575,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      mobileFirst:true,
      }
    }
  ]
 });
// LEADER SLIDER END
// LEADERSHIP END

// CUSTOMER START
 $('#customerBoxSlider').slick({
  arrows:false,
  dots:true, 
  dotsClass: "customerBox_slider_dot container",
  autoplay: true,
  autoplaySpeed: 1600,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: false,
  centerPadding: '0px',
 });
// CUSTOMER END

 // AEYOR ABOUT INSTAGRAM START
 $('#aboutInstaSlider').slick({
  arrows:false,
  dots:true, 
  dotsClass: "instaBox_slider_dot container",
  autoplay: true,
  autoplaySpeed: 1600,
  slidesToShow: 6,
  slidesToScroll: 6,
  variableWidth: false,
  centerPadding: '0px',
  responsive: [
    {
    breakpoint: 768,
      settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows:false,
      mobileFirst:true,
      centerPadding: '0px',
      }
    },
    {
    breakpoint: 575,
      settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows:false,
      mobileFirst:true,
      centerPadding: '0px',
      }
    },
    {
    breakpoint: 992,
      settings: {
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows:false,
      mobileFirst:true,
      centerPadding: '0px',
      }
    },
  ]
 });
  // AEYOR ABOUT INSTAGRAM END
// ********************* ABOUT US PAGE END / 2nd PAGE ********************************
});
// ********************* SHOP - DETAILS PAGE START / 4TH PAGE ********************************

// QUANTITY ARROW START

// UP BUTTON STARTS
let upbtn = document.querySelector(`.quantity-up`);
let output = document.querySelector(`.output`);
function upResult() {
  let upNewValue = Number(output.value);
  upNewValue = upNewValue + 1;
  output.value = upNewValue;
}
if(upbtn!= null){upbtn.addEventListener(`click`, upResult)}

// UP BUTTON ENDS

// // DOWN BUTTON STARTS
let downbtn = document.querySelector(`.quantity-down`)
function downResult() {
  let downNewValue =Number(output.value);
  if (downNewValue == 0) {
  return false
  }
  downNewValue = downNewValue - 1;
  output.value = downNewValue;
}
if(downbtn!= null){downbtn.addEventListener(`click`, downResult)}
// // DOWN BUTTON ENDS

// QUANTITY ARROW END

// LEATHER JACKET SLIDER START
$('#leatherSlider').slick({
  arrows:true,
  fade: true,
  asNavFor: '#sub-leatherSlider',
  prevArrow:".jacketleft",
  nextArrow:".jacketright",
});
// sub slider start
$('#sub-leatherSlider').slick({
  arrows:false,
  slidesToScroll: 1,
  slidesToShow:5,
  asNavFor: '#leatherSlider',
  centerPadding:"0px",
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
    breakpoint: 991,
    settings: {
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows:false,
    }
    },
    {
    breakpoint: 767,
    settings: {
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows:false,
    }
    },
    {
    breakpoint: 575,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    mobileFirst:true, 
    }
    }
  ]
});
// sub slider end
// LEATHER JACKET SLIDER END

// RELETED SLIDER START
$('#reletedSlider').slick({
  speed: 800,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows:true,
  prevArrow:".beautyleft",
  nextArrow:".beautyright",
  responsive: [
    {
    breakpoint: 991,
      settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows:false,
      }
    },
    {
    breakpoint: 767,
      settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows:false,
      }
    },
    {
    breakpoint: 575,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      mobileFirst:true,
      }
    }
  ]
});
// RELETED SLIDER END
// ********************* SHOP - DETAILS PAGE END / 4TH PAGE **********************************

// ********************* CART PAGE START / 6TH PAGE ********************************
// CART TABLE ARROWS START
// UP BUTTON STARTS

let cartupbtn = document.querySelector(`.cart-quantity-up`);
let cartoutput = document.querySelector(`.cart-output`);

function cartupResult() {
    let cartupNewValue = Number(cartoutput.value);
    cartupNewValue = cartupNewValue + 1;
    cartoutput.value = cartupNewValue;
}

if(cartupbtn!= null){cartupbtn.addEventListener(`click`, cartupResult)}
// UP BUTTON ENDS

// // DOWN BUTTON STARTS


let cartdownbtn = document.querySelector(`.cart-quantity-down`)


function cartdownResult() {
    let downNewValue =Number(cartoutput.value);

    if (downNewValue == 0) {
        return false
    }

    downNewValue = downNewValue - 1;
    cartoutput.value = downNewValue;
}

if(cartdownbtn!= null){cartdownbtn.addEventListener(`click`, cartdownResult)}


// // DOWN BUTTON ENDS

// CART TABLE ARROWS END
// ********************* CART PAGE END / 6TH PAGE ********************************

// Dark Mood Strats

// let displaymoodbtn = document.querySelector(`.display`)
// let bodybtn = document.querySelector(`body`)

// let lightbtn = document.querySelector(`.light`)

// function moodresult() {
//     bodybtn.classList.toggle(`displayMood`)

//     if (bodybtn.classList.contains(`displayMood`)== false) {
        
        
//         lightbtn.innerHTML= `<i class="fa-solid fa-sun"></i>`

//     } else {
        
//         lightbtn.innerHTML= `<i class="fa-solid fa-moon"></i></i>`
//     }
// }
// if(displaymoodbtn!= null){displaymoodbtn.addEventListener(`click`, moodresult)}


// Dark Mood End
 // pre loader start
 $(window).on(`load`, function () {
  $(`.preload`).fadeOut()
});
// pre loader end
// ********************* ABOUT US PAGE START / 2nd PAGE ********************************
// ABOUT PAGE COUNTER UP START
$('.couterUpAbout').spincrement()
// ABOUT PAGE COUNTER UP END
