class Player{

    constructor(){

    }

    getCount(){
//declare variable for path

      var playerCountRef = database.ref("playerCount");

      //place an event listener for the playerCount

      playerCountRef.on("value", function(data){
         playerCount = data.val();
      },function (){
          console.log("error")
      })
    }

    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }

    update(username){
        var playerIndex;

        playerIndex = ("player" + playerCount);

        database.ref(playerIndex).set({
            name:username
        })
    }



};