export default {
    template: `
<div id="promo">

<div id="promoHeader" class="container">
        <!--<img id="smallmount" class="hidden" src="images/Mobile_BG.jpg alt="mountain background width="100%>-->
        <img id="bigmount" src="images/BG_HeroImage.jpg" alt="mountain background" width="100%">
        <img class="animated slideInUp" id="popUp" src="images/Ontario_Header.svg" width="100%">
        <img id="onTop" src="images/x-axis_bg.png" width="100%">
        <div class="centered" style="top: 500px">
        <h2 id="tagline">Find Yourself At Home</h2>
        <router-link :to="{ path: '/form'}"><button id="signButton">Sign Up</button></router-link>
        </div>
</div>

<div id="explore">
    <h2 id="whyOntario">Why Choose Ontario</h2>
    <ul>
    <li><a>POSITIVE</a>
    <p>Ontario Tourism aims to share with <br>the world just how beautiful Ontario is! <br>We are constantly finding new things<br> to love about Ontario.<br> Come see for yourself!<br><br></p>
</li>
<li><a>EXCITING</a>
    <p>There are always new and exciting <br>activities taking place in Ontario <br>that we would love to share! There is no<br> time like the present to come and <br>find excitement!<br><br></p>
</li>
<li><a>INVITING</a>
    <p>Ontario is one of the most <br>inclusive places as everyone is welcome! <br>The door is always open for new and <br>returning residents and visitors. <br>The more the merrier!<br><br></p>
</li>
    </ul>
</div>
    
<div id="graphicDesignText">
<div id="lightbox1">
    <div class="square squares">
    <img class="logo content rs contents rss" id="mi" src="images/Desktop_Canoe.jpg" alt="Canoeing" title="Canoeing">
    </div>
    <div class="square">
    <div class="content contents" id="logotext1"><h2>Get Involved</h2><p>Adventure awaits you in Northwest Ontario —a wilderness playground of trails and parks and hundreds of thousands of lakes and a rich Indigenous history. Take advantage of various activities to do and places to see like numerous provincial parks and vast bodies of water!</p></div>
    </div>
</div>

    <div class="square squares">
    <div class="content contents" id="logotext2"><h2>Explore The Great Outdoors</h2><p>Ontario is home to an incredible landscape of pristine lakes, rivers, and forests, which are made easily accessible by the provincial and national parks spread across the province. Families often enjoy the front country campgrounds, many of which are located on popular lakes with beaches.</p></div>
    </div>
    <div class="square noweb">
    <img class="logo content rs contents rss" id="seaStudios" src="images/Desktop_Camping.jpg" alt="Sea Studios Logo" title="Sea Studio Logo">
    </div>

</div>

<div id="destination">
    <img class="destinations" src="images/Desktop_Docks.jpg" alt="docks"><img class="destinations" src="images/Desktop_Concert.jpg" alt="concert"><img class="destinations" src="images/Desktop_Cliffs.jpg" alt="cliffs"><img class="destinations" src="images/Desktop_Fair.jpg" alt="fair"><img class="destinations" src="images/Desktop_Cityscape.jpg" alt="cityscape">
</div><div class="newsletter"><p id="daNews">SIGN UP FOR OUR NEWSLETTER</p><router-link :to="{ path: '/form'}"><button id="daNewsButton">Sign Up</button></router-link>
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
