$(document).ready(function(e) {

    $('#pagedown').on('click', function() {

        $('.pagedownwrap').slideToggle();

    });

})

$(document).ready(function(e) {

    $('#konamicode').on('click', function() {

        $('.konamiwrap').slideToggle();

    });

})

$(document).ready(function(e) {

    $('#dropdown').on('click', function() {

        $('.dropdownwrap').slideToggle();

    });

})


$(window).load(function() {
    $(".loader").fadeOut("slow");
})



function DropDown(el) {
    this.dd = el;
    this.initEvents();
}
DropDown.prototype = {
    initEvents: function() {
        var obj = this;
        obj.dd.on('click', function(event) {
            $(this).toggleClass('active');
            event.stopPropagation();
        });
    }
}
$(function() {
    var dd = new DropDown($('#2'));
    $(document).click(function() {
        $('#dropdown').removeClass('active');
    });
});

// when .modal-wide opened, set content-body height based on browser height; 200 is appx height of modal padding, modal title and button bar

$(".modal-wide").on("show.bs.modal", function() {
    var height = $(window).height() - 200;
    $(this).find(".modal-body").css("max-height", height);
});

function move() {
    var elem = document.getElementById("myBar"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}


