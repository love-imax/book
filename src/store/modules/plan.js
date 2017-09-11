import * as types from '../mutations-type';

const state={
	time:0,
	list:[]
	}

const getters={
	plans:state=>state.list
	}
const actions={
		addPlan({commit},plan){
		commit(types.ADD_PLAN,plan)
		},
	decPlan({commit},plan){
		commit(types.DEC_PLAN,plan)
		},
	addTime({commit},time){
		commit(types.ADD_TIME,time)
		},
	decTime({commit},time){
		commit(types.DEC_TIME,time)
		}
	}

const mutations={
		[types.ADD_PLAN](state,plan){
			
		state.list.push(plan)
		},
	[types.DEC_PLAN](state,index){
		state.list.splice(index,1)
		},
	[types.ADD_TIME](state,time){
		state.time=state.time+parseInt(time)
		},
	[types.DEC_TIME](state,time){
		state.time=state.time-parseInt(time)
		}
	}
	
export default{
	state,
	getters,
	mutations,
	actions
	}