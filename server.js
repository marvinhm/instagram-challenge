const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, fistName: "Peter", lastName: "Pettygrew"},
        {id: 2, fistName: "Alvrus", lastName: "Dumbledore"},
        {id: 3, fistName: "Professor", lastName: "Snape"}
    ];

    res.json(customers)
});


const port = 5050;

app.listen(port, () => { console.log(`Started on port ${port}`)})