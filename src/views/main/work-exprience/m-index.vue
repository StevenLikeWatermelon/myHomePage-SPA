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