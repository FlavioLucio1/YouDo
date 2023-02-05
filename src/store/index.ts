/* eslint-disable */
//está usando localbase https://www.npmjs.com/package/localbase
import Vue from 'vue'
import Vuex from 'vuex'
import Localbase from 'localbase'
import state from './state'
import mutations from './mutations'
import actions from './actions'

const db = new Localbase('db')

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,    
  actions,
  modules: {
  }
})
