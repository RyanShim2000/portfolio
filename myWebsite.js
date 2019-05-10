// Wrap every letter in a span
$('.ml6 .letters').each(function(){
  $(this).html($(this).text().replace(/\S+/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["2.3em", 0],
    translateZ: 0,
    duration: 1250,
    delay: function(el, i) {
      return 100 * i;
    }
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });




anime({
  targets: '.loop-alternate-infinity',
  translateY: 15,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine'
});


$("#downarrow").click(function(){
  $("html, body").delay(100).animate({scrollTop: $('#scrollto').offset().top-32 }, 2000);


});







