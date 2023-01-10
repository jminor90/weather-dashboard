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
    const dataName = data.name
    const dataIcon = data.weather[0].icon

    const $a = $('<a>')
    const $img = $('<img>')

    $a.attr("href","#")
    $a.addClass("list-group-item list-group-item-action d-flex justify-content-between")
    $img.attr("src", `https://openweathermap.org/img/wn/${dataIcon}.png`)

    //(0K − 273.15) × 9/5 + 32 = Farenheit degrees
    //((dataMain - 273.15) * (9/5) + 32)
    $a.text("The Weather in "+dataName+ " is "+dataWeather+" The Temperature is "+Math.round((dataMain - 273.15) * (9/5) + 32)+" degrees Farenheit");

    $resultsDiv.append($a)
    $resultsDiv.append($img)
    console.log("The selected City is " +dataName)
    console.log(data)
    console.log("icon data: "+dataIcon)
  }


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
  })


}

$userSearchForm.submit("submit", submitEventHandler)


console.log("script linked")