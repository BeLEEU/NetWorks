## Promise
Promise是一个容器，里面保存着一个未来才会结束的事件（一个异步操作的结果）
（1）Promise对象的状态不受外部影响，只有异步操作的结果才可以决定当前状态，其他操作无法改变
（2）状态改变后，无法再改变，如果已经resolved，再无论做什么操作都会立即得到该结果
（3）then第一个参数表示resolve后获得的promise类型的data，第二个参数表示reject后的error
（4）then会等待前面的Promise定型再执行
（5）catch会捕捉到之前任意位置的错误
（6）finally是必然会执行的代码块

```javascript
//样例
const promise = new Promise((resolve, reject) =>{
  if(success) {
    resolve(successData)
  } else {
    reject(new Error('failed'))
  }
}) 

promise.then(function(data){
  console.log(data)
}, function(error){
  console.log(error)
})
//异步加载图片获得img后用then处理
const loadImgAsnyc(url) {
   
  const promise = new Promise((resolve, reject) => {

    let img = new Image()
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("load image failed!"));

    img.src = url;
  })

  return promise;
}

loadImgAsnyc(url).then((data) =>{

}, (error) => {

})
//异步ajax
const getJSON = function(url) {
  const promise = new Promise((resolve, reject) => {

    const handler = function() {
      if(this.readyState !== 4) {
        return;
      } 
      if(this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };

    const client = new XMLHttpRequest();
    client.open('GET', url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send()
  })
  return promise;
};
```