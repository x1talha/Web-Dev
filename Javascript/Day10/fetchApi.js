const weather =
  "https://api.open-meteo.com/v1/forecast?latitude=31.5&longitude=74.3&current_weather=true";

const factpara = document.querySelector("#fact");
let btn = document.querySelector(".btn");

let getFacts = async () => {
  let response = await fetch(weather);
  let data = await response.json();

  factpara.innerText =
    "Temperature: " + data.current_weather.temperature + "°C";
};

btn.addEventListener("click", getFacts);
