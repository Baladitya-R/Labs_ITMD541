// Get DOM elements for location selection and data display
const select = document.getElementById("locationSelect");
const useLocationBtn = document.getElementById("useLocationBtn");
const loading = document.getElementById("loading");
const results = document.getElementById("results");
const todayDiv = document.getElementById("today");
const tomorrowDiv = document.getElementById("tomorrow");

// Fetch sunrise/sunset data from the API for both today and tomorrow
function fetchSunData(lat, lng) {
  loading.textContent = "Loading...";
  results.classList.add("hidden");

  const baseUrl = `https://api.sunrisesunset.io/json`;
  const dates = ["today", "tomorrow"];

  // Fetch data for both days in parallel
  Promise.all(
    dates.map(date =>
      fetch(`${baseUrl}?lat=${lat}&lng=${lng}&date=${date}`)
        .then(res => res.json())
    )
  )
    .then(([todayData, tomorrowData]) => {
      if (todayData.status !== "OK" || tomorrowData.status !== "OK") {
        throw new Error("Failed to fetch valid data.");
      }

      // Show results for both days
      displayResults(todayData.results, todayDiv, "Today");
      displayResults(tomorrowData.results, tomorrowDiv, "Tomorrow");
      results.classList.remove("hidden");
      loading.textContent = "";
    })
    .catch(err => {
      loading.textContent = "Error: " + err.message;
    });
}

// Display fetched data inside a specific section
function displayResults(data, element, label) {
  element.innerHTML = `
    <h2>${label}</h2>
    <div class="data-grid">
      <div class="data-item"><i class="fas fa-sun"></i><br><strong>Sunrise:</strong> ${data.sunrise}</div>
      <div class="data-item"><i class="fas fa-moon"></i><br><strong>Sunset:</strong> ${data.sunset}</div>
      <div class="data-item"><i class="fas fa-cloud-sun"></i><br><strong>Dawn:</strong> ${data.dawn}</div>
      <div class="data-item"><i class="fas fa-cloud-moon"></i><br><strong>Dusk:</strong> ${data.dusk}</div>
      <div class="data-item"><i class="fas fa-hourglass-half"></i><br><strong>Day Length:</strong> ${data.day_length}</div>
      <div class="data-item"><i class="fas fa-solar-panel"></i><br><strong>Solar Noon:</strong> ${data.solar_noon}</div>
      <div class="data-item"><i class="fas fa-globe"></i><br><strong>Time Zone:</strong> ${data.timezone}</div>
    </div>
  `;
}

// Fetch data when a location is selected from dropdown
select.addEventListener("change", () => {
  const [lat, lng] = select.value.split(",");
  fetchSunData(lat, lng);
});

// Fetch data using user's current geolocation
useLocationBtn.addEventListener("click", () => {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      fetchSunData(position.coords.latitude, position.coords.longitude);
    },
    () => {
      loading.textContent = "Unable to retrieve your location.";
    }
  );
});
