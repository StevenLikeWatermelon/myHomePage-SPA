<style>
	.message-bg {
	    background: rgb(255, 255, 255);
	    padding: 0 30px 30px 30px;
	    margin: 30px;
	    border-radius: 15px;
	}
	.banner {
		height: 180px;
	    text-align: center;
	    overflow: hidden;
	    margin: 30px;
	    line-height: 30px;
	    text-shadow: #fff 1px 1px 1px;
	    background: url(../../../img/banner.jpg) no-repeat center;
	    color: #333;
	    padding: 40px 0 0 0;
	}
	#SOHUCS #SOHU_MAIN .module-cmt-footer {
		display: none;
	}
	#SOHUCS #SOHU_MAIN .module-cmt-notice {
		display: none;
	}
</style>

<template>
	<section>
		<article v-loading="loading"  element-loading-text="拼命加载中"  element-loading-spinner="el-icon-loading" element-loading-background="rgba(180, 180, 180, 0.8)">
			<div class="container">
			    <div class="banner">
			      <p data-scroll-reveal="enter top over 2s">生命是场旅行，相遇是种缘分，相识是种幸运</p>
			      <p data-scroll-reveal="enter left over 2s after 1s">亲爱的过客，如果你曾来到这里驻足过片刻，请留下你的足迹，我会心存感激</p>
			      <p data-scroll-reveal="enter bottom over 2s after 2s">也许，将来的某个时刻，你也会轻轻的想起，这里也有过你留下的风景</p>
			    </div>
				<div class="blog-detail">
					<div class="message-bg">
						<!--PC和WAP自适应版-->
						<div id="SOHUCS" sid="请将此处替换为配置SourceID的语句" ></div> 
					</div>
				</div>
			</div>
		</article>
	</section>
</template>



<script>
	import scroll from '../../../lib/scrollReveal.js';
    export default {
    	name: 'contact-me',
    	data () {
    		return {
    			loading: false
    		}
    	},
    	methods: {
    	},
		activated() {
			window.startScroll = new scrollReveal({reset: true});
		},
    	created () {
    		this.loading = true;
		    var appid = 'cytrsFhPb';
		    var conf = 'prod_e4aa56ee5d4c9fe2df62c5ca876a7bae';
		    var width = window.innerWidth || document.documentElement.clientWidth;
		    if (width < 960) {
		        window.document.write('<script id="changyan_mobile_js" charset="utf-8" type="text/javascript" src="http://changyan.sohu.com/upload/mobile/wap-js/changyan_mobile.js?client_id=' + appid + '&conf=' + conf + '"><\/script>');
		    } else { var loadJs = function(d, a) { var c = document.getElementsByTagName("head")[0] || document.head || document.documentElement; var b = document.createElement("script");
		            b.setAttribute("type", "text/javascript");
		            b.setAttribute("charset", "UTF-8");
		            b.setAttribute("src", d); if (typeof a === "function") { if (window.attachEvent) { b.onreadystatechange = function() { var e = b.readyState; if (e === "loaded" || e === "complete") { b.onreadystatechange = null;
		                            a() } } } else { b.onload = a } } c.appendChild(b) };
		        loadJs("http://changyan.sohu.com/upload/changyan.js", function() { window.changyan.api.config({ appid: appid, conf: conf }) }); 
		    }
		    setTimeout(()=> {
		    	this.loading = false;
		    }, 700);
    	}
    };
</script>