$(document).ready(function(){

$("#mainmenutoggle").hide();

$(".mainMenu").click(function(){
    $("#mainmenutoggle").toggle(function(){
        $(".closeMenu").show();
        $(".mainMenu").hide();
    }).css({WebkitTransition : 'opacity 1s ease-in-out',
    MozTransition    : 'opacity 1s ease-in-out',
    MsTransition     : 'opacity 1s ease-in-out',
    OTransition      : 'opacity 1s ease-in-out',
    transition       : 'opacity 1s ease-in-out'});

});
   $ (".closeMenu").click(function(){
        $("#mainmenutoggle").toggle(function(){
            $(".mainMenu").show();
            $(".closeMenu").hide();
            });
});
}); 
