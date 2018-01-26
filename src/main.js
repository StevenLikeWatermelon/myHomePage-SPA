import Vue from 'vue';
import {Row, Col, Menu, MenuItem, Button, Loading} from 'element-ui'
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

// 判断访问终端类型开始 //
let systemType = {
    win: false,
    mac: false,
    xll: false,
    ipad:false
};
let isPC = false;
//检测平台
let currentPlatform = navigator.platform;
systemType.win = currentPlatform.indexOf("Win") == 0;
systemType.mac = currentPlatform.indexOf("Mac") == 0;
systemType.x11 = (currentPlatform == "X11") || (currentPlatform.indexOf("Linux") == 0);
systemType.ipad = (navigator.userAgent.match(/iPad/i) != null)?true:false;

for (let key in systemType) {
	if (systemType.hasOwnProperty(key)) {
		if (systemType[key]) {
			isPC = true;
		}
	}
}
// 判断访问终端类型结束 //

router.beforeEach((to, from, next) => {
	let notFound = true;
	if (isPC) {
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
	} else {
		next({
            name: 'm-index'
        });
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