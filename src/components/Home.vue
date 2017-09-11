<template>
  <div class="wrapper">
   
    <div class="container-fluid col-sm-6" style="width:700px;position:relative">
	     <div class="jumbotron">
	    <h1>任务管理</h1>
		<p>
		<strong>
		<router-link to="/plan-list">创建一个计划</router-link>
		</strong>
		</p>
		<p>
		<strong>
		<router-link to="/learn-idea">记录心得体会</router-link>
		</strong>
		</p>
		</div>
	</div> 
	 <div class="col-sm-6" style="position:absolute;left:800px;top:0px">
	<sidebar></sidebar>
	</div>
	</div> 
</template>

<script>
import sidebar from './sidebar.vue'
export default {
  name: 'Home',
  data () {
    return {
    
    }
  },
   components:{
        sidebar:sidebar
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
