import express from 'express'
import personsData from './data/db.json'

const app = express();
app.use(express.json());

let persons = personsData.persons;

app.get("/api/persons", (req, res) => {
    res.json(persons);
});

app.get("/api/persons/:id", (req, res) => {
    const id = Number(req.params.id);
    const person = persons.find(person => person.id === id);
    if (person) {
        res.json(person);
    } else {
        res.status(404).end();
    }
});

app.delete("/api/persons/:id", (req, res) => {
    const id = Number(req.params.id);
    persons = persons.filter(person => person.id !== id);
    console.log(persons);
    res.status(204).end();
})

app.post("/api/persons", (req, res) => {
    console.log(req.body);

    let person = req.body;
    const id = Math.floor(Math.random() * Math.floor(1000000));
    
    if (!person || !person.name || !person.number) {
        return res.status(400).json (
            {
                error: 'content missing'
            }
        )
    } else if ((persons.find(p => p.name === person.name))) {
        res.status(409).json (
            { 
                error: 'name must be unique' 
            }
        )
    }
    
    else {
        person["id"] = id;
        persons = persons.concat(person);
    
        res.json(persons);
    }    
}
)

app.get("/info", (req, res) => {
    const phoneBookLength = persons.length;
    const info = `Phonebook has info for ${phoneBookLength} people <br/> 
    ${Date()}`;

    res.send(info);
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

})
