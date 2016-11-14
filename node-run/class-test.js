{
    class Point {
        area = "aaa";
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }

        toString() {
            return '(' + this.x + ', ' + this.y + ')';
        }

    }

    var point = new Point(2, 3);

    console.log(point.toString()); // (2, 3)

    console.log(point.hasOwnProperty('x')); // true
    console.log(point.hasOwnProperty('y')); // true
    console.log(point.hasOwnProperty("area"));
    console.log(point.hasOwnProperty('toString')); // false
    console.log(point.__proto__.hasOwnProperty('toString')); // true
}