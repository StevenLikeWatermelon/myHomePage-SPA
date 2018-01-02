import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import ElementUI from 'element-ui';
import {routersArr} from './router';
import 'element-ui/lib/theme-chalk/index.css';
import App from './app.vue';

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vuex);

const routerConfig = {
	routes: routersArr
}
const router = new VueRouter(routerConfig);

const store = new Vuex.Store({
	state: {
		currentRouteIndex: localStorage.getItem('currentRouteIndex') || '1' //默认首页
	},
	mutations: {
		getCurrentPathIndex (state, index) {
			state.currentRouteIndex = index;
		}
	}
});

new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App),
	data: {

	},
	mounted () {

	},
	methods: {

	}

});