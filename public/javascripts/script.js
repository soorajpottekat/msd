var MenuSelection = {
    'HOME': 'Home',
    'EVENTS': 'Events',
    'GALLERY': 'Gallery',
    'CONTACTUS': 'Contact Us',
    'LOGIN': 'Log In'
};
var currentSelection = MenuSelection.HOME;
// <![CDATA[
$(function() {

  // Slider
  $('#coin-slider').coinslider({width:960,height:350,opacity:1});

  // Radius Box
  //$('.content p.pages span, .content p.pages a').css({"border-radius":"6px", "-moz-border-radius":"6px", "-webkit-border-radius":"6px"});
  //$('.content .sidebar .gadget, .fbg_resize').css({"border-radius":"12px", "-moz-border-radius":"12px", "-webkit-border-radius":"12px"});
  //$('.content p.pages span, .content p.pages a').css({"border-radius":"16px", "-moz-border-radius":"16px", "-webkit-border-radius":"16px"});
  //$('.menu_nav').css({"border-bottom-left-radius":"16px", "border-bottom-right-radius":"16px", "-moz-border-radius-bottomleft":"16px", "-moz-border-radius-bottomright":"16px", "-webkit-border-bottom-left-radius":"16px", "-webkit-border-bottom-right-radius":"16px"});

});	

// Cufon
Cufon.replace('.menu_nav ul li a, p.infopost a.com span, h1, h2, h3, h4, h5, h6', { hover: true });
//Cufon.replace('h1', { color: '-linear-gradient(#fff, #ffaf02)'});
//Cufon.replace('h1 small', { color: '#8a98a5'});

// ]]>
function moveToContent() {
    $('#main').scrollTop -= 500;
}
// Code for loggin
$("#modal_trigger").leanModal({
    top: 100,
    overlay: 0.6,
    closeButton: ".modal_close"
});



$(document).ready(function () {
    $('#content').load('../home.html');
    $('#Navbar a').click(function(e) {
       console.log($(this).text());
        if(currentSelection == $(this).text())
        {
            return;
        }
        switch ($(this).text()) {
            case MenuSelection.HOME:
                $('#content').load('../home.html');
                break;
            case MenuSelection.GALLERY:
                $('#content').load('../gallery.html');
                break;
            case MenuSelection.EVENTS:
                $('#content').load('../events.html');
                break;
            case MenuSelection.CONTACTUS:
                $('#content').load('../contactus.html');
                break;
            case MenuSelection.LOGIN:
                $(this).leanModal({
                    top: 100,
                    overlay: 0.6,
                    closeButton: ".modal_close"
                });
                break;
        }
        moveToContent();
        // To add fading of the header
    });
    // Calling Login Form


    // Calling Register Form
    $("#register_form").click(function() {
        $(".user_login").hide();
        $(".user_register").show();
        $(".header_title").text('Register');
        return false;
    });

    // Going back to Social Forms
    $(".back_btn").click(function() {
        $(".user_login").show();
        $(".user_register").hide();
        $(".header_title").text('Login');
        return false;
    });
});