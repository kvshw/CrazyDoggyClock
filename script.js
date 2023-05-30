// Getting it to show the current time on the page
var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

var showCurrentTime = function() {
  // display the string on the webpage
  var clock = document.getElementById('clock');
  var dogImage = document.getElementById("dog-image")
  var currentTime = new Date();
  

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = "AM";
  var greetingText = document.getElementById("greeting")

  // Set hours
  if (hours >= noon) {
    meridian = "PM";
    greetingText.innerText = "Good Afternoon!"
    dogImage.src = "https://images.pexels.com/photos/1242314/pexels-photo-1242314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
  if (hours >= evening) {
    greetingText.innerText = "Good Night!"
    dogImage.src = "https://images.pexels.com/photos/731022/pexels-photo-731022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
  if (hours >= wakeuptime && hours < noon) {
    greetingText.innerText = "Good Morning!"
    dogImage.src = "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }

  if (hours > noon) {
    hours = hours - 12;

  }

  // Set Minutes
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  // Set Seconds
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // put together the string that displays the time
  var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

  clock.innerText = clockTime;
};

setInterval(showCurrentTime, 1000);

