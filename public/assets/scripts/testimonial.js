$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false,
                margin: 20
            }
        }
    });

    AOS.init({
        disable: function () {
            var maxWidth = 800;
            return window.innerWidth < maxWidth;
        }
    });

    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            //value = value.replace(/,/g, '');
            //$("#" + id).val(Intl.NumberFormat('en-IN', { currency: 'INR' }).format((Math.round(((value) * 1000) / 10) / 100)));
            //Counter: $(this).text()
            Counter: $(this).text()
        }, {
            duration: 3000,
            easing: 'swing',
            step: function (now) {
                // alert(now);
                var aa = Intl.NumberFormat('en-IN', { currency: 'INR' }).format((Math.round(((now) * 1000) / 10) / 100));
                $(this).text(aa);
            }
        });
    });

    $('.count1').each(function () {
        $(this).prop('Counter', 0).animate({
            //value = value.replace(/,/g, '');
            //$("#" + id).val(Intl.NumberFormat('en-IN', { currency: 'INR' }).format((Math.round(((value) * 1000) / 10) / 100)));
            //Counter: $(this).text()
            Counter: $(this).text()
        }, {
            duration: 3000,
            easing: 'swing',
            step: function (now) {
                // alert(now);
                var aa = Intl.NumberFormat('en-IN', { currency: 'INR' }).format((Math.round((now * 1000) / 10) / 100));
                $(this).text(parseFloat(aa).toFixed(1));
            }
        });
    });

    //for (inti = 1; i <= 12000; i++) {
    //    $("#Turnoverspan").html(i);

    //}

    //setTimeout(function () {
    //    //your code to be executed after 1 second
    //}, 3000);

    // Gets the video src from the data-src on each button
    var $videoSrc;
    $('.video-btn').click(function () {
        $videoSrc = $(this).data("src");
    });
    //  console.log($videoSrc);
    // when the modal is opened autoplay it
    $('#videoModal').on('shown.bs.modal', function (e) {
        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    // stop playing the youtube video when I close the modal
    $('#videoModal').on('hide.bs.modal', function (e) {
        // a poor man's stop video
        $("#video").attr('src', $videoSrc);
    })

    $("#mobileAlertMsg").on('hidden.bs.modal', function () {
        var FocusReqCtrl = $("#hdnMobileCtrl").val();
        $("#" + FocusReqCtrl).focus();
        $("#hdnMobileCtrl").val('');
    });
});