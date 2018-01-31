<style>
	.container .work-exprience-detail ul {
		margin: 30px 0 0 0;
	    padding: 0;
	    list-style: none;
	    position: relative;
	}
	.container .work-exprience-detail ul:before {
		content: '';
	    position: absolute;
	    top: 0;
	    bottom: 0;
	    width: 5px;
	    background: #afdcf8;
	    left: 158px;
	    margin-left: -10px;
	}
	.container .work-exprience-detail ul > li {
		position: relative;
	}

	.container .work-exprience-detail ul > li .cbp_tmtime {
		display: block;
	    width: 100px;
	    padding-right: 30px;
	    position: absolute;
	    margin-left: 20px;
	    background: #afdcf82b; 
	    border-radius: 20px 0 0 20px; 
	    -webkit-transition: all 1s;
	    -moz-transition: all 1s;
	    -o-transition: all 1s;
	}
	.container .work-exprience-detail ul > li:nth-child(odd) .cbp_tmlabel {
		background: #579dc5;
	}
	.container .work-exprience-detail ul > li:hover .cbp_tmicon { box-shadow: 0 0 0 3px #ececec; }
	.container .work-exprience-detail ul > li:hover .cbp_tmtime { background: #afdcf8;}
	.container .work-exprience-detail ul > li:hover .cbp_tmtime span { color: #fff; }
	.container .work-exprience-detail ul > li .cbp_tmtime span {
	    display: block;
	    text-align: right;
	}
	.cbp_tmtimeline .cbp_tmtime span:first-child {
	    font-size: 14px;
	    color: #bdd0db;
	}
	.container .work-exprience-detail ul > li:nth-child(odd) .cbp_tmtime span:last-child {
	    color: #6cbfee;
	}
	.container .work-exprience-detail ul > li .cbp_tmtime span:last-child {
	    font-size: 22px;
	    color: #3594cb;
	}
	.container .work-exprience-detail ul > li .cbp_tmicon {
		width: 10px;
	    height: 10px;
	    font-family: 'ecoico';
	    speak: none;
	    font-style: normal;
	    font-weight: normal;
	    font-variant: normal;
	    text-transform: none;
	    font-size: 1.4em;
	    line-height: 40px;
	    -webkit-font-smoothing: antialiased;
	    position: absolute;
	    color: #fff;
	    background: #46a4da;
	    border-radius: 50%;
	    box-shadow: 0 0 0 3px #afdcf8;
	    text-align: center;
	    left: 170px;
	    top: 15px;
	    margin: 0 0 0 -25px;
	    padding: 0;
	}
	.container .work-exprience-detail ul > li .cbp_tmlabel {
	    background: #579dc5;
	    margin: 0 30px 15px 180px;
	    background: #3594cb;
	    color: #fff;
	    padding: 2em;
	    position: relative;
	    border-radius: 5px;
	    height: 150px;
	}
	.container .about .title-h2 {font-size: 22px;margin-bottom: 20px;background: #2a7497;padding: 10px 0;width: 200px;text-align: center;border-radius: 0 30px 30px 0;box-shadow: #21566f 1px 1px 1px;border-left: #dae1e4 6px solid;margin-left: 20px;color: #fff;margin-top: 40px;}
	.container .work-exprience-detail ul > li h2{
	    margin-top: 0px;
	    padding: 0 0 10px 0;
	    font-size: 16px;
	    text-shadow: rgba(7, 84, 152, 0.71) 1px 1px 1px;
	    -webkit-margin-before: 0.83em;
	    -webkit-margin-after: 0.83em;
	    -webkit-margin-start: 0px;
	    -webkit-margin-end: 0px;
	    font-weight: bold;
	    display: block;
	}
	.blogpic {
	    width: 200px;
	    height: 120px;
	    overflow: hidden;
	    display: block;
	    float: left;
	    margin-right: 20px;
	}
	.ivu-input {
		display: inline-block;
	    width: 97%;
	    height: 23px;
	    line-height: 1.5;
	    padding: 4px 2px;
	    font-size: 12px;
	    border: 1px solid #dddee1;
	    border-radius: 5px;
	    color: #495060;
	    background-color: #fff;
	    background-image: none;
	    position: relative;
	    cursor: text;
	    transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;
	}
	.ivu-input:focus,
	.ivu-input:hover {
	    border-color: #57a3f3
	}

	.ivu-input:focus {
	    outline: 0;
	    box-shadow: 0 0 0 2px rgba(45, 140, 240, .2)
	}

</style>

<template>
	<section>
		<article>
			<div class="container">
				<div v-html="Nowcontent"></div>
			</div>
		</article>
		<div v-show="disMask">
			<div class="ivu-modal-mask"></div>
			<div class="ivu-modal-wrap">
				<div class="ivu-modal" style="width: 360px;">
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