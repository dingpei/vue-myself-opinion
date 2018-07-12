import  Request from './net-axios'
import  qiniu   from './qiniu'
import  utils   from '../utils/utils'
import  Vue     from 'vue'

//私有方法，外部不能调用
function get(url, params) {
    return Request.get(url,params)
}

//私有方法，外部不能调用
function post(url, params) {
    return Request.post(url,params)
}

//私有方法，外部不能调用
function post(url, params,config) {
    return Request.post(url, params,config)
}

//私有方法，外部不能调用
function del(url) {
    return Request.del(url)
}

//私有方法，外部不能调用
function put(url, params) {
    return Request.put(url, params)
}



export default {

    /**
     * 用户登录 
     */
    getLogin(username, password){
        var params = new URLSearchParams();
        params.append('username', username);
        params.append('password', password); 
        return post('/login/',params)
    },
   
}