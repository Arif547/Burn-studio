$(document).ready(function(){
   
    
    //STICKY MANU
   
    $(".my-project").waypoint(function(direction){
        if (direction =="down"){
            $("nav").addClass("sticky")
        } else{
            $("nav").removeClass("sticky")
        }
    })
    
    
    $("nav ul li").click(function(){
        $("nav ul li").removeClass("active");
        $(this).addClass("active");
    });
    $("nav a img").click(function(){
        $("nav ul li").removeClass("active");
        $("nav ul li:first-child").addClass("active");
    });
});


function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0";
}