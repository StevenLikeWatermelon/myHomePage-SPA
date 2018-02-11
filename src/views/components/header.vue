<style>
	.header {
		display: block;
		width: 100%;
    	z-index: 9999;
	}
	.fix-header {
		position: fixed;
		bottom: 0;
	    width: 100%;
	    height: 50px;
	    opacity: 0.5;
	    z-index: 999;
	    top: 0;
	    left: 0;
	    border-bottom: 1px solid #f1f1f1;
	    display: flex;
	    justify-content: space-between;
	    padding: 0px 15px 5px 15px;
	    background: #ffffff;
	}
	.el-menu-demo a{
		text-decoration: none;
		display: block;
		width: 100%;
		height: 100%
	}
	.header .el-menu--horizontal>.el-menu-item.is-active {
		color: #000;
		font-weight: 700;
	}
	.header .el-menu--horizontal .el-menu-item {
		height: 55px;
		line-height: 55px;
		color: #000;
	}
</style>

<template>
	<header class="header">
		<div class="fix-header">
			<div style="padding-top: 10px;">
				<router-link to="/index"><img :src="imgUrl"></router-link>
			</div>
			<div style="margin-left: -100px;">
				<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
					<el-menu-item v-for="item in menuList" :index="item.index" :key="item.index" @click="goRouter(item.name)">
						<a>{{item.title}}</a>
					</el-menu-item>
				</el-menu>
			</div>
			<div></div>
		</div>
	</header>
</template>

<script>
	export default {
		data () {
			return {
				imgUrl: require('../../img/steven.png')
			}
		},
		methods: {
			goRouter (path) {
				this.$router.push({name: path});
			}
		},
		computed: {
			activeIndex () {
				return this.$store.state.currentRouteIndex;
			},
			menuList () {
				return this.$store.state.menuList;
			}
		},
		created () {
			this.$store.commit('getCurrentMenuList', this.$route.name);
		},
		watch: {
			'$route' (to) {
				this.$store.commit('getCurrentMenuList', to.name);
			}
		}
	};
</script>