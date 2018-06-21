<style>
	.m-container.container .about .title-h2 {
		font-size: 15px;
		padding: 5px 0;
		margin-top: 20px;
		max-width: 150px;
		width: 25%
	}
	.container.m-container .blog-detail {
		margin: 20px auto;
		line-height: 15px;
	}
	.m-container.container .blog-detail ul p {
		text-indent: -27px;
    	margin-left: 27px;
    	font-size: 12px;
	}
	.container.m-container .work-exprience-detail ul {
		margin: 22px 0 0;
	}
	.container.m-container .work-exprience-detail ul>li .cbp_tmtime {
		width: 15%;
		max-width: 100px;
		padding-right: 15px;
	}
	.m-container.container .cbp_tmtimeline .cbp_tmtime span:first-child {
		font-size: 12px;
	}
	.container.m-container .work-exprience-detail ul > li .cbp_tmtime span:last-child {
		font-size: 14px;
	}
	.container.m-container .work-exprience-detail ul::before {
		width: 3px;
		left: 101px;
	}
	.container.m-container .work-exprience-detail ul > li .cbp_tmicon {
		width: 8px;
    	height: 8px;
    	left: 113px;
	}
	.container.m-container .work-exprience-detail ul > li .cbp_tmlabel {
		margin: 0 5px 15px 101px;
		height: auto;
		padding: 8px;
	}
	.container.m-container .work-exprience-detail ul > li h2 {
		font-size: 14px;
		height: 42px;
		padding: 0;
	}
	.container.m-container .work-exprience-detail ul > li h2 span{
		float: left;
	}
	.container.m-container .work-exprience-detail ul > li h2 .special-span {
		clear: both;
		font-size: 12px;
		padding-top: 5px;
	}
	.container.m-container .blogpic {
		width: 100px;
		display: none;
		height: 90px;
	}
	.container.m-container .blogpic img {
		display: block;
		width: 100%;
		height: 50%;
		margin-top: 22.5px;
	}
	.container.m-container .work-exprience-detail ul > li p {
		white-space: pre-wrap;
		font-size: 12px;
		text-indent: -20px;
		margin-left: 20px;
		line-height: 20px;
		display: block;
	}
</style>
<template>
	<section>
		<article>
			<div class="container m-container">
				<div v-html="Nowcontent"></div>
			</div>
		</article>
		<div v-show="disMask">
			<div class="ivu-modal-mask"></div>
			<div class="ivu-modal-wrap">
				<div class="ivu-modal" style="width:96%;">
					<div class="ivu-modal-content">
						<a class="ivu-modal-close" @click="closeAndGo()"><i class="ivu-icon ivu-icon-ios-close-empty"></i></a>
						<div class="ivu-modal-header">
							<p style="color: rgb(255, 102, 0); text-align: center;">
								<span style="font-size: 18px;">查看简历请输入密码</span>
							</p>
						</div>
						<div class="ivu-modal-body"> 
							<div style="text-align: center; font-size: 14px;">
								<input v-model="viewPage" class="ivu-input" placeholder="请输入密码"  @keyup.enter="checkPasswords()"> </input>
							</div> 
						</div> 
						<div class="ivu-modal-footer">
							<div>
								<button type="button" class="ivu-btn ivu-btn-primary" style="margin-right: 10px;" @click="checkPasswords()"><span>确定</span></button>
								<button type="button" class="ivu-btn" style="color: #000" @click="closeAndGo()"><span>取消</span></button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>



<script>
	import scroll from '../../../lib/scrollReveal.js';
    export default {
    	name: 'work-experience',
    	data () {
    		return {
    			disMask: true,
    			viewPage: '',
    			Nowcontent: ''
    		}
    	},
    	methods: {
    		closeAndGo () {
    			this.$router.push({
    				name: 'home_index'
    			});
    		},
    		checkPasswords() {
	    		this.$http.get('src/phpCtrl/checkPassword.php', {
	    			params: {
	    				passwords: this.viewPage
	    			}
	    		}).then(res => {
	    			if (res.data.result == 1) {
	    				this.Nowcontent = res.data.content;
	    				setTimeout(()=> {
	    					window.startScroll = new scrollReveal({reset: true});
	    				}, 100);
	    				window.scrollTo(0, 0);
	    				this.disMask = false;
	    			} else {
	    				this.$message.error('密码错误!');
	    			}
	    		})
    		},
    		activated() {
    			window.startScroll = new scrollReveal({reset: true});
    		}
    	}
    };
</script>