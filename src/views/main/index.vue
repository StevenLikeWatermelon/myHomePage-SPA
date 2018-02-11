<style>
	.classBanner {
		background: url(../../../src/img/indexBanner.png);
		max-width: 1920px;
		width: 100%;
		height: 800px;
		max-height: 800px;
		margin-top: -50px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.indexBannerContent {
		width: 425px;
		text-align: center;
		color: #a75c5c;
	}
	.personalIntroduce {
		background: #fff;
		max-width: 1920px;
		width: 100%;
		height: 400px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.personalBkg {
		background: url(../../../src/img/personal.jpg)  -146px -32px;
		width: 300px;
		height: 300px;
		border-radius: 170px;
		line-height: 300px;
		text-align: center;
	}
	.personalDiscription {
	    color: #6d6571;
	    font-size: 15px;
	    width: 500px;
	}
</style>

<template>
	<section id="home">
		<div class="classBanner">
			<div class="indexBannerContent">
				<p style="font-size: 50px;margin-top: -100px;margin-bottom: 25px;">STEVEN   BLOG</p>
				<p>生命是一场奇妙的单程旅行，秉怀敬畏之心，一路去感受、去冒险、去探索，与自己为敌, 与自己为友, 一边深挖思想, 一边埋葬自己。</p>
				<div style="width:100%; height: 40px;margin-top:40px;">
					<el-button type="default" style="float:left;background: #ffffffa3" @click="goRouter()">前端博客</el-button>
					<el-button type="default" style="float:right;background: #ffffffa3"><a href="https://github.com/StevenLikeWatermelon" target="_blank" style="text-decoration: none;color: inherit;">GitHub</a></el-button>
				</div>
			</div>
		</div>
		<div class="personalIntroduce">
			<div class="personalDiscription">
				<p style="margin:0;padding:0">个人资料:</p>
				<p>90后，男，黑框眼镜、双肩包、寸板头、格子衫，是的，博主就是典型的程序员，非科班半路出家，自学暂未成才。</p>
				<p>性格慢热，助人为乐，喜欢思考，喜欢钻研，与JS为伍，与bug为敌，热爱前端开发、热爱互联网、热爱游戏、热爱生活。</p>
			</div>
			<div>
				<div class="personalBkg"></div>
			</div>
			<div class="personalDiscription">
				<p style="margin:0;padding:0">生活情况:</p>
				<p>博主已婚，定居南京，平时爱好看书、修手机、看新闻、玩游戏、跑步、写代码、发呆，兴趣爱好广泛。</p>
				<p>希望能结交志同道合的朋友，聊前端、聊互联网、聊程序员、聊生活、聊人生。</p> 
			</div>
		</div>
	</section>
</template>


<script>
    export default {
    	data () {
    		return {

    		}
    	},
    	methods: {
    		goRouter () {
    			this.$router.push({name: 'IT_share_index'});
    		},
    		goGitHub () {
    			window.location.href = '';
    		}
    	}
    };
</script>