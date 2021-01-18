import Filter from './components/Filter/Filter'
import React, { useState, useEffect } from "react";
import PersonForm from './components/PersonForm/PersonForm';
import Persons from './components/Persons/Persons';
import phoneNumberService from './services/phoneNumber';
import Notification from './components/Notification/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const [searchContent, setSearchContent] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const personsHook = () => {
    phoneNumberService.getPhoneNumberPersons().then(phoneNumberPersons => setPersons(phoneNumberPersons))
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
        const oldPerson = persons.filter((person) => person.name === newName)[0];
        const result = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`);
        if (result) {
          phoneNumberService
            .updatePhoneNumber(oldPerson.id, {...oldPerson, number: newNumber})
            .then(modifiedPerson => {
              console.log(modifiedPerson);
              setPersons(persons.filter(person => person.id !== oldPerson.id).concat(modifiedPerson));
              setSuccessMessage(`Updated ${modifiedPerson.name}`);
            })
            .catch(error => {
              setPersons(persons.filter(person => person.id !== oldPerson.id));
              console.log({persons});
              setErrorMessage(`Information of ${oldPerson.name} has already been removed from server`);
            })
        }
      } else if (persons.filter((person) => person.number === newNumber).length !== 0) {
        alert(`${newNumber} is already added to phonebook`);
      } else {
        phoneNumberService
          .createPhoneNumber(newPerson)
          .then(returnPerson => {
            setPersons(persons.concat(returnPerson));
            setSuccessMessage(`Added ${returnPerson.name}`);
          });
        
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
    console.log(persons);
    setSearchResults(persons.filter(person => person && person.name.toLowerCase().includes(searchContent.toLowerCase())));
  }, [searchContent, persons]);

  const handleDeletePhoneNumber = (id, name) => {
    return () => {
      const message = `Delete ${name}`;
      const result = window.confirm(message);
      if (result) {
        phoneNumberService.deletePhoneNumber(id).then(status => {
          if (status === 200) {
            setPersons(persons.filter(person => person.id !== id));
            console.log({persons});
            setSuccessMessage(`Deleted ${name}`);
          }
        })
        
      }
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification successMessage={successMessage} errorMessage={errorMessage} />
      <Filter searchContent={searchContent} handleSearchChange={handleSearchChange} />
      
      <h2>add a new</h2>
      <PersonForm newName={newName} newNumber={newNumber} addPerson={addPerson} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      
      <h2>Numbers</h2>
      <Persons Persons={searchResults} handleDeletePhoneNumber={handleDeletePhoneNumber} />
    </div>
  );
};

export default App;
