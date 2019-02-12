window.scroll = function(){
    //console.log("Hello World");
    
  
    var waypoint = new Waypoint({
        element:document.getElementById("whyOntario"),
        handler:function(direction){
            this.element.classList.add("slideInUp");
            this.element.classList.add("animated");
           // this.element.classList.add("visible");
        },
        offset: "50%"
    })

};