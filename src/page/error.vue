<template>
	<section class="center">
		<div>
			1、假设我们在写一个博客网站，需求是从/post-page/a，跳转到/post-page/b。然后我们惊人的发现，页面跳转后数据竟然没更新？！原因是vue-router”智能地”发现这是同一个组件，然后它就决定要复用这个组件，所以你在created函数里写的方法压根就没执行。 <br>
			<i>解决方案：</i><span>{{solveTitle}}</span>
		</div>
		<div>
			2、使用导航菜单el-menu 遍历数据的时候，el-el-menu-item 直接绑定index的时候报错：<br>
			<span>Invalid prop: type check failed for prop "index". Expected String, got Number.</span><br>
			<i>解决方案：</i><span> :index=" ' ' + index" </span>
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
		div{
			line-height:30px;
			padding-bottom:10px;
			i{
				color:#0333bb;
			}
		}
	}
</style>