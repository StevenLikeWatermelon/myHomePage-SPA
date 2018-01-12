import Main from './views/main.vue';

const allRouters = {
	path: '/',
	name: 'root-path',
	component: Main,
	children: [
		{path: 'index', name: 'home_index', title: "我的首页", display: 1, index: 0, component: resolve => require(['./views/main/index.vue'], resolve)},
		{path: 'IT-share-index', name: 'IT_share_index', title: "IT分享", display: 1, index: 1, component:  resolve => require(['./views/main/IT-share/index.vue'], resolve)},
		{path: 'IT-share-detail', name: 'IT_share_detail', title: "IT分享详情", display: 0, index: 1, component:  resolve => require(['./views/main/IT-share/detail.vue'], resolve)},
	]
}

export const routersArr = [
	allRouters
];