// Init Corona
const corona = new Corona();

// Init UI
const ui = new UI();

//page load event
document.addEventListener("DOMContentLoaded", getCases);

//dropdown
const tracker = document.getElementById("tracker");

//search 
const search = document.getElementById("search");

function getCases(e) {
 
  const value = e.target.value;
  if (value == 2) {
    corona
      .getCountrycases(value)
      .then(data => ui.displayIndia(data.indiaData))
      .catch(err => console.log(err));
  } else if (value == 3 ) {
    corona
      .getCountrycases(value)
      .then(data => ui.displayUsa(data.usaData))
      .catch(err => console.log(err));
  } else {
    corona
      .get(
        "https://corona.lmao.ninja/countries",
        "https://corona.lmao.ninja/all"
      )
      .then(data => {
        ui.displayCases(data.cases);
        ui.displayTotal(data.total);
      })
      .catch(err => console.log(err));
  }

  e.preventDefault();
}

// debounce function
function debounce(func, delay) {
  var timeout;

  return function executedFunction() {
    var context = this;
    var args = arguments;

    // clear timeout
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

var returnedFunction = debounce(e => {
  // Get input text
  const userText = e.target.value;

  if (userText !== "") {
    // Make http call
    corona.getCountryData(userText).then(data => {
      if (data.countryData.message) {
        // Show error message
        ui.displayError(data.countryData.message);
      } else {
        // Show
        ui.displayCase(data.countryData);
      }
    });
  } else {
    getCases();
  }
}, 500);

// Search input event listener
search.addEventListener("keyup", returnedFunction);

//drop down event
tracker.addEventListener("change", getCases);
