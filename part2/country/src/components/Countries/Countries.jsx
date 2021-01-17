import React, { useEffect } from "react";
import CountryDetail from "./CountryDetail/CountryDetail";
import CountryWeather from "./CountryWeather/CountryWeather";

const Countries = ({ searchResults, setSearchResults }) => {
  const searchResultsOnClick = (countryName) => {
    return () => {
        setSearchResults(searchResults.filter(searchResult => searchResult.name === countryName));
    }
  }

  if (searchResults.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (searchResults.length === 1) {
    const countryDataInDetail = searchResults[0];
    return (
        <div>
            <CountryDetail countryDataInDetail={countryDataInDetail} />
            <CountryWeather countryCapitalName={countryDataInDetail.capital}/>
        </div>
    );
  } else {
    return (
      <div>
        {searchResults.map((country, index) => (
          <p key={index}>
            {country.name}
            &nbsp;
            <button onClick={searchResultsOnClick(country.name)}>show</button>
          </p>
        ))}
      </div>
    );
  }
};

export default Countries;
