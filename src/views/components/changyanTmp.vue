<style>
	.message-bg {
	    background: rgb(255, 255, 255);
	    padding: 0 30px 30px 30px;
	    margin: 30px;
	    border-radius: 15px;
	}
	#SOHUCS #SOHU_MAIN .module-cmt-footer {
		display: none;
	}
	#SOHUCS #SOHU_MAIN .module-cmt-notice {
		display: none;
	}
</style>

<template>
	<div class="message-bg">
		<!--PC和WAP自适应版-->
		<div id="SOHUCS" :sid="sorceID" ></div> 
	</div>
</template>

<script>
	export default {
		data () {
			return {
				
			}
		},
		props:['sorceID'],
		mounted () {
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
		        loadJs("http://changyan.sohu.com/upload/changyan.js", function() { window.changyan.api.config({ appid: appid, conf: conf }) }); }			
		}
	};
</script>