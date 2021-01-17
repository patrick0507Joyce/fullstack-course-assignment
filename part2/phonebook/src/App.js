import Filter from './components/Filter/Filter'
import React, { useState, useEffect } from "react";
import PersonForm from './components/PersonForm/PersonForm';
import Persons from './components/Persons/Persons';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const [searchContent, setSearchContent] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const personsHook = () => {
    axios
        .get("http://localhost:3001/persons")
        .then(response => {
            setPersons(response.data);
        });
  }

  useEffect(personsHook, []);

  const addPerson = (event) => {
    event.preventDefault();
    if (newName !== "" && newNumber !== "") {
      const newPerson = {
        name: newName,
        number: newNumber,
      };

      if (persons.filter((person) => person.name === newName).length !== 0) {
        alert(`${newName} is already added to phonebook`);
      } else if (persons.filter((person) => person.number === newNumber).length !== 0) {
        alert(`${newNumber} is already added to phonebook`);
      } else {
        setPersons(persons.concat(newPerson));
      }
    } else {
        alert(`either name or number is not entered`);
    }
    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
      setSearchContent(event.target.value);
  }

  useEffect(() => {
    setSearchResults(persons.filter(person => person.name.toLowerCase().includes(searchContent.toLowerCase())));
  }, [searchContent, persons]);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchContent={searchContent} handleSearchChange={handleSearchChange} />
      
      <h2>add a new</h2>
      <PersonForm newName={newName} newNumber={newNumber} addPerson={addPerson} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}  />
      
      <h2>Numbers</h2>
      <Persons Persons={searchResults} />
    </div>
  );
};

export default App;
