$("#button-scroll1").click(function() {
    $('html, body').animate({
        scrollTop: $("#about-us").offset().top
    }, 1000);
});
$("#button-scroll2").click(function() {
    $('html, body').animate({
        scrollTop: $("#features").offset().top
    }, 1000);
});
$(function() {
    $('#submit').click(function() {
        var name = $('#name');
        var phone = $('#phone');
        var email = $('#emnail');
        var service = $('#service');
        var comments = $('#comments');
        if ((name.val() && phone.val()&& email.val()&& service.val()&& comments.val())!= null
            && (name.val() && phone.val()&& email.val()&& service.val()&& comments.val()) != '') {
            alert('Submit success !!!')
        } else {
            alert('Please enter your information')
        }
    })
});

$(function() {
    $('#Subscrible').click(function() {
        var txt = $('#footer-email');
        if (txt.val() != null && txt.val() != '') {
            alert('Submit success !!!')
        } else {
            alert('Please enter your email')
        }
    })
});

