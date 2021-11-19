$(document).ready(function(){

  $(".tab__content").hide();
  $(".tab__content:first").show();

  $(".tab__head li").click(function() {

    $(".tab__content").hide();
    let activeTab = $(this).attr("rel"); 
    $("#"+activeTab).fadeIn();		
    $(".tab__head li").removeClass("active");
    $(this).addClass("active");

  
  });


  function clock(){
    let date = new Date();
    let sec = date.getSeconds();
    let min = date.getMinutes();
    let hr = date.getHours();

    sec = (sec < 10) ? "0" + sec : sec;
    min = (min < 10) ? "0" + min : min;
    hr = (hr < 10) ? "0" + hr : hr;

    $("#secs").text(sec);
    $("#mins").text(min);
    $("#hrs").text(hr);

    setTimeout(clock,1000);
  }


  function stopwatch(){
    let interval;
    let miliseconds = 00;
    let seconds = 00;
    let minutes = 00;
    let hours = 00;


    function startTimer(){
      miliseconds++;

      if(miliseconds <= 9){
        $("#sw-msecs").text("0" + miliseconds);
      }
      if(miliseconds > 9){
        $("#sw-msecs").text(miliseconds);
      }
      if(miliseconds > 99){
        seconds++;
        $("#sw-secs").text(seconds);
        miliseconds = 00;
        $("#sw-msecs").text("0" + miliseconds);
      }
      if(seconds <= 9){
        $("#sw-secs").text("0" + seconds);
      }
      if(seconds > 9){
        $("#sw-secs").text(seconds);
      }
      if(seconds > 59){
        minutes++;
        $("#sw-mins").text(minutes);
         seconds = 00;
        $("#sw-secs").text("0" + seconds);
      }
      if(minutes <= 9){
        $("#sw-mins").text("0" + minutes);
      }
      if(minutes > 9){
        $("#sw-mins").text(minutes);
      }
      if(minutes > 59){
        hours++;
        $("#sw-hrs").text(hours);
        minutes == 00;
        $("#sw-mins").text("0" + minutes);
      }
      if(hours <= 9){
        $("#sw-hrs").text("0" + hours);
      }
      if(hours > 9){
        $("#sw-hrs").text(hours);
      }
      if(hours > 24){
        clearInterval(inverval);
      }
      
    }


    $(".start").on("click", () =>{
      if($(".start").text() === "start"){
        interval = setInterval(startTimer, 10);
        $(".start").text("pause")
      }
      else{
        clearInterval(interval);
        $(".start").text("start");
      }
    });

    $(".reset").on("click", () =>{  
      $("#sw-msecs").text('00');
      $("#sw-secs").text('00');
      $("#sw-mins").text('00');
      $("#sw-hrs").text('00');
    })


    $(".lap").on("click", () =>{

      const ms =  document.querySelector("#sw-msecs");
      const s =  document.querySelector("#sw-secs");
      const m =  document.querySelector("#sw-mins");
      const h =  document.querySelector("#sw-hrs");
      const laps = document.querySelector(".laps");

      const li = document.createElement("li");
      laps.prepend(li);

      if(h.innerHTML == 0 && m.innerHTML == 0 && s.innerHTML == 0 && ms.innerHTML == 0){
        laps.innerHTML = '';
       }
      else{
        li.innerText = `${h.innerHTML}:${m.innerHTML}:${s.innerHTML}:${ms.innerHTML}`;
      }
    })

    $(".clear-lap").on("click", () =>{
      $(".laps").html("");
    })
  
  
  }

  function timer(){

    const hrs = document.getElementById('t-hours');
    const mins = document.getElementById('t-minutes');
    const secs = document.getElementById('t-seconds');
    const startTime = document.getElementById('start-time');
    const reset = document.getElementById('reset');
    const indi = document.getElementById("times-up");
    const btnTimesUp = document.querySelector(".times-up-ok");

    let inteval;

    function countdown(){
      if(hrs == 0 && mins == 0 && secs == 0){
        hrs.value = 0;
        mins.value = 0;
        secs.value = 0;

          alert("ok");
      }
      else if (secs.value != 0){
        secs.value--;
        if(secs.value <= 9){
          secs.value = '0' + secs.value;
        }
      }
      else if (mins.value != 0 && secs.value == 0){
        secs.value = 59;
        mins.value--;
        if(mins.value <= 9 ){
          mins.value = '0' + mins.value;
        }
      }
      else if (hrs.value != 0 && mins.value == 0){
        mins.value = 60;
        hrs.value--;
        if(hrs.value <= 9 ){
          hrs.value = '0' + hrs.value;
        }
      }

    }

    function timeInterval(){
      interval = setInterval(countdown, 1000);
    }


    startTime.addEventListener("click", (e) =>{
      if(startTime.innerHTML == "start"){
        timeInterval();
        startTime.innerHTML = "pause";
      }
      else if(startTime.innerHTML == "pause"){
        clearInterval(interval);
        startTime.innerHTML = "start";
      }
    })

    reset.addEventListener("click", (e) =>{
      hrs.value = "";
      mins.value = "";
      secs.value = "";
      if(reset){
        clearInterval(interval);
        startTime.innerHTML = 'start';
    }
    })
    
    btnTimesUp.addEventListener('click', () =>{
      indi.style.display = "none";
    })

  }



  clock();
  stopwatch();
  timer();

})
	