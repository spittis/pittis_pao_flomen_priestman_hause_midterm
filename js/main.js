//Components

import mainComponent from './components/mainComponent.js'; 
import formComponent from './components/formComponent.js'


const routes = [
    { path: '/', redirect: {name: 'main'}},
    { path: '/main', name: 'main', component: mainComponent },
    { path: '/form', name: 'form', component: formComponent }
];

const router = new VueRouter ({
    routes
});

const vm = new Vue ({
    // el: '#app',

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
            this.$router.push({path: "/main"});
            this.authenticated = false;
        },

        setCurrentUser(user) {
            //stub
            console.log('hit setCurrentUser');
        }
    },

    router: router
}).$mount("#app");

//make the router check all of the routes and bounce back if we're not authenticated
router.beforeEach((to, from, next) => {
    console.log("router guard fired!");

    if (vm.authenticated == false) {
        next("/main");
    }else{
        next();
    }
});

