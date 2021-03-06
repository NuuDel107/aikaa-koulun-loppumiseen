// Set the date we're counting down to
var countDownDate = new Date("Jun 5, 2021 10:00:00").getTime();

function updateTimer() {
    // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // When the countdown ends
  if (distance < 0) {
    clearInterval(x);
    window.location.replace("https://aikaa-kesaloman-loppumiseen.tk");
  }
   // Output the result in the HTML elements
  else {
    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;
  }

 

    
  

};

// run the function immediately in page load
updateTimer();

// Update the count down every 1 second
var x = setInterval(updateTimer, 1000);
