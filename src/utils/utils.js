
import * as keys from '../vuex/keys'
import axios from '../fetch/net-axios'

export default {

  //遍历对象  node被复制的对象，newObj复制对象
  printAttr(initalObj, finalObj){
      printAttr(initalObj, finalObj)
  },

}


//深拷贝一个对象
function printAttr(initalObj, finalObj) {
    var obj = finalObj || {};
    for (var i in initalObj) {
        var prop = initalObj[i];
        // 避免相互引用对象导致死循环，如initalObj.a = initalObj的情况
        if(prop === obj) {
            continue;
        }
        if(prop === null){
           obj[i] = null;
        }else if (typeof prop === 'object') {
            obj[i] = (prop.constructor === Array) ? [] : {};
            printAttr(prop, obj[i]);
        } else {
            obj[i] = prop;
        }
    }
}
