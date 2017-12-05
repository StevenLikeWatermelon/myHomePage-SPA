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
	    z-index: 1;
	    top: 0;
	    left: 0;
	    border-bottom: 1px solid #f1f1f1;
	    display: block;
	    padding: 0px 15px 5px 15px;
	    background: #ffffff;
	}
</style>

<template>
	<header class="header">
		<div class="fix-header">
			<el-row>
				<el-col :xs="18" :md="8" :sm="8">
					<div style="padding-top: 6px;">
						<router-link to="/"><img :src="imgUrl"></router-link>
					</div>
				</el-col>
				<el-col :xs="0" :md="16" :sm="16">
					<div>
						<el-menu :default-active="activeIndex" mode="horizontal">
							<el-menu-item index="1"><router-link to="/">我的首页</router-link></el-menu-item>
							<el-menu-item index="2"><router-link to="/work-experience">工作经历</router-link></el-menu-item>
						</el-menu>
					</div>
				</el-col>
				<el-col :xs="6" :md="0" :sm="0"><div>333</div></el-col>
			</el-row>
		</div>
	</header>
</template>

<script>
	export default {
		data () {
			return {
				imgUrl: require('../../img/steven.png'),
				activeIndex:'1'
			}
		}
	};
</script>