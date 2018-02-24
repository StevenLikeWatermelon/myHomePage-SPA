<style>
	.header {
		display: block;
		width: 100%;
    	z-index: 99;
	}
	.fix-header {
		position: fixed;
		bottom: 0;
	    width: 100%;
	    height: 50px;
	    z-index: 99;
	    top: 0;
	    left: 0;
	    border-bottom: 1px solid rgba(255,255,255,0.1);
	    display: flex;
	    justify-content: space-between;
	    padding: 0px 15px 5px 15px;
	    background-color: rgba(255, 255, 255, 0.5);
	}
	.diy-height {
		padding-top: 10px;
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
			padding-top: 5px;
		}
		.fix-header {
			height: 40px;
		}
		.diy-height {
			padding-top: 4px;
		}
		.weui-cells__title {
		    line-height: 35px;
    		padding-top: 7px;
		    text-align: center;
		    font-weight: 700;
		    color: #fff !important;
		    margin-top: 0 !important;
		}
		.weui-cell {
			line-height: 15px !important;
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
			<div class="diy-height">
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
				<div class="hearder-right">
					<span v-show="!drawerVisibility" @click="drawerVisibility = !drawerVisibility">
            			<x-icon type="navicon" size="35" style="fill:#000;position:relative;left:-3px;"></x-icon>
         			</span>
				</div>
			</div>
		</div>
	    <drawer width="150px;" :style="{ zIndex: displayIndex, position: 'fixed', left: displayLeft}" :show.sync="drawerVisibility" show-mode="push" placement="right" :drawer-style="{'background-color':'#35495e', width: '150px', 'text-align': 'center'}">
	      <div slot="drawer">
	        <group title="目录导航">
	          <cell v-for="item in menuList" :title="item.title"  @click.native="goRouter(item.name)">
	          		<span slot="icon" v-if="item.index == 0">
            			<x-icon type="home"></x-icon>
         			</span>
         			<span slot="icon" v-if="item.index == 1">
            			<x-icon type="social-html5"></x-icon>
         			</span>
         			<span slot="icon" v-if="item.index == 2">
            			<x-icon type="beer"></x-icon>
         			</span>
         			<span slot="icon" v-if="item.index == 3">
            			<x-icon type="ios-list-outline"></x-icon>
         			</span>
         			<span slot="icon" v-if="item.index == 4">
            			<x-icon type="android-mail"></x-icon>
         			</span>
	          </cell>
	        </group>
	      </div>
	    </drawer>
	</header>
</template>

<script>
	import { Group, Cell, Drawer } from 'vux';
	export default {
		data () {
			return {
				imgUrl: require('../../img/steven.png'),
				drawerVisibility: false,
			}
		},
    	components: {
    		Group,
    		Cell,
    		Drawer
    	},
		methods: {
			goRouter (path) {
				this.drawerVisibility = false;
				this.$router.push({name: path});
			}
		},
		computed: {
			activeIndex () {
				return this.$store.state.currentRouteIndex;
			},
			menuList () {
				return this.$store.state.menuList;
			},
			displayIndex () {
				return this.drawerVisibility ? 100 : 98;
			},
			displayLeft () {
				return this.drawerVisibility ? 0 : '100%';
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