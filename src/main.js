import Vue from 'vue';
import {Row, Col, Menu, MenuItem, Button, Loading, Input, Message} from 'element-ui'
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
Vue.use(Loading);
Vue.use(MenuItem);
Vue.use(Input);

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
Vue.prototype.$message = Message;

// router
const routerConfig = {
	routes: routersArr
}
const router = new VueRouter(routerConfig);

router.beforeEach((to, from, next) => {
	let notFound = true;
	let cuurentName = '';
	routersArr.forEach(item => {
		let routerInfo = item.children;
		routerInfo.forEach(item => {
			if (to.name == item.name) {
				notFound = false;
				cuurentName = to.name;
			}
		});
	});
	// 404处理
	if (notFound) {
		next({
            name: 'home_index'
        });
	} else {
		// PC M 自适应
		let width = window.innerWidth || document.documentElement.clientWidth;
		let isMRouter = cuurentName.slice(-2) === '_m' ? true : false;
		if (width <= 960 && !isMRouter) {
			next({
	            name: cuurentName + '_m'
	        });
		} else if (width > 960 && isMRouter) {
			next({
	            name: cuurentName.slice(0, -2)
	        });
		} else {
			next();
		}
	}
});

router.afterEach(() => {
	window.scrollTo(0, 0);
});
//vuex
const store = new Vuex.Store({
	state: {
		currentRouteIndex: 0, //默认首页
		menuList: [],
		globalLoading: true
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
		changeGolbalView (state, value) {
			state.globalLoading = value;
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