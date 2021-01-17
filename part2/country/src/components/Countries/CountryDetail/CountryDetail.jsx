import React from "react";

const CountryDetail = ({ countryDataInDetail }) => {
  return (
    <div>
      <h1>{countryDataInDetail.name}</h1>
      <br />
      <p>capital {countryDataInDetail.capital}</p>
      <p>population {countryDataInDetail.population}</p>
      <br />
      <h3>languages</h3>
      <ul>
        {countryDataInDetail.languages.map((language, index) => (
          <li key={index}>{language.name}</li>
        ))}
      </ul>
      <img src={countryDataInDetail.flag} width={180} height={120} />
    </div>
  );
};

export default CountryDetail;
