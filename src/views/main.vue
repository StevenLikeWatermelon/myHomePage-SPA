<style>
	.main {
		width: 100%;
		height: 100%;
	}
	.content {
		width: 100%;
		height: 100%;
		margin-top: 50px;
		position: absolute;
	}

</style>

<template>
<div class="main">
	<header-tpl></header-tpl>
	<div class="content">
		<keep-alive :include="cachePage">
			<router-view></router-view>
		</keep-alive>
	</div>
</div>
</template>

<script>
	import headerTpl from './components/header.vue';
    export default {
    	data () {
    		return {
    			cachePage: ['contact-me']
    		}
    	},
    	components: {
    		headerTpl
    	}
    };
</script>