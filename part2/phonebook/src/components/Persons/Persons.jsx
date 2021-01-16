import React from "react";

const Persons = ({ Persons }) => {
  return (
    <div>
      {Persons.map((person, index) => (
        <p key={index}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default Persons;
