const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const movies = {
    'jurassic park':{
        'releaseYear': 1993,
        'director':'Steven Spielberg',
        'runTime':'127 min',
    },
    'the lost world: jurassic park':{
        'releaseYear': 1997,
        'director':'Steven Spielberg',
        'runTime':'129 min',
    },
    'jurassic park 3':{
        'releaseYear': 2001,
        'director':'Joe Johnston',
        'runTime':'92 min',
    },
    'jurassic world':{
        'releaseYear': 2015,
        'director':'Colin Trevorrow',
        'runTime':'124 min',
    },
    'jurassic world: fallen kingdom':{
        'releaseYear': 2018,
        'director':'J. A. Bayona',
        'runTime':'128 min',
    },
    'jurassic world: dominion':{
        'releaseYear': 2022,
        'director':'Colin Trevorrow',
        'runTime':'146 min',
    },
    'unknown':{
        'releaseYear': NaN,
        'director':'unknown',
        'runTime':'unknown',
    },
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response)=>{
    response.json(movies)
})

app.get('/api/:title', (request, response)=>{
    const title = request.params.title.toLowerCase()
    if(movies[title]){
        response.json(movies[title])
    }else{
        response.json(movies['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log('we are running')
})