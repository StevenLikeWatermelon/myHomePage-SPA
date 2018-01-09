<style>
</style>

<template>

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