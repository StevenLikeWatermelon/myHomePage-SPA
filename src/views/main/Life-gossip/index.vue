<template>
	<section>
		<article  v-loading="loading"  element-loading-text="拼命加载中"  element-loading-spinner="el-icon-loading" element-loading-background="rgba(180, 180, 180, 0.8)">
			<div class="container">
				<div class="blog">
					<figure v-for="item in articleList"  @click="go(item.id)">
						<img :src="item.type">
						<p class="title">{{item.title}}</p>
						<figcaption>
							<p>{{item.discription}}</p>
							<p style="float:right;margin: -20px 10px 0 0;font-weight:700">{{item.createTime}}</p>
						</figcaption>
					</figure>
				</div>
			</div>
		</article>>
	</section>
</template>


<script>
    export default {
    	data () {
    		return {
    			loading: false,
    			articleList: [],
    			numArr: [23,44,566,7,878,989,32],
	    		percentArr:[],
	    		displayArr: ''
    		}
    	},
    	methods: {
    		getArticleList() {
    			this.loading = true;
	    		// 获取文章列表
	    		this.$http.get('src/phpCtrl/lifeArticleList.php').then(res => {
	    			if (res && res.data && res.data.length) {
	    				this.articleList = res.data;
	    			} else {
	    				this.$Message.error('获取文章列表为空!');
	    			}
	    			this.loading = false;
	    		}).catch(err => {
	    			this.$Message.error('获取文章列表失败!');
	    			console.log(err)
	    		});
    		},
			go(id) {
				this.$router.push({
					name: 'Life-gossip-detail',
					query: {id: id}
				});
			}
    	},
    	created () {
    		this.getArticleList();
    	}
    };
</script>