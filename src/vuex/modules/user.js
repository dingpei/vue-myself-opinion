import * as keys from '../keys'
import api from '../../fetch/api'
import qiniu from '../../fetch/qiniu'
import utils from '../../utils/utils'

const state = {


    //登录状态
    loginStatus: JSON.parse(localStorage.getItem(keys.LOGIN_STATUS)) || {},

    //用户信息
    userInfo : JSON.parse(localStorage.getItem(keys.USER_INFO)) || {},

    //异常信息
    errorInfo : JSON.parse(localStorage.getItem(keys.ERROR_INFO)) || {},

    
}


const actions = {

    /**
     * 登录
     */
     getLogin({ commit }, params){
        api.getLogin(params.username, params.password)
        .then(res => {
            if(res.username){
                keys.save({commit}, keys.LOGIN_STATUS, true)
                keys.save({commit}, keys.USER_INFO, JSON.stringify(res))
            }
        })
        .catch(res =>{
           keys.save({commit}, keys.ERROR_INFO, JSON.stringify(res))
        })

     },

}
 
const getters = {
   
    loginStatus:state => state.loginStatus,
    userInfo : state => state.userInfo,
    errorInfo: state => state.errorInfo,
}

const mutations = {
    [keys.LOGIN_STATUS](state, res) {
        state.loginStatus =  JSON.parse(res)
    },
    [keys.USER_INFO](state, res) {
        state.userInfo =  JSON.parse(res)
    },
    [keys.ERROR_INFO](state, res) {
        state.errorInfo =  JSON.parse(res)
    },
    
}

export default {
    state,
    actions,
    getters,
    mutations
}