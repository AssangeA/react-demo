import ajax from "./ajax";

//请求分类列表
export const  httpGetList = (data)=>ajax("/api/manage/category/list",data,"GET");

//添加分类
export const  httpAddList = (data)=>ajax("/api/manage/category/add",data,"POST");

//更新分类
export const  httpUpdateCategoryName= (data)=>ajax("/apimanage/category/update",data,"POST");