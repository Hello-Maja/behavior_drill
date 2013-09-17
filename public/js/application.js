$(document).ready(function(){
    $('.sortable-list').sortable();
    // getter
    var axis = $( ".sortable-list" ).sortable( "option", "axis" );
    // setter
    $( ".sortable-list" ).sortable( "option", "axis", "y" );
});
