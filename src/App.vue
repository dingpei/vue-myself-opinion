<template>
 <div id="app">
 	<div class="center bg-color">
 		<el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
  			<el-menu-item v-for="(item, index) in navMenu"  :index="''+index" :key="index">
  				<router-link :to="item.toUrl">{{item.name}}</router-link>
  			</el-menu-item>
  		</el-menu>
 	</div>
    <router-view></router-view>
  </div>
</template>

<script>
	export default{
		name: 'App',
		data() {
			return {
				 activeIndex: '0',
				 navMenu:[
				 	{
				 		name:"index",
				 		toUrl:"/index",
				 	},
				 	{
				 		name:"常见错误",
				 		toUrl:"/error",
				 	},
				 	{
				 		name:"vue资料库",
				 		toUrl:"/data",
				 	},
				 	{
				 		name:"other资料库",
				 		toUrl:"/other",
				 	},
				 ]
			};
		},
		methods:{
			handleSelect(key, keyPath){
				if (false) {
					console.log(123456);
				}
			}
		},
		mounted(){}

	}
</script>
<style scoped lang="less">
   .bg-color{
   		background:yellow;
   		line-height:40px;
   		.el-menu-item{
   			padding:0;
   		}
   		a{
   			display:block;
   			padding:0 20px;
   		}
		a:hover{
			color:#409EFF;
		}
	   .router-link-active{
	   	color:#03ccbb;
	   	font-size:20px;
	   }
   }

</style>