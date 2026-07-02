import express from 'express';
import 'dotenv/config';

const app = express();
const port = process.env.PORT;

app.get('/',(req,res)=>{
    res.send("This is first Full Stack Project.");
})

app.get('/jokes',(req,res)=>{
    const jokes = [
        {
            id : 1,
            title : 'First joke',
            description : 'Why did the math book look sad? Because it had too many problems.'
        },
        {
            id : 2,
            title : 'Second joke',
            description : 'What do you call cheese that isn\'t yours? Nacho cheese!'
        },
        {
            id : 3,
            title : 'Third joke',
            description : 'Why couldn\'t the bicycle stand up by itself? It was two-tired.'
        },
        {
            id : 4,
            title : 'Fourth joke',
            description : 'What do you call a bear with no teeth? A gummy bear.'
        },
        {
            id : 5,
            title : 'Fifth joke',
            description : 'Why did the scarecrow win an award? Because he was outstanding in his field!.'
        },
    ]

    res.send(jokes);
})

app.listen(port,()=>{
    console.log(`Server listening on ${port}`);
})