<style>
	.container .blog-detail {
		width: 90%;
	    margin: 30px auto;
	    overflow: hidden;
	    line-height: 22px;
	}
	.container h4.article {
		font-size: 18px;
		color: #fff;
    	margin-bottom: 30px;
     	text-align: center; 
	}
	.container p.article-content {
		color: #fff;
		margin-bottom: 20px;
		text-align: left;
		font-size: 14px;
	}
	.container .blog-detail ul {
		padding: 0;
		margin: 0;
	}
</style>

<template>
	<section>
		<article>
			<div class="container">
				<div class="blog-detail">
					<ul>
						<h4 class="article">
							<span>JS精确控制百分比四舍五入，总和100%</span>
							<span style="float: right;font-size: 13px;">2017-09-08</span>
						</h4>
						<p class="article-content">
							平时在计算表格列表中遇到的数值/总和得出百分比时,一般通过四舍五入得出百分比的值，但是这样会舍掉值可能会导致总和加起来不等于
						</p>
					</ul>
				</div>
			</div>
		</article>>
	</section>
</template>



<script>
    export default {
    	data () {
    		return {
    		}
    	},
    	methods: {
    	},
    	created () {

    	}
    };
</script>