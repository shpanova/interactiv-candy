$(document).ready(function() {
  console.log( 'готов!' );

    /* _________________ цветные квадраты ___________________ */

    $(".move-area").mousemove(function(event) {
      let eye = $(".eye");
      let x = (eye.offset().left) + (eye.width() / 2);
      let y = (eye.offset().top) + (eye.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let eye1 = $(".eye1");
      let x = (eye1.offset().left) + (eye1.width() / 2);
      let y = (eye1.offset().top) + (eye1.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye1.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let eye2 = $(".eye2");
      let x = (eye2.offset().left) + (eye2.width() / 2);
      let y = (eye2.offset().top) + (eye2.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye2.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let eye3 = $(".eye3");
      let x = (eye3.offset().left) + (eye3.width() / 2);
      let y = (eye3.offset().top) + (eye3.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye3.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let eye4 = $(".eye4");
      let x = (eye4.offset().left) + (eye4.width() / 2);
      let y = (eye4.offset().top) + (eye4.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye4.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let eye5 = $(".eye5");
      let x = (eye5.offset().left) + (eye5.width() / 2);
      let y = (eye5.offset().top) + (eye5.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye5.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let eye6 = $(".eye6");
      let x = (eye6.offset().left) + (eye6.width() / 2);
      let y = (eye6.offset().top) + (eye6.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye6.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let eye7 = $(".eye7");
      let x = (eye7.offset().left) + (eye7.width() / 2);
      let y = (eye7.offset().top) + (eye7.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye7.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let eye8 = $(".eye8");
      let x = (eye8.offset().left) + (eye8.width() / 2);
      let y = (eye8.offset().top) + (eye8.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye8.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let eye9 = $(".eye9");
      let x = (eye9.offset().left) + (eye9.width() / 2);
      let y = (eye9.offset().top) + (eye9.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye9.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let eye10 = $(".eye10");
      let x = (eye10.offset().left) + (eye10.width() / 2);
      let y = (eye10.offset().top) + (eye10.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye10.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let eye11 = $(".eye11");
      let x = (eye11.offset().left) + (eye11.width() / 2);
      let y = (eye11.offset().top) + (eye11.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye11.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });


    /* _________________ квадраты с обводкой ___________________ */

    $(".move-area").mousemove(function(event) {
      let box = $(".box");
      let x = (box.offset().left) + (box.width() / 2);
      let y = (box.offset().top) + (box.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      box.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let box1 = $(".box1");
      let x = (box1.offset().left) + (box1.width() / 2);
      let y = (box1.offset().top) + (box1.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      box1.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let box2 = $(".box2");
      let x = (box2.offset().left) + (box2.width() / 2);
      let y = (box2.offset().top) + (box2.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      box2.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let box3 = $(".box3");
      let x = (box3.offset().left) + (box3.width() / 2);
      let y = (box3.offset().top) + (box3.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      box3.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let box4 = $(".box4");
      let x = (box4.offset().left) + (box4.width() / 2);
      let y = (box4.offset().top) + (box4.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      box4.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });


    /* _________________ линии ___________________ */

    $(".move-area").mousemove(function(event) {
      let line1 = $(".line1");
      let x = (line1.offset().left) + (line1.width() / 2);
      let y = (line1.offset().top) + (line1.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      line1.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let line2 = $(".line2");
      let x = (line2.offset().left) + (line2.width() / 2);
      let y = (line2.offset().top) + (line2.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      line2.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    $(".move-area").mousemove(function(event) {
      let line3 = $(".line3");
      let x = (line3.offset().left) + (line3.width() / 2);
      let y = (line3.offset().top) + (line3.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      line3.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });


    /* _________________ перетаскивание элементов ___________________ */

    $( function() {
     $( "#draggable" ).draggable();
     $( "#draggable1" ).draggable();
     $( "#draggable2" ).draggable();
     $( "#draggable3" ).draggable();
     $( "#draggable4" ).draggable();
     $( "#draggable5" ).draggable();
     $( "#draggable6" ).draggable();
     $( "#draggable7" ).draggable();
     $( "#draggable8" ).draggable();
     $( "#draggable9" ).draggable();
     $( "#draggable10" ).draggable();
     $( "#draggable11" ).draggable();
     $( "#draggable12" ).draggable();
     $( "#draggable13" ).draggable();
     $( "#draggable14" ).draggable();
     $( "#draggable15" ).draggable();
     $( "#draggable16" ).draggable();
     $( "#draggable17" ).draggable();
     $( "#draggable18" ).draggable();
     $( "#draggable19" ).draggable();
   } );



});
