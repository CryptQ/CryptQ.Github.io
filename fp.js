let body = document.querySelector('body');
let fingerprint = document.querySelector('.fingerprint');
let center = document.querySelector('.center');
let scan = document.querySelector('.scan');
let timer, timerSuccess;

function onSuccess() {
  body.removeEventListener('mousedown', onTouchStart);
  body.removeEventListener('touchstart', onTouchStart);

  fingerprint.classList.remove('active');
  center.classList.add('success');

  clearTimeout(timerSuccess);

  timerSuccess = setTimeout(() => {
    body.addEventListener('mousedown', onTouchStart);
    body.addEventListener('touchstart', onTouchStart);

    center.classList.remove('success');
  }, 3000);
}

function onTouchStart() {
  fingerprint.classList.add('active');
  timer = setTimeout(onSuccess, 2000);
  setTimeout('location.replace("https://cryptq.github.io/")',5000);
  $(document).ready(function(){
  $("body").fadeOut(5000);
  });
 // $("body").fadeOut();
 console.log('1');
}

function onTouchEnd() {
  fingerprint.classList.remove('active');
  clearTimeout(timer);
}

body.addEventListener('mousedown', onTouchStart);
body.addEventListener('touchstart', onTouchStart);
body.addEventListener('mouseup', onTouchEnd);
body.addEventListener('touchend', onTouchEnd);


$(document).ready(function(){
  $(".success").click(function(){
   //  setTimeout('location.replace("https://cryptq.github.io/")',5000);console.log('1');
    $("body").fadeOut();
    $("body").delay(500);
    $("html").html('<meta http-equiv="refresh" content="4; URL=index.html">');
   
  });

});
