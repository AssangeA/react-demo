import ajax from  "./ajax"
const baseUrl = "/api"

//登录
export const  httpLogin =(data)=>ajax(baseUrl+"/login",data,"POST")

//添加用户
export const  httpAddUser =(data)=>ajax(baseUrl+"/manage/user/add",data,"POST")