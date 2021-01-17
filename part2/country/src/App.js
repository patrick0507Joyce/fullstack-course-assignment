import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Filter from "./components/Filter/Filter"
import Countries from './components/Countries/Countries';

const App = () => {
    const [countries, setCountries] = useState([]);
    const [searchContent, setSearchContent] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const countryHook = () => {
        axios
            .get("https://restcountries.eu/rest/v2/all")
            .then(response => {
                setCountries(response.data);
            })
    }

    useEffect(countryHook, []);

    const handleSearchChange = (event => {
        setSearchContent(event.target.value);
    });

    const searchResultsHook = () => {
        setSearchResults(countries.filter(country => country.name.toUpperCase().includes(searchContent.toUpperCase())));
    }

    useEffect(searchResultsHook,[searchContent, countries]);

    return (
        <div>
            <Filter searchContent={searchContent} handleSearchChange={handleSearchChange} />
            <Countries searchResults={searchResults} setSearchResults={setSearchResults} />
        </div>
    )
}

export default App
