var screenWidth = $(window).width();
var screenHeight = $(window).height();

/* AOS */
$(window).on("load", function() {
    if ($(window).width() > 1199) {
        AOS.init({
            disable: "mobile,tablet,phone",
            duration: 1000,
            once: true
        });
    }
});

/*----------------------*/

var swiper = new Swiper(".testimonial-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    noSwiping: false,
    noSwipingClass: 'swiper-slide',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        340: {
            slidesPerView: 1,
            centeredSlides: true
        },
        768: {
            slidesPerView: 2,
            noSwiping: false
        },
        1280: {
            noSwiping: true
        },
    },
});

/*----------------------*/


$(document).ready(function() {

    // $(document).bind("contextmenu",function(e){
    //   return false;
    // });

    //$(".section-banner").css("height", screenHeight+"px")

    // $(".scroll-down").click(function() {
    //     $('html, body').animate({
    //         scrollTop: $(".section2").offset().top
    //     }, 2000);
    // });

    /*----------------------*/

    // if($('div').hasClass('data-tilt')) {
    //     $('.js-tilt').tilt({
    //         maxTilt: 15,
    //         scale: 1.1,
    //         perspective: 200,
    //         speed: 1000
    //     });
    // }

    /*----------------------*/

    // Iterate over each select element
    $('select').each(function() {

        // Cache the number of options
        var $this = $(this),
            numberOfOptions = $(this).children('option').length;

        // Hides the select element
        $this.addClass('s-hidden');

        // Wrap the select element in a div
        $this.wrap('<div class="select"></div>');

        // Insert a styled div to sit over the top of the hidden select element
        $this.after('<div class="styledSelect"></div>');

        // Cache the styled div
        var $styledSelect = $this.next('div.styledSelect');

        // Show the first select option in the styled div
        $styledSelect.text($this.children('option').eq(0).text());

        // Insert an unordered list after the styled div and also cache the list
        var $list = $('<ul />', {
            'class': 'options'
        }).insertAfter($styledSelect);

        // Insert a list item into the unordered list for each select option
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        // Cache the list items
        var $listItems = $list.children('li');

        // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
        $styledSelect.click(function(e) {
            e.stopPropagation();
            $('div.styledSelect.active').each(function() {
                $(this).removeClass('active').next('ul.options').hide();
            });
            $(this).toggleClass('active').next('ul.options').toggle();
        });

        // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
        // Updates the select element to have the value of the equivalent option
        $listItems.click(function(e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            /* alert($this.val()); Uncomment this for demonstration! */
        });

        // Hides the unordered list when clicking outside of it
        $(document).click(function() {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });

    /*----------------------*/

    $(".service-list-item-01").click(function() {
        $(".service-list li").removeClass("active");
        $(this).addClass("active");
        $('.service-tab').hide();
        $('.service-tab-01').fadeIn();
    });
    $(".service-list-item-02").click(function() {
        $(".service-list li").removeClass("active");
        $(this).addClass("active");
        $('.service-tab').hide();
        $('.service-tab-02').fadeIn();
    });
    $(".service-list-item-03").click(function() {
        $(".service-list li").removeClass("active");
        $(this).addClass("active");
        $('.service-tab').hide();
        $('.service-tab-03').fadeIn();
    });

    /*----------------------*/


    if ($('.open-account-page')[0]) {
        if (document.getElementsByClassName("open-account-page") != null) {
            window.onscroll = function() { myFunction() };

            var header = document.getElementById("form-open-account");
            var sticky = header.offsetTop;

            function myFunction() {
                if (screenWidth >= 1024 && window.pageYOffset > sticky) {
                    header.classList.add("sticky");
                } else {
                    header.classList.remove("sticky");
                }
            }
        }
    }
    
   

    /*----------------------*/

    /*----------------------*/


    if ($('.calculator-page')[0]) {
        if (document.getElementsByClassName("calculator-page") != null) {
            window.onscroll = function () { myFunction() };

            var header = document.getElementById("calc-right-section");
            var sticky = header.offsetTop;

            function myFunction() {
                if (screenWidth >= 1024 && window.pageYOffset > sticky) {
                    header.classList.add("sticky");
                } else {
                    header.classList.remove("sticky");
                }
            }
        }
    }

    /*----------------------*/


    //if ($('.ipo-page')[0]) {
    //    if (document.getElementsByClassName("ipo-page") != null) {
    //        window.onscroll = function() { myFunction() };

    //        var header = document.getElementById("ipo-sticky-nav");
    //        var header1 = document.getElementById("ipo-application-block");
    //        var sticky = header.offsetTop;
    //        var sticky = header1.offsetTop;

    //        function myFunction() {
    //            if (window.pageYOffset > sticky) {
    //                header.classList.add("sticky");
    //                header1.classList.add("sticky");
    //            } else {
    //                header.classList.remove("sticky");
    //                header1.classList.remove("sticky");
    //            }
    //        }
    //    }
    //}

    $(window).scroll(function () {
        var sticky = $('.ipo-application-block'),
            scroll = $(window).scrollTop();

        if (scroll >= 250) sticky.addClass('sticky');
        else sticky.removeClass('sticky');
    });

    $(window).scroll(function () {
        var sticky = $('.ipo-sticky-nav'),
            scroll = $(window).scrollTop();

        if (scroll >= 350) sticky.addClass('sticky');
        else sticky.removeClass('sticky');
    });


    //ipo-js-section
    //$(".ongoing-ipo-tab").click(function () {
    //    $('html, body').animate({
    //        scrollTop: $(".ongoing-ipo-content")
    //    });
    //});

    //$(".upcoming-ipo-tab").click(function () {
    //    $('html, body').animate({
    //        scrollTop: $(".upcoming-ipo-content")
    //    });
    //});

    //$(".recently-closed-tab").click(function () {
    //    $('html, body').animate({
    //        scrollTop: $(".recently-closed-content")
    //    });
    //});

    //ipo-js-section

    $(".ipo-tab-list li").click(function() {
        $(".ipo-tab-list li").removeClass("active");
        $(this).addClass("active");
    });
    // $(".upcoming-ipo-tab").click(function() {
    //     $(".ipo-tab-list li").removeClass("active");
    //     $(this).addClass("active");
    // });
    // $(".recently-closed-tab").click(function() {
    //     $(".ipo-tab-list li").removeClass("active");
    //     $(this).addClass("active");
    // });

    // $(".ongoing-ipo-tab").click(function() {
    //     $(".ipo-tab-list li").removeClass("active");
    //     $(this).addClass("active");
    //     $('.ipo-content').hide();
    //     $('.ongoing-ipo-content').fadeIn();
    // });
    // $(".upcoming-ipo-tab").click(function() {
    //     $(".ipo-tab-list li").removeClass("active");
    //     $(this).addClass("active");
    //     $('.ipo-content').hide();
    //     $('.upcoming-ipo-content').fadeIn();
    // });
    // $(".recently-closed-tab").click(function() {
    //     $(".ipo-tab-list li").removeClass("active");
    //     $(this).addClass("active");
    //     $('.ipo-content').hide();
    //     $('.recently-closed-content').fadeIn();
    // });

    /*----------------------*/


    /*--------------------------*/


    /*--------------------------*/

    if ($('.mutual-fund-page')[0]) {
        // var swiper = new Swiper(".testimonial-slider", {
        //     slidesPerView: 3,
        //     spaceBetween: 30,
        //     noSwiping: true,
        //     noSwipingClass: 'swiper-slide',
        //     pagination: {
        //       el: ".swiper-pagination",
        //       clickable: true,
        //     },
        //     breakpoints: {
        //       340: {
        //         slidesPerView: 1
        //       },
        //       768: {
        //         slidesPerView: 2,
        //         noSwiping: false
        //       },
        //       1280: {
        //         noSwiping: true
        //       },
        //     },
        // });

        /*----------------------*/

        $.fn.scrollCenter = function(elem, speed) {
            var active = jQuery(this).find(elem);
            var activeWidth = active.width() / 2;
            var pos = active.position().left + activeWidth;
            var currentscroll = jQuery(this).scrollLeft();
            var divwidth = jQuery(this).width();
            pos = pos + currentscroll - divwidth / 2;

            jQuery(this).animate({
                scrollLeft: pos
            }, speed == undefined ? 1000 : speed);
            return this;
        };

        $.fn.scrollCenterORI = function(elem, speed) {
            jQuery(this).animate({
                scrollLeft: jQuery(this).scrollLeft() - jQuery(this).offset().left + jQuery(elem).offset().left
            }, speed == undefined ? 1000 : speed);
            return this;
        };

        $(".discover-tab-list li").click(function() {
            $(".discover-tab-list").scrollCenter(".active", 300);
        });
    }

    /*----------------------*/

    if ($('.ipo-detail-page')[0]) {
        if (document.getElementsByClassName("ipo-detail-page") != null) {
            window.onscroll = function() { myFunction() };

            var header = document.getElementById("ipo-detail-header");
            var sticky = header.offsetTop;

            function myFunction() {
                if (window.pageYOffset > sticky) {
                    header.classList.add("sticky");
                } else {
                    header.classList.remove("sticky");
                }
            }
        }
    }

    /*----------------------*/

    $(".dt-list-01").click(function() {
        $(".discover-tab-list li").removeClass("active");
        $(this).addClass("active");
        $('.discover-content-list').hide();
        $('.discover-content-list-01').fadeIn();
    });
    $(".dt-list-02").click(function() {
        $(".discover-tab-list li").removeClass("active");
        $(this).addClass("active");
        $('.discover-content-list').hide();
        $('.discover-content-list-02').fadeIn();
    });
    $(".dt-list-03").click(function() {
        $(".discover-tab-list li").removeClass("active");
        $(this).addClass("active");
        $('.discover-content-list').hide();
        $('.discover-content-list-03').fadeIn();
    });
    $(".dt-list-04").click(function() {
        $(".discover-tab-list li").removeClass("active");
        $(this).addClass("active");
        $('.discover-content-list').hide();
        $('.discover-content-list-04').fadeIn();
    });
    $(".dt-list-05").click(function() {
        $(".discover-tab-list li").removeClass("active");
        $(this).addClass("active");
        $('.discover-content-list').hide();
        $('.discover-content-list-05').fadeIn();
    });
    $(".dt-list-06").click(function() {
        $(".discover-tab-list02 li").removeClass("active");
        $(this).addClass("active");
        $('.discover-content-list02').hide();
        $('.discover-content-list-06').fadeIn();
    });
    $(".dt-list-07").click(function() {
        $(".discover-tab-list02 li").removeClass("active");
        $(this).addClass("active");
        $('.discover-content-list02').hide();
        $('.discover-content-list-07').fadeIn();
    });
    $(".dt-list-08").click(function() {
        $(".discover-tab-list02 li").removeClass("active");
        $(this).addClass("active");
        $('.discover-content-list02').hide();
        $('.discover-content-list-08').fadeIn();
    });

    /*----------------------*/

    if ($('.offerings-equity-page')[0]) {
        // var swiper = new Swiper(".testimonial-slider", {
        //     slidesPerView: 3,
        //     spaceBetween: 30,
        //     pagination: {
        //       el: ".swiper-pagination",
        //       clickable: true,
        //     },
        //     breakpoints: {
        //       340: {
        //         slidesPerView: 1
        //       },
        //       768: {
        //         slidesPerView: 2
        //       },
        //     },
        // });
    }

    /*----------------------*/


    $(".view-other-charges").click(function() {
        $('.other-charges-block').fadeIn();
    });

    /*----------------------*/

    if ($('.faq-page')[0]) {

        $.fn.scrollCenter = function(elem, speed) {
            var active = jQuery(this).find(elem);
            var activeWidth = active.width() / 2;
            var pos = active.position().left + activeWidth;
            var currentscroll = jQuery(this).scrollLeft();
            var divwidth = jQuery(this).width();
            pos = pos + currentscroll - divwidth / 2;

            jQuery(this).animate({
                scrollLeft: pos
            }, speed == undefined ? 1000 : speed);
            return this;
        };

        $.fn.scrollCenterORI = function(elem, speed) {
            jQuery(this).animate({
                scrollLeft: jQuery(this).scrollLeft() - jQuery(this).offset().left + jQuery(elem).offset().left
            }, speed == undefined ? 1000 : speed);
            return this;
        };

        $(".faq-list li").click(function() {
            $(".faq-list").scrollCenter(".active", 300);
        });

        /*----------------------*/

        $(".faq-list-all").click(function() {
            $(".faq-list li").removeClass("active");
            $(this).addClass("active");
            $('.faq-all').fadeIn();
        });
        $(".faq-list-my-account").click(function() {
            $(".faq-list li").removeClass("active");
            $(this).addClass("active");
            $('.faq-all').hide();
            $('.faq-my-account').fadeIn();
        });
        $(".faq-list-stocks").click(function() {
            $(".faq-list li").removeClass("active");
            $(this).addClass("active");
            $('.faq-all').hide();
            $('.faq-stocks').fadeIn();
        });
        $(".faq-list-mf").click(function() {
            $(".faq-list li").removeClass("active");
            $(this).addClass("active");
            $('.faq-all').hide();
            $('.faq-mf').fadeIn();
        });
        $(".faq-list-ipo").click(function() {
            $(".faq-list li").removeClass("active");
            $(this).addClass("active");
            $('.faq-all').hide();
            $('.faq-ipo').fadeIn();
        });
        $(".faq-list-fo").click(function() {
            $(".faq-list li").removeClass("active");
            $(this).addClass("active");
            $('.faq-all').hide();
            $('.faq-fo').fadeIn();
        });
        $(".faq-list-tech").click(function() {
            $(".faq-list li").removeClass("active");
            $(this).addClass("active");
            $('.faq-all').hide();
            $('.faq-tech').fadeIn();
        });
        $(".faq-list-pricing").click(function() {
            $(".faq-list li").removeClass("active");
            $(this).addClass("active");
            $('.faq-all').hide();
            $('.faq-pricing').fadeIn();
        });
    }

    /*----------------------*/

    if ($('.policy-page')[0]) {

        // $(".tab-terms-and-conditions").click(function() {
        //     $(".policy-list li").removeClass("active");
        //     $(this).addClass("active");
        //     $('.policy-block').hide();
        //     $('.terms-and-conditions').fadeIn();
        // });
        // $(".tab-privacy").click(function() {
        //     $(".policy-list li").removeClass("active");
        //     $(this).addClass("active");
        //     $('.policy-block').hide();
        //     $('.privacy').fadeIn();
        // });
        // $(".tab-disclaimer").click(function() {
        //     $(".policy-list li").removeClass("active");
        //     $(this).addClass("active");
        //     $('.policy-block').hide();
        //     $('.disclaimer').fadeIn();
        // });
        // $(".tab-compliance").click(function() {
        //     $(".policy-list li").removeClass("active");
        //     $(this).addClass("active");
        //     $('.policy-block').hide();
        //     $('.compliance').fadeIn();
        // });
    }

    /*----------------------*/

    $(".support-login").click(function() {
        $('.support-state').hide();
        $('.state-02').fadeIn();
    });

    /*----------MTF------------*/

    if ($('.mtf-page')[0]) {
        // var swiper = new Swiper(".testimonial-slider", {
        //     slidesPerView: 3,
        //     spaceBetween: 30,
        //     pagination: {
        //       el: ".swiper-pagination",
        //       clickable: true,
        //     },
        //     breakpoints: {
        //       340: {
        //         slidesPerView: 1
        //       },
        //       768: {
        //         slidesPerView: 2
        //       },
        //     },
        // });
    }

    /*----------Referrals Page------------*/

    if ($('.referrals-page')[0]) {
        // var swiper = new Swiper(".testimonial-slider", {
        //     slidesPerView: 3,
        //     spaceBetween: 30,
        //     pagination: {
        //       el: ".swiper-pagination",
        //       clickable: true,
        //     },
        //     breakpoints: {
        //       340: {
        //         slidesPerView: 1
        //       },
        //       768: {
        //         slidesPerView: 2
        //       },
        //     },
        // });
    }



});




//
// HTML Range Slider
//

(function($) {
    // Variables
    const $rangeSlider = $('#range-sliders .range-slider');
    const $inputSlider = $('#range-sliders .input-slider');

    // Bg Init
    const bgInit = ($this, val = 0, min = 0, max = 255, color = '#f00') => {
        // Background Change
        const valBg = (val - min) / (max - min) * 100;
        $this.css('background', `linear-gradient(to right, ${ color } 0%, ${ color } ${ valBg }%, #fff ${ valBg }%, white 100%)`);
    };

    // Pre Init
    const preInit = () => {
        const rangeSliders = ['range-slider-red', 'range-slider-green', 'range-slider-blue'];
        rangeSliders.forEach(function(key) {
            // Background Change
            const $this = $(`#${ key }`);
            const val = Number($this.val());
            const min = Number($this.attr('min'));
            const max = Number($this.attr('max'));
            const color = $this.data('color');
            bgInit($this, val, min, max, color);
        });
    };

    // Toggle Class
    const init = () => {
        // Slider Range Change or Input
        $rangeSlider.off('change input').on('change input', function(e) {
            // Prevent Default
            e.preventDefault();
            e.stopPropagation();

            // Background Change
            const $this = $(this);
            const val = Number($this.val());
            const min = Number($this.attr('min'));
            const max = Number($this.attr('max'));
            const color = $this.data('color');
            bgInit($this, val, min, max, color);

            // Assign value to slider input
            $this.next().val($(this).val());
        });

        // Input Slider Input
        $inputSlider.off('input').on('input', function(e) {
            // Prevent Default
            e.preventDefault();
            e.stopPropagation();

            // Background Change
            const $thisInput = $(this);
            let val = Number($thisInput.val());
            const min = Number($thisInput.attr('min'));
            const max = Number($thisInput.attr('max'));
            //const color = $this.data( 'color' );

            // Max Validation
            if (val > max) {
                val = max;
                $thisInput.val(val);
            }

            // Min Validation
            if (val < min) {
                val = min;
                $thisInput.val(val);
            }

            // Background Change
            const $this = $thisInput.prev();
            const color = $this.data('color');
            bgInit($this, val, min, max, color);

            // Assign value to slider range.
            $this.val(val);
        });
    };

    // Document Ready
    $(function() {
        preInit();
        init();
    });
}(jQuery));

(function ($) {
    $.fn.responsiveTabs = function () {
        this.addClass('responsive-tabs'),
            this.append($('<span class="dropdown-arrow"></span>')),



            this.on("click", "li > a.active, span.dropdown-arrow", function () {
                this.toggleClass('open');
            }.bind(this)), this.on("click", "li > a:not(.active)", function () {
                this.removeClass("open")
            }.bind(this));
    }
})(jQuery);

///*Asset Allocation Chart start*/

//$(document).ready(function () {
//    Chart.types.Doughnut.extend({
//        name: "doughnutAlt",
//        draw: function () {
//            Chart.types.Doughnut.prototype.draw.apply(this, arguments);
//            for (var i = 0; i < this.segments.length; i++) {
//                var centerAngle = this.segments[i].startAngle + ((this.segments[i].endAngle - this.segments[i].startAngle) / 2),
//                    rangeFromCenter = (this.segments[i].outerRadius - this.segments[i].innerRadius) / 2 + this.segments[i].innerRadius;
//                x = this.segments[i].x + (Math.cos(centerAngle) * rangeFromCenter);
//                y = this.segments[i].y + (Math.sin(centerAngle) * rangeFromCenter);
//                this.chart.ctx.textAlign = 'center';
//                this.chart.ctx.textBaseline = 'middle';
//                this.chart.ctx.fillStyle = '#000000';
//                this.chart.ctx.font = 'normal 12px "Open Sans Regular", sans-serif';
//                this.chart.ctx.fillText(this.segments[i].value + "%", x, y);
//            }
//        }
//    });

//    var chartOptions = {
//        onAnimationComplete: function () {
//            // Always show Tooltip
//            this.showTooltip(this.segments, true);
//        },
//        customTooltips: function (tooltip) {
//            // Tooltip Element
//            var tooltipEl = $('#chartjs-tooltip');
//            // Hide if no tooltip
//            if (!tooltip) {
//                tooltipEl.css({
//                    opacity: 1
//                });
//                return;
//            }
//        },
//    }

//    var data = [{
//        value: 40,
//        color: "#76A9F6",
//        label: "Equity"
//    }, {
//        value: 30,
//        color: "#FF7518",
//        label: "Debt"
//    }, {
//        value: 30,
//        color: "#3DA23F",
//        label: "Others"
//    },];

//    var doughnutChart = new Chart(document.getElementById("doughnut").getContext("2d")).doughnutAlt(data, chartOptions);
//    document.getElementById('doughnut-legend').innerHTML = doughnutChart.generateLegend();
//});

///*Asset Allocation Chart End*/

///*Risk Ratios Chart start*/

//$(document).ready(function () {
//    Chart.types.Doughnut.extend({
//        name: "doughnutAlt",
//        draw: function () {
//            Chart.types.Doughnut.prototype.draw.apply(this, arguments);
//            for (var i = 0; i < this.segments.length; i++) {
//                var centerAngle = this.segments[i].startAngle + ((this.segments[i].endAngle - this.segments[i].startAngle) / 2),
//                    rangeFromCenter = (this.segments[i].outerRadius - this.segments[i].innerRadius) / 2 + this.segments[i].innerRadius;
//                x = this.segments[i].x + (Math.cos(centerAngle) * rangeFromCenter);
//                y = this.segments[i].y + (Math.sin(centerAngle) * rangeFromCenter);
//                this.chart.ctx.textAlign = 'center';
//                this.chart.ctx.textBaseline = 'middle';
//                this.chart.ctx.fillStyle = '#000000';
//                this.chart.ctx.font = 'normal 12px "Open Sans Regular", sans-serif';
//                this.chart.ctx.fillText(this.segments[i].value + "%", x, y);
//            }
//        }
//    });

//    var chartOptions = {
//        onAnimationComplete: function () {
//            // Always show Tooltip
//            this.showTooltip(this.segments, true);
//        },
//        customTooltips: function (tooltip) {
//            // Tooltip Element
//            var tooltipEl = $('#chartjs-tooltip');
//            // Hide if no tooltip
//            if (!tooltip) {
//                tooltipEl.css({
//                    opacity: 1
//                });
//                return;
//            }
//        },
//    }

//    var data = [{
//        value: 10,
//        color: "#3DA23F",
//        label: "Energy"
//    }, {
//        value: 30,
//        color: "#B12233",
//        label: "Automobile"
//    }, {
//        value: 20,
//        color: "#FF7518",
//        label: "Technology"
//    }, {
//        value: 40,
//        color: "#76A9F6",
//        label: "Financial"
//    },];

//    var doughnutChart = new Chart(document.getElementById("doughnut1").getContext("2d")).doughnutAlt(data, chartOptions);
//    document.getElementById('doughnut-legend1').innerHTML = doughnutChart.generateLegend();
//});

///*Risk Ratios Chart End*/