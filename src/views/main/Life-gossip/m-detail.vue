<template>
	<section>
		<article class="m-IT"   v-loading="loading"  element-loading-text="拼命加载中"  element-loading-spinner="el-icon-loading" element-loading-background="rgba(180, 180, 180, 0.8)">
			<div class="container-m">
				<div class="blog-detail">
					<ul>
						<h4 class="article">
							<div>{{detail.title}}</div>
							<span style="float: right;font-size: 13px;padding-top: 4px;">{{detail.time}}</span>
						</h4>
						<div v-html="detail.content"></div>
						<p>
						    (本文由前端工程师steven沈文杰原创，转载请放原文链接，谢谢！)
						</p>
						<div style="text-align: center;">
							<el-button type="success" @click="goBack()" round>返回</el-button>
						</div>
					</ul>
				</div>
			</div>
		</article>
	</section>
</template>

<script>
    export default {
    	data () {
    		return {
    			detail: {
    				loading: false,
    				title: '',
    				content: '',
    				time: ''
    			}
    		}
    	},
    	methods: {
    		getArticleDetail() {
	    		// 获取文章详情
	    		this.loading = true;
	    		this.$http.get('src/phpCtrl/lifeArticleDetail.php', {
	    			params: {
	    				id: this.$route.query.id
	    			}
	    		}).then(res => {
	    			this.detail.title = res.data.title;
	    			this.detail.content = res.data.content;
	    			this.detail.time = res.data.createTime;
	    			this.loading = false;
	    		}).catch(err => {
	    			this.$message.error('获取文章详情失败!');
	    			console.log(err)
	    		});
    		},
    		goBack () {
    			this.$router.go(-1);
    		}
    	},
    	created () {
    		this.getArticleDetail();
    	}
    };
</script>