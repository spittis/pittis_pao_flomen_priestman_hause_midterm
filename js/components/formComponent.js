export default {
    template: `
    <div>

    <div id="contactLeft">
    <img src="images/maidofthemist.jpg" alt="">
</div>

<div id="contactRight">
<h1>Get In Touch</h1>
<form action="sign-up.php" method="POST">
        <label for="country">Country:</label><br>
        <input type="text" id="country" name="country" value="" placeholder="Country"><br><br>
        
        <label for="first-name">First Name:</label><br>
        <input type="text" id="first-name" name="fname" value="" placeholder="First Name"><br><br>

        <label for="last-name">Last Name:</label><br>
        <input type="text" id="last-name" name="lname" value="" placeholder="Last Name"><br><br>

        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" value="" placeholder="Email Address"><br><br>

        <button type="submit" name="submit">Submit</button>
</form>
</div>

    </div>
    `,

    data() {
        return {
            input : {
                username: "",
                password: ""
            }
        }
    },

    methods: {
        login(){
            console.log("trying to log in");

            //check against our mock account creds
            if(this.input.username !="" && this.input.password !="" && this.input.email) {

                //create some form data to do a POST request
                let formData = new FormData();

                formData.append("username", this.input.username); //grab what ever is in the input area for
                formData.append("password", this.input.password); //username and password and make it a FormData
                formData.append("email", this.input.email);

                //do a fetch here and check creds on the back end
                let url = `../includes/admin/sign-up.php`;

                fetch(url, {
                    method: 'POST',
                    body: formData
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data == "Login Failed") {
                            //if te php file returns a failure, try again
                            console.log("authentication failed, try again");
                        }else{
                            //if the back-end authentication works, then go to the main page
                            this.$emit("authenticated", true);
                            this.$router.replace({name: "promotions"});
                        }
                    })
                .catch(function(error){
                    console.error(error);
                });
            } else {
                console.log('Username and Password cannot be blank');
            }
        }
    }
}
