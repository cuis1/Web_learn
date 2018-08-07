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
    if (Object.create())
        return Object.create(o);
    var t = typeof o;
    if (T !== "Object" && t !== "function") throw TypeError();

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