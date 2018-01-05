<style>
    article {
    	display: block;
		background: url('../img/articlebg.png') repeat;
	    width: 1000px;
	    margin: 50px auto;
	    overflow: hidden;
    }
    .container {
    	background: url('../img/articlebg.png') repeat;
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
	    margin-bottom: 15px;
    }
    .blog figure img {
    	width: 270px;
    	height: 165px;
    }
    .blog figure p {
	    font-size: 14px;
	    text-shadow: #fff 1px 1px 0px;
	    line-height: 26px;
	    text-align: center;
	    font-weight: bold;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    margin-top: 10px;
    }
	.blog figure figcaption {
	    padding: 10px;
	    line-height: 22px;
	    color: #666;
	    overflow: hidden;
	    margin-top: -13px;
	    height: 80px;
	    overflow: hidden;
	}
</style>

<template>
	<section>
		<article>
			<div class="container">
				<div class="blog">
					<figure @click="go()">
						<img src="../img/js.png">
						<p>JS精确控制四舍五入百分比，总和100%</p>
						<figcaption>
							平时在计算表格列表中遇到的数值/总和得出百分比时,一般通过四舍五入得出百分比的值，但是这样会舍掉值可能会导致总和加起来不等于100%的情况，先介绍一种更好地四舍五入方法，将百分比更准确，也更精确的控制
						</figcaption>
					</figure>
					<figure @click="go()">
						<img src="../img/js.png">
						<p>JS精确控制四舍五入百分比，总和100%</p>
						<figcaption>
							平时在计算表格列表中遇到的数值/总和得出百分比时,一般通过四舍五入得出百分比的值，但是这样会舍掉值可能会导致总和加起来不等于100%的情况，先介绍一种更好地四舍五入方法，将百分比更准确，也更精确的控制
						</figcaption>
					</figure>
					<figure @click="go()">
						<img src="../img/js.png">
						<p>JS精确控制四舍五入百分比，总和100%</p>
						<figcaption>
							平时在计算表格列表中遇到的数值/总和得出百分比时,一般通过四舍五入得出百分比的值，但是这样会舍掉值可能会导致总和加起来不等于100%的情况，先介绍一种更好地四舍五入方法，将百分比更准确，也更精确的控制
						</figcaption>
					</figure>
					<figure @click="go()">
						<img src="../img/js.png">
						<p>JS精确控制四舍五入百分比，总和100%</p>
						<figcaption>
							平时在计算表格列表中遇到的数值/总和得出百分比时,一般通过四舍五入得出百分比的值，但是这样会舍掉值可能会导致总和加起来不等于100%的情况，先介绍一种更好地四舍五入方法，将百分比更准确，也更精确的控制
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
    			numArr: [23,44,566,7,878,989,32],
	    		percentArr:[],
	    		displayArr: ''
    		}
    	},
    	methods: {
    		getPercentWithPrecision(valueList, idx, precision) {
			    if (!valueList[idx]) {
			        return 0;
			    }

			    let sum = 0;
			    let currentSum = 0;

			    valueList.forEach(item => {
			        sum += +item;
			    });

			    if (sum === 0) {
			        return 0;
			    }

			    let digits = Math.pow(10, precision);
			    let votesPerQuota = valueList.map(x => (isNaN(x) ? 0 : x) / sum * digits * 100);

			    let targetSeats = digits * 100;

			    let seats = votesPerQuota.map(x => Math.floor(x));

			    seats.forEach(item => {
			        currentSum += +item;
			    });

			    let remainder = votesPerQuota.map((votes, index) => votes - seats[index]);

			    // Has remainding votes.
			    while (currentSum < targetSeats) {
			        // Find next largest remainder.
			        var max = Number.NEGATIVE_INFINITY;
			        var maxId = null;
			        for (var i = 0, len = remainder.length; i < len; ++i) {
			            if (remainder[i] > max) {
			                max = remainder[i];
			                maxId = i;
			            }
			        }

			        // Add a vote to max remainder.
			        ++seats[maxId];
			        remainder[maxId] = 0;
			        ++currentSum;
			    }

			    return seats[idx] / digits;
			},
			go() {
				console.log('1111')
			}
    	},
    	created () {
    		this.percentArr = this.numArr.map((val, index) => this.getPercentWithPrecision(this.numArr, index, 2));
    		console.log(this.percentArr)
    		this.displayArr = this.percentArr.join(',');
    		console.log(this.displayArr)
    	}
    };
</script>