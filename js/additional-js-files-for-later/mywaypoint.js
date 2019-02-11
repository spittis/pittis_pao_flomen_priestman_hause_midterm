window.onload = function(){
    //console.log("Hello World");
    
    //about contact icons
  
    var waypoint = new Waypoint({
        element:document.getElementById("locationIcon"),
        handler:function(direction){
            this.element.classList.add("slideInUp");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "80%"
    })

};