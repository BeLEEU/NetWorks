function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  yield 'generator';
}
var hw = helloWorldGenerator();
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());

function* say() {
  yield console.log("say");
}
var s = say();
s.next();

let myIterable = {}
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};
console.log([...myIterable])

function* gen(){
  yield 1;
}
var g = gen();
g[Symbol.iterator] === g

//next带参数
function* f(){
  for(let i = 0; true; i++){
    let reset = yield i;
    if(reset) {i = -1;}
  }
}
var g = f();
console.log(g.next());
console.log(g.next());
console.log(g.next(true));
console.log(g.next());

function* dataConsumer(){
  console.log('start');
  console.log(`1.${yield}`);
  console.log(`2.${yield}`);
  return 'result';
}
var d = dataConsumer();
d.next('second');
d.next('bili');


//for of 循环
function* foo(){
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 6;
}

for(let r of foo()) {
  console.log(r);
}
//throw 把yield替换为throw语句
//throw在内部被捕获后，还可以继续执行。如果没有捕获，则这个生成器已经结束

//return 直接终结
var f = foo();
console.log(f.return())

//yield* 表达式解决生成器嵌套后的手动调用困扰
function* bar() {
  yield 'x';
  yield* foo();
  yield 'y';
}
// 等同于
function* bar() {
  yield 'x';
  yield 'a';
  yield 'b';
  yield 'y';
}
//作为对象属性的 Generator 函数
let obj = {
  * myGeneratorMethod() {
    //···
  }
};


// 生成器执行异步操作
//1.定义thunk函数
const Thunk = function(fn) {
  return function (...args) {
    return function (callback) {
      return fn.call(this, ...args, callback);
    }
  };
};
var readFileThunk = Thunk(fs.readFile);

var g = function* (){
  var f1 = yield readFileThunk('fileA');
  var f2 = yield readFileThunk('fileB');
  // ...
  var fn = yield readFileThunk('fileN');
};
//自动管理流程
function run(fn) {
  var gen = fn();

  function next(err, data) {
    var result = gen.next(data);
    if (result.done) return;
    result.value(next);
  }

  next();
}

run(g);