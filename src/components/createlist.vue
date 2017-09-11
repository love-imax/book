<template>
    
   <div class="panel panel-default cont">
   <div class="panel-heading"><h1><span class="glyphicon glyphicon-star"></span>创建计划</h1></div>
   <div class="panel-body">
  <div class="form-horizontal">
    <div class="form-group">
      <div class="col-sm-6">
        <label>日期</label>
        <input
          type="date"
          class="form-control"
          v-model="date"
          placeholder="日期"
        />
      </div>
      <div class="col-sm-6">
        <label>时间</label>
        <input
          type="number"
          class="form-control"
          v-model="time"
          placeholder="时间"
        />
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-12">
        <label>内容</label>
        <input
          type="text"
          class="form-control"
          v-model="comment"
          placeholder="内容"
        />
      </div>
    </div>
    <button class="btn btn-primary" @click="save()">保存</button>
    <router-link to="/plan-list" class="btn btn-danger">取消</router-link>
    <hr>
  </div>
  </div>
 
  </div>
</template>
<style>

</style>
<script>

    export default {
        name : 'createlist',
        data() {
            return {
                date : '',
                time : '',
                comment : ''
            }
        },
        methods:{
          save() {
           const plan={
		        name:"Imax",
				img:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1503208742&di=477472e5e3e301f5680b5de35f1f5ffa&src=http://www.hao76.com/upload/images/2015/09/16/1442385261133821.jpg",
		        date:this.date,
				time:this.time,
				comment:this.comment
		      };
		  this.$store.dispatch('addPlan',plan);
		  this.$store.dispatch('addTime',this.time);
		  this.$router.go(-1)
          }
        }
    }
</script>
<style>
   
</style>
