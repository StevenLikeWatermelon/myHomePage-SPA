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
</style>

<template>
	<section>
		<article>
			<div class="container">
				<div class="about">
					<h2 class="title-h2" data-scroll-reveal="enter left over 1s">我的技能</h2>
					<div class="blog-detail" style="margin-top: 0;">
						<ul>
							<p>
							    (本文由前端工程师steven沈文杰原创，转载请放原文链接，谢谢！)
							</p>
						</ul>
					</div>
					<h2 class="title-h2" data-scroll-reveal="enter left over 1s">工作经历</h2>
					<div class="work-exprience-detail">
						<ul class="cbp_tmtimeline">
							<li>
								<time class="cbp_tmtime"><span>01-17</span> <span>2018</span></time>
								<div class="cbp_tmicon"></div>
								<div class="cbp_tmlabel" data-scroll-reveal="enter right over 1s">
									<h2><span>南京宜电慧创信息科技有限公司</span><span style="float:right">前端开发工程师</span></h2>
									 <p>
									 	<span class="blogpic"><a href="/"><img src="../../../img/yidian.png"></a></span>
									 	1、<br/>
									 	2、<br/>
									 	3、<br/>
									 	4、<br/>
									 </p>
								</div>
							</li>
							<li>
								<time class="cbp_tmtime"><span>01-17</span> <span>2018</span></time>
								<div class="cbp_tmicon"></div>
								<div class="cbp_tmlabel" data-scroll-reveal="enter right over 1s">
									<h2><span>南京途牛信息科技有限公司</span><span style="float:right">前端开发工程师</span></h2>
									 <p>
									 	<span class="blogpic"><a href="/"><img src="../../../img/tuniu.png"></a></span>
									 	1、<br/>
									 	2、<br/>
									 	3、<br/>
									 	4、<br/>
									 </p>
								</div>
							</li>
							<li>
								<time class="cbp_tmtime"><span>01-17</span> <span>2018</span></time>
								<div class="cbp_tmicon"></div>
								<div class="cbp_tmlabel" data-scroll-reveal="enter right over 1s">
									<h2><span>南京宜电慧创信息科技有限公司</span><span style="float:right">前端开发工程师</span></h2>
									 <p>
									 	<span class="blogpic"><a href="/"><img src="../../../img/yidian.png"></a></span>
									 	1、<br/>
									 	2、<br/>
									 	3、<br/>
									 	4、<br/>
									 </p>
								</div>
							</li>	
						</ul>
					</div>
					<h2 class="title-h2" data-scroll-reveal="enter left over 1s">项目经验</h2>
					<div class="blog-detail" style="margin-top: 0;">
						<ul>
							<p>
							    (本文由前端工程师steven沈文杰原创，转载请放原文链接，谢谢！)
							</p>
						</ul>
					</div>
					<h2 class="title-h2" data-scroll-reveal="enter left over 1s">自我评价</h2>
					<div class="blog-detail" style="margin-top: 0;">
						<ul>
							<p>
							    (本文由前端工程师steven沈文杰原创，转载请放原文链接，谢谢！)
							</p>
						</ul>
					</div>
				</div>
			</div>
		</article>>
	</section>
</template>



<script>
	import scroll from '../../../lib/scrollReveal.js';
    export default {
    	data () {
    		return {
    		}
    	},
    	methods: {
    	},
    	mounted () {
    		window.startScroll = new scrollReveal({reset: true});
    	}
    };
</script>