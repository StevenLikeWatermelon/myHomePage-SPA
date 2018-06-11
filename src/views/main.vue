<style>
	.content {
		margin-top: -50px;
		padding-top: 100px;
		padding-bottom: 1px;
	}
	.ivu-modal-mask {
	    position: fixed;
	    top: 0;
	    bottom: 0;
	    left: 0;
	    right: 0;
	    background-color: rgba(55,55,55,.6);
	    height: 100%;
	    z-index: 1000;
	}
	.ivu-modal-wrap {
	    position: fixed;
	    overflow: auto;
	    top: 0;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    z-index: 1000;
	    -webkit-overflow-scrolling: touch;
	    outline: 0;
	}
	.ivu-modal {
	    width: auto;
	    margin: 0 auto;
	    position: relative;
	    outline: 0;
	    top: 200px;
	}
	.ivu-modal-content {
	    position: relative;
	    background-color: #fff;
	    border: 0;
	    border-radius: 6px;
	    background-clip: padding-box;
	}
	.ivu-modal-header {
	    border-bottom: 1px solid #e9eaec;
	    padding: 14px 16px;
	    line-height: 1;
	}
	.ivu-modal-header p {
	    display: inline-block;
	    width: 100%;
	    height: 20px;
	    line-height: 23px;
	    font-size: 14px;
	    color: #1c2438;
	    font-weight: 400;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    margin: 0;
	}
	.ivu-modal-body {
	    padding: 16px;
	    font-size: 12px;
	    line-height: 1.5;
	}
	.ivu-modal-body p {
		margin: 0;
	}
	.ivu-modal-footer {
	    border-top: 1px solid #e9eaec;
	    padding: 12px 18px;
	    text-align: right;
	}
	.ivu-btn-primary {
	    color: #fff;
	    background-color: #2d8cf0;
	    border-color: #2d8cf0;
	}

	.ivu-btn-long {
	    width: 100%;
	}
	.ivu-btn-large {
	    padding: 6px 15px 7px;
	    font-size: 14px;
	    border-radius: 4px;
	}
	.ivu-btn {
	    display: inline-block;
	    margin-bottom: 0;
	    font-weight: 400;
	    text-align: center;
	    vertical-align: middle;
	    -ms-touch-action: manipulation;
	    touch-action: manipulation;
	    cursor: pointer;
	    background-image: none;
	    border: 1px solid transparent;
	    white-space: nowrap;
	    line-height: 1.5;
	    -webkit-user-select: none;
	    -moz-user-select: none;
	    -ms-user-select: none;
	    user-select: none;
	    padding: 6px 15px;
	    font-size: 12px;
	    border-radius: 4px;
	    transition: color .2s linear,background-color .2s linear,border .2s linear;
	    color: #fff;
	}
	.ivu-modal-close {
	    font-size: 12px;
	    position: absolute;
	    right: 16px;
	    top: 8px;
	    overflow: hidden;
	    cursor: pointer;
	}
	.ivu-modal-close .ivu-icon-ios-close-empty {
	    font-size: 31px;
	    color: #999;
	    transition: color .2s ease;
	    position: relative;
	    top: -7px;
	    left: 5px;
	}
	.ivu-icon {
	    display: inline-block;
	    font-family: Ionicons;
	    speak: none;
	    font-style: normal;
	    font-weight: 400;
	    font-variant: normal;
	    text-transform: none;
	    text-rendering: auto;
	    line-height: 1;
	    -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
	}
	.ivu-icon-ios-close-empty:before {
	    content: "×";
	}
</style>

<template>
	<div class="content">
		<keep-alive :include="cachePage">
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
	
    export default {
    	data () {
    		return {
    			cachePage: ['pc-index', 'contact-me', 'work-experience']
    		}
    	}
    };
</script>