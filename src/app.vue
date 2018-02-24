<template>
	<div class="myApp" v-show="globalShow">
		<header-tpl ></header-tpl>
		<router-view  class="main-class"></router-view>
	</div>
</template>

<script>
	import headerTpl from './views/components/header.vue';
	export default {
		data () {
			return {
			}
		},
    	components: {
    		headerTpl
    	},
		computed: {
			globalShow () {
				return this.$store.state.globalLoading;
			}
		}
	};
</script>

<style>
	.main-class {
    	background: url(./img/hero1.jpg) no-repeat top left #075498;
	    min-width: 100%;
	    min-height: 1000px;
	    width: 100%;
	    display: block;
	}
	.myApp {
	    width: 100%;
	    height: 100%;
	    overflow: hidden;
	}
</style>