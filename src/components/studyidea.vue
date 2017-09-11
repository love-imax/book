<template>
      <div class="panel panel-default cont">
	      <div class="panel-heading"><h1><span class="glyphicon glyphicon-pencil"></span>记录心得</h1></div>
		  <div class="panel-body">
		  <div class="form-horizontal">
		      <div class="form-group">
			  <div class="col-sm-8 tip">
		      <label for="name">学科归类</label>
			  <select class="form-control" v-model="selected">
			  <option>HTML5</option>
			  <option >CSS3</option>
			  <option>JavaScript</option>
			  <option>NODE.JS</option>
			  <option>Vue2</option>
			  <option>响应式布局</option>
			  <option>Flex</option>
			  <option>Grid</option>
			  <option>混合APP开发</option>
			  </select>
			  </div> 
			  </div>
			  <div class="form-group">
			   <div class="col-sm-8 tip">
			  <label for="name">心得体会</label>
			  <textarea class="form-control" col="20" rows="10" placeholder="心得体会" v-model="text"></textarea>
			  </div>  
			  </div>
			  <button class="btn btn-success" @click="save()">保存</button>
			  <router-link to="/learn-idea" class="btn btn-danger">取消</router-link>
			  </div>
		  </div>
		  </div>
	  </div>
</template>
<script>
    name:"studyidea"
    export default{
	   data(){
	      return{
	         selected: '',
	          text: ''
	   }
	   },
	   methods:{
	       save(){
		     const idea={
			      selected:this.selected,
				  text:this.text,
				  count:1
			 };
			 this.$store.dispatch("addIdea",idea);
			 this.$store.dispatch("addCount",this.count);
			 this.$router.go(-1)
		   }
	   }
	   
	}
</script>
<style>
    
	.tip{color:red}
	
</style>