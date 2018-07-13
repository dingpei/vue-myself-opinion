import * as keys from '../keys'
import api from '../../fetch/api'
import qiniu from '../../fetch/qiniu'
import utils from '../../utils/utils'

const state = {

    a:  JSON.parse(localStorage.getItem(keys.A)) || {},

    
}


const actions = {

    getA({ commit }){
        var a = "这是A";
        keys.save({commit}, keys.A, JSON.stringify(a))
    },

}
 
const getters = {
    a: state => state.a
}

const mutations = {
    [keys.A](state, res) {
        state.a =  JSON.parse(res)
    },
    
}

export default {
    state,
    actions,
    getters,
    mutations
}