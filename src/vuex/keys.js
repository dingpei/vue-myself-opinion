//USER模块
//


//病人详情     
export const PATIENT_INFO   = 'PATIENT_INFO' 

//登录状态    
export const LOGIN_STATUS   = 'LOGIN_STATUS' 

export const IS_LOGIN     =   'IS_LOGIN'

//用户信息
export const USER_INFO     =   'USER_INFO'

//异常信息
export const ERROR_INFO     =   'ERROR_INFO'



//类表详情信息    
export const PATIENT_DETAIL_LIST   = 'PATIENT_DETAIL_LIST' 

export function isLogin({ commit }){
	var isLogin = localStorage.getItem(SET_LOGIN_STATUS) == 'true' 
	if(!isLogin){
		save({commit},COM_ALERT_STATUS, true)
	}
	return isLogin
}

export function save({ commit },key,value){
	if(status == undefined || value == undefined){
		console.log("params of function named save() is undefined!")
		return
	}
	localStorage.setItem(key, value)
    commit(key, value)
}

export function clear({ commit },key,value){
	if(!status){
		console.log("params of function named clear() is undefined!")
		return
	}
	localStorage.removeItem(key)
    commit(key, '')
}
