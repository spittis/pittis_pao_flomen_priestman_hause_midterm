export default {
    template: `
<div id="promo">

<div id="promoHeader" class="container">
        <img src="images/BG_HeroImage.jpg" alt="mountain background" width="100%">
        <img class="animated slideInUp" id="popUp" src="images/Ontario_Header.svg" width="100%">
        <img id="onTop" src="images/x-axis_bg.png" width="100%">
        <div class="centered">
        <h2 id="tagline">Find Yourself At Home</h2>
        <router-link :to="{ path: '/form'}"><button id="signButton">Sign Up</button></router-link>
        </div>
</div>

<div id="explore">
    <h2 class="hide" id="whyOntario">Why Choose Ontario</h2>

    <ul>
        <li><a>Explore 1</a>
            <p>Body TypeLorem ipsum dolor sit amet, <br>consectetuer adipiscing elit, sed diam<br> nonummy nibh euismod tincidunt ut <br>laoreet dolore magna aliquam erat <br>volutpat. Ut wisi enim ad minim <br>veniam, quis nostrud exerci tation.<br><br></p>
        </li>
        <li><a>Explore 1</a>
            <p>Body TypeLorem ipsum dolor sit amet, <br>consectetuer adipiscing elit, sed diam<br> nonummy nibh euismod tincidunt ut <br>laoreet dolore magna aliquam erat <br>volutpat. Ut wisi enim ad minim <br>veniam, quis nostrud exerci tation.<br><br></p>
        </li>
        <li><a>Explore 1</a>
            <p>Body TypeLorem ipsum dolor sit amet, <br>consectetuer adipiscing elit, sed diam<br> nonummy nibh euismod tincidunt ut <br>laoreet dolore magna aliquam erat <br>volutpat. Ut wisi enim ad minim <br>veniam, quis nostrud exerci tation.<br><br></p>
        </li>
    </ul>
</div>
    
<div id="graphicDesignText">
<div id="lightbox1">
    <div class="square squares">
    <img class="logo content rs contents rss" id="mi" src="images/Desktop_Canoe.jpg" alt="Canoeing" title="Canoeing">
    </div>
    <div class="square">
    <div class="content contents" id="logotext1"><h2>Get Involved</h2><p>A paragraph goes here!</p></div>
    </div>
</div>

    <div class="square squares">
    <div class="content contents" id="logotext2"><h2>Explore Yourself</h2><p>A paragraph goes here!</p></div>
    </div>
    <div class="square noweb">
    <img class="logo content rs contents rss" id="seaStudios" src="images/Desktop_Camping.jpg" alt="Sea Studios Logo" title="Sea Studio Logo">
    </div>

</div>

<div id="destination">
    <img class="destinations" src="images/Desktop_Docks.jpg" alt="docks"><img class="destinations" src="images/Desktop_Concert.jpg" alt="concert"><img class="destinations" src="images/Desktop_Cliffs.jpg" alt="cliffs"><img class="destinations" src="images/Desktop_Fair.jpg" alt="fair"><img class="destinations" src="images/Desktop_Cityscape.jpg" alt="cityscape">


</div>


</div>
    `,

    data() {
        return{
            message: "hello from the promotions component",
        }
    },

    methods: {

    }
}

// this is a template for the promotions component
// copy and paste HTML into the template tag
// work in this file, then import it into the main file
// this is just html and js
// every time you make a component make a sass module with it
// template, data, method all moved into one file now
