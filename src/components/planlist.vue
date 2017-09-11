<template>
    <div>
    <div class="col-sm-7"  style="width:800px;position:relative">
	<div>
	    <router-link v-if="$route.path!=='/plan-list/create-list'" to="/plan-list/create-list" class="btn btn-success">创建计划</router-link>
		<div v-if="$route.path==='/plan-list/create-list'" class="btn btn-success">创建计划</div>
		<hr/>
	</div>
	
		 <router-view></router-view>
	<div> 
	<p v-if="!plans.length"><strong>没有任何计划</strong></p>
	</div>
	<div class="container-fluid">
	     <div class="list-group">
        <a class="list-group-item" v-for="(plan,index) in plans">
          <div class="row">
            <div class="col-sm-2 user-details">
              <img :src="plan.img" class="avatar img-circle img-responsive" />
              <p class="text-center">
                <strong>
                  {{ plan.name }}
                </strong>
              </p>
            </div>

            <div class="col-sm-2 text-center time-block">
              <h3 class="list-group-item-text total-time">
                <i class="glyphicon glyphicon-time"></i>
                {{ plan.time }}<b>小时</b>
              </h3>
              <p class="label label-danger text-center">
                <i class="glyphicon glyphicon-calendar"></i>
                {{ plan.date }}
              </p>
            </div>

            <div class="col-sm-5 comment-section">
              <p>{{ plan.comment }}</p>
            </div>

            <div class="col-sm-1">
              <button
                class="btn btn-xs btn-danger delete-button"
                @click="decPlan(index)">
              X
              </button>
            </div>

          </div>
        </a>
      </div>
      </div>
	 
    </div>
	 <div class="col-sm-5" style="position:absolute;left:800px;top:50px">
	    <sidebarplan></sidebarplan>
	</div>
	</div>
</template>
<script>
import sidebarplan from './sidebarplan.vue'
export default {
        computed : {
          plans () {
            return this.$store.state.plan.list
          }
        },
        methods : {
         decPlan(index) {
            // 减去总时间
            this.$store.dispatch('decTime',this.plans[index].time)
            // 删除该计划
            this.$store.dispatch('decPlan',index)
          }
        },
	components:{
	    sidebarplan:sidebarplan
	}
    }
</script>
<style>
.avatar {
    height: 75px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .user-details {
    background-color: #f5f5f5;
    border-right: 1px solid #ddd;
    margin: -10px 0;
  }
  .time-block {
    padding: 10px;
  }
  .comment-section {
    padding: 20px;
  }
  .comment-section p{ font-size:24px;color:green;font-weight:bold}
</style>
