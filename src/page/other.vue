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