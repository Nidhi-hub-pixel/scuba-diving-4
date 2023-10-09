// Registering component in Fishes.js

AFRAME.registerComponent("fishes", {
    init: function () {
      for (var i = 1; i <= 10; i++) {
        //id
        var id = `fish${i}`;
  
        //position variables     
        var posX =(Math.random() * 100 + -50);      
        var posY = (Math.random() * 5 + 5);
        var posZ = (Math.random() * 50 + -40);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createFishes(id, position);
      }
    } ,
  
    createFishes: function(id, position) { 
      
      const treasurEntity = document.querySelector("#Fishes")
      var fishEl = document.createElement("a-entity");
  
      fishEl.setAttribute("id",id);
      fishEl.setAttribute("position",position);
      fishEl.setAttribute("scale", { x: 500, y: 500, z: 500 });
     // fishEl.setAttribute("material","color","#ff9100");

     fishEl.setAttribute("gltf-model", "./PRO-C154-Project/assets/fish/scene.gltf");

     // fishEl.setAttribute("geometry",{ primitive: "circle",radius: 1 });   

     fishEl.setAttribute("animation-mixer", {});
     fishEl.setAttribute("static-body",{shape:"sphere",sphereRadius:5})
     fishEl.setAttribute("game-play",{elementId:`#${id}`})


      fishEl.setAttribute("animation",{
        property:"rotation",
        to:"0 360 0",
        loop:"true",
        duration: 1000
     }
      );
      //set the game play attribute
    fishEl.setAttribute("game-play", {
      elementId: `#${id}`,
    });
     treasurEntity.appendChild(fishEl);
    }
  });
  
  