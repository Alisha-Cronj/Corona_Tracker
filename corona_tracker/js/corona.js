class Corona {
  constructor(){
    
  }
  async get(url1, url2) {
    const caseResponse = await fetch(url1);
    const totalResponse = await fetch(url2);

    const cases = await caseResponse.json();
    const total = await totalResponse.json();

    return {
      cases,
      total
    };
  }

  async getCountrycases(value) {
    // console.log(value);

    if (value == 2) {
      const indiaResponse = await fetch(
        "https://api.covid19india.org/data.json"
      );

      const indiaData = await indiaResponse.json();
      return {
        indiaData
      };
    } else {
      const usaResponse = await fetch("https://corona.lmao.ninja/states");

      const usaData = await usaResponse.json();
      return {
        usaData
      };
    }
  }

  async getCountryData(country) {
    const countryResponse = await fetch(
      `https://corona.lmao.ninja/countries/${country}`
    );

    const countryData = await countryResponse.json();

    return {
      countryData
    };
  }
}
