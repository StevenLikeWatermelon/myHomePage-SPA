import Main from './views/main.vue';

// display字段为是否需要展示位菜单导航： 1是，0否
// index为显示的菜单顺序
// m站不需要加index和display,但是需要在pc路由、name后面加 '_m'
const allRouters = {
	path: '/',
	name: 'root-path',
	component: Main,
	children: [
		{path: 'index', name: 'home_index', title: "我的首页", display: 1, index: 0, component: resolve => require(['./views/main/index.vue'], resolve)},
		{path: 'index_m', name: 'home_index_m', title: "我的首页", component: resolve => require(['./views/main/m-index.vue'], resolve)},//m站首页，暂不开放
		{path: 'IT-share-index', name: 'IT_share_index', title: "前端博客", display: 1, index: 1, component:  resolve => require(['./views/main/IT-share/index.vue'], resolve)},
		{path: 'IT-share-index_m', name: 'IT_share_index_m', title: "前端博客", component:  resolve => require(['./views/main/IT-share/m-index.vue'], resolve)},
		{path: 'IT-share-detail', name: 'IT_share_detail', title: "前端博客详情", display: 0, index: 1, component:  resolve => require(['./views/main/IT-share/detail.vue'], resolve)},
		{path: 'IT-share-detail_m', name: 'IT_share_detail_m', title: "前端博客详情", component:  resolve => require(['./views/main/IT-share/m-detail.vue'], resolve)},
		{path: 'Life-gossip', name: 'Life-gossip', title: "生活杂谈", display: 1, index: 2, component:  resolve => require(['./views/main/Life-gossip/index.vue'], resolve)},
		{path: 'Life-gossip_m', name: 'Life-gossip_m', title: "生活杂谈", component:  resolve => require(['./views/main/Life-gossip/m-index.vue'], resolve)},
		{path: 'Life-gossip-detail', name: 'Life-gossip-detail', title: "生活杂谈详情", display: 0, index: 2, component:  resolve => require(['./views/main/Life-gossip/detail.vue'], resolve)},
		{path: 'Life-gossip-detail_m', name: 'Life-gossip-detail_m', title: "生活杂谈详情", component:  resolve => require(['./views/main/Life-gossip/m-detail.vue'], resolve)},
		{path: 'work-experience', name: 'work-experience', title: "我的简历", display: 1, index: 3, component:  resolve => require(['./views/main/work-exprience/index.vue'], resolve)},
		{path: 'work-experience_m', name: 'work-experience_m', title: "我的简历", component:  resolve => require(['./views/main/work-exprience/m-index.vue'], resolve)},
		{path: 'contact-me', name: 'contact-me', title: "给我留言", display: 1, index: 4, component:  resolve => require(['./views/main/contact-me/index.vue'], resolve)},
		{path: 'contact-me_m', name: 'contact-me_m', title: "给我留言", component:  resolve => require(['./views/main/contact-me/m-index.vue'], resolve)},
	]
}

export const routersArr = [
	allRouters
];