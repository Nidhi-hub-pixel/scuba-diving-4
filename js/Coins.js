// Registering component in Target.js

AFRAME.registerComponent("target-coin", {
    init: function () {
      for (var i = 1; i <= 10; i++) {
        //id
        var id = `coin${i}`;
  
        //position variables     
        var posX =(Math.random() * 100 + -50);      
        var posY = (Math.random() * 5 + 5);
        var posZ = (Math.random() * 50 + -40);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createCoins(id, position);
      }
    } ,
  
    createCoins: function(id, position) { 
      
      const treasurEntity = document.querySelector("#treasureCoins")
      var coinEl = document.createElement("a-entity");
  
      coinEl.setAttribute("id",id);
      coinEl.setAttribute("position",position);
      
      coinEl.setAttribute("material","color","#ff9100");
      
      coinEl.setAttribute("geometry",{ primitive: "circle",radius: 1 });   
      
      coinEl.setAttribute("animation",{
        property:"rotation",
        to:"0 360 0",
        loop:"true",
        duration: 1000
      }
      );
     coinEl.setAttribute("static-body",{shape:"sphere",sphereRadius:1.5})
     coinEl.setAttribute("game-play",{elementId:`#${id}`})
     treasurEntity.appendChild(coinEl);
     coinEl.setAttribute("game-play", {
      elementId: `#${id}`,
    });
    }
    
  });
  
  