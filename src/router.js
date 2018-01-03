import Main from './views/main.vue';

const allRouters = {
	path: '/',
	name: 'root-path',
	component: Main,
	children: [
		{path: 'index', name: 'home_index', title: "我的首页", component: resolve => require(['./views/index.vue'], resolve)},
		{path: 'work-experience', name: 'work_experience', title: "IT分享", component:  resolve => require(['./views/work-experience.vue'], resolve)}
	]
}

export const routersArr = [
	allRouters
];