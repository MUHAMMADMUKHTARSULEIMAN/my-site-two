(function() {
  let i = 1;
  let rotator = $('#two p:nth-child(' + i + ')');
  function contentRotator() {
    $('#two p:nth-child(' + i + ')').fadeIn(1000, function()
  {
    if($(this).is($('#two p:last-child'))) {
      setTimeout(function() {
        $('#two p:nth-child(' + i + ')').fadeOut(1000, function() {
          i = 1;
        contentRotator();
        });
      }, 4000);
    }
    else {
      setTimeout(function() {
        $('#two p:nth-child(' + i + ')').fadeOut(1000, function() {
          i++;
        contentRotator();
        });
      }, 4000);
    }
  });
  }
  contentRotator();
}());