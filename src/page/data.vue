<template>
	<v-common-list :allData="allData"></v-common-list>
</template>
<script>
	import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
	export default{
		name:"datas",
		data(){
			return{
				allData:[
					{
						url:"https://www.cnblogs.com/dupd/p/7735450.html",
						name:"优秀的基于VUE移动端UI框架合集"
					},
					{
						url:"https://vuejs-templates.github.io/webpack/structure.html",
						name:"vue项目结构"
					},
					{
						url:"https://juejin.im/post/5adc99f56fb9a07abd0d3ee7?from=timeline",
						name:"Vue还有这种骚操作？浅析几个新手常常忽略的API"
					},
					{
						url:"https://www.w3cplus.com/mobile/vw-layout-in-vue.html",
						name:"如何在Vue项目中使用vw实现移动端适配"
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