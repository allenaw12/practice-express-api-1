const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const movies = {
    'jurassic park':{
        'title':'Jurassic Park',
        'releaseYear': 1993,
        'director':'Steven Spielberg',
        'runTime':'127 min',
    },
    'the lost world: jurassic park':{
        'title':'The Lost World: Jurassic Park',
        'releaseYear': 1997,
        'director':'Steven Spielberg',
        'runTime':'129 min',
    },
    'jurassic park 3':{
        'title':'Jurassic Park III',
        'releaseYear': 2001,
        'director':'Joe Johnston',
        'runTime':'92 min',
    },
    'jurassic world':{
        'title':'Jurassic World',
        'releaseYear': 2015,
        'director':'Colin Trevorrow',
        'runTime':'124 min',
    },
    'jurassic world: fallen kingdom':{
        'title':'Jurassic World: Fallen Kingdom',
        'releaseYear': 2018,
        'director':'J. A. Bayona',
        'runTime':'128 min',
    },
    'jurassic world: dominion':{
        'title':'Jurassic World: Dominion',
        'releaseYear': 2022,
        'director':'Colin Trevorrow',
        'runTime':'146 min',
    },
    'unknown':{
        'title':'unknown',
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

app.get('/api/:releaseYear', (request, response)=>{
    const year = request.params.releaseYear
    if(movies[year]){
        response.json(movies[releaseYear])
    }else{
        response.json(movies['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log('we are running')
})