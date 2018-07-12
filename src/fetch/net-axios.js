import Vue from 'vue'
import axios from 'axios'
// import qs from 'qs'

// axios 配置
axios.defaults.withCredentials = true
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axios.defaults.baseURL = '.....';//基础路径

    //POST传参序列化
    axios.interceptors.request.use((config) => {
        // if(config.params == undefined){
        //     config.params = new URLSearchParams()
        // }
        // if(config.method  === 'post'){
        //     config.data = qs.stringify(config.data);
        // }
       
        return config;
    },(error) =>{
        console.log("错误的传参", 'fail');
        return Promise.reject(error);
    });



//返回状态判断
axios.interceptors.response.use((res) =>{
    if(res.config.url.indexOf('login') != -1){
        // console.log("返回状态",res)
    }
    if(res.status >=200 && res.status < 300){
        return res.data;
    }
}, (error) => {
    var res = error.response;
    if(res.status >=400 && res.status < 500){
        error = {status:res.status,action:res.data.action,msg:res.data.args.toString()}
    }
    return Promise.reject(error);
});

export default {

         get(url,params) {
            return new Promise((resolve, reject)=>{
                axios.get(url, {params:params})
                .then(response => {
                    resolve(response);
                }, err => {
                    reject(err);
                })
                .catch((error) => {
                    reject(error)
                })

            })
            
        },

        //  post(url,params) {
        //     return new Promise((resolve, reject)=>{
        //         axios.post(url, params)
        //         .then(response => {
        //             resolve(response);
        //         }, err => {
        //             reject(err);
        //         })
        //         .catch((error) => {
        //             reject(error)
        //         })

        //     })
            
        // },

        post(url,params,config) {
            return new Promise((resolve, reject)=>{
                axios.post(url, params,config)
                .then(response => {
                    resolve(response);
                }, err => {
                    reject(err);
                })
                .catch((error) => {
                    reject(error)
                })

            })
            
        },

        del(url) {
            return new Promise((resolve, reject)=>{
                axios.delete(url)
                .then(response => {
                    resolve(response);
                }, err => {
                    reject(err);
                })
                .catch((error) => {
                    reject(error)
                })

            })
        },

        put(url,params) {
            return new Promise((resolve, reject)=>{
                axios.put(url,params)
                .then(response => {
                    resolve(response);
                }, err => {
                    reject(err);
                })
                .catch((error) => {
                    reject(error)
                })

            })
        },
        formats(){
            return axios.defaults.baseURL;
        }
}
