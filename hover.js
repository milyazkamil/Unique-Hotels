$('.background').mousemove(function(e){
    var moveX = (e.pageX * -1/15);
    var moveY = (e.pageY * -1/15);
    $(this).css({'transition': '0.2s linear', 'background-position': moveX + 'px ' + moveY + 'px'})
})