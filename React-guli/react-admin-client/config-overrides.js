const {override,fixBabelImports} = require('customize-cra')

// override返回一个函数   该函数返回对象作为webpack的配置对象

module.exports = override(

 fixBabelImports("import",{

 libraryName:'antd',  //库名

 libraryDirectory:'es', //文件夹名

 style:true  //一个叫css.js的文件
 }),

)