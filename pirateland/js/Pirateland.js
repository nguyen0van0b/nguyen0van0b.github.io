function Function_menu_mobile() {
    var x = document.getElementById("myTopnav");
    if (x.className === "main-menu") {
        x.className += " responsive";
    } else {
        x.className = "main-menu";
    }
}



// Zoom in/out clothing img
$('.image').click(function() {
    $(this).toggleClass('normal-zoom zoom-in');
});

$('.image').on('mousemove', function(event) {
    // This gives you the position of the image on the page
    var bbox = event.target.getBoundingClientRect();

    // Then we measure how far into the image the mouse is in both x and y directions
    var mouseX = event.clientX - bbox.left;
    var mouseY = event.clientY - bbox.top;

    // Then work out how far through the image as a percentage the mouse is
    var xPercent = (mouseX / bbox.width) * 100;
    var yPercent = (mouseY / bbox.height) * 100;

    // Then we change the `transform-origin` css property on the image to center the zoom effect on the mouse position
    //event.target.style.transformOrigin = xPercent + '% ' + yPercent + '%';
    // It's a bit clearer in jQuery:
    $(this).css('transform-origin', (xPercent + '% ' + yPercent + '%'));
    // We add the '%' units to make sure the string looks exactly like the css declaration it becomes.

});

// If you want it to automatically trigger on hover
$('.image').on('mouseenter', function() {
    $(this).addClass('zoom-in');
    $(this).removeClass('normal-zoom');
});

// and stop when not hovering
$('.image').on('mouseleave', function() {
    $(this).addClass('normal-zoom');
    $(this).removeClass('zoom-in');
});

//Get the button Go to top
var btn = $('#btn-top');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});