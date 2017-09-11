import * as types from '../mutations-type';

const state={
	count:0,
	feel:[]
	
	}

const actions={
	addIdea({commit},idea){
		commit(types.ADD_IDEA,idea)
		},
	decIdea({commit},idea){
		commit(types.DEC_IDEA,idea)
		},
	addCount({commit},count){
		commit(types.ADD_COUNT,count)
		},
	decCount({commit},count){
		commit(types.DEC_COUNT,count)
		}
	}

const mutations={
	[types.ADD_IDEA](states,idea){
		state.feel.push(idea)
		},
	[types.DEC_IDEA](states,index){
		state.feel.splice(index,1)
		},
		
	[types.ADD_COUNT](states,count){
		state.count+=1;
		},
	[types.DEC_COUNT](states,count){
		state.count-=1;
		}
	}
export default{
	state,
	mutations,
	actions
	}