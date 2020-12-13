const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const mOne = document.querySelector("#m-1");
const mTwo = document.querySelector("#m-2");
const mThree= document.querySelector("#m-3");
const mFour= document.querySelector("#m-4");
const mFive= document.querySelector("#m-5");
const mSix=document.querySelector("#m-6");
const mSeven=document.querySelector("#m-7");
const mEight=document.querySelector("#m-8");
const mNine=document.querySelector("#m-9");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;

  mOne.textContent = "Loading...";
  mTwo.textContent = "";
  mThree.textContent="";
  mFour.textContent="";
  mFive.textContent="";
  mSix.textContent="";
  mSeven.textContent="";
  mEight.textContent="";
  mNine.textContent="";

  fetch("/weather?address=" + location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        mOne.textContent = "Location : "+data.location;
        mTwo.textContent = "Observation Time : "+data.observation_time;
        mThree.textContent= "Temperature : " +data.temperature +" degrees.";
        mFour.textContent= "Weather : " +data.weather;
        mFive.textContent="Feels Like : "+data.feels_like + " degrees.";
        mSix.textContent="Precipitation : "+data.precipitation ;
        mSeven.textContent="Humidity : "+data.humidity+" %";
        mEight.textContent="Wind Speed : "+data.wind_speed+ " km/h";
        mNine.textContent="UV index : " +data.uv_index;
      }
    });
  });
});
