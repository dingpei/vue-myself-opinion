<template>
	
	<v-common-list :allData="allData"></v-common-list>

</template>
<script>
	import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
	export default{
		name:"other",
		data(){
			return{
				allData:[
					{
						url:"https://caniuse.com/",
						name:"样式兼容性查阅"
					},
					{
						url:"https://www.cnblogs.com/jesse131/p/5441199.html",
						name:"CSS3新特性，兼容性，兼容方法总结"
					},
					{
						url:"https://www.npmjs.com/package/qiniu-js#usage",
						name:"qiniu-js[七牛上传文件]"
					},
					{
						url:"https://www.jianshu.com/p/f79d223ca616",
						name:"移动端调试工具vConsole"
					},
				]
			}
		},
		beforeRouteEnter(to, from, next){
			next( vm => {
				//console.log(vm)
			})
		},
        watch:{
        	
        },
		methods:{
			
		},
		mounted(){
			
		}
	}
</script>
<style scoped lang="less">
	a{
		color:#333;
		line-height:30px;
	}
</style>