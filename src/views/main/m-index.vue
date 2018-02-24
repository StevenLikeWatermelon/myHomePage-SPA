<style scoped>
	.classBanner {
		background: url('../../../src/img/indexBanner.png') 0 -100px no-repeat;
		max-width: 1920px;
		width: 100%;
		height: 520px;
		margin-top: -50px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.indexBannerContent {
		width: 90%;
		text-align: center;
		color: #a75c5c;
		padding-top: 50px;
	}
	.personalIntroduce {
		background: #fff;
		width: 100%;
		height: 400px;
		margin-top: -50px;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		align-items: center;
	}
	.personalBkg-m {
		background: url(../../../src/img/personal.jpg);
		-moz-background-size:100% 100%; 
		background-size:100% 100%;
		width: 95%;
	    height: 95%;
	    border-radius: 30px;
	    text-align: center;
	    color: #fff;
	}
	.contactType {
		background: url(../../../src/img/contact.jpg);
		width: 100%;
		height: 240px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.contactTypeDetail {
	    color: #fff;
	    font-size: 1em;
	    line-height: 50px;
	    text-align: center;
	    width: 90%;
	    text-shadow: 0 0 60px;
	}
	.lastest-article {
		background: #e0ebfb;
		padding-top: 20px;
		padding-bottom: 20px;
	}
	.newBolgTitle {
		font-size: 20px;
		padding-bottom: 20px;
		text-align: center;
		font-weight: 700;
	}
	.newBolgDetail {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
</style>

<template>
	<section id="home">
		<div class="classBanner">
			<div class="indexBannerContent">
				<p style="font-size: 28px;margin-top: -100px;margin-bottom: 25px;text-shadow: 3px 3px 6px #a75c5c;">STEVEN   BLOG</p>
				<p style="font-size: 14px;text-shadow: 1px 1px 10px #a75c5c;">Stay hungry. Stay foolish. Keep learning. Keep walking.</p>
				<p style="font-size: 14px;text-shadow: 1px 1px 10px #a75c5c;margin-top:8px;">Maybe I am a slow walker, but I never walk backwards.</p>
				<div style="width:100%; height: 40px;margin-top:70px;">
					<el-button type="default" style="float:left;background-color: rgba(255, 255, 255, 0.3);width: 100px;" @click="goRouter()">前端博客</el-button>
					<a href="https://github.com/StevenLikeWatermelon" target="_blank" style="text-decoration: none;color: inherit;float:right;background-color: rgba(255, 255, 255, 0.3);border-radius: 4px;border: 1px solid #ffffff;"><el-button type="default" style="float:right;background: transparent;width: 100px;border:none">GitHub</el-button></a>
				</div>
			</div>
		</div>
		<div class="personalIntroduce">
			<div class="personalBkg-m">
				<div style="width:100%; height:100%; background-color: rgba(5, 8, 14, 0.4);border-radius:inherit;display:flex; justify-content:center; align-items:center; line-height:200%">
					<div style="padding: 0 10px 0 10px;" data-scroll-reveal="enter right over 1s">
						<p style="font-weight: 700; font-size:18px;">关于博主:</p>
						<p>90后，男，黑框眼镜、双肩包、寸板头、格子衫---博主就是典型的程序员，非科班半路出家，自学暂未成才。</p>
						<p>性格慢热，助人为乐，喜欢思考，喜欢钻研，与JS为伍，与bug为敌，热爱前端开发、热爱互联网、热爱游戏、热爱生活。</p>
						<p>博主已婚，定居南京，平时爱好看书、修手机、看新闻、玩游戏、跑步、写代码、发呆，兴趣爱好广泛。</p>
						<p>希望能结交志同道合的朋友，聊前端、聊互联网、聊程序员、聊生活、聊人生。</p> 
					</div>
				</div>
			</div>
		</div>
		<div class="contactType">
			<div class="contactTypeDetail" data-scroll-reveal="enter left over 1s">
				<p>如果你对我感兴趣，你可以通过以下方式联系我:</p>
				<p>QQ: 549582789</p>
				<p>Tel: 15805199474</p>
				<p>Email: 15805199474@163.com</p>
			</div>
		</div>
		<div class="lastest-article blog" style="margin: 0;">
			<p class="newBolgTitle" data-scroll-reveal="enter right over 1s">最新博客</p>
			<div class="newBolgDetail">
				<figure v-for="item in articleList"  @click="goDetail(item.id, item.articleType)">
					<img :src="item.type">
					<p class="title">{{item.title}}</p>
					<figcaption>
						<p>{{item.discription}}</p>
						<p style="float:right;margin: -9px 10px 0 0;font-weight:700">{{item.createTime}}</p>
					</figcaption>
				</figure>
			</div>
		</div>
		<div v-loading.fullscreen="fullscreenLoading" element-loading-text="拼命加载中"></div>
	</section>
</template>


<script>
 	import {sortBy} from '../../utils/utils';
 	import scroll from '../../lib/scrollReveal.js';
    export default {
    	name: 'pc-index',
    	data () {
    		return {
    			articleList: [],
    			fullscreenLoading: true
    		}
    	},
    	methods: {
    		goRouter () {
    			this.$router.push({name: 'IT_share_index_m'});
    		},
    		goDetail (id, type) {
    			let tmpRouterName = type == 1 ? 'IT_share_detail_m' : 'Life-gossip-detail_m';
				this.$router.push({
					name: tmpRouterName,
					query: {id: id}
				});
    		},
    		getArticleList() {
    			let tmpItArr = [];
    			let tmpLifeArr = [];
    			let allArr = [];
	    		// 获取IT文章列表
	    		this.$http.get('src/phpCtrl/articleList.php').then(res => {
	    			if (res && res.data && res.data.length) {
	    				res.data.forEach(item => {
	    					item.articleType = 1;
	    				});
	    				tmpItArr = res.data;
	    				// 获取生活文章列表
			    		this.$http.get('src/phpCtrl/lifeArticleList.php').then(res => {
			    			if (res && res.data && res.data.length) {
			    				res.data.forEach(item => {
			    					item.articleType = 2;
			    				});
			    				tmpLifeArr = res.data;
			    				allArr = [...tmpItArr, ...tmpLifeArr];
			    				this.articleList = allArr.sort(sortBy('createTime', true)).slice(0, 6);
			    			} else {
			    				this.$message.error('获取文章列表为空!');
			    			}
			    			this.loading = false;
			    		}).catch(err => {
			    			this.$message.error('获取文章列表失败!');
			    			console.log(err)
			    		});
	    			} else {
	    				this.$message.error('获取文章列表为空!');
	    			}
	    		}).catch(err => {
	    			this.$message.error('获取文章列表失败!');
	    			console.log(err)
	    		});
    		}
    	},
    	created () {
    		this.getArticleList();
    		this.$store.commit('changeGolbalView', false);
    	},
    	mounted () {
    		setTimeout(() => {
    			this.$store.commit('changeGolbalView', true);
    			this.fullscreenLoading = false;
    		}, 300);
    	},
		activated() {
			window.startScroll = new scrollReveal({reset: true});
		}
    };
</script>