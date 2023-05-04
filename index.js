const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


const chefCard = require('./chefCard.json')
const foodItems = require('./food.json')
const recipe = require('./recipe.json')

app.get('/', (req, res) => {
    res.send('FOODIE is running')
});

app.use(cors());

app.get('/chefCard', (req,res) => {
    res.send(chefCard)
});

app.get('/chefCard/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const selectedCard = chefCard.find(n => n.id == id);
    res.send(selectedCard)
})
app.get('/foodItems',(req,res)=>{
    res.send((foodItems))
})

app.get('/recipe',(req,res)=>{
    res.send(recipe);
})
app.listen(port, () => {
    console.log(`Foodie  API is running on port: ${port}`)
})

