$(document).ready(function(){
	$('.fa-volume-off').hide();
      $('.slider').slider(
      	{height: 600, indicators: false, interval: 6000, transition: 500}
      	);
      $('.fa-volume-off').click(function(){
      	$('audio').prop('muted', false);
      	$('.fa-volume-off').hide();
      	$('.fa-volume-up').show();
      })
      $('.fa-volume-up').click(function(){
      	$('audio').prop('muted', true);
      	$('.fa-volume-up').hide();
      	$('.fa-volume-off').show();
      })
    });