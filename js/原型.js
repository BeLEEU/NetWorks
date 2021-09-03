function Employee () {
  this.name = "";
  this.dept = "general";
}
function Manager() {
  Employee.call(this);
  this.reports = [];
}
Manager.prototype = Object.create(Employee.prototype);

function WorkerBee() {
  Employee.call(this);
  this.projects = [];
}
WorkerBee.prototype = Object.create(Employee.prototype);

function SalesPerson() {
  WorkerBee.call(this);
  this.dept = 'sales';
  this.quota = 100;
}
SalesPerson.prototype = Object.create(WorkerBee.prototype);

function Engineer() {
  WorkerBee.call(this);
  this.dept = 'engineering';
  this.machine = '';
}
Engineer.prototype = Object.create(WorkerBee.prototype);

var jim = new Employee; // 如构造函数无须接受任何参数，圆括号可以省略。
console.log(jim.__proto__)



var sally = new Manager;

console.log(sally.__proto__)

var mark = new WorkerBee;
console.log(mark.__proto__)

var fred = new SalesPerson;
console.log(fred.__proto__)

var jane = new Engineer;
console.log(jane.__proto__)

function instanceOf(object, constructor) {
  while(object !== null) {
    if(object == constructor.prototype) {
      return true;
    }
    if(typeof object == 'xml') {
      return constructor.prototype == XML.prototype;
    }
    object = object.__proto__;
  }
  return false;
}
