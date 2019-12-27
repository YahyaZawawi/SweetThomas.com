// CAKE CLICKED
// we use fadeIn for make it ظاهر
// and we use fadeOut for make it يختفي
$(".cake__click").click(function() {
  $(".about__cake__div,.img__cake__div ,.price__cake__div,.cake__card__bottom").fadeIn();

  $(".about__ice__cream__div,.img__ice__cream__div,.price__ice__cream__div,.ice__cream__card__bottom").fadeOut();
  $(".about__donuts__div,.img__donuts__div,.price__donuts__div,.donuts__card__bottom").fadeOut();
  $(".about__macaron__div,.img__macron__div,.price__macaron__div,.macaron__card__bottom").fadeOut();
  $(".about__croissants__div,.img__croissant__div,.price__croissant__div,.croissant__card__bottom").fadeOut();
  $(".about__pops__div,.img__pops__div,.price__pops__div,.pops__card__bottom").fadeOut();
});

// ICE CREAM CLICKED

$(".ice__cream__click").click(function() {
  // we use fadeIn for make it ظاهر
  $(".about__ice__cream__div,.img__ice__cream__div,.price__ice__cream__div,.ice__cream__card__bottom").fadeIn();

  // and we use fadeOut for make it يختفي
  $(".about__cake__div,.img__cake__div ,.price__cake__div,.cake__card__bottom").fadeOut();
  $(".about__donuts__div,.img__donuts__div,.price__donuts__div,.donuts__card__bottom").fadeOut();
  $(".about__macaron__div,.img__macron__div,.price__macaron__div,.macaron__card__bottom").fadeOut();
  $(".about__croissants__div,.img__croissant__div,.price__croissant__div,.croissant__card__bottom").fadeOut();
  $(".about__pops__div,.img__pops__div,.price__pops__div,.pops__card__bottom").fadeOut();


  // here we change display proparty from !important none to flex
  $(".ice__cream__card__bottom").attr('style', 'display:flex !important');
  $(".cake__card__bottom").attr('style', 'display:none !important');
});




// DONUTS CLICKED
$(".donuts__click").click(function() {
  // we use fadeIn for make it ظاهر
  $(".about__donuts__div,.img__donuts__div,.price__donuts__div,.donuts__card__bottom").fadeIn();

// and we use fadeOut for make it يختفي
  $(".about__cake__div,.img__cake__div ,.price__cake__div,.cake__card__bottom").fadeOut();
  $(".about__ice__cream__div,.img__ice__cream__div,.price__ice__cream__div,.ice__cream__card__bottom").fadeOut();
  $(".about__macaron__div,.img__macron__div,.price__macaron__div,.macaron__card__bottom").fadeOut();
  $(".about__croissants__div,.img__croissant__div,.price__croissant__div,.croissant__card__bottom").fadeOut();
  $(".about__pops__div,.img__pops__div,.price__pops__div,.pops__card__bottom").fadeOut();

  // here we change display proparty from !important none to flex
  $(".donuts__card__bottom").attr('style', 'display:flex !important');
  $(".cake__card__bottom").attr('style', 'display:none !important');
});

// MACARONS
$(".macaron__click").click(function() {
  // we use fadeIn for make it ظاهر
  $(".about__macaron__div,.img__macron__div,.price__macaron__div,.macaron__card__bottom").fadeIn();

// and we use fadeOut for make it يختفي
  $(".about__cake__div,.img__cake__div ,.price__cake__div,.cake__card__bottom").fadeOut();
  $(".about__ice__cream__div,.img__ice__cream__div,.price__ice__cream__div,.ice__cream__card__bottom").fadeOut();
  $(".about__donuts__div,.img__donuts__div,.price__donuts__div,.donuts__card__bottom").fadeOut();
  $(".about__croissants__div,.img__croissant__div,.price__croissant__div,.croissant__card__bottom").fadeOut();
  $(".about__pops__div,.img__pops__div,.price__pops__div,.pops__card__bottom").fadeOut();

  // here we change display proparty from !important none to flex
  $(".macaron__card__bottom").attr('style', 'display:flex !important');
  $(".cake__card__bottom").attr('style', 'display:none !important');
});

// Croissant
$(".croissant__click").click(function() {
  // we use fadeIn for make it ظاهر
    $(".about__croissants__div,.img__croissant__div,.price__croissant__div,.croissant__card__bottom").fadeIn();

// and we use fadeOut for make it يختفي
  $(".about__cake__div,.img__cake__div ,.price__cake__div,.cake__card__bottom").fadeOut();
  $(".about__ice__cream__div,.img__ice__cream__div,.price__ice__cream__div,.ice__cream__card__bottom").fadeOut();
  $(".about__donuts__div,.img__donuts__div,.price__donuts__div,.donuts__card__bottom").fadeOut();
  $(".about__macaron__div,.img__macron__div,.price__macaron__div,.macaron__card__bottom").fadeOut();
  $(".about__pops__div,.img__pops__div,.price__pops__div,.pops__card__bottom").fadeOut();

  // here we change display proparty from !important none to flex
  $(".croissant__card__bottom").attr('style', 'display:flex !important');
  $(".cake__card__bottom").attr('style', 'display:none !important');
});

// POPS
$(".pops__click").click(function() {
  // we use fadeIn for make it ظاهر
  $(".about__pops__div,.img__pops__div,.price__pops__div,.pops__card__bottom").fadeIn();

// and we use fadeOut for make it يختفي
  $(".about__cake__div,.img__cake__div ,.price__cake__div,.cake__card__bottom").fadeOut();
  $(".about__ice__cream__div,.img__ice__cream__div,.price__ice__cream__div,.ice__cream__card__bottom").fadeOut();
  $(".about__donuts__div,.img__donuts__div,.price__donuts__div,.donuts__card__bottom").fadeOut();
  $(".about__macaron__div,.img__macron__div,.price__macaron__div,.macaron__card__bottom").fadeOut();
  $(".about__croissants__div,.img__croissant__div,.price__croissant__div,.croissant__card__bottom").fadeOut();
  
  // here we change display proparty from !important none to flex
  $(".pops__card__bottom").attr('style', 'display:flex !important');
  $(".cake__card__bottom").attr('style', 'display:none !important');
});
