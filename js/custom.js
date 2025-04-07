window.addEventListener("DOMContentLoaded", () => {
  // Home Title Box : GSAP
  const title = gsap.timeline();
  title.from(".title-box h1", {
    y: 40,  
    opacity: 0,
    duration: 1,  
    ease: "power2.out",
    stagger: 0.4 
  });
  title.from(".title-box p", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  }, "-=0.2");     



  // Image Boxs : Scroll Trigger
  gsap.registerPlugin(ScrollTrigger);

  const positions = [
    { x: -500, y: -270 },
    { x: -20, y: -290 },
    { x: 500, y: -230 },
    { x: -450, y: 270 },
    { x: 30, y: 290 },
    { x: 450, y: 250 }
  ];

  positions.forEach((pos, index) => {
    gsap.to(`.img-box:nth-child(${index + 1})`, {
      scrollTrigger: {
        trigger: ".image-boxs",
        start: "top 55%",
        toggleActions: "play none none none"
      },
      x: pos.x,
      y: pos.y,
      scale: 1,
      opacity: 1,
      duration: 2,
      ease: "power3.out"
    });
  });



  // Clone-item
  $('.clone-item').mouseenter(function () {
    $('.clone-item, .clone-item .icon, .clone-item .icon svg').removeClass('active');
    $(this).addClass('active').find('.icon, svg').addClass('active');
  });

  $('.clone-item').mouseleave(function () {
    $(this).removeClass('active').find('.icon, svg').removeClass('active');
  });



  // Renewal-item
  const items = document.querySelectorAll('.renewal-item');
  const images = document.querySelectorAll('.renewal-image img');

  items.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
      images.forEach(img => img.style.opacity = '0');
      images[index].style.opacity = '1';
    });
  }); 


  // Process - Scroll Trigger
  const ProcessItem = gsap.utils.toArray('.process-item');
  const scrollTween = gsap.to(ProcessItem, {
    xPercent: -100 * (ProcessItem.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: '.process-content',
      pin: true,
      scrub: 1.5,
      start: 'top -5%',
      end: '500%',
      markers: false
    }
  })


  // Contat - Scroll Trigger
  gsap.from(".contact-title", {
    scrollTrigger: {
      trigger: ".contact-title",
      start: "top 60%",
      toggleActions: "play none none none"
    },
    x: -50,
    opacity: 0,
    duration: 2,
    ease: "power3.out",
  });

  gsap.from(".contact-right", {
    scrollTrigger: {
      trigger: ".contact-content",
      start: "top 60%",
      toggleActions: "play none none none",
    },
    y: -50,
    opacity: 0,
    duration: 1.2,
    delay: 0.5,
    ease: "power2.out"
  });

});

