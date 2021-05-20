import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store'
import routes from './routes/route'
import CKEditor from '@ckeditor/ckeditor5-vue'

/*import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faChild, faCircle, faArchive } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
library.add(
    faCoffee,
    faChild,
    faCircle,
    faArchive
)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)*/

Vue.config.productionTip = false;
Vue.config.devtools = false;
Vue.prototype.log = console.log;

Vue.use( CKEditor );

Vue.use(VueRouter)
// configure router
const router = new VueRouter({
    mode: 'history',
    routes, // short for routes: routes
})

new Vue({
    el: "#app",
    //i18n,
    router,
    store,
    render: h => h(App),
})
