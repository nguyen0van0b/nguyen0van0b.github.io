function Function_menu_mobile() {
    var x = document.getElementById("myTopnav");
    if (x.className === "main-menu") {
        x.className += " responsive";
    } else {
        x.className = "main-menu";
    }
}

document.addEventListener("mousemove", parallax);

function parallax(e) {
    document.querySelectorAll(".image1").forEach(function(move) {
        var moving = move.getAttribute("data-value");
        var x = e.clientX * -moving / 220;
        var y = e.clientY * -moving / 220;
        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
    document.querySelectorAll(".image2").forEach(function(move) {
        var moving = move.getAttribute("data-value");
        var x = e.clientX * -moving / 200;
        var y = e.clientY * -moving / 200;
        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
    document.querySelectorAll(".image3").forEach(function(move) {
        var moving = move.getAttribute("data-value");
        var x = e.clientX * -moving / 100;
        var y = e.clientY * -moving / 100;
        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
    document.querySelectorAll(".image4").forEach(function(move) {
        var moving = move.getAttribute("data-value");
        var x = e.clientX * -moving / 80;
        var y = e.clientY * -moving / 80;
        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
    // document.querySelectorAll(".social_media").forEach(function(move) {
    //     var moving = move.getAttribute("data-value");
    //     var x = e.clientX * -moving / 80;
    //     var y = e.clientY * -moving / 80;
    //     move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    // });
}

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