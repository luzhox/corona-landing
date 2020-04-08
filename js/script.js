
   var widthActic = $('.custom-menu-page__btn.active')
   var bar = $('.bar')
   bar.css('width',widthActic + 'px')
   bar.css('left',$('.custom-menu-page__btn.active').position().left + 'px')

   $( window ).on( "load", function() {
    if(window.location.hash){
      $('html,body').animate({
        scrollTop: $(window.location.hash).offset().top},
        'slow');
    }
   })


  if (window.matchMedia("(min-width: 1024px)").matches) {
    $('.custom-menu-page__btn').hover(function(e){
      var bar = document.getElementsByClassName('bar')[0]
      bar.style.width = e.target.clientWidth + 'px'
      bar.style.left = e.target.getBoundingClientRect().left + 'px'
    },function(e){
      var widthActic = document.querySelector('.custom-menu-page__btn.active')
      .clientWidth
    var bar = document.getElementsByClassName('bar')[0]
    bar.style.width = widthActic + 'px'
    bar.style.left =$('.custom-menu-page__btn.active').position().left + 'px'
    })  }
    $('.custom-menu-page__btn').click(function(e){
      document.getElementsByClassName('custom-menu-page__btn active')[0]
      .classList.remove('active')
    e.target.classList.add('active')
    })

$('.corona-dropdown').click(function(){
  $(this).toggleClass('active')
  $(this).siblings().removeClass('active')

})

$('.custom-menu-page__btn').click(function(){
  var lugar = $(this).data('id')
  console.log('lugar',lugar)
  $('html,body').animate({
    scrollTop: $('#'+lugar).offset().top},
    'slow');
})


$('.servicios-corona__btn').click(function(){
  var id=  $(this).data('id')
  $('#' + id).toggleClass('active')
  $(this).toggleClass('active')
})

$('.servicios-corona__item').click(function(){
  var url = $(this).data('url')
  location.replace(url)
})

$('.corona-btn-ver-preguntas').click(function(){
  var id=  $(this).data('id')
  $('#' + id).toggleClass('active')
  $(this).toggleClass('active')
})


window.addEventListener('resize', function(){
  if (window.matchMedia("(min-width: 1024px)").matches) {
    var bar = $('.bar')
    bar.css('width',widthActic + 'px')
    bar.css('left',$('.custom-menu-page__btn.active').position().left + 'px')

  }
});
