<template>
 <div id="app">
 	<div class="center bg-color">
 		<router-link to="/index">index</router-link>
 		<router-link to="/data">资料库</router-link>
 		<router-link to="/error">常见错误</router-link>
 	</div>
    <router-view></router-view>
  </div>
</template>

<script>
	export default{
		name:'App',
		data(){
			return {

			}
		},
		methods:{

		},
		mounted(){
			
		}

	}
</script>
<style scoped lang="less">
   .bg-color{
   		background:yellow;
   		height:40px;
   		line-height:40px;
   }
   .router-link-active{
   	color:#03ccbb;
   	font-size:20px;
   }
    
</style>