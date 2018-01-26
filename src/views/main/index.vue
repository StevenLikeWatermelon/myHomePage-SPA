<style>
    .steven-index {
	  position: absolute;
	  text-align: center;
	  width: 299px;
	  height: 136px;
	  left: 50%;
	  top: 25%;
	  padding: 60px;
	  background: rgba(255, 255, 255, 0.8);
	  outline: 4px double #FFFFFF;
	  outline-offset: 8px;
	  -webkit-animation: bounceInRight 1s ease 1 forwards;
    }

	#home .line-color{
		font-size: 1.7rem;
		background-image: -webkit-linear-gradient(left, #409eff, #fbe500 25%, #409eff 50%, #fbe500 75%, #409eff);
		background-size: 200%;
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text;
		-webkit-animation: anim 4s infinite linear;
	}

	#home .mikry span{
		color: #fff;
		background-color: #c9cbb6;
		border-radius: 19px;
		text-shadow:0 0 5px #CCCCCC, 0 0 10px #CCCCCC, 0 0 15px #CCCCCC, 0 0 20px #095816, 0 0 25px #095816, 0 0 30px #095816, 0 0 50px #095816, 0 0 80px #095816, 0 0 100px #095816, 0 0 150px #095816;
		width: 280px;
		display: block;
		font-weight: 500;
		height: 40px;
		line-height: 40px;
		font-size: 21px;
		margin: 0 auto;
		-webkit-animation: tada 1s ease 1s 2;
	}

	@-webkit-keyframes anim{
		0%{
			background-position: 0 0;
		}
		100%{
			background-position: -100% 0;
		}
	}


	@-webkit-keyframes bounceInRight {
		0% {
			-webkit-transform: translateX(2000px);
		}
		
		60% {
			-webkit-transform: translateX(-60%);
		}
		
		80% {
			-webkit-transform: translateX(-46%);
		}
		
		100% {
			-webkit-transform: translateX(-50%);
		}
	}

	@-webkit-keyframes tada {
		0% {-webkit-transform: scale(1);}	
		10%, 20% {-webkit-transform: scale(0.9) rotate(-3deg);}
		30%, 50%, 70%, 90% {-webkit-transform: scale(1.1) rotate(3deg);}
		40%, 60%, 80% {-webkit-transform: scale(1.1) rotate(-3deg);}
		100% {-webkit-transform: scale(1) rotate(0);}
	}
</style>

<template>
	<section id="home">
		<div class="steven-index">
			<span class="line-color">欢迎来到我的小屋</span>
			<div class="mikry" style="padding-top: 40px;">
				<span>精益求精工作,简单快乐生活</span>
			</div>
		</div>
	</section>
</template>


<script>
    export default {

    };
</script>