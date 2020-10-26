/* -------------------------------------------------------
   Function for getting weather information
   ------------------------------------------------------- */

function weatherBalloon() {
  var key = '52435fb533e5fe4c69641f3b0666d170';
  var lat = '41.823990';
  var lon = '-71.412834';
  fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&appid=' + key)  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    drawWeather(data); 
    console.log(data);
  })
  .catch(function() {
    // catch any errors
  });
}

// TIME




/* -------------------------------------------------------
   Function for display weather information
   ------------------------------------------------------- */

function drawWeather( d ) {

  // placeholder div for testing output
  $('.data .weather span').html(convertTemp(d.current.temp));

  $('.data .high span').html(convertTemp(d.daily[0].temp.max));

  $('.data .low span').html(convertTemp(d.daily[0].temp.min));

  $('.data .day').html(displayDataDay(0));

  // $('.data .date').text(format_date);

  $('.data .date').html( convertTime(d.current.dt) );

  // MAIN DESCRIPTION

  $('.forecast .description').html( d.current.weather[0].description);

  $('.forecast .message').html( printMessage(d.current.weather[0].description));

  $('.forecast .emote').html( printCurrentGraphic(d.current.weather[0].description));

  // $('.emote').html( printCurrentGraphicNumber(d.current.humidity[0]));


  // INFO

  $('.humidity-value span').html(d.current.humidity);

  $('.wind-speed-value span').html(d.current.wind_speed);

  $('.pop span').html(d.daily[0].pop*100);

  // WEEKLY 

  // day 1
  $('.day1 .day').html(displayDay (1));
  $('.day1 .description').html(printWeeklyGraphic(d.daily[1].weather[0].description));
  $('.day1 .high span').html(convertTemp(d.daily[1].temp.max));
  $('.day1 .low span').html(convertTemp(d.daily[1].temp.min));

  // day 2
  $('.day2 .day').html(displayDay (2));
  $('.day2 .description').html(printWeeklyGraphic(d.daily[2].weather[0].description) );
  $('.day2 .high span').html(convertTemp(d.daily[2].temp.max));
  $('.day2 .low span').html(convertTemp(d.daily[2].temp.min));

  // day 3
  $('.day3 .day').html(displayDay (3));
  $('.day3 .description').html(printWeeklyGraphic(d.daily[3].weather[0].description) );
  $('.day3 .high span').html(convertTemp(d.daily[3].temp.max));
  $('.day3 .low span').html(convertTemp(d.daily[3].temp.min));

  // day 4
  $('.day4 .day').html(displayDay (4));
  $('.day4 .description').html(printWeeklyGraphic(d.daily[4].weather[0].description) );
  $('.day4 .high span').html(convertTemp(d.daily[4].temp.max));
  $('.day4 .low span').html(convertTemp(d.daily[4].temp.min));

  // day 5
  $('.day5 .day').html(displayDay (5));
  $('.day5 .description').html(printWeeklyGraphic(d.daily[5].weather[0].description) );
  $('.day5 .high span').html(convertTemp(d.daily[5].temp.max));
  $('.day5 .low span').html(convertTemp(d.daily[5].temp.min));

  // day 6
  $('.day6 .day').html(displayDay (6));
  $('.day6 .description').html(printWeeklyGraphic(d.daily[6].weather[0].description) );
  $('.day6 .high span').html(convertTemp(d.daily[6].temp.max));
  $('.day6 .low span').html(convertTemp(d.daily[6].temp.min));

  // day 7
  $('.day7 .day').html(displayDay (7));
  $('.day7 .description').html(printWeeklyGraphic(d.daily[7].weather[0].description) );
  $('.day7 .high span').html(convertTemp(d.daily[7].temp.max));
  $('.day7 .low span').html(convertTemp(d.daily[7].temp.min));



  // FUNCTION THINGS

  $('button').click(function(){
    $('.home').addClass('open');
  });

}


// DISPLAY DATE

// var months = ["January", "February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"];

// var current_date = new Date();

// var format_date = months[current_date.getMonth()] + ' ' + current_date.getDate() + ', ' + current_date.getFullYear();


/* -------------------------------------------------------
   Function for printing weather-specific class on body
   ------------------------------------------------------- */

function changeTheme(d){
  // if the description includes the word "rain"
  if( d.indexOf('rain') > 0 ) {
    $('body').addClass('rainy');
  // if the description includes the word "cloud"
  } else if( d.indexOf('cloud') > 0 ) {
    $('body').addClass('cloudy');
  // if the description includes the word "sunny"
  } else if( d.indexOf('sunny') > 0 ) {
    $('body').addClass('sunny');
  // if none of those cases are true, assume it's clear
  } else {
    $('body').addClass('clear');
  }
}


/* -----------------------------------------------
   Function for printing weather-specific graphic
   ----------------------------------------------- */

   function printCurrentGraphic(d){
     // if the description includes the word "rain"
     if( d.indexOf('rain') > 0 ) {
       return '<img src="img/emote2.svg" alt="bad day">';
     // if the description includes the word "cloud"
     } else if( d.indexOf('cloud') > 0 ) {
       return '<img src="img/emote1.svg" alt="good day">';
     // if the description includes the word "snow"
     } else if( d.indexOf('snow') > 0 ) {
       return '<img src="img/emote2.svg" alt="bad day">';
     // if the description includes the word "sunny"
     } else if( d.indexOf('sunny') > 0 ) {
       return '<img src="img/emote1.svg" alt="good day">';
     // if none of those cases are true, assume it's clear
     } else {
       return '<img src="img/emote1.svg" alt="good day">';
     }
   }

   function printWeeklyGraphic(d){
     // if the description includes the word "rain"
     if( d.indexOf('rain') > 0 ) {
       return '<img src="img/rain.svg" alt="rain icon">';
     // if the description includes the word "cloud"
     } else if( d.indexOf('cloud') > 0 ) {
       return '<img src="img/cloudy.svg" alt="cloudy icon">';
     // if the description includes the word "snow"
     } else if( d.indexOf('snow') > 0 ) {
       return '<img src="img/snow.svg" alt="snow icon">';
     // if the description includes the word "sunny"
     } else if( d.indexOf('sunny') > 0 ) {
       return '<img src="img/sunny.svg" alt="sunny day">';
     // if none of those cases are true, assume it's clear
     } else {
       return '<img src="img/sunny.svg" alt="sunny day">';
     }
   }

   /* -----------------------------------------------
      Function for printing weather-specific message
      ----------------------------------------------- */

   function printMessage(d){
     // if the description includes the word "rain"
     if( d.indexOf('rain') > 0 ) {
       return '<p>you better bring an umbrella :(</p>';
     // if the description includes the word "cloud"
     } else if( d.indexOf('cloud') > 0 ) {
       return '<p>you\'ve got nothing to worry about :)</p>';
       // if the description includes the word "snow"
       } else if( d.indexOf('snow') > 0 ) {
         return '<p>be sure to cover up!</p>';
     // if the description includes the word "sunny"
     } else if( d.indexOf('sunny') > 0 ) {
       return '<p>lookin\' good! ;)</p>';
     // if none of those cases are true, assume it's clear
     } else {
       return '<p>you\'ve got nothing to worry about :)</p>';
     }
   }


/* -----------------------------------------------
   Function for converting time to hours/minutes
   DO NOT EDIT
   ----------------------------------------------- */

function convertTime(t){

  var unixTimestamp = t;
  // since javascript works in milliseconds, you should convert 
  // the time into milliseconds by multiplying it by 1000.
  var date = new Date(unixTimestamp * 1000);
  // hours part from the timestamp (extra code needed to convert from military)
  var hours = (date.getHours() + 24) % 12 || 12;;
  // minutes part from the timestamp
  var minutes = "0" + date.getMinutes();
  // seconds part from the timestamp
  var seconds = "0" + date.getSeconds();
  // will display time in 11:10 format
  var formatTime = hours + ':' + minutes.substr(-2);
  // send formatted date back
  return formatTime;

}


/* -----------------------------------------------
   Function for converting temp to fahrenheit
   DO NOT EDIT
   ----------------------------------------------- */

function convertTemp(t){

  return Math.round(((parseFloat(t)-273.15)*1.8)+32);

}


/* -----------------------------------------------
   Function for creating day of the week
   EDIT FORMAT OF DAY NAMES ONLY ("Monday", etc)
   ----------------------------------------------- */

// based on a system where 0 = today, 1 = tomorrow, etc.
// note: the number system below does not immediately correlate
// for example, 0 for today does not line up with 0 for Sunday below
// how this works – in the return statement, d.getDay() gets today's date
// as a number (if today is Thursday, d.getDay() will be 4)
// adding "n" to this number gives you how many days from today.
// n is passed as an argument to the displayDay() function
// in the main body of the code above.
// if today is Thursday, the 4th day of the week,
// and the number 2 is passed as an argument, 
// the function will return the number 6. 6 maps to Saturday in the 
// weekday array below.

function displayDay(n){

  var d = new Date();
  var weekday = new Array();

  weekday[0] = "S";
  weekday[1] = "M";
  weekday[2] = "T";
  weekday[3] = "W";
  weekday[4] = "TH";
  weekday[5] = "F";
  weekday[6] = "SA";

  var dispDay = d.getDay() + n;

  // adjust number system for numbers over 6
  // subtract 7 from totals higher than 6
  // to keep the day numbers in the array range above
  if(dispDay > 6){
    dispDay = dispDay - 7;
  }

  return weekday[ dispDay ];

}

// DATE DISPLAY FOR THE DATA SECTION ONLY

function displayDataDay(n){

  var d = new Date();
  var weekday = new Array();

  weekday[0] = "SUNDAY";
  weekday[1] = "MONDAY";
  weekday[2] = "TUESDAY";
  weekday[3] = "WEDNESDAY";
  weekday[4] = "THURSDAY";
  weekday[5] = "FRIDAY";
  weekday[6] = "SATURDAY";

  var dispDay = d.getDay() + n;

  // adjust number system for numbers over 6
  // subtract 7 from totals higher than 6
  // to keep the day numbers in the array range above
  if(dispDay > 6){
    dispDay = dispDay - 7;
  }

  return weekday[ dispDay ];

}

/* --------------------------------------------------
   Event to get weather information when page loads
   -------------------------------------------------- */

window.onload = function() {
  weatherBalloon();
}