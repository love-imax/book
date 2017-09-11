<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h1 class="text-center">计划汇总</h1>
    </div>

    <div class="panel-body">
      <h1 class="text-center">总共耗费{{ time }} 小时</h1>
	  <h1 class="text-center">总共记录{{ count }} 心得</h1>
    </div>

  </div>
</template>
<script>
    export default {
      name : 'sidebar',
      computed: {
        time() {
         return this.$store.state.plan.time
        },
		count(){
		 return this.$store.state.idea.count
		}
      }
    }
</script>