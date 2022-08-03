import './scss/app.scss';
import './scss/header.scss';
import './scss/banner.scss';
import './scss/products.scss';
import './scss/contacts.scss';
import './scss/footer.scss';

function scrollNav() {
  $('.nav a').click(function () {
    $(".active").removeClass("active");
    $(this).addClass("active");

    $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top - 160
    }, 300);
    return false;
  });
}
scrollNav();

function myFnc() {
  console.log(10)
}

myFnc();

$('button').click(function(){

  console.log(10)
  // do something.
  });
  