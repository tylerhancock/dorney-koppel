$( document ).ready(function($) {
  $('#openButton').click(function() {
    $('#myVideo')[0].paused ? $('#myVideo')[0].play() : $('#myVideo')[0].pause();
  });
});

$( document ).ready(function($) {
  $('#closeButton').click(function() {
    $('#myVideo')[0].paused ? $('#myVideo')[0].play() : $('#myVideo')[0].pause();
  });
});

$( document ).ready(function($) {
  $('#myVideo').click(function() {
    $('#myVideo')[0].paused ? $('#myVideo')[0].play() : $('#myVideo')[0].pause();
  });
});

$('#openButton').click(function() {
  $('#myVideo').toggle('slow', function() {
    // opens the video player overlay
  });
  $('#closeButton').toggle('slow', function() {
    // displays the close button
  });
});

$('#closeButton').click(function() {
  $('#myVideo').toggle('slow', function() {
    // closes the video player overlay
  });
  $('#closeButton').toggle('slow', function() {
    // makes close button disappear
  });
});

$('#myVideo').click(function() {
  $('#myVideo').toggle('slow', function() {
    // closes the video player overlay
  });
  $('#closeButton').toggle('slow', function() {
    // displays the close button
  });
});

$('#americansbutton').click(function() {
  $('#americansbutton').toggle('fast', function() {
    // closes the video player overlay
  });
});
      