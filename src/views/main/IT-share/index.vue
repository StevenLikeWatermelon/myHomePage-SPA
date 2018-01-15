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
    }
    .blog {
    	margin: 25px 20px;
    	overflow: hidden;
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
	    margin-top: -13px;
	    height: 60px;
	    overflow: hidden;
	    font-size: 12px;
	}
</style>

<template>
	<section>
		<article>
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
    			articleList: [],
    			numArr: [23,44,566,7,878,989,32],
	    		percentArr:[],
	    		displayArr: ''
    		}
    	},
    	methods: {
    		getArticleList() {
	    		// 获取文章列表
	    		this.$http.get('src/phpCtrl/articleList.php').then(res => {
	    			if (res && res.data && res.data.length) {
	    				this.articleList = res.data;
	    			}
	    		}).catch(err => {
	    			this.$Message.error('获取文章列表失败!');
	    			console.log(err)
	    		});
    		},
			go(id) {
				this.$router.push({
					name: 'IT_share_detail',
					query: {id: id}
				});
			}
    	},
    	created () {
    		this.getArticleList();
    	}
    };
</script>