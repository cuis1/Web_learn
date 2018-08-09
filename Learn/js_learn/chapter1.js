function factorial(n) {
    var p = 1;
    for (var i = 1; i < 2; i++) {
        p *= i;
    }
    return p;
}
var book = {
    topic: "JavaScript",
    fat: true,
    author: "me"
};
book.topic
bool["fat"]
book.public = "2010.01.12";
bool.contents = {};
var primes = [1, 3, 4, 6]
primes[1]
primes.length
primes[primes.length - 1]
primes[4] = 4;
primes[4] = 11;
var empty = [];
empty.length;

var points = [
    { x: 100, y: 200 }, { x: 0, y: 0 }
];
points[1].x + points[0].x;
var datas = {
    data1: [
        [1, 2],
        [2, 3]
    ],
    data2: [
        [4, 5],
        [5, 6]
    ]
};

/*函数*/
function plus1(x) {
    return x + 1;
}

var square = function(x) {
    return x * x;
}
square(plus1(2));
var a = [];
a.push(1, 2, 3);
a.reverse();

points.dist = function(point1, point2) {
    var p1 = this[point1];
    var p2 = this[point2];
    var x = p1.x - p2.x;
    var y = p1.y - p2.y;
    return Math.sqrt(x * x + y * y);
}
points.dist(0, 1);

function abs(x) {
    if (x <= 0) {
        return -x;
    } else {
        return x;
    }
}

function factorial(x) {
    if (x < 0) {
        return;
    } else {
        var product = 1;
        while (x > 0) {
            product *= x;
            x--;
        }
        return x;
    }
}

function Point(x, y) {
    this.x = x;
    this.y = y;
}
var p = new Point(1, 1);
Point.prototype.r = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
};
p.r();

var Point_new = {
    x: 1.0,
    y: 1.0,
    get r() { return Math.sqrt(this.x * this.x + this.y * this.y); },
    set r(newvalue) {
        var oldervalue = Math.sqrt(this.x * this.x + this.y * this.y);
        var ratio = newvalue / oldervalue;
        this.x *= ratio;
        this.y *= ratio;
    },
    get theta() { return Math.atan2(this.x, this.y); }
};

function inherit(o) {
    if (o == null) {
        throw TypeError();
    }
    if (Object.create)
        return Object.create(o);
    var t = typeof o;
    if (t !== "object" && t !== "function") throw TypeError();

    function f() {};
    f.prototype = o;
    return new f();
}

function classof(o) {
    if (o === null) return "Null";
    if (o === undefined) return "Undefined";
    return Object.prototype.toString.call(o).slice(8, -1);
}
a = ['ant', 'Dog', 'Bug', 'Cat'];
a.sort(
    function(a, b) {
        var s = a.toLowerCase();
        var t = b.toLowerCase();
        if (s < t) return -1;
        if (s > t) return 1;
        return 0;
    }
);

a = [1, 2, 3, , 4];
a.map(function(x) { return x * x; });
/*按数字有效位数排序*/

//例6-2
function extend(o, p) {
    for (prop in p) {
        o[prop] = p[prop];
    }
    return o;
}

function merger(o, p) {
    for (prop in p) {
        if (o.hasOwnProperty[prop]) continue;
        o[prop] = p[prop];
    }
    return o;
}

function restrict(o, p) {
    for (prop in o) {
        if (!(prop in p)) delete o[prop];
    }
    return o;
}

function subtract(o, p) {
    for (prop in o) {
        if (prop in p) delete o[prop];
    }
    return o;
}

function union(o, p) {
    return extend(extend({}, o), p);
}

function intersection(o, p) {
    return restrict(extend({}, o), p);
}

function keys(o) {
    if (typeof o !== "object") throw TypeError;
    var result = [];
    for (prop in o) {
        if (o.hasOwnProperty(prop))
            result.push(push);
    }
    return result;
}


a = [{ x: 1, a: 1 }, { y: 1, a: 2 }, { z: 3, a: 3 }];
a.reduce(union);
a.reduceRight(union);

function findAll(a, x) {
    if (!Array.isArray(a)) throw TypeError;
    var result = [];
    var pos = 0;
    do {
        var pos = a.indexOf(x, pos);
        if (pos !== -1) {
            result.push(pos);
            pos = pos + 1;
        }
    } while (pos !== -1);
    return result;
}

//获得对象所属的类
Object.prototype.toString.call(a).slice(8, -1)
    //类数组
var a = {};
var i = 0;
while (i < 10) {
    a[i] = i * i;
    i++;
}
a.length = i;
var sum = 0;
for (var j = 0; j < a.length; j++)
    sum += a[j];

//类数组检查
function isArrayLike(o) {
    if (o &&
        typeof o === "objict" &&
        isFinite(o.length) &&
        o.length >= 0 &&
        o.length === Math.floor(o.length) &&
        o.length < Math.pow(2, 32)) {
        return true;
    }
    return false;
}

//字符串数组
s = "JavaScript";
Array.prototype.join.call(s, " ");
Array.prototype.filter.call(s, function(x) {
    return x.match(/[^aeiou]/);
}).join("");

function printAll(a) {
    if (Array.isArray(a)) {
        for (var i = 0; i < a.length; i++) {
            printAll(a[i]);
        }
    } else {
        console.log(a);
    }
}
//this 关键字的作用域
/**
 * this的指向在函数创建的时候是决定不了的，在调用的时候才能决定，谁调用的就指向谁
 * 情况1：如果一个函数中有this，但是它没有被上一级的对象所调用，那么this指向的就是window，
 *        这里需要说明的是在js的严格版中this指向的不是window，但是我们这里不探讨严格版的问题，你想了解可以自行上网查找。
 * 情况2：如果一个函数中有this，这个函数有被上一级的对象所调用，那么this指向的就是上一级的对象。
 * 情况3：如果一个函数中有this，这个函数中包含多个对象，尽管这个函数是被最外层的对象所调用，this指向的也只是它上一级的对象
 */
var calculator = {
    x: 1,
    y: 2,
    add: function() { this.result = this.x + this.y; }
};

var o = {
    m: function() {
        var self = this;
        console.log(this === o);
        f();

        function f() {
            console.log(this === o);
            console.log(self === o);
        }
    }
};

//可选形参
function getProtertyName(o, /* optional*/ a) {
    if (a === undefined) a = [];
    for (var porp in o) {
        a.push(porp);
    }
    return a;
}

//不定实参
arguments
//参数顺序

//参数类型检查
function sum(a) {
    if (isArrayLike(a)) {
        var total = 0;
        for (var i = 0; i < a.length; i++) {
            if (a[i] == null) continue;
            if (isFinite(a[i]))
                total += a[i];
        }
        return total;
    } else {
        throw new Error("sum():argument must be array-like");
    }
}

function flexisum(a) {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        var element = arguments[i],
            n;
        if (isArray(element)) {
            n = flexisum.apply(this, element);
        } else if (typeof element === "function") {
            n = Number(element());
        } else {
            n = Number(element);
        }
        if (isNaN(n)) {
            throw Error("flexisum: can't convert" + element + "to number");
        }
        total += element;
    }
    return total;
}

//函数的属性
function factorial(n) {
    if (isFinite(n) && n > 0 && n == Math.round(n)) {
        if (!(n in factorial)) {
            factorial[n] = n * factorial(n - 1);
        }
        return factorial[n];
    } else return NaN;
}
factorial[1] = 1;

//闭包
function addPrivateProperty(o, name, predicate) {
    var value;
    o["get" + name] = function() { return value };
    o["set" + name] = function(v) {
        if (predicate && !predicate(v))
            throw Error("set" + name + ": invalid value" + v);
        else
            value = v;
    }
}
var o = {};

addPrivateProperty(o, "Name", function(x) { return typeof x == "string"; });
o.setName("Frank");
console.log(o.getName);
o.setName(0);


function constfunc(v) {
    return function() { return v; }
}
var funcs = [];
for (var i = 0; i < 10; i++) {
    funcs[i] = constfunc(i);
}


function constfunc() {
    /* 下述代码在同一个函数中创建了10个闭包，这10个闭包的作用域链中都包含外层函数的变量i，
        因此当constfunc函数返回时，i的值是10，所有闭包都共享这一值*/
    //闭包无法访问外部函数的this值，同理外部函数的arguments闭包也无法访问
    var funcs = [];
    for (var i = 0; i < 10; i++) {
        funcs[i] = function() { return i; };
    }
    return funcs;
}
var funcs = constfunc();

/**
 * 以对象o的方法来调用函数f(),
 * f.call(o);
 * f.apply(o);
 * 每行代码的功能类似下面代码块的功能：
 * {o.m = f;
 * o.m();
 * delete o.m;}
 */
var p

//类和模块

/**
 * 定义一个简单的类
 */
function range(from, to) {
    var r = inherit(range.methods);
    r.from = from;
    r.to = to;
    return r;
}

range.methods = {
    includes: function(x) {
        return this.from <= x && x <= this.to;
    },
    foreach: function(f) {
        for (var x = Math.ceil(this.from); x < this.to; x++)
            f(x);
    },
    toString: function() {
        return "(" + this.from + "..." + this.to + ")";
    }
};

var p = range(1, 3);
p.includes(2);
p.foreach(console.log);
console.log(p);


function onLoad(f) {
    if (onload.loaded)
        window.setTimeout(f, 0);
    else if (window.addEventListener)
        window.addEventListener("load", f, false);
    else if (window.attachEvent)
        window.attachEvent("onload", f);
}