// navbar
(function($) {
    $(function() {
      $('nav ul li > a:not(:only-child)').click(function(e) {
        $(this)
          .siblings('.nav-dropdown')
          .slideToggle()
        $('.nav-dropdown')
          .not($(this).siblings())
          .hide()
        e.stopPropagation()
      })
      $('html').click(function() {
        $('.nav-dropdown').hide()
      })
      // Toggle open and close nav styles on click
      $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
      });
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active')
      })
    })
  })(jQuery)



  // gsap Animation

  var tl = gsap.timeline();
 

  tl.from(".brand , .nav-list",
  {
    y:"-200",
    duration:1,
    delya:0.5,
    stagger:0.3
  }
  );
  tl.from(".picture-z ,.shape1",{
    duration:1,
    delya:0.2,
    scale:1.5,
    opeacity:0,
    stagger:0.3

  });
  // tl.from(".header-box1 .header-font-text p ,.header-box1 .header-font-text h1 ,.header-box1 .header-font-text  .box-header-icon",{
  //   scale:0,
  //   duration:2,
  //   delya:0.2,
  //   opeacity:0,
  //   stagger:0.5

  // });


  gsap.from(".header-box1 .header-font-text p ,.header-box1 .header-font-text h1 ,.header-box1 .header-font-text  .box-header-icon",{
    // scale:0,
    duration:2,
    delya:0.2,
    opeacity:0,
    stagger:1,
    y:500

  });
  gsap.from(".card",
  {

    duration:2,
    delya:0.2,
    scale:0,
    stagger:0.8,
    scrollTrigger:{
      trigger:".card",
      scroll:"body",
    }
  }
  );


  gsap.from(".img-box-img > img",
  {

    duration:2,
    delya:0.2,
    scale:3,
    stagger:0.8,
    trigger:true,
    scrollTrigger:{
      trigger:".img-box-img",
      // start:"top-20",
      scroll:"body",
    }
  }
  );