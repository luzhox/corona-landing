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
   $(window).scroll(function() {
    if($(window).scrollTop()>70){
      $('.custom-menu-page').addClass('active')
    }else{
      $('.custom-menu-page').removeClass('active')

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
    var lugar = $(this).data('id')
    console.log('lugar',lugar)
    $('html,body').animate({
      scrollTop: $('#'+lugar).offset().top},
      'slow');
    window.digitalData.push ({
      action:{
      group:"Landing - Coronavirus",
      category:"Menú",
      name:"Clic",
      label:$(this).text().trim()
      },
      event:"trackAction"
     });


    })

    $('.corona-proteccion-text__btn a').click(function(){
         console.log($(this).text().trim())
    window.digitalData.push ({
      action:{
      group:"Landing - Coronavirus",
      category:"Sección – Canales Digitales",
      name:"Clic",
      label:$(this).text().trim(),
      },
      event:"trackAction"
     });
    })

$('.corona-dropdown').click(function(){
  $(this).toggleClass('active')
  $(this).siblings().removeClass('active')

})

$('.servicios-corona__btn').click(function(){
  var id=  $(this).data('id')
  $('#' + id).toggleClass('active')
  $(this).toggleClass('active')
})

$('.servicios-corona__item').click(function(){
  var url = $(this).data('url')
  location.replace(url)
  digitalData.push ({
    action:{
    group:"Landing - Coronavirus",
    category:"Sección – Canales Digitales",
    name:"Clic",
    label:$(this).find("p").text().trim()
    },
    event:"trackAction"
   });

})
$('.corona-proteccion-card__text a').click(function(){
  window.digitalData.push ({
    action:{
    group:"Landing - Coronavirus",
    category:"Sección – Canales Digitales",
    name:"Clic",
    label:$(this).text().trim()
    },
    event:"trackAction"
   });
})


$('.corona-proteccion-test__text a').click(function(){
  window.digitalData.push ({
    action:{
    group:"Landing - Coronavirus",
    category:"Sección – Cobertura",
    name:"Clic",
    label:"Ver Planes"
    },
    event:"trackAction"
   });
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

$('.sintomas-corona__test__text a').click(function(){
    window.digitalData.push ({
    action:{
    group:"Landing - Coronavirus",
    category:"Sección – Síntomas",
    name:"Clic",
    label:"Hacer Descarte"
    },
    event:"trackAction"
   });

})

$('.sintomas-corona__card .link').click(function(){
    window.digitalData.push ({
    action:{
    group:"Landing - Coronavirus",
    category:"Sección – Síntomas",
    name:"Clic",
    label:"Cuidado en casa"
    },
    event:"trackAction"
   });

})

$('.prevenir-corona__video').click(function(){
    window.digitalData.push ({
    action:{
    group:"Landing - Coronavirus",
    category:"Sección – Prevención",
    name:"Clic",
    label:"Ver Video"
    },
    event:"trackAction"
   });

})

$('.corona-dropdown .title').click(function(){
console.log($(this).parent().parent().data('parent'))
  if(!$(this).hasClass( "view" )){
    $(this).addClass('view')
    window.digitalData.push ({
      action:{
      group:"Landing - Coronavirus",
      category:"Sección - "  +  $(this).parent().parent().data('parent'),
      name:"Clic",
      label:$(this).text().trim()
      },
      event:"trackAction"
     });
  }
})

$('.returnToTop').click(function(){
  console.log()
  $('html,body').animate({
        scrollTop: 0},
        'slow');
    
})


$(window).scroll(function() {
  var scrollbarLocation = $(window).scrollTop()
  $(".custom-menu-page__btn").each(function() {
    var custom= $(this)[0]
    var id = $(this).data('id')
    if($('#'+id).offset()){
      var sectionOffset = $('#'+id).offset().top

    }
    if (sectionOffset <= scrollbarLocation) {
      $(this).addClass('active')
      var bar = document.getElementsByClassName('bar')[0]
      console.log('ancho',custom.clientWidth)
   bar.style.width = custom.clientWidth + 'px'
    bar.style.left =$(this).position().left + 'px'
      $(this).siblings().removeClass('active')
    }
  })
})