<style>
    article {
    	display: block;
		background: url('../../../img/articlebg.png') repeat;
	    width: 1000px;
	    margin: 50px auto;
	    overflow: hidden;
    }
    .container {
    	background: url('../../../img/articlebg.png') repeat;
	    overflow: hidden;
	    margin: 20px;
	    box-shadow: #075498 0px 1px 10px;
	   	cursor: pointer;
    }
    .blog, .blog-pagination{
    	margin: 25px 20px;
    	overflow: hidden;
    }
    .blog-pagination-div {
	    text-align: center;
	    background-color: #fff;
	    width: 550px; 
	    margin: 0 auto;
    	border-radius: 5px;  	
    }
    .blog figure {
	    background: #ececec;
	    border: #FFF 10px solid;
	    width: 270px;
	    height: 320px;
	    float: left;
	    margin: 0 8px 0;
	    overflow: hidden;
	    cursor: pointer;
	    margin-bottom: 15px;
    }
    .blog figure:hover {
		box-shadow: 4px 4px 16px #5d5b5b;
    }
    .blog figure img {
    	width: 270px;
    	height: 165px;
    }
    .blog figure .title {
	    font-size: 14px;
	    text-shadow: #fff 1px 1px 0px;
	    line-height: 26px;
	    text-align: center;
	    font-weight: bold;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    margin-top: 10px;
    }
	.blog figure figcaption p{
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
		<article  v-loading="loading"  element-loading-text="拼命加载中"  element-loading-spinner="el-icon-loading" element-loading-background="rgba(180, 180, 180, 0.8)">
			<div class="container">
				<div class="blog">
					<figure v-for="item in articleList"  @click="go(item.id)">
						<img :src="item.type">
						<p class="title">{{item.title}}</p>
						<figcaption>
							<p>{{item.discription}}</p>
							<p style="float:right;margin: -9px 10px 0 0;font-weight:700">{{item.createTime}}</p>
						</figcaption>
					</figure>
				</div>
				<div class="blog-pagination" v-if="this.totalNum > 6">
					<div class="blog-pagination-div">
						<el-pagination @size-change="handleSizeChange" :current-page="currentPage" @current-change="handleCurrentChange"  :page-sizes="[6, 9, 18, 36]" :page-size="limit" layout="total, prev, pager, next, sizes" :total="totalNum"></el-pagination>
					</div>
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
    			articleList: [],
    			totalNum: 0,
    			limit: 6,
    			currentPage: 1,
    			originData: []
    		}
    	},
    	methods: {
    		getArticleList() {
    			this.loading = true;
	    		// 获取文章列表
	    		this.$http.get('src/phpCtrl/articleList.php').then(res => {
	    			if (res && res.data && res.data.length) {
	    				this.totalNum = res.data.length;
	    				this.originData = res.data;
	    				this.articleList = res.data.slice(0, this.limit);
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
					name: 'IT_share_detail',
					query: {id: id}
				});
			},
			handleSizeChange (limit) {
				this.limit = limit;
				this.currentPage = 1;
				this.articleList = this.originData.slice(0, this.limit);
			},
			handleCurrentChange (page) {
                this.currentPage = page;
                let _start = (page - 1) * this.limit;
                let _end = page * this.limit;
                this.articleList = this.originData.slice(_start, _end);
			}
    	},
    	created () {
    		this.getArticleList();
    	}
    };
</script>