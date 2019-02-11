//Components

import promotionsComponent from './components/promotionsComponent.js'; 
import formComponent from './components/formComponent.js';


const routes = [
    { path: '/', redirect: {name: 'promotions'}},
    { path: '/promotions', name: 'promotions', component: promotionsComponent },
    { path: '/form', name: 'form', component: formComponent }
];

const router = new VueRouter ({
    routes
});

const vm = new Vue ({
    el: '#app',

    data: {
        message: "Hi from vue!",
        authenticated : false,
        administrator: false,
        
        mockAccount : {
            username: "midterm",
            password: "123"
        },

        user: [],
        curremtUser: {}
    },

    created: function(){
        console.log('hello hello');
    },

    methods: {

        setAuthenticated(status){
            this.authenticated = status;
        },

        logout(){
            this.$router.push({path: "/promotions"});
            this.authenticated = false;
        },

        setCurrentUser(user) {
            //stub
            console.log('hit setCurrentUser');
        }
    },

    router: router
}).$mount("#app");


