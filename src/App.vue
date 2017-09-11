<template>
    <div id="wrapper">
	    <div class="navbar navbar-default">
		    <div class="container-fluid">
			    
			    <a class="navbar-brand"><span class="glyphicon glyphicon-cog"></span>计划面板</a>
				<ul class="nav navbar-nav">
				    <li><router-link to="/home"><span class="glyphicon glyphicon-home"></span>首页</router-link></li>
					<li><router-link to="/plan-list"><span class="glyphicon glyphicon-user"></span>计划列表</router-link></li>
					<li><router-link to="/learn-idea"><span class="glyphicon glyphicon-heart"></span>学习心得</router-link></li>
				</ul>
			</div>
		</div>
	<div class="col-sm-6">
    <router-view></router-view>
	</div>
	
	
	</div>
</template>

<script>

export default {
  name: 'app',
  components:{
  
  }
}
</script>

<style>

</style>
