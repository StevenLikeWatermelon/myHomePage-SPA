import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import {routersArr} from './router';
import 'element-ui/lib/theme-chalk/index.css';
import App from './app.vue';

Vue.use(ElementUI);
Vue.use(VueRouter);

const routerConfig = {
	routes: routersArr
}
console.log(routerConfig);
const router = new VueRouter(routerConfig);


new Vue({
	el: '#app',
	router,
	render: h => h(App),
	data: {

	},
	mounted () {

	},
	methods: {

	}

});