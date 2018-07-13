<template>
	<el-card class="center">
	  <div v-for="(item, index) in allData" :key="index" >
	    <a :href="item.url" target="_blank">			    
			{{index + 1}}、{{item.name}}
		</a>
	  </div>
	</el-card>
</template>
<script>
	import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
	export default{
		name:"commonList",
		props:{
			allData:{
				type:Array,
				default:[],
				required:true
			}
		},
		data(){
			return{
				
			}
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