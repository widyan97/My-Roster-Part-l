const express = require('express')
const path = require('path')
const app = express()
const urllib = require('urllib');




app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}


app.get('/teams/:teamName', function(request, response){
  urllib.request('http://data.nba.net/10s/prod/v1/2018/players.json', function ( err, data, res) {
      let nbaPlayers=JSON.parse(data).league.standard
      const teamID =  teamToIDs[request.params.teamName]
      const players = []
     
      
      for(let player of nbaPlayers){
          if((player.isActive) &&(player.teamId == teamID)){
              players.push(
                {
                    name : `${player.firstName} ${player.lastName}` ,
                    pos : player.pos ,
                    jersey : player.jersey ,
                    imageSrc : `https://nba-players.herokuapp.com/players/${player.lastName}/${player.firstName}`
                })
          

        }
      }
      response.send({teamPlayers : players })
});

})
    

const port = 3001
app.listen(port, function(){
    console.log(`Server is up and running smoothly ${port}`)
})