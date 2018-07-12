<template>
	<section class="center">
		<div>
			1、假设我们在写一个博客网站，需求是从/post-page/a，跳转到/post-page/b。然后我们惊人的发现，页面跳转后数据竟然没更新？！原因是vue-router”智能地”发现这是同一个组件，然后它就决定要复用这个组件，所以你在created函数里写的方法压根就没执行。 <br>
			解决方案：<span>{{solveTitle}}</span>
		</div>
		
	</section>
</template>

<script>
	export default{
		name:"error",
		data(){
			return {
				solveTitle:"<router-view :key='$route.fullpath'></router-view>",
			}
		}
	}
</script>
<style scoped lang="less">
	.center{
	}
</style>