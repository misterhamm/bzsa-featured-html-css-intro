
$( document ).ready( function () {

    $(".sidebar li a").click(function () {
        $(".sidebar li a").removeClass("active");
        $(this).toggleClass("active");

        $(".main-content .class-assignment").removeClass("active");
        var className = $(this).parent().attr('class');
        $(".main-content #" + className).toggleClass("active");
    });

});