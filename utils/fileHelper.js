// nodejs中文件读取写入两种方法封装

/**
 * 文件、文件夹是否存在
 * fs.exists(path, callback)
 * 1、path是判断的文件夹、文件的路径
 * 2、callback是回调函数
 */
/**
 * 写入
 * fs.wirteFile 有四个参数
 * 1、第一个参数是要写入的文件路径
 * 2、第二个参数是要写入得内容
 * 3、第三个参数是可选参数,表示要写入的文件编码格式,一般就不写,默认就行
 * 4、第四个参数是个回调函数  只有一个参数error,来判断是否写入成功
 * fs.writeFile("./http/11.txt", "wwwww", error => {
 *    if (error) return console.log("写入文件失败,原因是" + error.message);
 *    console.log("写入成功");
 * });
 * 如果在使用fs.writeFIle时，要写入文件不存在，则直接写入，如果存在，则会覆盖原内容
 */

 /**
  * 读取
  * fs.readFile 三个参数，来读取指定目录下的文件
  * 1、读取文件的路径
  * 2、读取文件的编码格式
  * 3、当文件读取完成，调用这个callback回调函数来读取文件的结果
  * 4、第一个参数文error对象   第二个参数 才是读取成功的结果
  * fs.readFile('./http/111.txt','utf-8',function(error,data){
  *   console.log(error);  //如果err为null就说明读取成功了,没有出错
  *   console.log(data); // 如果不给第二个参数[读取的文件编码格式]就会以beffer格式输出
  *   //  用error来判断文件是否读取成功
  *   if (error) return console.log("读取文件失败,内容是" + error.message);
  *   console.log("读取文件成功,内容是" + data);
  * });
  */
/**
 * 删除文件夹及文件
 * 只提供了删除文件unlink夹及目录rmdir的功能，所以一起删除需要我们遍历删除
 * 后面补充
 */

const fs = require("fs")

const fileHelper = {
  // 文件、文件夹是否存在
  fileIsExist: (path, cb)  => {
    fs.exists(path, exists => {
      !exists ? cb() : console.log('文件已经存在')
    })
  },
  // 读取
  readFile: (path, cb) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if(error)  console.log('"读取文件失败,内容是" + error.message')
      else cb(data)
    })
  },
  // 写入
  wirteFile: (path, content, cb) => {
    fs.writeFile(path, content, 'utf-8', error => {
      if(error) return console.log("写入文件失败,原因是" + error.message);
      else cb()
    })
  }
}

module.exports = fileHelper