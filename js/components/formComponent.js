export default {

    template: `
    <div>

    <div id="contactLeft">
    <img src="images/Desktop_Contact_PG.jpg" alt="" id="desktopContact">
    <img src="images/Mobile_Contact_PG.jpg" alt="" id="mobileContact">
</div>

<div id="contactRight">
<h1>Get In Touch</h1>
<form>
        <label for="country">Country:</label><br>
        <input v-model="input.country" type="text" id="country" name="country" value="" placeholder="Country" required><br><br>

        <label for="firstname">First Name:</label><br>
        <input v-model="input.firstname" type="text" id="firstname" name="firstname" value="" placeholder="First Name" required><br><br>

        <label for="lastname">Last Name:</label><br>
        <input v-model="input.lastname" type="text" id="lastname" name="lastname" value="" placeholder="Last Name" required><br><br>

        <label for="email">Email:</label><br>
        <input v-model="input.email" type="email" id="email" name="email" value="" placeholder="Email Address" required><br><br>

        <button @click.prevent="signup()" type="submit" name="submit">Submit</button>
</form>
</div>
<div id="explore">
    <h2>Why Choose Ontario</h2>

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

    </div>
    `,


    data() {
        return {
            input: {
                country: "",
                firstname: "",
                lastname: "",
                email: ""
            }
        }
    },


    methods: {
        signup() {
            console.log('attempting to sign up');

            if (this.input.country != "" && this.input.firstname != "" && this.input.lastname != "" && this.input.email != "") {
                //fetch the data from the server and match passwords
                let url = `./admin/sign-up.php`;

                const formData = new FormData();

                formData.append("country", this.input.country);
                formData.append("firstname", this.input.firstname);
                formData.append("lastname", this.input.username);
                formData.append("email", this.input.email);

                fetch(url, {
                    method: 'POST',
                    body: formData
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data == "Signup Failed") {
                            console.log('login attempt failed');
                            return;
                        } else {
                            
                        }

                    })
                .catch(function(error) {
                    console.log(error);
                })

            } else {
                console.log('blank forms');
            }
        }
    }

    //End of Export Default
}

