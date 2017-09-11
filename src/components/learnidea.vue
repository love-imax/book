<template>
    <div >
    <div class="col-sm-7"  style="width:800px;position:relative">
	    <div>
		   <router-link v-if="$route.path!=='/learn-idea/study-idea'" to="/learn-idea/study-idea" class="btn btn-success">记录心得</router-link>
		   <div>
		   <div v-if="$route.path==='/learn-idea/study-idea'" class="btn btn-success">记录心得</div>
		   </div>
		   <hr/>
		</div>
		<router-view></router-view>
			<div> 
	<p v-if="!feels.length"><strong>没有任何心得</strong></p>
	</div>
	   
		    <div v-for="(plan,index) in feels">
			    <div class="heart">
			    <div><span class="glyphicon glyphicon-thumbs-up"></span><strong>所属学科:</strong><h4>{{plan.selected}}</h4></div>
				
				<div><span class="glyphicon glyphicon-heart-empty"></span><strong>心得体会:</strong><p>{{plan.text}}</p></div>
				<div style="margin-left:600px;">
				<button class="btn btn-danger" @click="decIdea(index)">X</button>
				</div>
				</div>
			</div>
	</div>
	 <div class="col-sm-5" style="position:absolute;left:800px;top:50px">
	    <sidebaridea></sidebaridea>
	</div>
	</div>
</template>
<script>
    import sidebaridea from "./sidebaridea.vue"
    export default{
	    computed:{
		feels(){
		    return this.$store.state.idea.feel 
		}
		},
		methods:{
		 decIdea(index) {
            // 减去总时间
            this.$store.dispatch('decCount',this.feels[index].count)
            // 删除该计划
            this.$store.dispatch('decIdea',index)
          }
        
		},
		components:{
		sidebaridea:sidebaridea
		}
	}
</script>
<style>
    .heart{border:2px solid red;border-radius:10px 10px;margin-bottom:3px}
	.heart div{ margin-left:30px;color:green;font-size:20px;margin-top:5px}
	.heart div span{padding-right:20px}
	.heart div h4,p{color:black}
</style>