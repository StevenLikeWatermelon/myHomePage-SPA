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
	    z-index: 999;
	    top: 0;
	    left: 0;
	    border-bottom: 1px solid rgba(255,255,255,0.1);
	    display: flex;
	    justify-content: space-between;
	    padding: 0px 15px 5px 15px;
	    background-color: rgba(255, 255, 255, 0.5);
	}
	.el-menu--horizontal.el-menu-demo {
		background-color: transparent;
		border-bottom: 0;
	}
	.el-menu--horizontal>.el-menu-item:hover, .el-menu--horizontal>.el-menu-item:focus, .el-menu--horizontal>.el-menu-item.is-active {
		background-color: rgba(255, 255, 255, 0.3);
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
	@media only screen and (max-width:960px) {
		.hearder-center {
			display: none;
		}
		.hearder-right {
			margin-right: 14px;
		}
	}
	@media only screen and (min-width:960px) {
		.hearder-right {
			display: none;
		}
	}
</style>

<template>
	<header class="header">
		<div class="fix-header">
			<div style="padding-top: 10px;">
				<router-link to="/index"><img :src="imgUrl"></router-link>
			</div>
			<div style="margin-left: -100px;" class="hearder-center">
				<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
					<el-menu-item v-for="item in menuList" :index="item.index" :key="item.index" @click="goRouter(item.name)">
						<a>{{item.title}}</a>
					</el-menu-item>
				</el-menu>
			</div>
			<div>
				<div  class="hearder-right">
<!-- 				    <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#ffffff73" text-color="#fff" active-text-color="#ffd04b">
				      <el-menu-item index="1">
				        <i class="el-icon-menu"></i>
				        <span slot="title">导航二</span>
				      </el-menu-item>
				      <el-menu-item index="2" disabled>
				        <i class="el-icon-document"></i>
				        <span slot="title">导航三</span>
				      </el-menu-item>
				      <el-menu-item index="3">
				        <i class="el-icon-setting"></i>
				        <span slot="title">导航四</span>
				      </el-menu-item>
				    </el-menu> -->
				</div>
			</div>
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