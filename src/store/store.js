import Vue from 'vue'
import Vuex from 'vuex'

import plan from './modules/plan'
import idea from './modules/idea'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
      plan:plan,
	 idea:idea
    }
})