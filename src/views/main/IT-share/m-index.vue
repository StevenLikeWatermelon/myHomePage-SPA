<style>
    article.m-IT {
    	display: block;
		background: url('../../../img/articlebg.png') repeat;
	    width: 95%;
	    overflow: hidden;
	    margin: 30px auto;
    }
    .container-m {
    	background: url('../../../img/articlebg.png') repeat;
	    overflow: hidden;
	    margin: 15px;
	    box-shadow: #075498 0px 1px 10px;
	   	cursor: pointer;
    }
    .blog-m {
    	margin: 15px 10px;
    	overflow: hidden;
    	display: flex;
    	justify-content: center;
    	align-items: flex-start;
    	flex-wrap: wrap;
    }
    .blog-m figure {
	    background: #ececec;
	    border: #FFF 10px solid;
	    width: 270px;
	    height: 320px;
	    cursor: pointer;
    }
    .blog-m figure:hover {
		box-shadow: 4px 4px 16px #5d5b5b;
    }
    .blog-m figure img {
    	width: 270px;
    	height: 165px;
    }
    .blog-m figure .title {
	    font-size: 14px;
	    text-shadow: #fff 1px 1px 0px;
	    line-height: 26px;
	    text-align: center;
	    font-weight: bold;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    margin-top: 10px;
    }
	.blog-m figure figcaption p{
	    padding: 10px;
	    line-height: 22px;
	    color: #666;
	    overflow: hidden;
	    height: 60px;
	    overflow: hidden;
	    font-size: 12px;
	    margin-top: -3px;
	}
</style>

<template>
	<section>
		<article class="m-IT"  v-loading="loading"  element-loading-text="拼命加载中"  element-loading-spinner="el-icon-loading" element-loading-background="rgba(180, 180, 180, 0.8)">
			<div class="container-m">
				<div class="blog-m">
					<figure v-for="item in articleList"  @click="go(item.id)">
						<img :src="item.type">
						<p class="title">{{item.title}}</p>
						<figcaption>
							<p>{{item.discription}}</p>
							<p style="float:right;margin: -9px 10px 0 0;font-weight:700">{{item.createTime}}</p>
						</figcaption>
					</figure>
				</div>
			</div>
		</article>
	</section>
</template>


<script>
    export default {
    	data () {
    		return {
    			loading: false,
    			articleList: []
    		}
    	},
    	methods: {
    		getArticleList() {
    			this.loading = true;
	    		// 获取文章列表
	    		this.$http.get('src/phpCtrl/articleList.php').then(res => {
	    			if (res && res.data && res.data.length) {
	    				this.articleList = res.data;
	    			} else {
	    				this.$message.error('获取文章列表为空!');
	    			}
	    			this.loading = false;
	    		}).catch(err => {
	    			this.$message.error('获取文章列表失败!');
	    			console.log(err)
	    		});
    		},
			go(id) {
				this.$router.push({
					name: 'IT_share_detail_m',
					query: {id: id}
				});
			}
    	},
    	created () {
    		this.getArticleList();
    	}
    };
</script>