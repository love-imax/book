<template>
    <div class="panel panel-default">
	   <div class="panel-heading">
	       <h1>心得总数</h1>
	   </div>
	   <div class="panel-body">
	       <h1 class="text-align:center">总共记录{{count}}心得</h1>
	   </div>
	</div>
</template>
<script>
    export default{
	name:"sidebarplan",
	data:{
	
	},
	computed:{
	    time(){
		return this.$store.state.plan.time
		},
		count(){
		return this.$store.state.idea.count
		}
	}
	}
</script>