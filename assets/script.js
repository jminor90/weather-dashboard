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
  
  const requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userSearchInput}&appid=${apiKey}`;

  const $historyDiv = $(".history")
  const $a = $('<a>')

  $a.addClass("list-group-item list-group-item-action")
  $a.text(userSearchInput)
  $a.attr("data-history", userSearchInput)


  $historyDiv.append($a)

  console.log("Form Clicked")
  console.log(userSearchInput)

  getAPI(requestUrl)

}


//Renders current weather search
function renderDivs(data) {

    $resultsDiv.html('')
  
    const dataWeather = JSON.stringify( data.weather[0].description)
    const dataTemp = JSON.stringify( data.main.temp)
    const dataName = data.name
    const dataIcon = data.weather[0].icon
    const dataHumidity = JSON.stringify(data.main.humidity)

    const $divCard = $('<div>')
    const $divCardBody = $('<div>')
    const $img = $('<img>')
    const $h4 = $('<h4>')

    const $pDate = $('<p>')
    const $pWeather = $('<p>')
    const $pTemperature = $('<p>')
    const $pHumidity = $('<p>')

    const dataTempConvert = Math.round((dataTemp - 273.15) * (9/5) + 32);

    //$a.attr("href","#")
    //$a.addClass("list-group-item list-group-item-action d-flex justify-content-between")
    
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
    $pWeather.text(`Currently: `+dataWeather)
    $pTemperature.text(`Temperature: `+dataTempConvert+`°F`)
    $pHumidity.text(`Humidity: `+dataHumidity+'%')

    //(0K − 273.15) × 9/5 + 32 = Farenheit degrees
    //((dataMain - 273.15) * (9/5) + 32)
    /*
    $divCard.text("The Weather in "+dataName+ " is "+dataWeather+" The Temperature is "+Math.round((dataMain - 273.15) * (9/5) + 32)+" degrees Farenheit. The humidity is "+ dataHumidity+"%");
    */

    $resultsDiv.append($divCard)
    $divCard.append($divCardBody)
    $divCardBody.append($h4)
    $divCardBody.append($pDate)
    $divCardBody.append($img)
    $divCardBody.append($pWeather)
    $divCardBody.append($pTemperature)
    $divCardBody.append($pHumidity)
    


    console.log("The selected City is " +dataName)
    console.log(data)
    console.log("icon data: "+dataIcon)

  }

// This will render the 5 day forecast..
  function renderDivs5(data5) {
    //console.log(data5)
    //const day0 = data5.list[0]
    const day1 = data5.list[7]
    const day2 =data5.list[15]
    const day3 =data5.list[23]
    const day4 =data5.list[31]
    const day5 =data5.list[39]

    

    
    //console.log(data5.list[0])
    console.log(day1)
    console.log(day2)
    console.log(day3)
    console.log(day4)
    console.log(day5)
    
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
    //console.log(data)
    console.log(data.main)
    console.log(data.weather)

    renderDivs(data);
    getAPI2(data);
  })

  
}

// This takes the lat and lon information from getAPI and uses that to run another fetch for the 5 day forecast API, then it sends the data to renderDivs5 
function getAPI2(data){
  const lat = data.coord.lat
  const lon = data.coord.lon

  const fiveDayURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`

  console.log('Lat: '+lat)
  console.log('Lon: '+lon)

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