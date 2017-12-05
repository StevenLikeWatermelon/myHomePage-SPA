import Main from './views/main.vue';

const allRouters = {
	path: '/',
	name: 'root-path',
	component: Main,
	children: [
		{path: '', name: 'work-experience-router', component: resolve => require(['./views/index.vue'], resolve)},
		{path: 'work-experience', name: 'index-router', component:  resolve => require(['./views/work-experience.vue'], resolve)}
	]
}

export const routersArr = [
	allRouters
];