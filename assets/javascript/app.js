// Code is executed in strict mode
"use strict";

function ascrollto(id) {
    let etop = $('#' + id).offset().top - 56;
    $('html, body').animate({
    scrollTop: etop
    }, 250);
}

// When the page is ready
$(document).ready(function() {
    $(".nav-link").on("click", function() {
        let section = this.text.toLowerCase();
        ascrollto(section);
    });
});