<style>
	.main {
		width: 100%;
		height: 100%;
	}
	.content {
		width: 100%;
		height: 100%;
		position: absolute;
	}

</style>

<template>
<div class="main">
	<header-tpl></header-tpl>
	<div class="content">
		<router-view></router-view>
	</div>
</div>
</template>

<script>
	import headerTpl from './components/header.vue';
    export default {
    	components: {
    		headerTpl
    	}
    };
</script>