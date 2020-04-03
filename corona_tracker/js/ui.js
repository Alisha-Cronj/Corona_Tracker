class UI {
  constructor(){
    
  }
  displayCases(cases) {
    let output = "";

    cases.forEach(function(data) {
      output += `
          <tr>
          <td>${data.country}</td>
          <td>${data.cases}</td>
          <td>${data.recovered}</td>
          <td>${data.deaths}</td>
          </tr>
        `;
    });

    document.getElementById("search").style.display = "block";

    // Output cases
    document.getElementById("case-data").innerHTML = output;
    document.getElementById("stat-name").innerHTML = "Country ";
    document.getElementById("stat-name-th").innerHTML = "Country ";
  }

  displayUsa(cases) {
    console.log(cases);
    let output = "";
    let totalDeath = 0;
    let totalConfirmed = 0;
    let totalRecovered = 0;

    cases.forEach(function(data) {
      output += `
          <tr>
          <td>${data.state}</td>
          <td>${data.cases}</td>
          <td>${data.active}</td>
          <td>${data.deaths}</td>
          </tr>
        `;
      totalDeath += data.deaths;
      totalConfirmed += data.cases;
      totalRecovered += data.cases - (data.active + data.deaths);
    });
    console.log(totalRecovered);

    const recoveredRate = (totalRecovered / totalConfirmed) * 100;
    const deathRate = (totalDeath / totalConfirmed) * 100;

    document.getElementById("total-confirm").innerHTML = totalConfirmed;
    document.getElementById("total-recover").innerHTML = totalRecovered;
    document.getElementById("total-deaths").innerHTML = totalDeath;
    document.getElementById("recovery-rate").innerHTML = `${recoveredRate.toFixed(
      2
    )}%`;
    document.getElementById("death-rate").innerHTML = `${deathRate.toFixed(2)}%`;

    document.getElementById("search").style.display = "none";

    // Output cases
    document.getElementById("case-data").innerHTML = output;
    document.getElementById("stat-name").innerHTML = "State ";
    document.getElementById("stat-name-th").innerHTML = "State ";
  }

  displayIndia(cases) {
    let statewise = cases.statewise;
    let output = "";

    let totalDeaths = 0;
    let totalConfirmed = 0;
    let totalRecovered = 0;

    statewise.forEach(function(data, index) {
      if (index < 1) {
        totalConfirmed = data.confirmed;
        totalRecovered = data.recovered;
        totalDeaths = data.deaths;
      } else {
        output += `
          <tr>
          <td>${data.state}</td>
          <td>${data.confirmed}</td>
          <td>${data.recovered}</td>
          <td>${data.deaths}</td>
          </tr>
        `;
      }
    });

    const recoveredRate = (totalRecovered / totalConfirmed) * 100;
    const deathRate = (totalDeaths / totalConfirmed) * 100;

    // Output cases
    document.getElementById("total-confirm").innerHTML = totalConfirmed;
    document.getElementById("total-recover").innerHTML = totalRecovered;
    document.getElementById("total-deaths").innerHTML = totalDeaths;
    document.getElementById("recovery-rate").innerHTML = `${recoveredRate.toFixed(
      2
    )}%`;
    document.getElementById("death-rate").innerHTML = `${deathRate.toFixed(2)}%`;

    document.getElementById("case-data").innerHTML = output;

    document.getElementById("search").style.display = "none";

    document.getElementById("stat-name").innerHTML = "State ";
    document.getElementById("stat-name-th").innerHTML = "State ";
  }

  //show country cases
  displayCase(data) {
    let output = "";

    output += `
          <tr>
          <td>${data.country}</td>
          <td>${data.cases}</td>
          <td>${data.recovered}</td>
          <td>${data.deaths}</td>
          </tr>
        `;

    // Output cases
    document.getElementById("case-data").innerHTML = output;
  }

  displayTotal(total) {
    // console.log(total);
    const recoveredRate = (total.recovered / total.cases) * 100;
    const deathRate = (total.deaths / total.cases) * 100;
    // console.log(recoveredRate);
    document.getElementById("total-confirm").innerHTML = total.cases;
    document.getElementById("total-recover").innerHTML = total.recovered;
    document.getElementById("total-deaths").innerHTML = total.deaths;
    document.getElementById("recovery-rate").innerHTML = `${recoveredRate.toFixed(
      2
    )}%`;
    document.getElementById("death-rate").innerHTML = `${deathRate.toFixed(2)}%`;
  }

  displayError(errmsg) {
    document.getElementById("case-data").innerHTML = "";
    document.getElementById("error-message").innerHTML = errmsg;
  }
}
