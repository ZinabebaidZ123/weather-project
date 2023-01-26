let searchInput = document.getElementById("search");
let searchAlert = document.querySelector(".alert")


   // fuction to fetch weather data from api
async function fetchWeather(word) {

 let  result = await

    fetch(`https://api.weatherapi.com/v1/forecast.json?key=f2d07dba2bfd4189a2a143348212509&q=${word}&days=3`);
    console.log(result)
    if(result.status== 200){
  response = await result.json();
  
  let x = response.forecast.forecastday[0].date;

  let y = response.forecast.forecastday[1].date;
  let z = response.forecast.forecastday[2].date;
  // console.log(x);
  // console.log(y);
  // console.log(z);


  console.log(response);
  displayFirsDayWeather();
  displaySecDayWeather();
  displayThirdDayWeather();
  // searchInput.value == word;
}
else{
  console.log("error")
}}
// to show initial data before user search about any city
fetchWeather("Aswan")
 
//fuction to display weather in first day
function displayFirsDayWeather(){
  let firsDay = document.querySelector(".day1")
  let locationSearch = document.querySelector(".location");
  // find date for day1
  let getDate1 = response.forecast.forecastday[0].date;
    let date1 = new Date(getDate1);
    let getDate = date1.getDate()
    let MonName  = date1.toLocaleString("en" , {month : "long"})
let getDay1 = date1.toLocaleString("en" , {weekday: "long"});

  let firsDayWeather = `
 
  <div class="date firsDayDate  d-flex justify-content-between ps-2" id= "Date">
  <h3 class="dayName">${getDay1}</h3>
  <h3 class="month"> ${getDate} ${MonName}</h3>
</div>
 <div class="location ps-3 pt-3">
<span class="location">${response.location.name}</span>
</div>

<div class="temp tempforDay1 d-flex justify-content-between ps-3">
<p class="tempforDay1">${response.forecast.forecastday[0].day.maxtemp_c} °C</p>
<img src="https:${response.current.condition.icon}" alt="" width="90" class="fDayIcon">
</div>

<div class="forcast-state ps-3">
<h4 class="day1State">${response.current.condition.text}</h4>
</div>
<div class="icons d-flex justify-content-between ps-3 pb-3 pt-2">
<img src="img/icon-umberella.png"> 
<span>${response.current.cloud}%</span>>
<img src="img/icon-wind.png"> 
<span>${response.current.wind_kph} Km/h</span>>
<img src="img/icon-compass.png"> 
<span>${response.current.wind_dir}</span>>
</div>`

//display result 
  firsDay.innerHTML = firsDayWeather;
}

//fuction to display weather in sec day
function displaySecDayWeather() {
  let secDay = document.querySelector(".day2")
  //find date of day2
  let getDate2 = response.forecast.forecastday[1].date;
  let date2 = new Date(getDate2);
  let getDay2 = date2.toLocaleString("en" , {weekday: "long"})
  console.log(getDay2);

  let weatherOfDay = `

     <div class="date sec-date">
       <h3>${getDay2}</h3>
      </div>
     <div class="icon pt-3">
    <img src="https:${response.forecast.forecastday[1].day.condition.icon}" alt="" width="90" class="">
  </div>
  <div class="temp pt-2">
    <h3>${response.forecast.forecastday[1].day.maxtemp_c} °C</h3>
    <h4>${response.forecast.forecastday[1].day.mintemp_c} °C</h4>
    
  </div>
  <div class="forcast-state pb-5 pt-2">
    <h4 class="">${response.forecast.forecastday[1].day.condition.text}</h4>
  </div>`
// to display result
  secDay.innerHTML = weatherOfDay;

}

//fuction to display weather in third day
function displayThirdDayWeather() {
  let thirdDay = document.querySelector(".day3");
  let getDate3 = response.forecast.forecastday[2].date;
  let date3 = new Date(getDate3);
  // let getDate3 = date3.getDate()
  let getDay3 = date3.toLocaleString("en" , {weekday: "long"})
  console.log(getDay3);
  
  let weatherOfDay = ` 
    <div class="date third-date">
      <h3>${getDay3}</h3>
      </div>
    <div class="icon pt-3">
    <img src="https:${response.forecast.forecastday[2].day.condition.icon}" alt="" width="90" class="">
  </div>
  <div class="temp pt-2">
    <h3>${response.forecast.forecastday[2].day.maxtemp_c} °C</h3>
    <h4>${response.forecast.forecastday[2].day.mintemp_c} °C</h4>
    
  </div>
  <div class="forcast-state pb-5 pt-2">
    <h4 class="">${response.forecast.forecastday[2].day.condition.text}</h4>
  </div>`
//display result
  thirdDay.innerHTML = weatherOfDay
}


searchInput.addEventListener("keyup", function () {
  if(searchInput.value.length > 2){
  fetchWeather(searchInput.value)
  searchAlert.classList.add("d-none")
}
else{
  searchAlert.classList.remove("d-none")
} })


