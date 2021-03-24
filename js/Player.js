class Player {
    constructor (){
        this.name=null
        this.index = null
        this.distance = 0
        this.xPos = 0
    }

getCount (){
    var countRef = database.ref('playerCount')
    countRef.on("value", (data)=>{
        playerCount = data.val()
    })
}

    updateCount(count){
        database.ref('/').update({
           playerCount:count
        })
    
        
    }
    update(){
var playerIndex = "players/player" + this.index
database.ref(playerIndex).set({
    name : this.name,
    distance:this.distance,
    xPos: this.xPos
})
}
static getPlayerInfo(){
    var playerInfo = database.ref('players')
    playerInfo.on("value",(data)=>{
        allPlayers=data.val()
    })
}
}