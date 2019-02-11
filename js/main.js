(() => {
    // components go here
    import promotionsComponent from './components/promotionsComponent.js'; // this is like doing a php include
    import formComponent from './components/formComponent.js'

    // component is created first
        const routes = [
            { path: '/', redirect: {name:'promotions'}}, //want to redirect users to the promotions page
            { path: '/promotions', name:'promotions', component: promotionsComponent },
            { path: '/form', name: 'form', component: formComponent}, 
        ];
    

    // then the router instance is created
        const router = new VueRouter({
            routes
        });
    
    // then the vue instance is created
        const vm = new Vue({
        //el: '#app',

            data: {
                message: "sup from vue!",

            },
    
            created: function() {
                console.log('parent is live');
            },
            
            methods: {
                logParent(message) {
                    console.log("from the parent", message);
                },
    
                logMainMessage(message) { //putting the message in the brackets is adding an argument 
                    console.log("called from inside a child, lives in the parent", message);
                },

                setAuthenticated(status) {
                    this.authenticated = status;
                },

                logout() {
                    this.authenticated = false;
                }

            },

    components: {
        'promotionsComponent': promotionsComponent,
        'formComponent': formComponent
    },

    
    
            router: router
        }).$mount("#app"); //look for this element on the page, and that's where we're going to run vue stuff //mount it to a particular div and run all the vue stuff there
    })();