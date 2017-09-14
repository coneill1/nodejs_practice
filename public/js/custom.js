
function showForm(event) {
    $(event.target).next('div.dropdown-content').show();
}

/*html document is loaded, DOM ready */
$(function() {
    
    $('#inventory i').click(function(event) {
        $(event.target).prev('div.hidden').children().first().trigger('click');
    });
    
    $('#start_renting_btn').click(function(event) {
       $('#footer button.btn-footer').trigger('click'); 
    });
    
    $('#inventory div.hidden a').nivoLightbox({
        effect: 'fadedScale',
    });

    $('#preview a').nivoLightbox({
        effect: 'fadedScale',
    });

    var wow = new WOW({
        mobile: false
    });
    wow.init();

});