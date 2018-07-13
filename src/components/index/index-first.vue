<template>
	<section class="center">
	    <!-- <router-link to="/index/child">子路由</router-link><router-view></router-view> -->

	    <v-index-detail :text.sync="text"></v-index-detail>
	    父组件的值：{{text}}
	    <div>1、v-index-detail  是通过utils文件中的global.js注册的来的
	    详细请看global.js   -------------- {一劳永逸的注册组件}</div>
	    2、jquery已经配置完成，可以直接使用 ------
	    <span class="red">(建议 请尽量不要使用jquery)</span>
	    <div>
	      3、可以直接使用less，详情请点击这里<a class="v-class" href="http://www.css88.com/doc/less/features/" target="_blank">less.js</a>
	    </div>
	    <div>
	      4、element-ui已全局安装，如果只是部分引入请看<a href="http://www.cnblogs.com/lwj820876312/p/9169457.html" target="_blank" class="v-class">这里</a>
	    </div>
	    <div>
	      5、axios配置 请看fetch文件夹里面的 net-axios.js
	    </div>
	    <div>
	      6、vuex配置 请看文件夹  vuex中的相关js文件
	    </div>
	    <div>
	      7.swiper插件已下载，如需使用请仔细阅读<a href="http://www.swiper.com.cn/api/index.html" class="v-class" target="_blank">swiper文档</a>
	    </div>
	    <div>
	      8、vue-router 使用的懒加载 (相关配置已经完成，无需担心打包问题)
	    </div>
	    <div>
	      9、如果想使用公共方法 可以使用 this.utils.~~~(其中 utils是main.js中配置好的，
	      所以公共方法都可以在utils中添加)
	    </div>
  	</section>
</template>
<script>
	export default{
		name:"indexFirst",
		data(){
			return {
				text:"这是父组件传过去的值"
			}
		}
	}
</script>
<style scoped lang="less">
	
</style>