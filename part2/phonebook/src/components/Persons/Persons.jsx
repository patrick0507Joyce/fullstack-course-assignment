import React from "react";

const Persons = ({ Persons,handleDeletePhoneNumber }) => {
  return (
    <div>
      {Persons.map((person, index) => (
        <p key={index}>
          {person.name} 
          &nbsp;
          {person.number}
          &nbsp;
          <button onClick={handleDeletePhoneNumber(person.id, person.name)}>delete</button>
        </p>
      ))}
    </div>
  );
};

export default Persons;
