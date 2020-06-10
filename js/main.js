//Photo Scripts

var slideIndex = 0;


function showSlides(n) {
    var i = n;
    var slides = document.getElementsByClassName("photo-item");
    var captionText = document.getElementById("caption");
    var mainDisplay = document.querySelector(".photo-display .main-photo img");
    
    if (n > 7) {
        slideIndex = 0;
    }
    else if (n < 0) {
        slideIndex = 7;
    }
    else slideIndex = n;
    mainDisplay.setAttribute("src", slides[slideIndex].getAttribute("src"));
    
    
    /*
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;*/
}

showSlides(slideIndex);

function plusSlides(n) {
    slideIndex += n
    showSlides(slideIndex);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}



/* ** Portfolio Nav Function ** */
function portfolioNavigate(evt, item) {
    var i, portfolioContent, portfolioNav;
    portfolioContent = document.getElementsByClassName("portfolio-content");
    for (i = 0; i < portfolioContent.length; i++) {
        portfolioContent[i].style.display = "none";
    }

    portfolioNav = document.getElementsByClassName("portfolio-nav-item");
    for (i = 0; i < portfolioNav.length; i++) {
        portfolioNav[i].className = portfolioNav[i].className.replace(" active", "");
    }
    document.getElementById(item).style.display = "flex";
    evt.currentTarget.className += " active";
}


//Navbar Scroller Trick
/* code by webdevtrick ( https://webdevtrick.com ) */
$(".btn").click(function () {
    $(".input").toggleClass("active").focus;
    $(this).toggleClass("animate");
    $(".input").val("");
});


$(window).scroll(function () {
    //After scrolling 100px from the top...
    console.log(parseInt($(window).scrollTop()), "young nelly");
    var toggler = document.querySelector(".navbar-toggler");
    var element = document.getElementById("main-navbar");
    var elementNav = document.getElementById("main-navbar-nav");
    if (($(window).scrollTop() >= (3 * parseInt($('.section').css('height'))) - 10) & ($(window).scrollTop() <= (3.4 * parseInt($('.section').css('height'))))) {
        console.log("in bound")
        element.classList.add("navbar-port");
        elementNav.classList.add("navbar-nav-port");
        toggler.classList.add("d-none");
    } else {
        console.log("out bound")
        element.classList.remove("navbar-port");
        elementNav.classList.remove("navbar-nav-port");
        toggler.classList.remove("d-none");

    }

    console.log($('.section').css('height'))
});


/*$(window).scroll(function() {
        //After scrolling 100px from the top...
        if ( $(window).scrollTop() >= 100 ) {
            $('#logo').css('display', 'none');
            $('#menuheader').css('margin', '65px auto 0');

        //Otherwise remove inline styles and thereby revert to original stying
        } else {
            $('#logo, #menuheader').attr('style', '');

        }
    });*/



//Film section scripts

function filmSelect(event) {
    if (event.currentTarget.id == "Cupcake")
        {
            document.querySelector("iframe").setAttribute("src", "https://www.youtube.com/embed/_Jfmjwx1MXQ");
            document.querySelector(".caption-container-film .caption-head").innerHTML = "Role: Additional Photography";
            document.querySelector(".caption-container-film .numbertext").innerHTML = "2 / 8";
        }
    else if (event.currentTarget.id == "Herb")
        {
            document.querySelector("iframe").setAttribute("src", "https://www.youtube.com/embed/WtOCIyMOawg");
            document.querySelector(".caption-container-film .caption-head").innerHTML = "Role: Editor";
            document.querySelector(".caption-container-film .numbertext").innerHTML = "1 / 8";
        }
    else if (event.currentTarget.id == "Taylor")
        {
            document.querySelector("iframe").setAttribute("src", "https://www.youtube.com/embed/srMO17gB1bc");
            document.querySelector(".caption-container-film .caption-head").innerHTML = "Role: Additional Photography";
            document.querySelector(".caption-container-film .numbertext").innerHTML = "3 / 8";
        }
    else if (event.currentTarget.id == "Phor")
        {
            document.querySelector("iframe").setAttribute("src", "https://www.youtube.com/embed/jGtbr-5Mbrg");
            document.querySelector(".caption-container-film .caption-head").innerHTML = "Role: Additional Photography and Assistant Editor";
            document.querySelector(".caption-container-film .numbertext").innerHTML = "4 / 8";
        }
    else if (event.currentTarget.id == "Chimeka")
        {
            document.querySelector("iframe").setAttribute("src", "https://www.youtube.com/embed/QB5K9uRrsRw");
            document.querySelector(".caption-container-film .caption-head").innerHTML = "Role: Assistant Editor";
            document.querySelector(".caption-container-film .numbertext").innerHTML = "5 / 8";
        }
    else if (event.currentTarget.id == "Noah-2")
        {
            document.querySelector("iframe").setAttribute("src", "https://player.vimeo.com/video/341443297");
            document.querySelector(".caption-container-film .caption-head").innerHTML = "Role: Director of Photography";
            document.querySelector(".caption-container-film .numbertext").innerHTML = "7 / 8";
        }
    else if (event.currentTarget.id == "Noah-3")
        {
            document.querySelector("iframe").setAttribute("src", "https://player.vimeo.com/video/341442988");
            document.querySelector(".caption-container-film .caption-head").innerHTML = "Role: Director of Photography";
            document.querySelector(".caption-container-film .numbertext").innerHTML = "6 / 8";
        }
    else if (event.currentTarget.id == "Man")
        {
            document.querySelector("iframe").setAttribute("src", "https://www.youtube.com/embed/RAoMiNt5VMA");
            document.querySelector(".caption-container-film .caption-head").innerHTML = "Role: Editor";
            document.querySelector(".caption-container-film .numbertext").innerHTML = "8 / 8";
        }
 
}


