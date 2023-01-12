const $userSearchForm = $("#userSearchForm")
const $userSearchInput = $('#userSearchInput')
const $resultsDiv = $("#resultsDiv")

const apiKey = "1551527df50cf3cb137cb6c3ce4a453b"

const currentDate = dayjs().format('MMMM D YYYY')
const $currentDate = $('#currentDate')


//When the search form is filled and submit - needs error check if empty
function submitEventHandler (event) {
  event.preventDefault();

  const userSearchInput = $userSearchInput.val();
  
  const requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userSearchInput}&appid=${apiKey}&units=imperial`;

  //History data being worked here...
  const $historyDiv = $(".history")
  const $a = $('<a>')

  $a.addClass("list-group-item list-group-item-action")
  $a.addClass("history-btn")

  $a.text(userSearchInput)
  $a.attr("data-history", userSearchInput)

  $historyDiv.append($a)

  // Ye Olde History Button Event Listener
  $('.history-btn').on("click", function(event) {
    event.preventDefault()

    
    
    //console.log("History Clicked I wanna be "+userSearchInput)

/* This doesn't return errors but doesn't function correctly...
    fetch(requestUrl)

    .then(function(serverResponse) {
      if (serverResponse.status === 404) {
        alert("Not a real city");
      } else {
      return serverResponse.json();
      }
    })
    .then(function(data) {

      renderDivs(data);
      getAPI2(data);
    })
*/
  //This functions as intended but returns errors...
    getAPI(requestUrl)
    renderDivs()
    renderDivs5()
  })

  getAPI(requestUrl)
}


//Renders current weather search
function renderDivs(data) {

    //clears everything before every render
    $resultsDiv.html('')
  
    const dataWeather = data.weather[0].description
    const dataTemp = JSON.stringify( data.main.temp)
    const dataName = data.name
    const dataIcon = data.weather[0].icon
    const dataHumidity = JSON.stringify(data.main.humidity)
    const dataWind = data.wind.speed

    const $divCard = $('<div>')
    const $divCardBody = $('<div>')
    const $img = $('<img>')
    const $h4 = $('<h4>')

    const $pDate = $('<p>')
    const $pWeather = $('<p>')
    const $pTemperature = $('<p>')
    const $pHumidity = $('<p>')
    const $pWind = $('<p>')

    //(0K − 273.15) × 9/5 + 32 = Farenheit degrees
    //const dataTempConvert = Math.round((dataTemp - 273.15) * (9/5) + 32);

    $divCard.addClass("card text-start")
    $divCard.attr("style", "width: 24rem")
    $divCardBody.addClass("card-body")
    $h4.addClass("card-heading")
    $img.attr("src", `https://openweathermap.org/img/wn/${dataIcon}.png`)
    $img.addClass("weather-icon")

    $pDate.addClass("card-text")
    $pWeather.addClass("card-text")
    $pTemperature.addClass("card-text")
    $pHumidity.addClass("card-text")

    $h4.text(dataName)
    $pDate.text(currentDate)
    $pWeather.text(`Description: `+dataWeather)
    $pTemperature.text(`Temperature: `+Math.round(dataTemp)+`°F`)
    $pHumidity.text(`Humidity: `+dataHumidity+'%')
    $pWind.text(`Wind Speed: `+dataWind+` mph`)

    $resultsDiv.append($divCard)
    $divCard.append($divCardBody)
    $divCardBody.append($h4)
    $divCardBody.append($pDate)
    $divCardBody.append($img)
    $divCardBody.append($pWeather)
    $divCardBody.append($pTemperature)
    $divCardBody.append($pHumidity)
    $divCardBody.append($pWind)
    
  }


// This will render the 5 day forecast..
  function renderDivs5(data5) {

    //VARIABLES!
    const day1 = data5.list[7]
    const day2 =data5.list[15]
    const day3 =data5.list[23]
    const day4 =data5.list[31]
    const day5 =data5.list[39]

    //day1 Variables :') 
    const $day1DateText = day1.dt_txt
    const $day1Temp = day1.main.temp
    const $day1Humid = day1.main.humidity
    const $day1Desc = day1.weather[0].description
    const $day1Icon = day1.weather[0].icon
    const $day1Wind = day1.wind.speed

    const $divCard1 = $('<div>')
    const $divCardBody1 = $('<div>')
    const $img1 = $('<img>')
    const $h41 = $('<h4>')
    const $pWeather1 = $('<p>')
    const $pTemperature1 = $('<p>')
    const $pHumidity1 = $('<p>')
    const $pWind1 = $('<p>')

    //day2 Variables 
    const $day2DateText = day2.dt_txt
    const $day2Temp = day2.main.temp
    const $day2Humid = day2.main.humidity
    const $day2Desc = day2.weather[0].description
    const $day2Icon = day2.weather[0].icon
    const $day2Wind = day2.wind.speed
    
    const $divCard2 = $('<div>')
    const $divCardBody2 = $('<div>')
    const $img2 = $('<img>')
    const $h42 = $('<h4>')
    const $pWeather2 = $('<p>')
    const $pTemperature2 = $('<p>')
    const $pHumidity2 = $('<p>')
    const $pWind2 = $('<p>')

    //day3 Variables
    const $day3DateText = day3.dt_txt
    const $day3Temp = day3.main.temp
    const $day3Humid = day3.main.humidity
    const $day3Desc = day3.weather[0].description
    const $day3Icon = day3.weather[0].icon
    const $day3Wind = day3.wind.speed
    
    const $divCard3 = $('<div>')
    const $divCardBody3 = $('<div>')
    const $img3 = $('<img>')
    const $h43 = $('<h4>')
    const $pWeather3 = $('<p>')
    const $pTemperature3 = $('<p>')
    const $pHumidity3 = $('<p>')
    const $pWind3 = $('<p>')

    //day4 Variables
    const $day4DateText = day4.dt_txt
    const $day4Temp = day4.main.temp
    const $day4Humid = day4.main.humidity
    const $day4Desc = day4.weather[0].description
    const $day4Icon = day4.weather[0].icon
    const $day4Wind = day4.wind.speed
    
    const $divCard4 = $('<div>')
    const $divCardBody4 = $('<div>')
    const $img4 = $('<img>')
    const $h44 = $('<h4>')
    const $pWeather4 = $('<p>')
    const $pTemperature4 = $('<p>')
    const $pHumidity4 = $('<p>')
    const $pWind4 = $('<p>')

    //day5 Variables
    const $day5DateText = day5.dt_txt
    const $day5Temp = day5.main.temp
    const $day5Humid = day5.main.humidity
    const $day5Desc = day5.weather[0].description
    const $day5Icon = day5.weather[0].icon
    const $day5Wind = day5.wind.speed
    
    const $divCard5 = $('<div>')
    const $divCardBody5 = $('<div>')
    const $img5 = $('<img>')
    const $h45 = $('<h4>')
    const $pWeather5 = $('<p>')
    const $pTemperature5 = $('<p>')
    const $pHumidity5 = $('<p>')
    const $pWind5 = $('<p>')

    //Where it all goes...but what if there were more? or ..container5???
    const $resultsDiv5 = $('#resultsDiv5')
    const $container5 = $('#container5')
    
    
    //The magical clearing of resultsDiv5
    $resultsDiv5.html('')

    //CLASSES + TEXT + ATTRIBUTES (Oh My!)

    //day1 Add Class + Text + Attr
    $divCard1.addClass("card text-start")
    $divCardBody1.addClass("card-body")
    $h41.addClass("card-heading")
    $img1.addClass("weather-icon")
    $pWeather1.addClass("card-text")
    $pTemperature1.addClass("card-text")
    $pHumidity1.addClass("card-text")
    $h41.text(dayjs($day1DateText).format('MMMM DD YYYY'))
    $img1.attr("src", `https://openweathermap.org/img/wn/${$day1Icon}.png`)
    $pWeather1.text(`Description: `+$day1Desc)
    $pTemperature1.text(`Temperature: `+Math.round($day1Temp)+`°F`)
    $pHumidity1.text(`Humidity: `+$day1Humid+`%`)
    $pWind1.text(`Wind Speed: `+$day1Wind+` mph`)

    //day2 Add Class + Text + Attr
    $divCard2.addClass("card text-start")
    $divCardBody2.addClass("card-body")
    $h42.addClass("card-heading")
    $img2.addClass("weather-icon")
    $pWeather2.addClass("card-text")
    $pTemperature2.addClass("card-text")
    $pHumidity2.addClass("card-text")
    $h42.text(dayjs($day2DateText).format('MMMM DD YYYY'))
    $img2.attr("src", `https://openweathermap.org/img/wn/${$day2Icon}.png`)
    $pWeather2.text(`Description: `+$day2Desc)
    $pTemperature2.text(`Temperature: `+Math.round($day2Temp)+`°F`)
    $pHumidity2.text(`Humidity: `+$day2Humid+`%`)
    $pWind2.text(`Wind Speed: `+$day2Wind+` mph`)

    //day3 Add Class +text + attr
    $divCard3.addClass("card text-start")
    $divCardBody3.addClass("card-body")
    $h43.addClass("card-heading")
    $img3.addClass("weather-icon")
    $pWeather3.addClass("card-text")
    $pTemperature3.addClass("card-text")
    $pHumidity3.addClass("card-text")
    $h43.text(dayjs($day3DateText).format('MMMM DD YYYY'))
    $img3.attr("src", `https://openweathermap.org/img/wn/${$day3Icon}.png`)
    $pWeather3.text(`Description: `+$day3Desc)
    $pTemperature3.text(`Temperature: `+Math.round($day3Temp)+`°F`)
    $pHumidity3.text(`Humidity: `+$day3Humid+`%`)
    $pWind3.text(`Wind Speed: `+$day3Wind+` mph`)

    //day4 Add Class + text +attr
    $divCard4.addClass("card text-start")
    $divCardBody4.addClass("card-body")
    $h44.addClass("card-heading")
    $img4.addClass("weather-icon")
    $pWeather4.addClass("card-text")
    $pTemperature4.addClass("card-text")
    $pHumidity4.addClass("card-text")
    $h44.text(dayjs($day4DateText).format('MMMM DD YYYY'))
    $img4.attr("src", `https://openweathermap.org/img/wn/${$day4Icon}.png`)
    $pWeather4.text(`Description: `+$day4Desc)
    $pTemperature4.text(`Temperature: `+Math.round($day4Temp)+`°F`)
    $pHumidity4.text(`Humidity: `+$day4Humid+`%`)
    $pWind4.text(`Wind Speed: `+$day4Wind+` mph`)

    //day5 Add Class + Text +attr
    $divCard5.addClass("card text-start")
    $divCardBody5.addClass("card-body")
    $h45.addClass("card-heading")
    $img5.addClass("weather-icon")
    $pWeather5.addClass("card-text")
    $pTemperature5.addClass("card-text")
    $pHumidity5.addClass("card-text")
    $h45.text(dayjs($day5DateText).format('MMMM DD YYYY'))
    $img5.attr("src", `https://openweathermap.org/img/wn/${$day5Icon}.png`)
    $pWeather5.text(`Description: `+$day5Desc)
    $pTemperature5.text(`Temperature: `+Math.round($day5Temp)+`°F`)
    $pHumidity5.text(`Humidity: `+$day5Humid+`%`)
    $pWind5.text(`Wind Speed: `+$day5Wind+` mph`)

    //APPEND IT ALL!
    $container5.append($resultsDiv5)

    //day1 appending
    $resultsDiv5.append($divCard1)
    $divCard1.append($divCardBody1)
    $divCardBody1.append($h41)
    $divCardBody1.append($img1)
    $divCardBody1.append($pWeather1)
    $divCardBody1.append($pTemperature1)
    $divCardBody1.append($pHumidity1)
    $divCardBody1.append($pWind1)

    //day2 appending
    $resultsDiv5.append($divCard2)
    $divCard2.append($divCardBody2)
    $divCardBody2.append($h42)
    $divCardBody2.append($img2)
    $divCardBody2.append($pWeather2)
    $divCardBody2.append($pTemperature2)
    $divCardBody2.append($pHumidity2)
    $divCardBody2.append($pWind2)

    //day3 appending
    $resultsDiv5.append($divCard3)
    $divCard3.append($divCardBody3)
    $divCardBody3.append($h43)
    $divCardBody3.append($img3)
    $divCardBody3.append($pWeather3)
    $divCardBody3.append($pTemperature3)
    $divCardBody3.append($pHumidity3)
    $divCardBody3.append($pWind3)

    //day4 appending
    $resultsDiv5.append($divCard4)
    $divCard4.append($divCardBody4)
    $divCardBody4.append($h44)
    $divCardBody4.append($img4)
    $divCardBody4.append($pWeather4)
    $divCardBody4.append($pTemperature4)
    $divCardBody4.append($pHumidity4)
    $divCardBody4.append($pWind4)
    
    //day5 appending
    $resultsDiv5.append($divCard5)
    $divCard5.append($divCardBody5)
    $divCardBody5.append($h45)
    $divCardBody5.append($img5)
    $divCardBody5.append($pWeather5)
    $divCardBody5.append($pTemperature5)
    $divCardBody5.append($pHumidity5)
    $divCardBody5.append($pWind5)

  }

// This is the first API request. it uses this data to send to renderDivs, also sends it to getAPI2 (5day Forecast)
function getAPI(request) {
  fetch(request)

  .then(function(serverResponse) {
    if (serverResponse.status === 404) {
      alert("Not a real city");
    } else {
    return serverResponse.json();
    }
  })
  .then(function(data) {
    renderDivs(data);
    getAPI2(data);
  })

  
}

// This takes the lat and lon information from getAPI and uses that to run another fetch for the 5 day forecast API, then it sends the data to renderDivs5 
function getAPI2(data){
  const lat = data.coord.lat
  const lon = data.coord.lon

  const fiveDayURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`

  fetch (fiveDayURL)
  .then(function(serverResponse) {
    if (serverResponse.status !== 200) {
      alert("Error")
    } else {
      return serverResponse.json();
    }
  })
  .then(function(data5) {
    renderDivs5(data5);
  })
}

$userSearchForm.submit("submit", submitEventHandler)




console.log("script linked")
$currentDate.append(currentDate)
console.log(currentDate)