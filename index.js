let sideBarInnerWidth = $(".sidebar").innerWidth();  
  
$(".sidebar").css("left", -sideBarInnerWidth);

$(".icon").click(function () {
    
$(".sidebar").animate({ left: -sideBarInnerWidth } ,300);
        $(".home-info").css("marginLeft", "0px");

});

$(".toggle-ico").click(function () {

    if ($(".sidebar").css('left') == "0px")
    {
    
        $(".sidebar").animate({ left: -sideBarInnerWidth } );
    
        $(".home-info").animate({ marginLeft:"0px"},260);
    

    }    
    else {
        $(".sidebar").animate({ left: "0px" }); 
        $(".home-info").animate({ marginLeft: "245px" }, 260);    
}

});

$(".compression h3").click(function (eventInfo) {
    $(eventInfo.target).next().slideToggle(500).siblings().css("display" , "none" , 3000);
    // $(eventInfo.target).next().slideToggle(1000).siblings().css({"display": "none" , "transition" : "all 0.3s"}  );
});
// function (eventInfo) {
//     $(eventInfo.target).siblings(".slide-1").css("display", "none")
// };

let counterDown = new Date("Apr 4 ,2023 00:30:25 ")

let updCounter = setInterval(function () {
    
    let today = new Date().getTime();

    let distanceTime = counterDown - today;

let days = Math.floor(distanceTime / (1000 * 60 * 60 * 24));

    let hours = Math.floor((distanceTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
let minutes = Math.floor((distanceTime % (1000 * 60 * 60)) / (1000 * 60 ));

let seconds = Math.floor((distanceTime % (1000 * 60)) / 1000);

    
document.querySelector(".days h3").innerHTML = days + "D";
  
    document.querySelector(".hours h3").innerHTML = hours + "h";

    document.querySelector(".minutes h3").innerHTML = minutes + "m";

    document.querySelector(".seconds h3").innerHTML = seconds + "s";


    if (distanceTime < 0){
      clearInterval(updCounter);

      let infoTime = document.querySelectorAll("#info-time h3");
      console.log(infoTime);
      for (let i = 0; i < infoTime.length; i++) {
        infoTime[i].innerHTML = "EXPIRED";
      }
    }

}, 1000);

$("textarea").keyup(function () {
    
    let maxLength = 100;

    let textLength = maxLength - $("textarea").val().length;

    $("#max").text(textLength);
    if (textLength == 0 || textLength < 0) {
        
 $("#max").text("your available character finished" );


    }

});





