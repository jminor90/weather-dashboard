const $userSearchForm = $("#userSearchForm")

const $userSearchInput = $('#userSearchInput')

const $resultsDiv = $("#resultsDiv")

const apiKey = "1551527df50cf3cb137cb6c3ce4a453b"

//const requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userSearchInput}&appid=${apiKey}`;



function submitEventHandler (event) {
  event.preventDefault();

  userSearchInput = $userSearchInput.val();
  
  const requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userSearchInput}&appid=${apiKey}`;



  console.log("Form Clicked")
  console.log(userSearchInput)

  getAPI(requestUrl)

}

function renderDivs(data) {

    $resultsDiv.html('')
  
    const dataWeather = data.weather[0].description
    const dataMain = data.main.temp

    const $a = $('<a>')

    $a.attr("href","#")
    $a.addClass("list-group-item list-group-item-action d-flex justify-content-between")

    //(0K − 273.15) × 9/5 + 32 = Farenheit degrees
    //((dataMain - 273.15) * (9/5) + 32)
    $a.text("The Weather is "+dataWeather+" The Temperature is "+((dataMain - 273.15) * (9/5) + 32));

    $resultsDiv.append($a)

  }


function getAPI(request) {
  fetch(request)

  .then(function(serverResponse) {
    return serverResponse.json();
  })
  .then(function(data) {
    //console.log(data)
    console.log(data.main)
    console.log(data.weather)

      renderDivs(data);
  })


}

$userSearchForm.submit("submit", submitEventHandler)


console.log("script linked")