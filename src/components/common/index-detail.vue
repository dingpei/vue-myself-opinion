<template>
	<div>
		<el-button @click="changeData">这是index-detail</el-button>
	</div>
</template>
<script>
	export default{
		name:"indexDetail",
		props:['text'],
		data(){
			return {
				childData:1
			}
		},
		methods:{
			changeData(){
				this.$emit("update:text", this.childData++)
			}
		}
	}
</script>