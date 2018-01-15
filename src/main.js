import Vue from 'vue';
import {Row, Col, Menu, MenuItem, Button} from 'element-ui'
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import {routersArr} from './router';
import axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css';
import App from './app.vue';

Vue.use(Row);
Vue.use(Col);
Vue.use(Menu);
Vue.use(Button);
Vue.use(MenuItem);
Vue.use(VueRouter);
Vue.use(Vuex);

// 自定义
//添加一个请求拦截器
axios.interceptors.request.use(function(config){
  //在请求发出之前进行一些操作
  return config;
},function(err){
  //Do something with request error
  return Promise.reject(error);
});
Vue.prototype.$http = axios;

// router
const routerConfig = {
	routes: routersArr
}
const router = new VueRouter(routerConfig);
router.beforeEach((to, from, next) => {
	let notFound = true;
	routersArr.forEach(item => {
		let routerInfo = item.children;
		routerInfo.forEach(item => {
			if (to.name == item.name) {
				notFound = false;
			}
		});
	});
	if (notFound) {
		next({
            name: 'home_index'
        });
	} else {
		next();
	}
});

router.afterEach(() => {
	window.scrollTo(0, 0);
});
//vuex
const store = new Vuex.Store({
	state: {
		currentRouteIndex: 0, //默认首页
		menuList: []

	},
	mutations: {
		getCurrentMenuList (state, name) {
			state.menuList = [];
			routersArr.forEach(item => {
				let routerInfo = item.children;
				let currentRoute;
				routerInfo.forEach((item) => {
					currentRoute = {
						index: item.index,
						name: item.name,
						title: item.title
					};
					if (item.display) {
						state.menuList.push(currentRoute);
					}
					if (item.name == name) {
						state.currentRouteIndex = item.index;
					}
				});
			});
		},
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