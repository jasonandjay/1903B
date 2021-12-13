"use strict";
var a = 100;
var b = 'hello world';
var obj = 100;
var un = 100;
// obj.a;
// un.b;
// const arr: (string | number)[] = [100,200,300,'400'];
// const arr: Array<string | number> = [100,200,300,'400'];
// 元祖类型，元素的数量和元素的类型都被固定了
var arr = [100, 200, 300, '400'];
// 枚举，把所有可能的情况列举出来
var directions;
(function (directions) {
    directions[directions["top"] = 100] = "top";
    directions[directions["left"] = 101] = "left";
    directions[directions["right"] = 102] = "right";
    directions[directions["bottom"] = 103] = "bottom";
})(directions || (directions = {}));
var direction = directions.bottom;
var chenmanjie = 'chenmanjie';
var response = {
    code: 200,
    errNo: -1,
    cb: function () { return ({}); },
    msg: 'OK'
};
var add = function (a, b) { return a + b; };
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
// 范型约束
function pick(o, names) {
    return names.map(function (n) { return o[n]; });
}
function getValue(obj, key) {
    return obj[key]; // ok
}
function factory(type) {
    return new type(); // ok
}
var f = {
    code: 200,
    cb: function () { return ({}); },
    msg: '',
    timeout: 1000,
    alive: true
};
var g = '200';
