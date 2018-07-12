
import * as qiniu from 'qiniu-js'

export default {

  upload(file,key,token) {
      var config = {
        useCdnDomain: true,
        region: 'qiniu.region.z2'
      }
      var putExtra = {
        fname: key,
        params: {},
        mimeType: [] || null
      }
      return new Promise((resolve, reject)=>{
          var observable = qiniu.upload(file, key, token, putExtra, config)
          var next =function(res){
            console.log("progress",res)
          }
          var error =function(err){
            console.log("error",err)
            reject(err)
          }
          var complete =function(res){
            console.log("complete",res)
            res['key'] = key
            resolve(res)
          }
          var subscription = observable.subscribe(next,error,complete)// 上传开始
          // subscription.unsubscribe() // 上传取消
      })

  },
}