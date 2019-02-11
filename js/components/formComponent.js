export default {
    template: `
    <h1>Sign Up here!</h1>
    `,

    data() {
        return {
            input : {
                username: "",
                password: "", 
                email: ""
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
                let url = `./includes/admin/sign-up.php`;

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
                            this.$router.replace({name: "main"});
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
